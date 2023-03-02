import setAuthToken from "../utils/setAuthToken";
import {updateLoginState} from "../../../store/features/login/login-slice"
import {USER_LOADING,SET_CURRENT_USER} from '../types/auth';

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
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
