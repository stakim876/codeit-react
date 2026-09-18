import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';

// StrictMode는 개발 중 effect를 두 번 실행한다.
// 게시물을 뒤에 이어 붙이는 방식이라 두 번 돌면 같은 글이 중복된다. 그래서 끈다
createRoot(document.querySelector('#root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
);
