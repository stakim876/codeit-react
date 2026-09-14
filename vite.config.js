import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 5173은 다른 앱과 겹쳐서 이 프로젝트는 5180 사용
    port: 5180,
    strictPort: true,
  },
})
