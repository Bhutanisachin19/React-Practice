import React from 'react';

const Buttons = () => {

  var buttons = [1,2,3,4,5,6,7,8,9,10];


  const onClickHandler = (button) =>{
    var e = button.target.id;
    console.log(e);
}
    
    
    var buttonList = buttons.map(button => <div key={buttons.indexOf(button)}>
        <button id={buttons.indexOf(button) + 1}>Button {buttons.indexOf(button) +1 } </button>        
    </div>)


    return(
            <div onClick={onClickHandler}>
            {buttonList}
            </div>
    )
}

export default Buttons;