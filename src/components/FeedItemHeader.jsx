// ~/instagram-react/src/components/FeedItemHeader.jsx'
import styles from './FeedItem.module.scss';
import { FaEllipsis } from 'react-icons/fa6';
import { usePostsContext } from '../contexts/PostsContext';
import { Link } from 'react-router';

const FeedItemHeader = ({
  postId,
  username,
  profileImage = 'https://picsum.photos/seed/default/40/40'
}) => {

  // 삭제 함수도 창고에서 바로 쓴다
  const { removePost } = usePostsContext();

  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        {/* 이름/사진을 누르면 /username 주소로 이동한다 */}
        <Link
          to={`/${username}`}
          className={styles.profileLink}>
          <div className={styles.profileImage}>
            <img
              src={profileImage}
              alt={`${username}의 프로필`}
            />
          </div>
        </Link>
        <div className={styles.userDetails}>
          <Link
            to={`/${username}`}
            className={styles.username}>
            {username}
          </Link>
        </div>
      </div>
      <button
        className={styles.optionsButton}
        onClick={() => removePost(postId)}>
        <FaEllipsis />
      </button>
    </header>
  );
};

export default FeedItemHeader;