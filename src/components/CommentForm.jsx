import { useState } from 'react';
import styles from './FeedItem.module.scss';

// 댓글 입력칸. 제출하면 부모 진동벨을 울리고 칸을 비움
const CommentForm = ({ onAddComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // 빈 글이면 안 올림
    if (text.trim() === '') {
      return;
    }

    onAddComment();
    setText('');
  };

  return (
    <form
      className={styles.commentForm}
      onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='댓글 달기...'
        className={styles.commentInput}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type='submit'
        className={styles.commentSubmit}
        disabled={text.trim() === ''}>
        게시
      </button>
    </form>
  );
};

export default CommentForm;
