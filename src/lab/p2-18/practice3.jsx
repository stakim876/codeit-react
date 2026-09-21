import { useState } from "react";
import { Link, Route, Routes } from "react-router";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h2>카운터 화면</h2>
      <h2>현재 카운트: {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
};

const Text = () => <h2>Text Screen</h2>

const Practice3 = () => {
  return (
    <div>
      {/* Link를 누르면 URL만 바뀌고 화면은 Routes가 골라 준다 */}
      <Link to='/'>카운터 화면으로</Link>
      <br />
      <Link to='/text'>텍스트 화면으로</Link>

      <Routes>
         <Route path="/" element={<Counter />} />
         <Route path="/text" element={<Text />} />
        </Routes>  
    </div>  
  );  
};

export default Practice3;