import { useState } from 'react';
import FeedList from './components/FeedList.jsx';
import Stories from './components/Stories.jsx';

const initialPosts = [
  {
    id: 1,
    username: 'jaehoon',
    profileImage: 'https://picsum.photos/seed/jaehoon/40/40',
    postImage: 'https://picsum.photos/seed/post1/600/600',
    postAlt: '한강에서 찍은 노을 사진',
    content: '오늘 한강 노을 실화냐 🌇',
    minutesAgo: 32,
    likeCount: 1240,
    commentCount: 128,
  },
  {
    id: 2,
    username: 'minji',
    profileImage: 'https://picsum.photos/seed/minji/40/40',
    postImage: 'https://picsum.photos/seed/post2/600/600',
    postAlt: '골목 카페 창가 사진',
    content: '퇴근길에 발견한 카페 ☕',
    minutesAgo: 8,
    likeCount: 87,
    commentCount: 12,
  },
];

// 스토리 + 피드. 삭제하면 그 id만 목록에서 빼 줌
function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <Stories />
      <FeedList posts={posts} onDelete={handleDelete} />
    </>
  );
}

export default App;
