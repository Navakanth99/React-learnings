import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("Apr 25 2025");
  date.setDate(date.getDate() + count);

  const handleResest = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep((c) => c - 1)}> - </button> */}
        <span>Step: {step}</span>
        {/* <button onClick={() => setStep((c) => c + 1)}> + </button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        {/* <span>Count: {count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        <span>
          {" "}
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleResest}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
