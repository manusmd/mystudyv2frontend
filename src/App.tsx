import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Protected from './components/Protected';
import Dashboard from './pages/AppShell/AppShell';
import Login from './pages/Login/Login';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}
