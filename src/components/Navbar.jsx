import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [active, setActive] = useState(false);
  const closeDropdown = () => {
    console.log("Hello");
    setActive(false);
  };
  const clickNavBranch = (branchFileName) => {
    closeDropdown();
    props.handleBranch(branchFileName);
  };
  const handleDropdown = () => {
    setActive(!active);
  };
  useEffect(() => {
    window.addEventListener("scroll", closeDropdown);
  }, []);
  return (
    <nav>
      <img src={props.logo} alt="" />
      <div className="right-side">
        <Link to="/">Home</Link>
        <div className={`dropdown ${active ? "active" : null}`}>
          <button onClick={handleDropdown}>Branches</button>
          <div className="dropdown-menu">
            <Link
              to="/branches"
              onClick={() => {
                clickNavBranch("helwanMen");
              }}
            >
              Helwan Men
            </Link>
            <Link
              to="/branches"
              onClick={() => {
                clickNavBranch("helwanLadies");
              }}
            >
              Helwan Ladies
            </Link>
            <Link
              to="/branches"
              onClick={() => {
                clickNavBranch("15mayMen");
              }}
            >
              15-May Men
            </Link>
            <Link
              to="/branches"
              onClick={() => {
                clickNavBranch("15mayLadies");
              }}
            >
              15-May Ladies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
