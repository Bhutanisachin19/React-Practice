import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../Redux";

function HooksIceCreamContainer() {
  //similar to mapProppsToState
  //gets the gloabal state as argument
  const numOfIceCream = useSelector(state => state.icecream.numOfIceCream);

  //returns a refernece to dispatch function from the redux store
  const dispatch = useDispatch();

  return (
    <div>
      <p> Hooks Ice Cream Container </p>
      <h2>Number of ice cream : {numOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
