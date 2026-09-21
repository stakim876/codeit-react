import { createContext, useContext } from 'react';
import { usePosts } from '../hooks/usePosts';

// 게시물 상태를 여러 컴포넌트가 나눠 쓰는 공유 창고
export const PostsContext = createContext(null);

// usePosts 값을 창고에 넣고, 아래 자식들이 꺼내 쓰게 한다
export const PostsProvider = ({ children }) => {
  const value = usePosts();
  return <PostsContext value={value}>{children}</PostsContext>;
};

// Provider 안에서만 창고 값을 꺼낸다. 밖이면 에러
export const usePostsContext = () => {
  const value = useContext(PostsContext);

  if (value === null) {
    throw new Error('usePostsContext는 PostsProvider 안에서만 쓸 수 있어요.');
  }

  return value;
};
