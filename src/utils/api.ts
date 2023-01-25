import Cookies from 'universal-cookie';

export const getUser = async () => {
  const cookies = new Cookies();
  const res = await fetch('/api/auth/who', {
    headers: {
      Authorization: `Bearer ${cookies.get('jwt_authorization')}`,
    },
  });
  return await res.json();
};
