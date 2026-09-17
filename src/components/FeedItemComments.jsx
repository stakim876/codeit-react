import styles from './FeedItem.module.scss';

// 댓글 n개. 부모가 +1 하면 여기도 다시 그려짐
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
