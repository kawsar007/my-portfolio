import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import covid from "./img/covid.jpg";
import commerce from "./img/commerce.jpg";
import pizza from "./img/pizza.jpg";
import netflix from "./img/netflix.JPG";
import blog1 from "./img/blog1.jpg";
import github from "./img/github.jpg";

function Project() {
  const [state] = useState([
    {
      id: 1,
      image: commerce,
      icon: <FaGithub />,
      heading: "React E-Commerce",
      text:
        "This is fully functional eCommerce application using React Js commerce.js and Material UI", 
      projectLink: "https://commercejsstor.netlify.app/",
      githubLink: "https://github.com/kawsar007/React-E-Commerce"
    },
    {
      id: 2,
      image: github,
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
      image: netflix,
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
      image: pizza,
      icon: <FaGithub />,
      heading: "Pizza Shop",
      text:
        "This is responsive Pizza Shop Design Project using React Js and Style-components.",
        projectLink:
        "https://pizzashop-design.netlify.app/",
      githubLink: "https://github.com/kawsar007/Pizza-Shop",
    },
    {
      id: 5,
      image: blog1,
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
      image: covid,
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
