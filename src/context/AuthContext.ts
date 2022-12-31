import { createContext } from 'react';
import { User } from '../types/UserTypes';

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
});
