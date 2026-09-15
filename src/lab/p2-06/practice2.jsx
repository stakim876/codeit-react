import { useState } from "react";

const CounterViw = ({ label, count, onCounterClick }) => {
  console.log(`CounterView ${label} 실행`);
  return (
    <button onClick={onCounterClick}>
      {label} {count}  
    </button>
  );  
};

const LiftdPanel = () => {
  console.log('LiftedPanel 실행');
  
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
     <CounterViw
       label='A'
       count={countA}
       onCounterClick={() => setCountA(countA + 1)}
    />
    <CounterViw
      label='B'
      count={countB}
      onCounterClick={() => setCountB(countB + 1)}
    />     
    </>
  );
};

export default LiftdPanel;