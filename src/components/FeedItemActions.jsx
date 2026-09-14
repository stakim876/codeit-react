const likeCount = 1240; // 좋아요 수 (JS 변수)

// 좋아요 / 댓글 / 공유 / 저장 + 좋아요 개수
const FeedItemActions = () => {
  return (
    <div className='actions'>
      <div className='actionButtons'>
        <div className='leftButtons'>
          <button
            type='button'
            className='actionButton'>
            ♡
          </button>
          <button
            type='button'
            className='actionButton'>
            💬
          </button>
          <button
            type='button'
            className='actionButton'>
            ↗
          </button>
        </div>
        <button
          type='button'
          className='actionButton'>
          🔖
        </button>
      </div>
      <div className='likes'>
        {/* { } 안에 JS. toLocaleString()은 1,240처럼 쉼표 넣기 */}
        좋아요 <span>{likeCount.toLocaleString()}</span>개
      </div>
    </div>
  );
};

export default FeedItemActions;
