import React, { useRef } from "react";
import axios from "axios";

import "./Authenticate.css";

function Authenticate() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      return alert("One or more fields are empty");
    }

    axios({
      method: "POST",
      url: "http://localhost:3100/api/v1/sign-in",
      data: {
        Email: emailRef.current.value,
        Password: passwordRef.current.value,
      },
    })
      .then((response) => {
        alert(response.data.message);
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <>
      <div className="mainForm gutters">
        <h2 className="mainForm__TitleText--h2">Existing Customers</h2>
        <h1 className="mainForm__TitleText--h1">Sign In</h1>
        <div className="mainForm__Content">
          <form action="" id="signInForm" method="post">
            <div className="mainForm__inputLabel">Email</div>
            <input
              tabIndex="1"
              id="emailAddress"
              type="text"
              name="Email"
              className="mainForm__inputField"
              defaultValue=""
              maxLength="100"
              placeholder="johndoe@example.com"
              ref={emailRef}
            />
            <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
              Password
            </div>
            <input
              tabIndex="2"
              id="customerPassword"
              className="inputPassword mainForm__inputField"
              type="password"
              name="Password"
              defaultValue=""
              maxLength="25"
              placeholder="*************"
              ref={passwordRef}
            />
            <a className="mainForm__link" href="/myaccount/forgotten-password">
              &gt; Forgotten your password?
            </a>
            <button
              tabIndex="3"
              id="signInButton"
              className="mainForm__Button"
              onClick={onSubmit}
            >
              <span className="rotateClockwise">
                Sign In<span className="universalArrow">→</span>
              </span>
            </button>
            <div className="mainForm__bottomSection">
              <h3 className="mainForm__bottomSection--h3">
                Don't have an account?
              </h3>
              <button
                tabIndex="4"
                id="registerButton"
                className="mainForm__Button"
                onClick="goToRegister(); return false"
              >
                <span className="rotateClockwise">
                  Register<span className="universalArrow">→</span>
                </span>
              </button>
            </div>
            <input type="hidden" name="referrer" defaultValue="" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Authenticate;
