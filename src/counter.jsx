import { useEffect, useState } from "react";

const Counter = ({ handleTotal, handleRes, total }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    handleTotal();
    setCount(count + 1);
  };

  const handleRst = () => {
    setCount(0);
    handleRes(count);
  };

  useEffect(() => {
    if (total === 0) {
      setCount(0);
    }
  }, [total]);

  return (
    <div className="counter">
      <h2 className="count"> Clicks {count}</h2>
      <div className="buttons">
        <button className="inc-btn" onClick={() => handleIncrement()}>
          Increment
        </button>
        <button className="res-btn" onClick={() => handleRst()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
