import React, { useState, useCallback, useRef, Fragment,useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { TextField, Button, Checkbox, Typography, FormControlLabel } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";
import {loginUser} from "../../../store/actions/creators/auth"
import {useSelector, useDispatch } from "react-redux";
import axios from "axios";
import setAuthToken from "../../../store/actions/utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {updateLoginState,setUserID} from "../../../store/features/login/login-slice"

const isEmpty = require("is-empty");
const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },

});

function LoginDialog(props) {

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.isAuthenticated)
  console.log(loginStatus)
  const {
    setStatus,
    classes,
    onClose,
    history,
    openChangePasswordDialog,
    openRegisterDialog,
    status,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [emailNotFound, setEmailNotFound]=useState(false)
  const [passwordIncorrect, setPasswordIncorrect]=useState(false)

  useEffect(() => {
    if (loginStatus) {
        history.push("/c/question");
    }
    }) 
  
  const login = useCallback(() => {
    console.log('starting loggin proccess')
    setIsLoading(true);
    setStatus(null);

    let loginData={email:loginEmail.current.value,
                  password:loginPassword.current.value}
      axios.post("/api/users/login", loginData)
          .then((res ) => {
            console.log('response from login api..')
            console.log(res)
            console.log(res.data)
            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            if (!isEmpty(decoded)) {
              console.log(decoded)
              dispatch(updateLoginState(true));
              dispatch(setUserID(decoded))
            }

          })
          .catch(err =>
            { 
              console.log(err)
              if(err.response.data.emailnotfound){
                console.log('email not found')
                setEmailNotFound(true)
              }
              if(err.response.data.passwordincorrect){
                console.log('password incorrect')
                setPasswordIncorrect(true)
              }
            })
      }, [setIsLoading, loginEmail,history, loginPassword, setStatus,dispatch]);

  return (
    <Fragment>
      
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            {loginStatus?<><p>User is logged in</p></>:<><p>User Not logged in</p></>}
            <TextField
              variant="outlined"
              margin="normal"
              error={emailNotFound}
              required
              fullWidth
              label="Email Address"
              inputRef={loginEmail}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (emailNotFound) {
                  setStatus(null);
                }
              }}
              helperText={
                emailNotFound &&
                "This email address isn't associated with an account."
              }
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={passwordIncorrect}
              label="Password"
              inputRef={loginPassword}
              autoComplete="off"
              onChange={() => {
                if (passwordIncorrect) {
                  setStatus(null);
                }
              }}
              helperText={
                passwordIncorrect ? (
                  <span>
                    Incorrect password. Try again, or click on{" "}
                    <b>&quot;Forgot Password?&quot;</b> to reset it.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
              onVisibilityChange={setIsPasswordVisible}
              isVisible={isPasswordVisible}
            />
            <FormControlLabel
              className={classes.formControlLabel}
              control={<Checkbox color="primary" />}
              label={<Typography variant="body1">Remember me</Typography>}
            />
            {status === "verificationEmailSend" ? (
              <HighlightedInformation>
                We have send instructions on how to reset your password to your
                email address
              </HighlightedInformation>
            ) : (
              <HighlightedInformation>
                Email is: <b>test@web.com</b>
                <br />
                Password is: <b>HaRzwc</b>
              </HighlightedInformation>
            )}
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={isLoading}
              size="large"
            >
              Login
              {isLoading && <ButtonCircularProgress />}
              
            </Button>
            <Typography
             align="center"
             color="primary"
             className={classNames(
              classes.forgotPassword,
              isLoading ? classes.disabledText : null
            )}
             onClick={openRegisterDialog}
             role="button"
             >
             Don't have an account? Register
            </Typography>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                isLoading ? classes.disabledText : null
              )}
              color="primary"
              onClick={isLoading ? null : openChangePasswordDialog}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                // For screenreaders listen to space and enter events
                if (
                  (!isLoading && event.keyCode === 13) ||
                  event.keyCode === 32
                ) {
                  openChangePasswordDialog();
                }
              }}
            >
              Forgot Password?
            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
