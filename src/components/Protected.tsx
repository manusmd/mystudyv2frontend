import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

type ProtectedProps = {
  children: ReactNode;
};

export default function Protected({ children }: ProtectedProps) {
  const { isLoggedIn, error } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || error) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return <>{children}</>;
}
