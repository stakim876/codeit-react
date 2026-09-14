import FeedItem from "./components/FeedItem.jsx";

// 화면 최상위. FeedItem에 props로 게시물 데이터를 넘김
// 같은 컴포넌트를 여러 번 쓰고, 숫자/변수는 { } 로 전달
function App() {
  return (
    <>
      {/* 첫 게시물. commentCount는 아직 안 넘김 */}
      <FeedItem 
        username='jaehoon'
         profileImage='https://picsum.photos/seed/jaehoon/40/40'
         postImage= 'https://picsum.photos/seed/post1/600/600'
         postAlt='한강에서 찍은 노을 사진'
         content='오늘 한강 노을 실화냐 🌇'
         minutesAgo={32}
         likeCount={128}
      />

      {/* 같은 유저, 좋아요/댓글 수만 다름 */}
      <FeedItem
        username='jaehoon'
        profileImage='https://picsum.photos/seed/jaehoon/40/40'
        postImage='https://picsum.photos/seed/post1/600/600'
        postAlt='한강에서 찍은 노을 사진'
        content='오늘 한강 노을 실화냐 🌇'
        minutesAgo={32}
        likeCount={1240}
        commentCount={128}
    />

    {/* 다른 유저 게시물. props만 바꾸면 새 카드가 됨 */}
    <FeedItem
      username='minji'
      profileImage='https://picsum.photos/seed/minji/40/40'
      postImage='https://picsum.photos/seed/post2/600/600'
      postAlt='골목 카페 창가 사진'
      content='퇴근길에 발견한 카페 ☕'
      minutesAgo={8}
      likeCount={87}
      commentCount={12}
      />
    </>
  );
}

export default App;
