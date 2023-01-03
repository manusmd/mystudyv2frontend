import Cookies from 'universal-cookie';

export const getUser = async () => {
  const cookies = new Cookies();
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/auth/who`, {
    headers: {
      Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
    },
  });
  return await res.json();
};

export const getStudents = async () => {
  const cookies = new Cookies();
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/Students`, {
    headers: {
      Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
    },
  });
  return res.json();
};
