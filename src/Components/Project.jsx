import React, { useState } from "react";
import { ProjectData } from "../AppInfo";


function Project() {
  const [state] = useState(ProjectData);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="project" id="project">
      <div className="container">
        <div className="project_header">
          <h3 className="mainHeader" style={{ textAlign: "center" }}>
            My Project
          </h3>
          <div className="commonBorder"></div>
        </div>

     {/* Tab Section */}
        <div className="tab_container">
        {state.map((tab, index) => (
          <span className={activeTab === index ? 'active-tab' : ''} key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </span>
        ))}
      </div>

      <div className="row">
        {state[activeTab].content.map((info, index) => (
             <div className="col-4">
              <div className="project_box">
                <div className="image">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={info.image}
                    alt="logo"
                  />
                </div>
                <div className="projectContent">
                  <div className="project_box-header">{info.heading}</div>
                  <p className="project_box-p"> {info.text} </p>
                  <p>{info.technology}</p>
                  
                </div>
                <div className="iconBtn">
                    <a href={info.projectLink} className="liveDemo">
                      Live Demo
                    </a>
                    <a href={info.githubLink} className="iconGit">
                      {info.icon}
                    </a>
                  </div>
              </div>
            {/* {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))} */}
            
          </div>
        ))}
      </div>

        {/* <div className="row">
          {state.map((info) => (
            <div className="col-4">
              <div className="project_box">
                <div className="image">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={info.image}
                    alt="logo"
                  />
                </div>
                <div className="projectContent">
                  <div className="project_box-header">{info.heading}</div>
                  <p className="project_box-p"> {info.text} </p>
                  <p>{info.technology}</p>
                  <div className="iconBtn">
                    <a href={info.projectLink} className="liveDemo">
                      Live Demo
                    </a>
                    <a href={info.githubLink} className="iconGit">
                      {info.icon}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Project;
