import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import covid1 from "./img/covid1.jpg";
import landing1 from "./img/landing1.jpg";
import commerce1  from "./img/commerce1.jpg";
import netflix1 from "./img/netflix1.jpg";
import blog2 from "./img/blog2.jpg";
import github1 from "./img/github1.jpg";

function Project() {
  const [state] = useState([
    {
      id: 1,
      image: landing1,
      icon: <FaGithub />,
      heading: "Startup Landing Project",
      text:
        "This is amazing fully mobile responsive startup company landing project using Next Js.", 
      projectLink: "https://startup-landing-lovat.vercel.app/",
      githubLink: "https://github.com/kawsar007/Next-Js-Landing-Page"
    },
    {
      id: 2,
      image: github1,
      icon: <FaGithub />,
      heading: "Search Github User",
      text:
        "It's amazing app Search Github User.Using React, Hooks, Context Api,  material-ui and Fusion Charts Api",
        projectLink:
        "https://react-github-user-search-app.netlify.app",
      githubLink: "https://github.com/kawsar007/Search-Github-User",
    }
    ,
    {
      id: 3,
      image: netflix1,
      icon: <FaGithub />,
      heading: "Netflix Clone",
      text:
        "This is awesome Netflix Clone App. Using React Js, React Hooks, Flexbox and Firebase Hosting.",
      projectLink:
        "https://netflix-clone-cfa62.web.app/?fbclid=IwAR1d217QZ-Qk5coXi1qo7-WMOCwpQfsGMsy9dXTnh8Xeicup88KNL_97A7c",
      githubLink: "https://github.com/kawsar007/netflix-clone",
    },
    {
      id: 4,
      image: commerce1,
      icon: <FaGithub />,
      heading: "React E-Commerce",
      text:
        "This is fully functional eCommerce application using React Js commerce.js and Material UI", 
      projectLink: "https://commercejsstor.netlify.app/",
      githubLink: "https://github.com/kawsar007/React-E-Commerce"
    },
    {
      id: 5,
      image: blog2,
      icon: <FaGithub />,
      heading: "Blog app",
      text:
        "Blog website that allows user to log in using Google and start searching for & reading intersting blog posts.",
        projectLink:
        "https://react-redux-googlelogin-blogapp.netlify.app/",
      githubLink: "https://github.com/kawsar007/blog-app",
    },
    {
      id: 6,
      image: covid1,
      icon: <FaGithub />,
      heading: "Covid 19 Tracker",
      text:
        "Covid 19 Tracker using React Js and Firebase. Covid 19 Affect update information",
        projectLink:
        "https://5fd745c8358b5a0bc65f5f62--zealous-visvesvaraya-11d74f.netlify.app/",
      githubLink: "https://github.com/kawsar007/COVID_19_Tracker",
    },
  ]);

  return (
    <div className="project" id="project">
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
