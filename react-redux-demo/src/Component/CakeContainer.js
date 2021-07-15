import React, { useEffect } from "react";
import { buyCake } from "../Redux"; //action creator which is being passed in dispatch
import { connect } from "react-redux";

function CakeComponent(props) {
  useEffect(() => {
    console.log("Component Rendered");
  });

  return (
    <div>
      <h2>Number of cakes : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

//to connect above 2 functions with our component we use connect HOC

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
