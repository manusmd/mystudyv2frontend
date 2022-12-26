import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SaasProvider } from '@saas-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dasboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SaasProvider>
      <RouterProvider router={router} />
    </SaasProvider>
  </React.StrictMode>,
)
