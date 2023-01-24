import React, { Component } from "react";
import { Link } from "react-router-dom";
function BranchCard(props) {
  return (
    <div className={`branch-card ${props.ladies ? " ladies" : null}`}>
      <div
        className="card-bg-container"
        style={{ backgroundImage: `url(${props.branchImage}` }}
      >
        <div className="card-info">
          <h5>{props.branchType}</h5>
          <h3>{props.branchName}</h3>
          <p>
            <div>{props.branchAbout}</div>
            <Link
              onClick={() => {
                props.handleBranch(props.fileName);
              }}
              to="branches"
            >
              Explore Branch
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BranchCard;
