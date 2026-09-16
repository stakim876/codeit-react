import { useState, useEffect } from "react";
import Stories from "./components/Stories.jsx";
import page from './components/FeedPage.module.scss';
import FeedList from "./components/FeedList.jsx";


const App = () => {
  // 처음엔 빈 배열. 서버에서 받으면 setPosts로 다시 그림
  const [posts, setPosts] = useState([]);
  console.log('① 그려짐 — posts', posts.length, '개');

  // []면 처음 한 번만 실행. 서버에서 posts를 가져옴
  useEffect(() => { 
    console.log('② effect가 돈다');
    const loadPosts = async () => { 
      try {
        const res = await fetch('http://localhost:3001/posts');
        if (!res.ok) {
          throw new Error(`서버가${res.status}로 답했어요`);
        }
        const data = await res.json();
        console.log('③ 데이터 도착 —', data.length, '개');
        setPosts(data);
      } catch (error) {
        console.error('게시물 주소가 잘못되었습니다.', error)
      }
    };

    loadPosts();
  }, []);

  // 그 id만 목록에서 빼 줌
  const handleDelete = (id) => { 
    setPosts(posts.filter((post) => post.id !== id));
  };


  return (
    <main className={page.mainContent}>
      <Stories />
      <FeedList
        posts={posts}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;