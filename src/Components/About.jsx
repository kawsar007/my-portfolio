import React, { useState } from "react";
// import kawser2 from "./img/kawser2.jpg";
import kilil2 from "./img/kilil2.jpg";


function About() {
  const [header] = useState({
    subHeading: "ABOUT ME",
    text:
      "The href attribute requires a valid value to be accessible. Provide a valid",
  });

  const [state] = useState([
    { id: 1, title: "Name:", text: "Kawsar Mai" },
    { id: 1, title: "Email:", text: "imkawsar007@gmail.com" },
    { id: 1, title: "Phone", text: "01638-600627" },
    { id: 1, title: "LinkedIn", text: "kawsar007" },
  ]);

  return (
    <div className="About" id="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          {/* <p className="mainContent">{header.text}</p> */}
          <div className="commonBorder"></div>
        </div>
        <div className="row alignCenter">
          <div className="col-6">
            <div className="about_img">
              {/* <img src="/images/jon.jpg" alt="Kawsar" /> */}
              <img src={kilil2} alt="Kawsar" />
            </div>
          </div>
          <div className="col-6">
            <div className="about_info">
              <h1>Hi There</h1>
              <div className="about_info-p1">
                Hello! I’m Kawsar Mia, a passionate enthusiastic, hardworking
                and dedicated learner & web engineer. I develop web design and
                web application.Self-motivated IT professional with deep
                knowledge and proficiency in JavaScript, HTML, CSS, and mobile
                responsive website development.My core skill is based on
                Javascript and I love to do most of the things using Javascript.
              </div>
              {/* <div className="about_info-p2">
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div> */}
              <div className="info_contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
