import styles from './FeedItem.module.scss';

// 댓글 입력. preventDefault로 제출해도 페이지가 새로고침되지 않음
const CommentForm = () => {
  return (
    <form
      className={styles.commentForm}
      onSubmit={(event) => event.preventDefault()}>
       <input
         type='text'
         placeholder='댓글 달기...'
         className={styles.commentInput}
         />
         <button
           type='submit'
           className={styles.commentSubmit}>
            게시
           </button>  
      </form>
  );  
};

export default CommentForm;
