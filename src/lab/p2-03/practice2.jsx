// 댓글 입력 폼 연습
const CommentForm = () => { 
  return (
    <form
      className='comment-form'
      action='#'
      method='post'>
      {/* htmlFor = HTML의 for. 라벨 클릭 시 textarea에 포커스 */}
      <label
        htmlFor='comment'
        className='sr-only'>
        댓글 달기
      </label>
      <textarea
        id='comment'
        name='comment'
        rows='2'
        placeholder='댓글 달기...'></textarea>
      {/* React에선 class 대신 className */}
      <button
        type='submit'
        class='btn-primary'>
        게시
      </button>
    </form>
  );
};
 
export default CommentForm;
