import { useState, useEffect, useRef } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from './components/FeedList.jsx';

const PER_PAGE = 2;

const App = () => {
  const [posts, setPosts] = useState([]);
  // 새로고침해도 마지막에 고른 유저를 다시 씀
  const [selectedUser, setSelectedUser] = useState(() =>
    localStorage.getItem('lastUser'),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  // 목록 맨 아래 감시 지점. 화면에 보이면 다음 페이지
  const loaderRef = useRef(null);

  // 고른 유저를 localStorage에 저장. 해제하면 지움
  useEffect(() => {
    if (selectedUser) {
      localStorage.setItem('lastUser', selectedUser);
    } else {
      localStorage.removeItem('lastUser');
    }
  }, [selectedUser]);

  // selectedUser나 pageNumber가 바뀌면 fetch. 새 페이지는 뒤에 이어 붙임
  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const loadPosts = async () => {
      const condition = `_page=${pageNumber}&_per_page=${PER_PAGE}`;

      const url = selectedUser
        ? `http://localhost:3001/posts?username=${selectedUser}&${condition}`
        : `http://localhost:3001/posts?${condition}`;

      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`서버가${res.status}로 답했어요`);
        }
        const envelope = await res.json();
        setPosts((current) => [...current, ...envelope.data]);
        setNextPage(envelope.next);
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        console.error('게시물 주소가 잘못되었습니다.', err);
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
  }, [selectedUser, pageNumber]);

  // 그 id만 목록에서 빼 줌
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // 유저를 바꾸면 1페이지부터 다시. 같은 유저를 다시 누르면 해제
  const handleSelectUser = (username) => {
    setSelectedUser((current) => (current === username ? null : username));
    setPageNumber(1);
    setPosts([]);
  };

  // 아래 감시 지점이 보이면 pageNumber + 1. 다음 페이지가 없거나 로딩 중이면 멈춤
  useEffect(() => { 
    if (nextPage === null || isLoading) {
      return;
    }

    const target = loaderRef.current;
    if (target === null) {
      return;
    }

    const observer = new IntersectionObserver((entries) => { 
      if (entries[0].isIntersecting) {
        setPageNumber(current => current + 1);
      }
    });

    observer.observe(target);

    return () => observer.disconnect();
  }, [isLoading, nextPage]);

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
          loaderRef={loaderRef}
        />
      )}
    </main>
  );
};

export default App;
