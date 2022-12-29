import { useState } from 'react';
import Cookies from 'universal-cookie';

export default function useLogin() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const cookies = new Cookies();

  const login = async (username: string, password: string) => {
    setLoading(true);
    const loginData = { username, password };
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      cookies.set('jwt_authorization', data.token);

      setLoading(false);
      setSuccess(true);
    } catch (error: any) {
      setError('Bad credentials');
      setLoading(false);
    }
  };

  const logout = () => {
    cookies.remove('jwt_authorization');
  };

  return { login, logout, isLoading, error, success };
}
