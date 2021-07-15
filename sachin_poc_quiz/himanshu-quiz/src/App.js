import { useState } from "react";
import "./App.css";
import AddQuestion from "./components/AddQuestion";
import Submit from "./components/submit";

function App() {
  const [count, setCount] = useState(0);
  const [questionBank, setQuestionBank] = useState([
    {
      questionId: 1,
      questionValue: "",
      optionsArray: ["", "", ""],
    },
  ]);
  
  return (
    <div className="App">
      {count ===0 ? (
        <AddQuestion
          questionBank={questionBank}
          setQuestionBank={setQuestionBank}
          count={count}
          setCount={setCount}
        />
      ) : (
        <Submit questionBank={questionBank} setQuestionBank={setQuestionBank}    count={count}
          setCount={setCount} />
      )}
    </div>
  );
}

export default App;
