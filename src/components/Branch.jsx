import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import ImagesSlider from "./ImagesSlider";
function BranchPage(props) {
  const [branchData, setBranchData] = useState({});
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  }, [props]);
  useEffect(() => {
    const getData = axios.get(`/data/${props.branchName}.json`);
    getData
      .then((response) => {
        setBranchData(response.data);
        props.handleBranchType(response.data.female ? "women" : "men");
        document.title = `Nitro Gym | ${response.data.name}`;
      })
      .catch((error) => setBranchData(error.data));
  }, [props]);
  console.log("Parent Component", branchData);
  return branchData ? (
    <div className="branch-page">
      {/* <ul>
        <li>
          <button onClick={() => props.handleBranch("helwanLadies")}>
            Helwan-Ladies
          </button>
        </li>
        <li>
          <button onClick={() => props.handleBranch("helwanMen")}>
            Helwan-Men
          </button>
        </li>
        <li>
          <button onClick={() => props.handleBranch("15mayLadies")}>
            15 May-Ladies
          </button>
        </li>
        <li>
          <button onClick={() => props.handleBranch("15mayMen")}>
            15 May-Men
          </button>
        </li>
      </ul> */}

      <ImagesSlider
        images={branchData.photos}
        name={branchData.name}
        female={branchData.female}
      />
      <div className="branch-about">
        <h2>ABOUT BRANCH</h2>
        <p>{branchData.about}</p>
      </div>
      <h2 className="our-team">OUR TEAM</h2>
      <div className="branch-coaches">
        {branchData.coaches
          ? branchData.coaches.map((coach) => (
              <div key={coach.id} className="person-card">
                <div className="card-info">
                  <div className="image-container">
                    <img src={coach.image} alt="coach" />
                  </div>
                  <div className="person-about">
                    <h3>{coach.name}</h3>
                    <h5>{coach.role ? coach.role.toUpperCase() : null}</h5>
                    <p>{coach.about}</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  ) : null;
}

export default BranchPage;
