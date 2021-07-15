import React, { useEffect, useState } from "react";
import { buyCake } from "../Redux"; //action creator which is being passed in dispatch
import { connect } from "react-redux";

function CakeComponent(props) {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log("Component Rendered");
  });

  return (
    <div>
      <h2>Number of cakes : {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

//can be any name
//gets redux state as parameter and returns an object
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//can be any name
//gets redux dispatch() as parameter and returns an object
const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

//to connect above 2 functions with our component we use connect HOC

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
