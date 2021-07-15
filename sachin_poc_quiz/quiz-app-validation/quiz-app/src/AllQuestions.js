import React from "react";
const AllQuestions = ({
  questionCollection,
  setQuestionBank,
  count,
  setCount,
}) => {
  const handleBack = () => {
    setCount(0);
  };
  return (
    <div>
      {questionCollection.map(x => (
        <div>
          <label>
            Question Number : {x.questionId} {"  "} {x.questionValue}
          </label>
          <br />

          {x.optionsArray.map(options => (
            <div>
              <input type="radio" name={x.questionId} />

              <label>{options}</label>
            </div>
          ))}

          <br />
        </div>
      ))}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default AllQuestions;
