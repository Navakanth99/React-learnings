import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchApi = async () => {
    if (cache[input]) {
      console.log("Cache retured", input);
      setResults(cache[input]);
      return;
    }

    console.log("API Call", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchApi, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div className="App">
      <h1>Auto Complete Search Bar</h1>
      <input
        type="text"
        value={input}
        className="search-input"
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <div className="results-container">
          {results.map((r) => (
            <span key={r.id} className="results">
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
