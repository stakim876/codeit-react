import { Navigate, Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RootLayout from './layouts/RootLayout.jsx';

const App = () => { 
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path='/'
            element={<FeedPage />}
          />
          {/* :username 자리에 주소 값이 들어가서 ProfilePage가 꺼낸다 */}
          <Route
            path='/:username'
            element={<ProfilePage />}
          />
          {/* 없는 주소면 홈으로 보낸다 */}
          <Route
            path='*'
            element={
              <Navigate
                to='/'
                replace
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};


export default App;
