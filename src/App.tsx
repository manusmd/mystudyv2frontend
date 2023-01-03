import { SaasProvider, useLocalStorage } from '@saas-ui/react';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { router } from './routes';

export default function App() {
  const [user, setUser] = useLocalStorage('user', null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <SaasProvider>
      <AuthContext.Provider value={providerValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </SaasProvider>
  );
}
