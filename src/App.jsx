import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const App = () => { 
  return (
    // path가 바뀌면 아래 Route 중 맞는 화면만 보여 준다
    <Routes>
      <Route
        path='/'
        element={
            <FeedPage />
        }
      />
      <Route
        path='/seungtae'
        element={<ProfilePage />}
      />
    </Routes>
  );
};


export default App;