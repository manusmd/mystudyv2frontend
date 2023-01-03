import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

type RequireAuthProps = {
  allowedRoles: string[];
  children: JSX.Element;
};

export default function RequireAuth({ allowedRoles, children }: RequireAuthProps) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <>{children}</>
  ) : user != null ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
