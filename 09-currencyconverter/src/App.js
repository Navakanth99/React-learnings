import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${fromCur}&to=${toCur}`
        );

        const data = await res.json();
        // console.log(data);
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }

      if (fromCur == toCur) {
        return setConverted(input);
      }

      convert();
    },
    [input, fromCur, toCur]
  );
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setInput(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        Output: {converted} {toCur}{" "}
      </p>
    </div>
  );
}

export default App;
