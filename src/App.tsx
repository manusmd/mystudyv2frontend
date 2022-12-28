import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dasboard';
import Login from './pages/Login/Login';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}
