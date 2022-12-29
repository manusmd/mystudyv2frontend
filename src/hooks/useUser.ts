import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { EmployeeType, StudentType, TeacherType, UserType } from '../types/UserTypes';

export default function useUser() {
  const [user, setUser] = useState<UserType & EmployeeType & TeacherType & StudentType>();
  const cookies = new Cookies();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/who`, {
        headers: {
          Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
        },
      });
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  const isLoggedIn = () => {
    if (cookies.get('jwt_authorization')) {
      return true;
    }
    return false;
  };
  return { user, isLoggedIn };
}
