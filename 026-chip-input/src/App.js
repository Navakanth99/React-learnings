import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  };

  return (
    <div className="App">
      <h1>Chip input</h1>
      <input
        type="text"
        placeholder="Enter something"
        className="input"
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div style={{ margin: 15 }}>
        {chips.map((chip, index) => (
          <span className="chip">
            {chip} <button onClick={() => handleDelete(index)}> X </button>{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
