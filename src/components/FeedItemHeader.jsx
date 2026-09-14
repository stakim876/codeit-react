import styles from './FeedItem.module.scss';
import { FaEllipsis } from 'react-icons/fa6';

// 게시물 위쪽: 프로필 사진 + 유저명. 이미지가 없으면 기본 주소 사용
const FeedItemHeader = ({
  username,
  profileImage = 'https://picsum.photos/seed/default/40/40',
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <a
          href={`/${username}`}
          className={styles.profileLink}>
          <div className={styles.profileImage}>
             <img
               src={profileImage}
               alt={`${username}의 프로필`}
               />
            </div>  
          </a>
          <div className={styles.userDetails}>
            <a 
              href={`/${username}`}
              className={styles.username}>
               {username}  
              </a>
          </div>
      </div>
      <button className={styles.optionsButton}>
        <FaEllipsis />
      </button>
    </header>
  );
};

export default FeedItemHeader;
