import React, { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import {Provider} from 'react-redux';
import store from './store/store';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {updateLoginState,setCurrentUser} from "./store/features/login/login-slice"
const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  console.log('user already logged in on start')
  console.log(decoded)
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(updateLoginState(true));
  // store.dispatch(setUserID(decoded))
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    // store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
function App() {
  return (
    <Provider store ={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Pace color={theme.palette.primary.light} />
            <Suspense fallback={<Fragment />}>
              <Switch>
                
                <Route path="/c">
                  <LoggedInComponent />
                </Route>
                <Route>
                  <LoggedOutComponent />
                </Route>
              </Switch>
            </Suspense>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
