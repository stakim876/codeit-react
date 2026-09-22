import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RootLayout from './layouts/RootLayout.jsx';

const App = () => { 
  return (
    <>
      <Routes>
        {/* RootLayout이 사이드바를 두고, Outlet 자리에 아래 화면이 들어간다 */}
        <Route element={<RootLayout />}>
          <Route
            path="/"
            element={<FeedPage />}
          />
          {/* :username 자리에 주소 값이 들어가서 ProfilePage가 꺼낸다 */}
          <Route
            path='/:username'
            element={<ProfilePage />}
          />
        </Route>
        
      </Routes>
    </>
  );
};


export default App;
