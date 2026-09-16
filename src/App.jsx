import { useState, useEffect } from "react";
import Stories from "./components/Stories.jsx";
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from "./components/FeedList.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);
  // 고른 유저. null이면 전체, 같은 유저를 다시 누르면 해제
  const [selectedUser, setSelectedUser] = useState(null);
  // 받아오는 중이면 스켈레톤, 실패하면 에러 문구
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // selectedUser가 바뀔 때마다 다시 fetch. 이전 요청은 abort
  useEffect(() => { 
    const controller = new AbortController();
    let cancelled = false;

    const loadPosts = async () => {
      const url = selectedUser
        ? `http://localhost:3001/posts?username=${selectedUser}`
        : 'http://localhost:3001/posts';

      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`서버가${res.status}로 답했어요`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          return; 
        }
        console.error('게시물 주소가 잘못되었습니다.', error);
        setError('게시물을 불러오지 못했습니다.');
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [selectedUser]);

  // 그 id만 목록에서 빼 줌
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // 같은 유저를 다시 누르면 null, 아니면 그 유저만 보여 줌
  const handleSelectUser = (username) => {
    setSelectedUser((current) => (current === username ? null : username));
  };

  return (
    <main className={page.mainContent}>
      <Stories onSelect={handleSelectUser} />
      {error ? (
        <p className={stateStyles.errorText}>{error}</p>
      ) : (
        <FeedList
          posts={posts}
          isLoading={isLoading}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
};

export default App;
