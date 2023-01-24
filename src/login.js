import React, { Component, useEffect, useRef, useState } from "react";
import App from "./App";
function Login(props) {
  const [password, setPassword] = useState("");
  const inputBox = useRef();
  useEffect(() => {
    inputBox.current.focus();
  }, []);
  return password !== "nitrogym2023" ? (
    <>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        ref={inputBox}
        type="password"
        value={password}
        placeholder="Password"
      />
    </>
  ) : (
    <App />
  );
}

export default Login;
