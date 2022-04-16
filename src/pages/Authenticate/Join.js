import React from "react";

import './Authenticate.css'

function Join() {
  return (
    <>
      <div className="mainForm gutters">
        <h2 className="mainForm__TitleText--h2">Register</h2>
        <h1 className="mainForm__TitleText--h1">Create Your Account</h1>
        <div className="mainForm__Content">
          <form action="" id="registerForm" method="post">
            <div id="registerDetails">
              <div className="mainForm__inputLabel">*Name</div>
              <input
                tabIndex="1"
                id="customerName"
                type="text"
                className="mainForm__inputField"
                name="Name"
                value=""
                maxLength="100"
                placeholder="John Doe"
              />
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Email
              </div>
              <input
                tabIndex="2"
                id="emailAddress"
                type="text"
                className="mainForm__inputField"
                name="Email"
                value=""
                maxLength="100"
                placeholder="johndoe@example.com"
              />
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Re-enter Email
              </div>
              <input
                tabIndex="3"
                id="emailAddressCopy"
                type="text"
                className="mainForm__inputField"
                name="EmailCopy"
                value=""
                maxLength="100"
                placeholder="johndoe@example.com"
              />
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Telephone
              </div>
              <input
                tabIndex="4"
                id="customerTelephone"
                className="mainForm__inputField"
                type="text"
                name="Telephone"
                value=""
                maxLength="15"
                placeholder="01234567890"
              />
              <div className="mainForm__inputFieldSmall">
                If you provide a mobile number we'll let you know by SMS if
                there are any issues with your order.
              </div>
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Password
              </div>
              <input
                tabIndex="5"
                id="customerPassword"
                className="mainForm__inputField"
                type="password"
                name="Password"
                value=""
                maxLength="25"
              />
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Re-enter new Password
              </div>
              <input
                tabIndex="6"
                id="customerPasswordCopy"
                className="mainForm__inputField"
                type="password"
                name="PasswordCopy"
                value=""
                maxLength="25"
              />
              <button
                tabIndex="7"
                id="registerButton"
                type="submit"
                className="mainForm__Button mainForm__Button--marginTop"
                onClick="register(); return false"
              >
                <span className="rotateClockwise">Create account</span>
              </button>
              <div className="mainForm__bottomSection">
                <h3 className="mainForm__bottomSection--h3">
                  Already have an account?
                </h3>
                <button
                  tabIndex="9"
                  id="signInButton"
                  className="mainForm__Button"
                  onClick="goToSignIn(); return false"
                >
                  <span className="rotateClockwise">Sign In</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Join;
