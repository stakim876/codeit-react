import styles from './FeedItem.module.scss';

// 댓글 n개 보기 버튼. toLocaleString()은 128 → 128, 1240 → 1,240
const FeedItemComments = ({ commentCount }) => {
  return (
    <div className={styles.commentSection}>
      <button
        type='button'
        className={styles.viewCommentsButton}>
        댓글 {commentCount.toLocaleString()}개 보기
      </button>
    </div>
  );
};

export default FeedItemComments;
