import React from "react";
import Input from "./Input";
import "./styles.css";

const Auth = () => {
  const isSignup = true;

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div className="main">
      <div className="paper">
        <div className="avatar">
          {/* <img width="50px" src='https://pic.onlinewebfonts.com/svg/img_173956.png' alt='' /> */}
        </div>
        <div className="auth_typography">
          {isSignup ? "Sign up" : "Sign in"}
        </div>
        <form
          action=""
          autoComplete="off"
          noValidate
          className="form"
        >
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
              type="password"
            />
            {isSignup && (
              <Input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                label="confirm password"
                handleChange={handleChange}
              ></Input>
            )}
          </div>
          <button type="submit" className="btn submitbtn">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
