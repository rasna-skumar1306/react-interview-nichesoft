import "./styles.css";
import Counter from "./counter";
import { useState } from "react";

const App = () => {
  const [total, setTotal] = useState(0);

  const handleInc = () => {
    setTotal(total + 1);
  };

  const handleDec = (count) => {
    setTotal(total - count);
  };

  const handleRes = () => {
    setTotal(0);
  };

  return (
    <div className="App">
      <h2 className="welcome">Welcome!</h2>
      <h3>Total Count {total}</h3>
      <div className="parent">
        <Counter handleTotal={handleInc} handleRes={handleDec} total={total} />
        <Counter handleTotal={handleInc} handleRes={handleDec} total={total} />
        <Counter handleTotal={handleInc} handleRes={handleDec} total={total} />
      </div>
      <div className="parent">
        <Counter handleTotal={handleInc} handleRes={handleDec} total={total} />
        <Counter handleTotal={handleInc} handleRes={handleDec} total={total} />
        <Counter handleTotal={handleInc} handleRes={handleDec} total={total} />
      </div>
      <button className="res-btn" onClick={handleRes}>
        Reset all
      </button>
    </div>
  );
};

export default App;
