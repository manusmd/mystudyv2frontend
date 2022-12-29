import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

type ProtectedProps = {
  children: ReactNode;
};

export default function Protected({ children }: ProtectedProps) {
  const cookies = new Cookies();
  const jwt = cookies.get('jwt_authorization');

  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate('/login');
    }
  }, [jwt]);

  return <>{children}</>;
}
