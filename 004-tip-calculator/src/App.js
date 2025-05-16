import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percetage1, setPercentage1] = useState(0);
  const [percetage2, setPercentage2] = useState(0);

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  const tip = (bill * (percetage1 + percetage2)) / 2 / 100;
  return (
    <div>
      <BillInput bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage={percetage1} onSelect={setPercentage1}>
        {" "}
        How do you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percentage={percetage2} onSelect={setPercentage2}>
        {" "}
        How did your friend like the service?{" "}
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset reset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onsetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20"> Absolutely amazng!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip})
    </h3>
  );
}

function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}

export default App;
