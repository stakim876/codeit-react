// 스토리 목록 연습. 작은 컴포넌트를 조립해서 한 줄을 만듦
const StoryBody = ({ username, profileImage }) => {
  return (
    <>
      <div className='storyAvatar'>
        <div className='storyRing'></div>
        <img
          src={profileImage}
          alt={`${username}의 스토리`}
        />  
      </div>
      <span className='storyUsername'>{username}</span>
      </>
  );  
};

const StoryItem = ({ username, profileImage }) => {
  return (
    <div className='storyItem'>
      <StoryBody
        username={username}
        profileImage={profileImage}
       />    
    </div>
  );  
};

// 태그 사이 내용은 children. childeren은 오타라 자식이 안 들어옴
const StoryList = ({ childeren }) => {
  return <div className='storiesList'>{childeren}</div>  
};

const Stories = () => {
  return (
    <StoryList>
      <StoryItem
        username='minji'
        profileImage='https://picsum.photos/seed/minji/56/56'
        />  
    </StoryList>
  );  
};

export default Stories;
