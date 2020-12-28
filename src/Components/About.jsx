import React, { useState } from "react";

function About() {
  const [header] = useState({
    subHeading: "ABOUT ME",
    text:
      "The href attribute requires a valid value to be accessible. Provide a valid",
  });

  const [state] = useState([
      {id: 1, title: "Name:", text: "Kawsar Mai"},
      {id: 1, title: "Email:", text: "imkawsar007@gmail.com"},
      {id: 1, title: "Phone", text: "01638-600627"},
      {id: 1, title: "LinkedIn", text: "kawsar007"},
  ])

  return (
    <div className="About">
      <div className="container">
        <div className="common">
          <h1 className="mainHeading">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row alignCenter">
            <div className="col-6">
                <div className="about_img">
                <img src="/images/jon.jpg" alt="Kawsar"/>
                </div>
            </div>
            <div className="col-6">
                <div className="about_info">
                    <h1>Hi There</h1>
                    <div className="about_info-p1">
                    In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis,
                    urna est ultricies eros, ac porta sem turpis
                    </div>
                    <div className="about_info-p2">
                    nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                    </div>
                    <div className="info_contacts">
                        <div className="row">
                            {state.map(info => (
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
