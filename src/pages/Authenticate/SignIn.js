import React from "react";

import './Authenticate.css'

function Authenticate() {
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
              value=""
              maxLength="100"
              placeholder="johndoe@example.com"
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
              value=""
              maxLength="25"
              placeholder="*************"
            />
            <a className="mainForm__link" href="/myaccount/forgotten-password">
              &gt; Forgotten your password?
            </a>
            <button
              tabIndex="3"
              id="signInButton"
              className="mainForm__Button"
              onClick="Authenticate(); return false"
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
            <input type="hidden" name="referrer" value="" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Authenticate;
