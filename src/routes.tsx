import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized/Unauthorized';
import AppShell from './pages/AppShell/AppShell';
import Construction from './pages/Construction/Construction';
import Dashboard from './pages/Dashboard/Dashboard';
import Employees from './pages/Employees/Employees';
import Events from './pages/Events/Events';
import Login from './pages/Login/Login';
import Students from './pages/Students/Students';
import Teachers from './pages/Teachers/Teachers';

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: '/tbd',
        element: <Construction />,
      },
      {
        path: '/unauthorized',
        element: <Unauthorized />,
      },
      {
        path: '/',
        element: (
          <RequireAuth allowedRoles={['ROLE_ADMIN', 'ROLE_MODERATOR', 'ROLE_TEACHER']}>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: '/events',
        element: (
          <RequireAuth allowedRoles={['ROLE_MODERATOR', 'ROLE_TEACHER']}>
            <Events />
          </RequireAuth>
        ),
      },
      {
        path: '/employees',
        element: (
          <RequireAuth allowedRoles={['ROLE_ADMIN']}>
            <Employees />
          </RequireAuth>
        ),
      },
      {
        path: '/teachers',
        element: (
          <RequireAuth allowedRoles={['ROLE_MODERATOR']}>
            <Teachers />
          </RequireAuth>
        ),
      },
      {
        path: '/students',
        element: (
          <RequireAuth allowedRoles={['ROLE_MODERATOR', 'ROLE_TEACHER']}>
            <Students />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
