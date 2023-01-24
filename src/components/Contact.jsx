import React, { Component, useEffect, useState } from "react";
import bg from "../images/deadlift-bg.avif";

// Checking each input elemnt if it have the correct input or not

const checkInput = (type, inputValue) => {
  let errorMsg = "";
  switch (type) {
    case "E-Mail":
      if (
        !(
          inputValue.indexOf("@") >= 3 &&
          inputValue.indexOf("@") < inputValue.indexOf(".") &&
          inputValue[inputValue.indexOf(".") + 1] &&
          inputValue[inputValue.indexOf(".") + 2]
        )
      ) {
        errorMsg = "Please enter a correct E-mail.";
      }
      break;
    case "Mobile number":
      if (
        !(
          (inputValue.length === 11 || inputValue.length === 12) &&
          inputValue.startsWith("01")
        )
      ) {
        errorMsg = "Please enter a correct Mobile number";
      }
      break;
    default:
      break;
  }
  return errorMsg;
};

function Contact() {
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileMsg, setMobileMsg] = useState("");
  const [submit, setSubmit] = useState(true);
  useEffect(() => {
    if (!emailMsg && !mobileMsg && email.length && mobile.length) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [emailMsg, mobileMsg]);
  return (
    <div className="contact-container">
      <form action="https://formbold.com/s/oyKW9" method="POST">
        <h2>Get your free session now !!!</h2>
        <div className="input-div">
          <h4>First Name</h4>
          <input type="text" placeholder="First Name" name="first name" />
        </div>
        <div className="input-div">
          <h4>Last Name</h4>
          <input type="text" placeholder="Last Name" name="last name" />
        </div>
        <div className="input-div">
          <h4>
            Email Adress{" "}
            <span>
              {emailMsg && email.length > 0
                ? "Please enter a correct Email"
                : ""}
            </span>
          </h4>
          <input
            className={emailMsg && email.length > 0 ? "input-failed" : ""}
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailMsg(checkInput("E-Mail", e.target.value));
              console.log("working", emailMsg);
            }}
            value={email}
          />
        </div>
        <div className="input-div">
          <h4>
            Mobile Number
            <span>
              {mobileMsg && mobile.length > 2
                ? "Please enter a correct Number"
                : ""}
            </span>
          </h4>
          <input
            className={mobileMsg && mobile.length > 2 ? "input-failed" : ""}
            type="number"
            placeholder="Mobile Number"
            name="subject"
            onChange={(e) => {
              if (e.target.value.length <= 12) {
                setMobile(e.target.value);
                setMobileMsg(checkInput("Mobile number", e.target.value));
              }
              console.log("working", mobileMsg);
            }}
            value={mobile}
          />
        </div>
        <div className="input-div">
          <p>
            After Submiting Someone will call you <br />
            as soon as possible.
          </p>
        </div>
        <div className="input-div">
          <button type="submit" disabled={submit ? null : "disabled"}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
