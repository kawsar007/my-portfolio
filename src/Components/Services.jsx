import React, {useState} from "react";
import { FaGithub, FaCodepen, FaCamera } from "react-icons/fa";

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
            text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!"
        },
        {
            icon: <FaCodepen/>,
            heading: "Web Design",
            text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!"
        },
        {
            icon: <FaCamera/>,
            heading: "Photography",
            text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Omnis laborum aspernatur aut magnam!"
        }
    ])

  return (
    <div className="services">
      <div className="container">
        <div className="services_header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeading">{header.subHeading}</h1>
            <p className="mainContent">
               {header.text}
            </p>
            <div className="commonBorder"></div>
          </div>

          <div className="row">
              {state.map((info) => (
                  <div className="col-4">
                  <div className="services_box">
                    {/* <FaGithub className="commonIcons" /> */}
                    <div className="commonIcons">{info.icon}</div>
                    <div className="services_box-header">{info.heading}</div>
                    <p className="services_box-p"> {info.text} </p>
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