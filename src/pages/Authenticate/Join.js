import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Authenticate.css";

function Join() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const telRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef.current.value === "" ||
      telRef.current.value === ""
    ) {
      return alert("One or more fields are empty");
    }
    axios.defaults.withCredentials = true;
    axios({
      method: "POST",
      url: "http://localhost:3100/api/v1/join",
      data: {
        Name: nameRef.current.value,
        Email: emailRef.current.value,
        Password: passwordRef.current.value,
        Phone: telRef.current.value,
      },
      withCredentials: true,
    })
      .then((response) => {
        alert(response.data.message);
        // return useNavigate("/sign-in");
        window.location.href = "/";
        // console.log(response.headers);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

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
                required
                tabIndex="1"
                id="customerName"
                type="text"
                className="mainForm__inputField"
                name="Name"
                defaultValue=""
                maxLength="100"
                placeHolder="John Doe"
                ref={nameRef}
              />
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Email
              </div>
              <input
                required
                tabIndex="2"
                id="emailAddress"
                type="text"
                className="mainForm__inputField"
                name="Email"
                defaultValue=""
                maxLength="100"
                placeholder="johndoe@example.com"
                ref={emailRef}
              />
              {/* <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Re-enter Email
              </div>
              <input
                tabIndex="3"
                id="emailAddressCopy"
                type="text"
                className="mainForm__inputField"
                name="EmailCopy"
                defaultValue=""
                maxLength="100"
                placeholder="johndoe@example.com"
              /> */}
              <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Telephone
              </div>
              <input
                required
                tabIndex="4"
                id="customerTelephone"
                className="mainForm__inputField"
                type="text"
                name="Telephone"
                defaultValue=""
                maxLength="15"
                placeholder="01234567890"
                ref={telRef}
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
                defaultValue=""
                maxLength="25"
                placeholder="********"
                ref={passwordRef}
              />
              {/* <div className="mainForm__inputLabel mainForm__inputLabel--topMargin">
                *Re-enter new Password
              </div>
              <input
              required
                tabIndex="6"
                id="customerPasswordCopy"
                className="mainForm__inputField"
                type="password"
                name="PasswordCopy"
                defaultValue=""
                maxLength="25"
              /> */}
              <button
                tabIndex="7"
                id="registerButton"
                type="submit"
                className="mainForm__Button mainForm__Button--marginTop"
                onClick={onSubmit}
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
                  onClick={useNavigate("/sign-in")}
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
