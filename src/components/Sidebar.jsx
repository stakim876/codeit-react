// ~/instagram-react/src/components/Sidebar.jsx
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { FaHouse, FaRegSquarePlus } from 'react-icons/fa6';
import { usePostsContext } from '../contexts/PostsContext.jsx';
import InstagramLogo from './InstagramLogo.jsx';
import CreateFeedModal from './CreateFeedModal.jsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { addPost } = usePostsContext();

  // 클릭이 아니라 코드에서 주소를 바꿀 때 쓴다
  const navigate = useNavigate();

  const handleCreate = (createdPost) => { 
    addPost(createdPost);
    // 글 올리면 홈(/)으로 보낸다
    navigate('/');
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        {/* Link: 새로고침 없이 홈으로 이동 */}
        <Link
          to='/'
          className={styles.logo}>
          <InstagramLogo />
        </Link>
      </div>

      <div className={styles.menuContainer}>
        {/* end: /seungtae 에서도 홈이 켜지지 않게, / 일 때만 active */}
        <NavLink
          to='/'
          end
          className={styles.menuItem}>
          <FaHouse size={24} />
          <span className={styles.menuText}>홈</span>
        </NavLink>

        <button
          type='button'
          className={styles.menuItem}
          onClick={() => setIsCreateOpen(true)}>
          <FaRegSquarePlus size={24} />
          <span className={styles.menuText}>만들기</span>
        </button>

        <NavLink
          to='/seungtae'
          className={styles.menuItem}>
          <div className={styles.profileImage}>
            <img
              src='https://picsum.photos/seed/seungtae/40/40'
              alt='프로필'
            />
          </div>
          <span className={styles.menuText}>프로필</span>
        </NavLink>
      </div>

      {isCreateOpen && (
        <CreateFeedModal
          onClose={() => setIsCreateOpen(false)}
          onCreate={handleCreate}
        />
      )}
    </nav>
  );
}

export default Sidebar;
