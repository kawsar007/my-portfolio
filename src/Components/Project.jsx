import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import covid from "./covid.jpg";
import gadget from "./gadget.jpg";
import pizza from "./pizza.jpg";

function Project() {
  const [state] = useState([
    {
      id: 1,
      image: gadget,
      icon: <FaGithub />,
      heading: "Gadget E-Commerce",
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!",
      projectLink: "https://5fd745c8358b5a0bc65f5f62--zealous-visvesvaraya-11d74f.netlify.app/",
      githubLink: "https://github.com/kawsar007/COVID_19_Tracker"
    },
    {
      id: 2,
      image: pizza,
      icon: <FaGithub />,
      heading: "Pizza Hut",
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!",
    },
    {
      id: 3,
      image: covid,
      icon: <FaGithub />,
      heading: "Netflix Clone",
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!",
    },
    {
      id: 1,
      image: gadget,
      icon: <FaGithub />,
      heading: "Gadget E-Commerce",
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!"
    },
    {
      id: 2,
      image: pizza,
      icon: <FaGithub />,
      heading: "Pizza Hut",
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!",
    },
    {
      id: 3,
      image: covid,
      icon: <FaGithub />,
      heading: "Netflix Clone",
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!",
    },
  ]);

  return (
    <div className="project">
      <div className="container">
        <div className="project_header">
          <h3 className="mainHeader" style={{ textAlign: "center" }}>
            My Project
          </h3>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((info) => (
            <div className="col-4">
              <div className="project_box">
                <div className="image"><img style={{ width: "100%", height: "100%"}} src={info.image} alt="logo"/></div>
                <div className="projectContent">
                <div className="project_box-header">{info.heading}</div>
                <p className="project_box-p"> {info.text} </p>
                <div className="iconBtn">
                    <a href={info.projectLink} className="liveDemo">Live Demo</a>
                    <a href={info.githubLink} className="iconGit">{info.icon}</a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
