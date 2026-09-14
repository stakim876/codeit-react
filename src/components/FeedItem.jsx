import FeedItemHeader from './FeedItemHeader.jsx';
import FeedItemActions from './FeedItemActions.jsx';
import FeedItemContent from './FeedItemContent.jsx';

// 게시물 1개 = 헤더 + 이미지 + 액션 버튼 조합
const FeedItem = () => {
  return (
    <article className='post'>
     <FeedItemHeader />

     {/* 본문 이미지 */}
     <div className='imageContainer'>
      <img
        src='https://picsum.photos/seed/post1/600/600'
        alt='한강에서 찍은 노을 사진'
      />
    </div>

    <FeedItemActions />

    {/* 캡션 자리. FeedItemContent를 여기에 넣으면 됨 */}
    <div className='content'>
  </div>
  </article>            
  );
};

export default FeedItem;
