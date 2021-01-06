import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaPlay,
} from "react-icons/fa";
//import { AiOutlineMail } from 'react-icons/ai';

function Banner() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6 animate__animated animate__fadeInLeft">
            {" "}
            {/*col-6 start */}
            <div className="header_content">
              <div className="header_section">
                <ul className="header_ul">
                  <li>
                    <a href="https://www.facebook.com/kawser.ahamed.142"> <FaFacebookF /> </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/kawser.ahamed.142/"> <FaInstagram /> </a>
                  </li>
                  <li>
                  <a href="https://github.com/kawsar007"> <FaGithub /> </a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/kawsar-mia-661a0b193/"> <FaLinkedin /> </a>
                  </li>
                  <li>
                  <a href="https://join.skype.com/invite/fx6hp4Tet0ta"> <FaSkype /> </a>
                  </li>
                  {/* <li><AiOutlineMail/></li> */}
                </ul>
                <h1>I am Kawsar Mia</h1>
                <p>
                  {/* i,m Jonathan, professional web developer with long time
                  experience in this field​ */}
                  Frontend Web Developer
                </p>
                <div className="header_buttons">
                  <a
                    href="https://doc-0g-44-docs.googleusercontent.com/docs/securesc/kro6omikv58j0b19ghqba8ouj0l4m76i/qqnrgfo8e7htf1nadvfdb9nu70e6486h/1609957350000/05847078092016919770/05847078092016919770/14sdStmwpdXeHSQeIoKRlUI_F_tSiYHpT?e=download&authuser=0&nonce=5gclvjagjmi4s&user=05847078092016919770&hash=liui04k79kphm4l0m2sltkf4f7rdj3c0"
                    className="btn btn-outline"
                  >
                    Resume
                  </a>
                  {/* <a href="#" className="btn btn-outline">
                       Resume
                    </a> */}
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/*col-6 End */}
          <div className="col-6 animate__animated animate__fadeInRight">
            <div className="banner_img">
              <img src="/images/jon.jpg" alt="Kawsar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
