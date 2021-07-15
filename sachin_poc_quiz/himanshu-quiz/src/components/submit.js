import React, { useState } from "react";

const Submit = ({ questionBank, setQuestionBank, count, setCount }) => {
  const [edit, setEdit] = useState(0);
  const handleDelete = (index) => {
    var currentQuest = [...questionBank];
    currentQuest.splice(index, 1);
    setQuestionBank(currentQuest);
  };
  // const handleEdit=(i)=>{}
  return (
    <div className="border">
      {questionBank.map((x, i) => (
        <div key={i} className="border container bg-secondary">
          <h1 key={x.questionId}>
            <b>
              <u>question no ={i + 1}</u>{" "}
            </b>
          </h1>
          <br />
          <div key={i} className="text-left">
            {" "}
            <h2> Ques :- {x.questionValue}</h2>
            <br />
          </div>
          {x.optionsArray.map((y, index) => (
            <div key={index} className="text-left">
              <input type="radio" name={x.questionId} />

              <label>{y}</label>
            </div>
          ))}{" "}
          <br />
          {/* <button
            onClick={() => handleEdit(i)}
            className="btn btn-sm btn-danger m-2"
          >
            edit
          </button>  */}
          <button
            type="button"
            className="btn btn-sm btn-danger text-light m-2"
            disabled={questionBank.length == 1}
            onClick={() => handleDelete(i)}
          >
            Delete
          </button>
        </div>
      ))}
      {edit === 0 ? (
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-lg btn-primary m-2"
        >
          Back
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Submit;
