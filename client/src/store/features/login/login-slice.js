import { createSlice} from '@reduxjs/toolkit';
const isEmpty = require("is-empty");

// Define an initial state
const initialState = {
  isAuthenticated: false,
};

// Create a slice containing the configuration of the state
// and the reducers functions
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateLoginState(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUserID(state,action){
      state.userID=action.payload.id
    },
    setCurrentUser(state,action){
      state.isAuthenticated= !isEmpty(action.payload)
      state.user= action.payload
    },
  },
});

// Export each reducers function defined in createSlice
export const { updateLoginState,setUserID,setCurrentUser } = loginSlice.actions;


// Export default the slice reducer
export default loginSlice.reducer;
