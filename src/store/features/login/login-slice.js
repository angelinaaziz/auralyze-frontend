import { createSlice} from '@reduxjs/toolkit';



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
    }
  },
});

// Export each reducers function defined in createSlice
export const { updateLoginState,setUserID } = loginSlice.actions;


// Export default the slice reducer
export default loginSlice.reducer;
