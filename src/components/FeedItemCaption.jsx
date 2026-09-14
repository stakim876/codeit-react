// 캡션 문구와 "n분 전". 값은 부모(FeedItemContent)에서 props로 받음
const FeedItemCaption = ({ content, minutesAgo }) => {
  return (
    <>
      <span className='caption'>{content}</span>
      <div className = 'time'>{minutesAgo}분 전</div>
    </>
  );
};

export default FeedItemCaption;
