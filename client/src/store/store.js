import { configureStore } from '@reduxjs/toolkit';

// Import the previously created search slice
import loginSlice from './features/login/login-slice';

// Create the store, adding the search slice to it
export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
export default store;
// Export some helper types used to improve type-checking
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;









//
// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import authReducer from './reducers/auth'
// import userReducer from "./reducers/users"
//
// const initialState = {}
//
// const rootReducer = combineReducers({
//   auth:authReducer,
//   user:userReducer
// });
//
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//   )
// );
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>
// export default store;
