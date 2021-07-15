//using node to run file to we use its require syntax

const redux = require("redux");
const createStore = redux.createStore;

//string contant to define the type of action
//making a seperate varibale to avoid spelling mistake while reusing the type
const BUY_CAKE = "BUY_CAKE";

//action creator -> A function that returns an action
/* 
optional -> eg if there are some changes in action object we have to change only at once places 
but if we pass complete object in dispatch we have to change the object everywhere in case of some change
*/

function buyCake() {
  //defing an action
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//state -> should be a single object
const initialState = {
  numOfCakes: 10,
};

//reducer -> (prevState , action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //we take the prev object and perfom operation and return a NEW object
    case BUY_CAKE:
      return {
        //create a copy of state object and then update only what we need to change
        ...state,
        numOfCakes: state.numOfCakes - 3,
      };

    default:
      return state;
  }
};

const store = createStore(reducer); //redux store holding the application state

//getState to access state
console.log("Initial state ", store.getState());

//subscribing -> anytime the store updates this method will be called
const unsubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

//unsubscribe will have the returned function from the subscribe()

//dispatch , to update the state
store.dispatch(buyCake());
store.dispatch({ type: BUY_CAKE }); //can also pass object like this insted of creating function
store.dispatch(buyCake());

//unsubscribing from the store
unsubscribe();
