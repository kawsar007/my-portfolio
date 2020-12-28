import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPlay
} from "react-icons/fa";
//import { AiOutlineMail } from 'react-icons/ai';

function Banner() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
           <div className="col-6 animate__animated animate__fadeInLeft">  {/*col-6 start */}
            <div className="header_content">
              <div className="header_section">
                <ul className="header_ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  {/* <li><AiOutlineMail/></li> */}
                </ul>
                <h1>I am Kawsar Mia</h1>
                <p>
                  i,m Jonathan, professional web developer with long time
                  experience in this field​
                </p>
                <div className="header_buttons">
                    <a href="#" className="btn btn-outline">
                       Resume
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="#" className="btn btn-smart">
                        <FaPlay className="play"/>
                    </a>
                </div>
              </div>
            </div>
          </div>     {/*col-6 End */}
          <div className="col-6 animate__animated animate__fadeInRight">
              <div className="banner_img">
                  <img src="/images/jon.jpg" alt="Kawsar"/>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
