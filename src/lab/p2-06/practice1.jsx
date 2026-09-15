import { useState } from "react";

// A, B가 각자 useState를 가짐. A를 눌러도 CounterB는 다시 실행되지 않음
const CounterA = () => {
  console.log('CounterA 실행');
  
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>A {count}</button>;
};

const CounterB = () => {
   console.log('CounterB 실행');

   const [count, setCount] = useState(0);

   return <button onClick={() => setCount(count +1)}>8 {count}</button>
};

// 부모는 state가 없음. 자식이 바뀌어도 LabPanel은 다시 안 그림
const LabPanel = () => {
  console.log('LaPanel 실행');
  
  return (
    <div>
      <CounterA />
      <CounterB />  
    </div>
  );
};

export default LabPanel;