import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.jsx'

// 앱 시작점. global.scss를 여기서 불러 전체 화면에 적용
createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
