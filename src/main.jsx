import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
import { PostsProvider } from './contexts/PostsContext.jsx';
import { BrowserRouter } from 'react-router';
import Practice3 from './lab/p2-18/practice3.jsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
import { PostsProvider } from './contexts/PostsContext.jsx';
import { BrowserRouter } from 'react-router';
import Practice3 from './lab/p2-18/practice3.jsx';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    {/* BrowserRouter가 있어야 URL에 따라 화면을 바꿀 수 있다 */}
    <BrowserRouter>
      <PostsProvider>
        <App />
        {/* 라우터 연습 화면: <Practice3 /> */}
      </PostsProvider>
    </BrowserRouter>
  </StrictMode>,
);