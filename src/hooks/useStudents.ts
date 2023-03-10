import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import Cookies from 'universal-cookie';
import { StudentType } from '../types/UserTypes';

export const useStudents = () => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const { data, isLoading, refetch } = useQuery('students', getStudents);
  const [message, setMessage] = useState<string | null>(null);
  const cookies = new Cookies();

  useEffect(() => {
    if (data) {
      setStudents(data.data);
    }
  }, [data]);

  const filter = (search: string) => {
    setTimeout(() => {
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
    }, 500);
  };

  const studentPost = useMutation(addStudent, {
    onSuccess: () => {
      setMessage('Student added');
      refetch();
    },
  });

  const studentDelete = useMutation(deleteStudent, {
    onSuccess: () => {
      setMessage('Student deleted');
      refetch();
    },
  });

  async function getStudents() {
    const cookies = new Cookies();
    const res = await fetch('/api/Students', {
      headers: {
        Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
      },
    });
    return res.json();
  }

  async function addStudent(student: StudentType) {
    const newStudent = new FormData();
    newStudent.append('firstName', student.firstName);
    newStudent.append('lastName', student.lastName);
    newStudent.append('email', student.email);
    newStudent.append('street', student.street);
    newStudent.append('house', student.house);
    newStudent.append('city', student.city);
    newStudent.append('postcode', student.postcode);
    newStudent.append('phone', student.phone);
    newStudent.append('roles', 'ROLE_STUDENT');

    const res = await fetch('/api/Students', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
      },
      body: newStudent,
    });
    return res.json();
  }

  async function deleteStudent(id: string) {
    const res = await fetch(`/api/Students/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
      },
    });
    return res.json();
  }

  return {
    students,
    isLoading,
    filter,
    addStudent: studentPost.mutate,
    deleteStudent: studentDelete.mutate,
    message,
  };
};
