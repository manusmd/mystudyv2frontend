import { User } from '../types/UserTypes';

export const isAuthorized = (user: User, path: string) => {
  if (!user) return false;
  if (user.roles?.includes('ROLE_ADMIN')) {
    if (path === 'dashboard') return true;
    if (path === 'employees') return true;
  }
  if (user.roles?.includes('ROLE_MODERATOR')) {
    if (path === 'dashboard') return true;
    if (path === 'events') return true;
    if (path === 'students') return true;
    if (path === 'teachers') return true;
  }
  if (user.roles?.includes('ROLE_TEACHER')) {
    if (path === 'dashboard') return true;
    if (path === 'events') return true;
    if (path === 'students') return true;
  }
};
