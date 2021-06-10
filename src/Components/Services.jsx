import React, {useState} from "react";
import { FaGithub, FaMobileAlt, FaBug } from "react-icons/fa";

function Services() {
    const [header] = useState({
        mainHeader: "SERVICES",
        subHeading: "My Services",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum pariatur blanditiis laboriosam ipsam labore corrupti culpa,"
    })

    const [state] = useState([
        {
            icon: <FaGithub/>,
            heading: "Web Development",
            text: "I'll develop your website frontend using HTML & CSS, Bootstrap, React Js, Next js, Redux js / Toolkit, Material Ui, Formik form, Styled Components etc and backend using MongoDB, NodeJs, Firebase, git etc. Unlimited times free revisions until delivering times free rivisions until delivering to you."
        },
        {
            icon: <FaMobileAlt/>,
            heading: "Responsive Design",
            text: "Responsive Web Design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists or a mix of flexible grids and layouts, media queries."
        },
        {
            icon: <FaBug/>,
            heading: "Bug Fixing",
            text: "Website problem & bugs it's a common problem for every website. Don't worry, It is easy for me to solve the problem and bugs of the website.I can any type of problems & bugs for any website."
        }
    ])

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="services_header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            {/* <p className="mainContent">
               {header.text}
            </p> */}
            <div className="commonBorder"></div>
          </div>

          <div className="row">
              {state.map((info) => (
                  <div className="col-4">
                  <div className="services_box">
                    <div className="commonIcons">{info.icon}</div>
                    <div className="services_box-header">{info.heading}</div>
                    <div className="services_box-p"> {info.text} </div>
                  </div>
                  </div>
              ))}
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
