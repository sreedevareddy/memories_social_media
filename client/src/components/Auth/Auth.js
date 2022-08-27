import React, { useEffect, useState } from "react";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import {useDispatch} from 'react-redux';
import {gapi} from 'gapi-script';
import {useNavigate} from 'react-router-dom';
import {signin, signup} from '../../actions/auth';

import "./styles.css";

const clientId="64513173140-gc35ou4q3kjn8b5ikhq16sktdmj48sio.apps.googleusercontent.com";

const initialState = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  }, [])
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevPass) => !prevPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isSignup){
      dispatch(signup(formData, navigate));
    }else{
      dispatch(signin(formData, navigate))
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  };

  const onSuccess = (response, error) => {
    console.log(response);
    const result = response.profileObj;
    const token = response.tokenId;

    try {
      dispatch({type: 'AUTH', data: {result, token}});
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  };

  const onFailure = (response) => {
    console.log(response);
  }

  const switchmode = () => {
    setIsSignup((prevmode) => !prevmode);
    handleShowPassword(false);
  };

  return (
    <div className="main">
      <div className="paper">
        <div className="avatar">
          {/* <img width="50px" src='https://pic.onlinewebfonts.com/svg/img_173956.png' alt='' /> */}
        </div>
        <div className="auth_typography">
          {isSignup ? "Sign up" : "Sign in"}
        </div>
        <form onSubmit={handleSubmit} action="" autoComplete="off" className="form">
          <div className="grid_auth">
            {isSignup && (
              <>
                <Input
                  placeholder="FirstName"
                  type="text"
                  name="firstName"
                  label="firstName"
                  handleChange={handleChange}
                ></Input>
                <Input
                  placeholder="LastName"
                  type="text"
                  name="lastName"
                  label="lastName"
                  handleChange={handleChange}
                ></Input>
              </>
            )}
            <Input
              placeholder="Email"
              name="email"
              label="email_address"
              handleChange={handleChange}
              type="email"
            ></Input>
            <Input
              placeholder="Password"
              name="password"
              label="main_password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input>
            {isSignup && (
              <Input
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                label="confirm password"
                handleShowPassword={handleShowPassword}
                handleChange={handleChange}
              ></Input>
            )}
          </div>
          <button type="submit" className="btn submitbtn">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <GoogleLogin
            clientId={clientId}
            buttonText="Google Sign In"
            // render={(renderProps) => (
            //     <button
            //       className="btn google_btn"
            //       onClick={renderProps.onClick}
            //       disabled={renderProps.disabled}

            //     >
            //       Google Sign In
            //     </button>
            //   )}
            
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
          <div className="btn switchmode" onClick={switchmode}>
            {isSignup
              ? "Already have an Account? SignIn"
              : "Don't have an account? Sign Up"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
