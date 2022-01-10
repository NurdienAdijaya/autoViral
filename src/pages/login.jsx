/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../assets/styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import apple from "../assets/images/AppleAuth.png";
import facebook from "../assets/images/FacebookAuth.png";
import google from "../assets/images/GoogleAuth.png";
import Logo from "../components/logo";

const Login = () => {
  const [login, setLogin] = useState(true);

  const handleSignUp = () => setLogin(false);
  const handleLogin = () => setLogin(true);

  const submit = () => {
    localStorage.setItem("token", "This Is A Token");
    window.location.reload();
  };

  return (
    <div className="login_body">
      <div className="login">
        <div className="logo_space">
          <Logo />
        </div>
        {login ? (
          <>
            <div className="form_space">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="form_radius"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="form_radius"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </div>
            <p className="bold mb-5">Forgot Password</p>
            <Button
              onClick={submit}
              className="login_button form_radius mb-3"
              type="submit"
            >
              Submit
            </Button>
            <p>
              Didn’t have any account?{" "}
              <a className="link" onClick={handleSignUp}>
                Sign Up here
              </a>
            </p>
          </>
        ) : (
          <>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="form_radius"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="form_radius"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </div>
            <Button
              onClick={submit}
              className="login_button form_radius mb-3"
              type="submit"
            >
              Submit
            </Button>
            <div className="my-4">
              <img className="mx-2" src={apple} alt="apple" />
              <img className="mx-2" src={facebook} alt="facebook" />
              <img className="mx-2" src={google} alt="google" />
            </div>
            <p>
              If you have an account?{" "}
              <a className="link" onClick={handleLogin}>
                Sign In here
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
