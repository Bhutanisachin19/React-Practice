//multiple reducers

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//using a middleware called logger (used to log info related to redux )
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";

const initialCake = {
  numOfCakes: 10,
};

//action creator

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const BUY_ICECREAM = "BUY_ICECREAM";

const initialIceCream = {
  numOfIceCream: 20,
};

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

//combining multiple reducers
const rootreducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//store

const store = createStore(rootreducer, applyMiddleware(logger)); //can take multiple middlewares

console.log("Initial values are ", store.getState());

//subscribe will
const unsubscribe = store.subscribe(
  () => {}
  //console.log("Updated state ", store.getState())
);

console.log("CAke");
store.dispatch(buyCake());

console.log("Ice Cream");
store.dispatch(buyIceCream());

console.log("CAke");
store.dispatch(buyCake());

console.log("Ice Cream");
store.dispatch(buyIceCream());

console.log("CAke");
store.dispatch(buyCake());

console.log("Ice cream");
store.dispatch(buyIceCream());
