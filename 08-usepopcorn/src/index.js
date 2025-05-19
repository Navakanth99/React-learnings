import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <h1>This move rated has {movieRating} stars</h1>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Owesome"]}
    />
    <StarRating maxRating={10} />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
