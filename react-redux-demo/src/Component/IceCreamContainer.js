import React, { useEffect } from "react";
import { buyIceCream } from "../Redux";
import { connect } from "react-redux";

function IceCreamComponent(props) {
  useEffect(() => {
    console.log("IceCReam Component Rendered");
  });

  return (
    <div>
      <h2>Number of Icecreams : {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

//can be any name
//gets redux state as parameter and returns an object
const mapStateToProps = state => {
  return {
    numOfIceCream: state.icecream.numOfIceCream,
  };
};

//can be any name
//gets redux dispatch() as parameter and returns an object
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

//to connect above 2 functions with our component we use connect HOC

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
