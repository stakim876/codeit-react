import { useState } from "react";

// 화면만 그림. 숫자와 클릭 처리는 부모가 props로 내려줌
const CounterView = ({ label, count, onCounterClick }) => {
  console.log(`CounterView ${label} 실행`);
  return (
    <button onClick={onCounterClick}>
      {label} {count}  
    </button>
  );  
};

// state를 부모로 올리면 A만 눌러도 부모가 다시 실행되고 A·B가 둘 다 다시 그려짐
const LiftedPanel = () => {
  console.log('LiftedPanel 실행');
  
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <CounterView
        label='A'
        count={countA}
        onCounterClick={() => setCountA(countA + 1)}
      />
      <CounterView
        label='B'
        count={countB}
        onCounterClick={() => setCountB(countB + 1)}
      />
    </>
  );
};

export default LiftedPanel;