import React from "react";
import { connect } from "react-redux";
import { buyIceCream, buyCake } from "../Redux";

function Itemcontainer(props) {
  return (
    <div>
      <h2>Item : {props.item} </h2>
      <button onClick={props.buyItem}> Buy item </button>
    </div>
  );
}

//also has access to the current props passed to the component
const mapStateToProps = (state, ownProps) => {
  const itemsState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCream;

  return {
    item: itemsState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itemcontainer);
