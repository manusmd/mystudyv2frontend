import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../types/UserTypes';

type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<null>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
});
