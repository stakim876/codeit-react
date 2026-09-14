// 댓글 입력 폼. 제출해도 페이지가 새로고침되지 않게 막음
const CommentForm = () => {
  return (
    <form
      className='commentForm'
      onSubmit={(event) => event.preventDefault()}>
       <input
         type='text'
         placeholder='댓글 달기...'
         className='commentInput'
         />
         <button
           type='submit'
           className='commentSubmit'>
            게시
           </button>  
      </form>
  );  
};

export default CommentForm;
