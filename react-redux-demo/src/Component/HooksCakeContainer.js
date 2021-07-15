import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../Redux";

function HooksCakeContainer() {
  //similar to mapProppsToState
  //gets the gloabal state as argument
  const numOfCakes = useSelector(state => state.cake.numOfCakes);

  //returns a refernece to dispatch function from the redux store
  const dispatch = useDispatch();

  return (
    <div>
      <p> Hooks Cake Container </p>
      <h2>Number of cakes : {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
