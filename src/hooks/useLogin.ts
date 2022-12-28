import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { EmployeeType, StudentType, TeacherType } from '../types/UserTypes';

export default function useLogin() {
  const [user, setUser] = useState<EmployeeType | StudentType | TeacherType | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const login = async (username: string, password: string, redirectPath?: string) => {
    setLoading(true);
    const loginData = { username, password };

    const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
    cookies.set('jwt_authorization', data.token);

    const fetchedUser = await getUser();
    setUser(fetchedUser);
    setLoading(false);
    if (navigate) navigate({ pathname: redirectPath });
  };

  const getUser = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/who`, {
      headers: {
        Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
      },
    });
    return res.json();
  };

  const logout = () => {
    cookies.remove('jwt_authorization');
  };

  return { login, logout, isLoading, user };
}
