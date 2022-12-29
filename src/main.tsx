import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SaasProvider } from '@saas-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SaasProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SaasProvider>
  </React.StrictMode>,
);
