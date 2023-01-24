import React, { Component } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Scrollbar, FreeMode } from "swiper";
import "swiper/css";
import BranchCard from "./BranchCard";
const branches = [
  {
    image: "images/15may-branch3.jpg",
    name: "15-May Branch",
    fileName: "15mayMen",
    ladies: false,
    about:
      "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eos consequunturdolorum, ducimus natus quaerat dolor. Nihil animi tempore dolore.",
  },
  {
    image: "images/15may-ladies-branch.jpg",
    name: "15-May Branch",
    fileName: "15mayLadies",
    ladies: true,
    about:
      "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eos consequunturdolorum, ducimus natus quaerat dolor. Nihil animi tempore dolore.",
  },
  {
    image: "images/helwan-branch3.jpg",
    name: "Helwan",
    fileName: "helwanMen",
    ladies: false,
    about:
      "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eos consequunturdolorum, ducimus natus quaerat dolor. Nihil animi tempore dolore.",
  },
  {
    image: "images/helwan-ladies-branch.jpg",
    name: "Helwan",
    fileName: "helwanLadies",
    ladies: true,
    about:
      "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eos consequunturdolorum, ducimus natus quaerat dolor. Nihil animi tempore dolore.",
  },
];
function Branches(props) {
  return (
    <div className="branches" id="branches">
      {branches.map((branch) => {
        return (
          <BranchCard
            fileName={branch.fileName}
            handleBranch={props.handleBranch}
            branchImage={branch.image}
            ladies={branch.ladies}
            branchName={branch.name}
            branchType={branch.ladies ? "Ladies" : "Men"}
            branchAbout={branch.about}
          />
        );
      })}
    </div>
  );
}

export default Branches;
