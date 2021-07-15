import React from "react";
import "./validation";
import '../custom.css'
const AddQuestion = ({ questionBank, setQuestionBank, count, setCount }) => {
  const handleOption = (index) => {
    var z=true
    var i;
    var x="question"+index
    var x1="question1"+index
    if (questionBank[index].questionValue.trim()===''){
      document.getElementById(x).innerHTML="please fill out !"
      document.getElementById(x).style.color = "#ff0000";
      document.getElementById(x1).style.border = "thin solid #ff0000";
      z=false
    }
    else{
      document.getElementById(x).innerHTML=""
      document.getElementById(x1).style.border = "";


    }
    for(i in questionBank[index].optionsArray){
     var y="option"+index+i
      var y1="option1"+index+i
      if(questionBank[index].optionsArray[i].trim()==='')
      {
        z=false
          
        document.getElementById(y).innerHTML="please fill out  !"
        document.getElementById(y).style.color = "#ff0000";
        document.getElementById(y1).style.border = "thin solid #ff0000";

      }
      else{
        document.getElementById(y).innerHTML=""
        document.getElementById(y1).style.border = "";

      }
    }
   if(z){
      var currentQuest = [...questionBank];
      console.log(currentQuest === questionBank);
      currentQuest[index].optionsArray.push("");
      setQuestionBank(currentQuest);
    }

    console.log("mainstate", questionBank);
    // setQuestionBank(
    //   questionBank.map((obj, i) =>  i == index ? { ...obj,optionsArray: [...obj.optionsArray, ""], }: obj));
    // setQuestionBank([...questionBank])
  };

  const handleQuestion = () => {
    var flag = true;
    var flag2 = true;
    var i;
    var j;
    for (i in questionBank) {var x="question"+i
    var x1="question1"+i
      if (questionBank[i].questionValue.trim() === "") {
        flag = false;
        
        document.getElementById(x).innerHTML="please fill out !"
        document.getElementById(x).style.color = "#ff0000";
        document.getElementById(x1).style.border = "thin solid #ff0000";
      }
      else{
        document.getElementById(x).innerHTML=""
        document.getElementById(x1).style.border = "";


      }
      for (j in questionBank[i].optionsArray) {var y="option"+i+j
      var y1="option1"+i+j
        if (questionBank[i].optionsArray[j].trim() === "") {
          flag2 = false;
          
          document.getElementById(y).innerHTML="please fill out  !"
          document.getElementById(y).style.color = "#ff0000";
          document.getElementById(y1).style.border = "thin solid #ff0000";

        }
        else{
          document.getElementById(y).innerHTML=""
          document.getElementById(y1).style.border = "";

        }
      }
      
    }

    flag&&flag2 ? (
      setQuestionBank([
        ...questionBank,
        {
          questionId: questionBank.length + 1,
          questionValue: "",
          optionsArray: ["", "", ""],
        },
      ])
    ) : (
      <p></p>
    );
  };
const handleDelete = (index) => {
    var currentQuest = [...questionBank];
    currentQuest.splice(index, 1);
    setQuestionBank(currentQuest);
  };
const handleSubmit = (e) => {
    e.preventDefault();

    var flag = true;
    var flag2 = true;
    var i;
    var j;
    for (i in questionBank) {var x="question"+i
    var x1="question1"+i
      if (questionBank[i].questionValue.trim() === "") {
        flag = false;
        
        document.getElementById(x).innerHTML="please fill out !"
        document.getElementById(x).style.color = "#ff0000";
        document.getElementById(x1).style.border = "thin solid #ff0000";
      }
      else{
        document.getElementById(x).innerHTML=""
        document.getElementById(x1).style.border = "";


      }
      for (j in questionBank[i].optionsArray) {var y="option"+i+j
      var y1="option1"+i+j
        if (questionBank[i].optionsArray[j].trim() === "") {
          flag2 = false;
          
          document.getElementById(y).innerHTML="please fill out  !"
          document.getElementById(y).style.color = "#ff0000";
          document.getElementById(y1).style.border = "thin solid #ff0000";

        }
        else{
          document.getElementById(y).innerHTML=""
          document.getElementById(y1).style.border = "";

        }
      }
      
    }flag && flag2 ? setCount(count + 1) : <p></p>;
  };
  const handleQuestionChange=(e,index)=>{
    var x="question"+index
    var x1="question1"+index
    document.getElementById(x).innerHTML=""
        document.getElementById(x).style.color = "";
        document.getElementById(x1).style.border = "thin solid green";
    setQuestionBank(
      [...questionBank],
      [(questionBank[index].questionValue = e.target.value)]
    )
  }
  const handleOptionChange=(e,index,i)=>{
   var y="option"+index+i
    var y1="option1"+index+i
    document.getElementById(y).innerHTML=""
    document.getElementById(y).style.color = "";
    document.getElementById(y1).style.border = "thin solid green";
    setQuestionBank(
      [...questionBank],
      [(questionBank[index].optionsArray[i] = e.target.value)]
    )
  }
  const optionDelete=(index,i)=>{
    var currentQuest = [...questionBank];
    currentQuest[index].optionsArray.splice(i, 1);
    setQuestionBank(currentQuest);
  }
  return (
    <div className=" container border border-dark">
     <h1 className=" font-weight-bold bg-primary">
      <u>Question Bank</u>
      </h1>
      <form className="p-3 " onSubmit={(e) => handleSubmit(e)}>
        {console.log("mainstate", questionBank)}
        {questionBank.map((x, index) => (
          <div className='border border-dark p-5' key={index}>
            <label className="fontt"><b>Question no -{index + 1}</b> </label>
            <input
           id={"question1"+index}
              className="p-2 input2"
              type="text"
              placeholder="Enter Your Question"
              value={questionBank[index].questionValue}
              onChange={(e) =>handleQuestionChange(e,index) }
              
            /><span  id={"question"+index}></span>
            
            <br />
            {x.optionsArray.map((res, i) => (
              <div key={i}>
                <label><b>Option {i + 1}: </b></label>
               
               <input
                id={"option1"+index+i}
                  className="p-2 input1"
                  type="text"
                  placeholder="Enter Your Option"
                  value={questionBank[index].optionsArray[i]}
                  onChange={(e) =>handleOptionChange(e,index,i)
                    
                  }
                  
                />{questionBank[index].optionsArray.length >3?<button type='button'  className="btn1"
                onClick={()=>optionDelete(index,i)}><img src="bin.png" alt="bin" width='30px'/></button>:<span></span>}
                <br/>
               <span id={"option"+index+i}></span> 
                <br />
              </div>
            ))}
            <button
            type='button'
              className="btn btn-sm btn-secondary text-light m-2"
              onClick={() => handleOption(index)}
            >
              Add more option
            </button>
            <button
              type="button"
              className="btn btn-sm btn-secondary text-light m-2"
              disabled={questionBank.length == 1}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
        <button
        type='button'
          className="btn btn-lg btn-danger m-2"
          onClick={() => handleQuestion()}
        >
          add more question
        </button>
        <br />
        <button type="submit" className="btn btn-lg btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
