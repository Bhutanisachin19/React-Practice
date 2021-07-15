//redux only
//run using node

const redux = require("redux");
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

const axios = require("axios");

const intialSate = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creaters

const fetchUser_Request = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

//stores the list of users if the request was successful
const fetchUser_Success = users => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

//stores error message if the request failed
const fetchUser_Failure = error => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

//reducer
const reducer = (state = intialSate, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

//with thunk this action creator can also return a function and allows us to make api calls
//can also dispatch actions because it recieves an dispatch method as its argument
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUser_Request());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        //response.date is the array of users
        const users = response.data.map(user => user.id);
        dispatch(fetchUser_Success(users));
      })
      .catch(error => {
        //error.message  gives the discription of error
        dispatch(fetchUser_Failure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
