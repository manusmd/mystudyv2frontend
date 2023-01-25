import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(mode);

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          secure: true,
        },
      },
    },
  });
};
