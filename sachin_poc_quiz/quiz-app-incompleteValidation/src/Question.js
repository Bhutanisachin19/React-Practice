import React, { useState } from "react";
const Question = ({
  count,
  setCount,
  questionCollection,
  setquestionCollection,
}) => {
  const [flag, setFlag] = useState(true);

  const [valid, setValid] = useState(); // to display validation

  //validation
  const checkValues = e => {
    e.preventDefault();
    console.log("Check Value called");
    let check = 0;
    questionCollection.map(val => {
      if (val.questionValue === "") {
        alert("Please fill all details");
        // /*********** */
        // let element = document.getElementById(questionCollection.indexOf(val));

        // element.innerHTML = "Please Fill The Question First";

        setFlag(false);
        check = check + 1;
        // console.log("1st if", flag);
      }
      if (check === 0) {
        val.optionsArray.map(options => {
          if (options === "") {
            alert("Please fill all options");

            // let element = document.getElementById(
            //   val.optionsArray.indexOf(options)
            // );

            // element.innerHTML = "Please Fill The Option First";
            setFlag(false);
            check = check + 1;
          }
        });
      }
    });
    if (check === 0) {
      setCount(count + 1);
    }
  };

  const handleOption = index => {
    console.log("Handle Option called ", index);
    let check1 = 0;
    questionCollection.map(val => {
      console.log("Index is ", index);
      if (val.questionValue === "") {
        setFlag(false);
        check1 = check1 + 1;

        let element1 = document.getElementById(
          "q" + questionCollection.indexOf(val)
        );
        element1.innerHTML = "Please Fill The Question First";
      } else {
        let element1 = document.getElementById(
          "q" + questionCollection.indexOf(val)
        );
        element1.innerHTML = "";
      }

      if (check1 === 0) {
        val.optionsArray.map(options => {
          if (options === "") {
            console.log(
              "indexxxxxx",
              "option" + index + val.optionsArray.indexOf(options)
            );

            let element2 = document.getElementById(
              "option" + index + val.optionsArray.indexOf(options)
            );
            element2.innerHTML = "Please Fill The Option First";

            console.log(
              "Error in ",
              "option" + index + "" + val.optionsArray.indexOf(options)
            );
            setFlag(false);
            check1 = check1 + 1;
          } else {
            console.log(
              "indexxxxxx",
              "option" + index + val.optionsArray.indexOf(options)
            );
            let element2 = document.getElementById(
              "option" + index + val.optionsArray.indexOf(options)
            );
            element2.innerHTML = "";
          }
        });
      }
    });
    if (check1 === 0) {
      var currentQuest = [...questionCollection];
      currentQuest[index].optionsArray.push("");
      setquestionCollection(currentQuest);
    }
  };

  const handleQuestion = () => {
    console.log("Handle Question called");
    let check2 = 0;
    questionCollection.map(val => {
      if (val.questionValue === "") {
        alert("Please fill all details");

        setFlag(false);

        // let element = document.getElementById(questionCollection.indexOf(val));

        // element.innerHTML = "Please Fill The Question First";

        check2 = check2 + 1;

        // console.log("1st if", flag);
      }

      val.optionsArray.map(options => {
        if (options === "") {
          alert("Please fill all options");
          setFlag(false);
          // let element = document.getElementById(
          //   val.optionsArray.indexOf(options)
          // );

          // element.innerHTML = "Please Fill The Option First";
          check2 = check2 + 1;
          count = 0;
        }
      });
    });

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
    }
  };
  return (
    <div>
      <br></br>
      <h1>Quiz</h1>
      {console.log("mainstate", questionCollection)}
      {questionCollection.map((x, index) => (
        <form onSubmit={e => checkValues(e)}>
          <label>Question </label>
          {/* {console.log("x", x, "index", index)} */}
          <input
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
          <span className="Validat" id={"q" + index}></span>
          <br />
          {x.optionsArray.map((res, i) => (
            <div>
              <label>Option {i + 1}: </label>
              <input
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

              {console.log("Span", "option" + index + i)}

              <span className="Validat" id={"option" + index + i}></span>

              <br />
            </div>
          ))}
          <button type="button" onClick={() => handleOption(index)}>
            Add option
          </button>
          <br />
        </form>
      ))}
      <button onClick={() => handleQuestion()}>Add question</button>
      <br />

      {/* <button onClick={() => setCount(count + 1)}> Submit</button> */}
      <button> Submit</button>
    </div>
  );
};

export default Question;
