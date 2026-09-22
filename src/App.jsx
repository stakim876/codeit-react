import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => { 
  return (
    <>
      {/* 사이드바는 주소가 바뀌어도 그대로 두고, Routes만 화면을 갈아끼운다 */}
      <Sidebar />

      <Routes>
        <Route
          path='/'
          element={<FeedPage />}
        />
        <Route
          path='/seungtae'
          element={<ProfilePage />}
        />
        <Route
          path='/login'
          element={<ProfilePage />}
        />
      </Routes>
    </>
  );
};


export default App;
