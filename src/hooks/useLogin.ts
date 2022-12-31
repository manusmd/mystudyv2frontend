import { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import { AuthContext } from '../context/AuthContext';
import useUser from './useUser';

export default function useLogin() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { setUser } = useContext(AuthContext);
  const { user } = useUser();
  const cookies = new Cookies();

  const login = async (username: string, password: string) => {
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

    if (!res.ok) {
      setError(data.message);
    }
    if (res.ok) {
      setUser(user);
      cookies.set('jwt_authorization', data.token);
      setSuccess(true);
    }

    setLoading(false);
  };

  const logout = () => {
    cookies.remove('jwt_authorization');
  };

  return { login, logout, isLoading, error, success, user };
}
