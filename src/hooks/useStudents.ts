import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { StudentType } from '../types/UserTypes';
import { getStudents } from '../utils/api';

export const useStudents = () => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const { data, isLoading, isSuccess } = useQuery('students', getStudents);

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

  return { students, isLoading, filter };
};
