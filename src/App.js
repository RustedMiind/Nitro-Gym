import logo from "./images/Logo-white.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./ResponsiveMobile.css";
import "./ResponsiveScreen.css";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Branches from "./components/Branches";
import Footer from "./components/Footer";
import React, { useState } from "react";
import BranchPage from "./components/Branch";
import Contact from "./components/Contact";
function App() {
  const [data, setData] = useState("helwanMen");
  const [branchType, setBranchType] = useState("men");
  function handleBranchType(arg) {
    setBranchType(arg);
  }

  function handleBranch(branchName) {
    setData(branchName);
    console.log("temp : ", data);
  }
  return (
    <div id="App" className={`App ${branchType === "women" ? "women" : ""}`}>
      <Navbar logo={logo} handleBranch={handleBranch} />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Home />
              <About />
              <Branches handleBranch={handleBranch} />
            </React.Fragment>
          }
        ></Route>
        <Route
          path="/branches"
          element={
            <BranchPage
              branchName={data}
              handleBranchType={handleBranchType}
              handleBranch={handleBranch}
            />
          }
        />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
