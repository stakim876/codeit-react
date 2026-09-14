import styles from './FeedItem.module.scss';

// 댓글 영역 껍데기. 태그 사이에 넣은 내용이 children으로 들어옴
const CommentArea = ({ children }) => {

    return (
      <div className={styles.postComments}>
        {children}
      </div>  
    );
};

export default CommentArea;
