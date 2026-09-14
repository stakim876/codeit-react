import { useState } from "react";

// useState: 값이 바뀌면 화면을 다시 그림
const CommentCounter = () => {

  const [commentCount, setCommentCount] = useState(128);
  
  return (
    <div className='postComments'>
      <div className='commentSection'>
        <button
          type='button'
          className='viewCommentsButton'>
          댓글 {commentCount.toLocaleString()}개 보기  
          </button>
        </div>  
        <button
          type='button'
          className='commentSubmit'
          onClick={() => {
            // 이전 개수(c)에 1을 더함
            setCommentCount(c => c + 1);
          }}
          >
           게시 
          </button>
    </div>
  );
};

export default CommentCounter;
