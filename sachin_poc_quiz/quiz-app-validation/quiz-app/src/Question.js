import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Question = ({
  count,
  setCount,
  questionCollection,
  setquestionCollection,
}) => {
  const [flag, setFlag] = useState(true);

  const validate = () => {
    let check = 0;
    questionCollection.map(val => {
      if (val.questionValue === "") {
        //alert("Please fill all details");
        setFlag(false);
        check = check + 1;
        console.log("1st if", flag);
      }
      if (check === 0) {
        val.optionsArray.map(options => {
          if (options === "") {
            //alert("Please fill all options");
            setFlag(false);
            check = check + 1;
          }
        });
      }
    });

    return check;
  };

  //validation
  const checkValues = () => {
    let check = validate();

    if (check === 0) setCount(count + 1);

    //setCount(count + 1);
  };

  const handleOption = index => {
    let check1 = validate();

    if (check1 === 0) {
      console.log("Option index", index);
      var currentQuest = [...questionCollection];
      console.log("Array options", currentQuest === questionCollection); //false
      currentQuest[index].optionsArray.push("");
      setquestionCollection(currentQuest);
      console.log("mainstate", questionCollection);
    }
  };

  const handleQuestion = () => {
    let check2 = validate();

    if (check2 === 0) {
      setquestionCollection([
        ...questionCollection,
        //adding new object in question Collection
        {
          questionId: questionCollection.length + 1,
          questionValue: "",
          optionsArray: ["", "", ""],
        },
      ]);
    } else {
      alert("Add all questions");
    }
  };

  (function () {
    "use strict";
    window.addEventListener(
      "click",
      function () {
        // fetch all the forms we want to apply custom style
        var inputs = document.getElementsByClassName("form-control");

        // loop over each input and watch blur event
        var validation = Array.prototype.filter.call(inputs, function (input) {
          input.addEventListener(
            "blur",
            function (event) {
              // reset
              input.classList.remove("is-invalid");
              input.classList.remove("is-valid");

              if (input.checkValidity() === false) {
                input.classList.add("is-invalid");
              } else {
                input.classList.add("is-valid");
              }
            },
            false
          );
        });
      },
      false
    );
  })();
  return (
    <div className="Form-div">
      {" "}
      <br></br>
      <h1>Quiz</h1>{" "}
      <form class="needs-validation" novalidate onSubmit={checkValues}>
        {console.log("mainstate", questionCollection)}
        {questionCollection.map((x, index) => (
          <div className="F-div">
            <label>Question </label>
            {console.log("x", x, "index", index)}
            <input
              class="form-control"
              type="text"
              placeholder="Enter Your Question"
              onChange={e =>
                setquestionCollection(
                  [...questionCollection],
                  [(questionCollection[index].questionValue = e.target.value)]
                )
              }
              value={questionCollection[index].questionValue}
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Fill this field first!</div>
            <br />
            {x.optionsArray.map((res, i) => (
              <div>
                <label>Option {i + 1}: </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Your Option"
                  onChange={e =>
                    setquestionCollection(
                      [...questionCollection],
                      [
                        (questionCollection[index].optionsArray[i] =
                          e.target.value),
                      ]
                    )
                  }
                  value={questionCollection[index].optionsArray[i]}
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Fill this field first!</div>
                <br />
              </div>
            ))}
            <button
              type="button"
              className="opti btn btn-light"
              onClick={() => handleOption(index)}
            >
              Add option
            </button>
            <br />
          </div>
        ))}
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => handleQuestion()}
        >
          Add question
        </button>
        <br />
        {/* <button onClick={() => setCount(count + 1)}> Submit</button> */}
        <button className="btn btn-dark" type="button" id="btn">
          Submit
        </button>{" "}
        <button className="btn btn-danger">Delete</button>
      </form>
    </div>
  );
};

export default Question;
