// 서버 요청을 한곳에 모아 둔다. 컴포넌트는 URL을 몰라도 "가져와/만들어/지워"만 부르면 된다
import axios from 'axios';

const POSTS = '/posts';
const STORIES = '/stories';
const PROFILES = '/profiles';

// 공통 주소(baseURL)를 가진 axios 인스턴스. 이후 호출은 /posts 처럼 뒷부분만 적는다
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// 응답이 오면 껍데기(response)를 벗기고 data만 넘긴다.
// 그래서 호출하는 쪽은 response.data를 다시 꺼내지 않아도 바로 본문을 받는다
api.interceptors.response.use((response) => response.data);

export const postApi = {
  // GET /posts?_page=1&_per_page=2  → json-server 봉투 { data, next, ... }
  getPage: (query, options) => api.get(`${POSTS}?${query}`, options),
  // POST /posts  → 만들어진 게시물 객체
  create: (post) => api.post(POSTS, post),
  // DELETE /posts/:id
  remove: (id) => api.delete(`${POSTS}/${id}`),
  // PATCH /posts/:id  { likeCount }
  updateLikeCount: (id, likeCount) =>
    api.patch(`${POSTS}/${id}`, { likeCount }),
};

export const storyApi = {
  // GET /stories  → 스토리 배열
  getAll: () => api.get(STORIES),
};

export const profileApi = {
  // GET /profiles?username=seungtae  → 그 유저 프로필 배열
  getProfile: (username) => api.get(`${PROFILES}?username=${username}`),
};



export default api;
