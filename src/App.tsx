import { Loader } from '@saas-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Protected from './components/Protected';
import AppShell from './pages/AppShell/AppShell';
import Dashboard from './pages/Dashboard/Dashboard';
import Employees from './pages/Employees/Employees';
import Events from './pages/Events/Events';

import Login from './pages/Login/Login';
import Students from './pages/Students/Students';
import Teachers from './pages/Teachers/Teachers';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected>
          <AppShell />
        </Protected>
      ),
      errorElement: <Login />,

      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'events',
          element: <Events />,
        },
        {
          path: 'employees',
          element: <Employees />,
        },
        {
          path: 'teachers',
          element: <Teachers />,
        },
        {
          path: 'students',
          element: <Students />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}
