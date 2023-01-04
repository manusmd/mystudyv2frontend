import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { StudentType } from '../types/UserTypes';
import { getStudents } from '../utils/api';

export const useStudents = () => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const { data, isLoading, isSuccess } = useQuery('students', getStudents);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setStudents(data.data);
    }
  }, [isSuccess]);

  const filter = (search: string) => {
    if (search === '') {
      setStudents(data.data);
    } else {
      const filterByFirstName = data.data.filter((student: StudentType) =>
        student.firstName.toLowerCase().includes(search.toLowerCase()),
      );
      const filterByLastName = data.data.filter((student: StudentType) =>
        student.lastName.toLowerCase().includes(search.toLowerCase()),
      );
      const filteredStudents = [...new Set([...filterByFirstName, ...filterByLastName])];
      setStudents(filteredStudents);
    }
  };

  const addStudent = async (student: StudentType) => {
    const newStudent = new FormData();
    newStudent.append('firstName', student.firstName);
    newStudent.append('lastName', student.lastName);
    newStudent.append('email', student.email);
    newStudent.append('street', student.street);
    newStudent.append('house', student.house);
    newStudent.append('city', student.city);
    newStudent.append('postcode', student.postcode);
    newStudent.append('phone', student.phone);

    const res = await fetch('http://localhost:3000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: newStudent,
    });
    return res.json();
  };

  const { mutate } = useMutation(addStudent, {
    onSuccess: () => {
      setMessage('Student added');
    },
  });
  return { students, isLoading, filter, addStudent: mutate, message };
};
