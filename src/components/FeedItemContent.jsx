import FeedItemCaption from './FeedItemCaption.jsx';
import styles from './FeedItem.module.scss';

// 유저명 + 캡션. 받은 props를 캡션 컴포넌트에 그대로 넘김
const FeedItemContent = ({ username, content, minutesAgo }) => {
  return (
    <div className={styles.text}>
      <a
        href={`/${username}`}
        className={styles.username}>
        {username}
      </a>
      <FeedItemCaption
        content={content}
        minutesAgo={minutesAgo}
      />
    </div>
  );
};

export default FeedItemContent;
