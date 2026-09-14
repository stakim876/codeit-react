import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 앱 시작점: HTML의 #root에 App을 그려 넣음
// StrictMode: 개발 중 이상한 사용을 더 잘 잡아줌
createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
