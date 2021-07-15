import "./App.css";
//import QuizApp from "./QuizPage";
import { useState } from "react";
import Question from "./Question";
import AllQuestions from "./AllQuestions";

function App() {
  const [count, setCount] = useState(0);
  const [questionCollection, setquestionCollection] = useState([
    {
      questionId: 1,
      questionValue: "",
      optionsArray: ["", "", ""],
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <QuizApp /> */}
        {count === 0 ? (
          <Question
            questionCollection={questionCollection}
            setquestionCollection={setquestionCollection}
            count={count}
            setCount={setCount}
          />
        ) : (
          <AllQuestions
            questionCollection={questionCollection}
            setquestionCollection={setquestionCollection}
            count={count}
            setCount={setCount}
          />
        )}
      </header>
    </div>
  );
}

export default App;
