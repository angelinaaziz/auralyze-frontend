import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {USER_LOADING} from '../types/auth';
import {updateLoginState} from "../../../store/features/login/login-slice"
const isEmpty = require("is-empty");

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  // Set current user

  dispatch(updateLoginState(false));

};
