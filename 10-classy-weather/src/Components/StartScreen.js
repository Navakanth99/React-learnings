import "./index.css";
import "./App.css";
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your REact Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
