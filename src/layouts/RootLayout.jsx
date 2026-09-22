// ~/instagram-react/src/layouts/RootLayout.jsx
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <>
      {/* 사이드바는 항상 두고, Outlet에 홈/프로필이 갈아끼워진다 */}
      <Sidebar />
      <Outlet />
    </>
  );  
}

export default RootLayout;