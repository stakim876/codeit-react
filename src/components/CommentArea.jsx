// 댓글 영역 껍데기. 태그 사이에 넣은 내용이 children으로 들어옴
// React 약속은 children (소문자). Children은 다른 이름이라 안 들어옴
const CommentArea = ({ Children }) => {

    return (
      <div className= 'postComments'>
        {Children}
      </div>  
    );
};

export default CommentArea;
