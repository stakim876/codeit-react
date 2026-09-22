import { useState, useEffect, useCallback } from 'react';
import { postApi } from '../services/api';
import axios from 'axios';
import { useSearchParams } from 'react-router';

const PER_PAGE = 2;

export const usePosts = () => {
  // 주소의 ?user=minji 같은 쿼리를 읽고 바꾼다
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedUser = searchParams.get('user');

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  // 검색 유저가 바뀌면 1페이지부터 다시 불러온다
  useEffect(() => {
    setPageNumber(1);
    setPosts([]);
  }, [selectedUser]);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const loadPosts = async () => {
      const condition = `_page=${pageNumber}&_per_page=${PER_PAGE}`;
      const query = selectedUser
        ? `username=${selectedUser}&${condition}`
        : condition;

      setIsLoading(true);
      setError(null);

      try {
        const envelope = await postApi.getPage(query, {
          signal: controller.signal,
        });

        setPosts((current) => [...current, ...envelope.data]);
        setNextPage(envelope.next);
      } catch (err) {
        if (axios.isCancel(err)) {
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

  const removePost = async (id) => {
    const previous = posts;
    setPosts(posts.filter((post) => post.id !== id));

    try {
      await postApi.remove(id);
    } catch (err) {
      console.error('게시물을 지우지 못했어요.', err);
      setPosts(previous);
    }
  };

  // 스토리/검색을 누르면 ?user=이름 을 달거나 같은 이름이면 뗀다
  const selectUser = useCallback((username) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);

      if (next.get('user') === username) {
        next.delete('user');
      } else {
        next.set('user', username);
      }
      return next;
    });
  }, [setSearchParams]);

  const countUpComment = (id) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? { ...post, commentCount: post.commentCount + 1 }
          : post,
      ),
    );
  };

  const addPost = (createdPost) => {
    setPosts((current) => [createdPost, ...current]);
  };

  const loadMore = useCallback(() => {
    setPageNumber((current) => current + 1);
  }, []);

  return {
    posts,
    isLoading,
    error,
    hasNext: nextPage !== null,
    loadMore,
    addPost,
    removePost,
    countUpComment,
    selectUser,
  };
};
