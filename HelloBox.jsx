// 작은 컴포넌트. App에서 불러 쓰면 화면에 나타남
export const HelloBox = () => {
  return (
    <section>
      <h2>여기는 내가 쓴 컴포넌트에요</h2>
      <p>App.jsx 가 이 컴포넌트를 불러다 화면에 놓아요.</p>  
    </section>
  );  
};