import axios from "axios";

import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userType";

export const fetchUsersRequet = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

//remove all exports

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

//thunk provides action creater the abilty to retun a function
//here we are fetching the API
export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequet);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};
