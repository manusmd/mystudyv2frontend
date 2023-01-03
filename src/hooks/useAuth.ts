import { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import { AuthContext } from '../context/AuthContext';
import { getUser } from '../utils/api';

export default function useAuth() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { setUser } = useContext(AuthContext);

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
      localStorage.setItem('user', JSON.stringify(data));
      cookies.set('jwt_authorization', data.token);
      const fetchedUser = await getUser();
      setUser(fetchedUser);

      setSuccess(true);
    } catch (error: unknown) {
      setError('Please sign up first!');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    setLoading(true);
    const signupData = { username, email, password };
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      if (res.status === 200) {
        setSuccess(true);
      }
      const data = await res.json();
      if (res.status !== 200) {
        setError(data.message);
      } else {
        setError(null);
      }
    } catch (error: unknown) {
      console.log(error);
      setError('Something went wrong, please try again later!');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    cookies.remove('jwt_authorization');
    setUser(null);
  };

  const authenticated = () => {
    return !!cookies.get('jwt_authorization');
  };

  return { login, logout, isLoading, error, success, authenticated, signup };
}
