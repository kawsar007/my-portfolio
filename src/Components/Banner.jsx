import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaPlay,
} from "react-icons/fa";
import Typed from 'react-typed';
import kilil from "../assets/img/kilil.jpg";

function Banner() {
  return (
    <header className="header" id="home">



      <div className="container">
        <div className="row">
          <div className="col-6 animate__animated animate__fadeInLeft">
            {" "}
            {/*col-6 start */}
            <div className="header_content">
              <div className="header_section">
                <ul className="header_ul">
                  <li>
                    <a href="https://www.facebook.com/imkawsar007"> <FaFacebookF /> </a>
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
                  <a href="https://join.skype.com/invite/ygM8i3Gh5v5t"> <FaSkype /> </a>
                  </li>
                  {/* <li><AiOutlineMail/></li> */}
                </ul>
                <h1>I am Kawsar Mia</h1>
                <Typed
                            strings={[
                                'Software Engineer',
                                'Web Developer',
                                'Programmer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            // style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                {/* <p>
                  Frontend Web Developer
                </p> */}
                <div className="header_buttons">
                  <a
                    href="/kawsarCV.pdf"
                    className="btn btn-outline" download
                  >
                    Resume
                  </a>
                  {/* <a href="#" className="btn btn-outline">
                       Resume
                    </a> */}
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className="btn btn-smart">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/*col-6 End */}
          <div className="col-6 animate__animated animate__fadeInRight">
            <div className="banner_img">
              {/* <img src="/images/jon.jpg" alt="Kawsar" /> */}
              <img src={kilil} alt="Kawsar"/>
            </div>
          </div>
        </div>
      </div>


    </header>
  );
}

export default Banner;
