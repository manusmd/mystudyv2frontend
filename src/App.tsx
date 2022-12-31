import { SaasProvider } from '@saas-ui/react';
import { useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { router } from './routes';
import { User } from './types/UserTypes';

export default function App() {
  const [user, setUser] = useState<User>(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <SaasProvider>
      <AuthContext.Provider value={providerValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </SaasProvider>
  );
}
