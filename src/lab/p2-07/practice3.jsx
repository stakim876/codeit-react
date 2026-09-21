import { useState } from 'react';
import styles from '../../components/Stories.module.scss';

const initialStories = [
  { id: 1, username: 'seungtae', unseen: true },
  { id: 2, username: 'minji', unseen: true },
  { id: 3, username: 'seungwoo', unseen: false },
  { id: 4, username: 'yuna', unseen: true },
  { id: 5, username: 'dohyun', unseen: false },
  { id: 6, username: 'ssong', unseen: true },
  { id: 7, username: 'hyerin', unseen: false },
  { id: 8, username: 'taeyang', unseen: true },
];



const StoryItem = ({ username, profileImage, unseen, onSeen }) => {
  return (
    <div className={styles.storyItem} onClick={onSeen}>
      <div className={styles.storyAvatar}>
        {unseen && <div className={styles.storyRing}></div>}
        <img
          src={profileImage}
          alt={`${username}의 스토리`}
        />
      </div>
      <span className={styles.storyUsername}>{username}</span>
    </div>
  );
};


// 스토리를 누르면 해당 항목만 본 것으로 바꾸고, 안 본 개수를 셈
const Stories = () => {

  const [stories, setStories] = useState(initialStories);

  // 클릭한 id만 unseen: false로 바꿈. 나머지는 그대로
  const handleSeen = (id) => { 
    setStories(
      stories.map((story) =>
        story.id === id ? { ...story, unseen: false } : story,
      ),
    );
  };

  // 아직 안 본 스토리 개수
  const unseenCount = stories.filter((story) => story.unseen).length;

  return (
    <div className={styles.storiesContainer}>
      {unseenCount > 0 && <p>안 본 스토리 {unseenCount}개</p>}
      <div className={styles.storiesList}>
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            username={story.username}
            profileImage={`https://picsum.photos/seed/${story.username}/50/50`}
            unseen={story.unseen}
            onSeen={() => handleSeen(story.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;