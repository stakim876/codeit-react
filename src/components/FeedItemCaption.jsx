const content = '오늘 한강 노을 실화?';
const minutesAgo = 10;

// 게시글 문구와 "n분 전"
// <> </> : 부모 태그 없이 여러 요소를 묶음 (Fragment)
const FeedItemCaption = () => {
  return (
    <>
     <span className='caption'>{content}</span>
     <div className='time'>
       {minutesAgo}분 전
     </div>
    </>     
  );  
};

export default FeedItemCaption;
