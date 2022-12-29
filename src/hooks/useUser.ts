import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { EmployeeType, StudentType, TeacherType, UserType } from '../types/UserTypes';

export default function useUser() {
  const [user, setUser] = useState<UserType & EmployeeType & TeacherType & StudentType>();
  const cookies = new Cookies();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/who`, {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchUser();
  }, []);

  const isLoggedIn = () => {
    if (cookies.get('jwt_authorization')) {
      return true;
    }
    return false;
  };
  return { user, isLoggedIn, error };
}
