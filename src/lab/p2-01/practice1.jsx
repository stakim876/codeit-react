// 프로필 카드 연습. export const = 이름 그대로 꺼내 쓰기
export const ProfileCard = () => { 
  return (
    <section className='profile-card'>
      <img
        src='https://picsum.photos/seed/jaehoon/80/80'
        alt='jaehoon 프로필 사진'
      />
      <h2>jaehoon</h2>
      <p>게시물 42 · 팔로워 1240 · 팔로잉 180</p>
      <p>새벽에 러닝하고 사진 찍어요</p>
    </section>
  );
};
