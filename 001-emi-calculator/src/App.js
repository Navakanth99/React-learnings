import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [intrest, setIntrest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if (id === "principal") {
      setPrincipal(value);
    } else if (id === "interest") {
      setIntrest(value);
    } else {
      setYears(value);
    }
  };
  const calculateEMI = () => {
    let r = intrest;

    if (principal && r && years) {
      r = r / 12 / 100; //per month
      const calPow = Math.pow(1 + r, years * 12);
      const amount = principal * ((r * calPow) / (calPow - 1));
      setEMI(Math.round(amount));
    }
  };
  useEffect(() => {
    calculateEMI();
  }, [principal, intrest, years]);
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="inputs">
        <p>Principal</p>
        <input type="number" id="principal" onChange={handleChange} />

        <p>Interest</p>
        <input type="number" id="interest" onChange={handleChange} />

        <p>Years</p>
        <input type="number" id="year" onChange={handleChange} />
      </div>

      <div className="output">Your EMI is {emi}</div>
    </div>
  );
}

export default App;
