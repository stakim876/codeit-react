import FeedItemCaption from './FeedItemCaption.jsx';

const username = '하츄핑';

// 유저명 + 캡션(글 + 시간)
const FeedItemContent = () => {
  return (
    <div className='text'>
     <a
       href='/jaehoon'
       className='username'>
       {username}
     </a>
    <FeedItemCaption />
   </div>          
  );  
};

export default FeedItemContent;
