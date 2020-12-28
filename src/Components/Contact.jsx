/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import ContactForm from "./ContactForm";

function Contact() {
  const [locationInfo] = useState([
    {
      id: 1,
      icon: <FaLocationArrow />,
      main: "Locate Us",
      info: "Mohammodpur, Dhaka",
    },
    {
      id: 1,
      icon: <MdCall />,
      main: "Call",
      info: "01638600627",
    },
    {
      id: 1,
      icon: <MdEmail />,
      main: "Email",
      info: "imkawsar007@gmail.com",
    },
  ]);

  const initialState = {
      name: "",
      email: "",
      message: "",
  }

  const onSubmit = (values) => {
      alert(JSON.stringify(values, null, 2));
  } 

  return (
    <div className="contact">
      <div className="container">
        <div className="contact_header">
          <div className="common">
            <h3 className="heading">Have Any Query?</h3>
            <h1 className="mainHeading">Contact Me</h1>
          </div>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {locationInfo.map((data) => (
            <div className="col-4">
              <div className="locationCard">
                <div className="addressIcon">{data.icon}</div>
                <div className="address">
                  <span style={{ fontWeight: "bold" }}>{data.main}</span>
                  <span>{data.info}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Contact_form">
            <ContactForm/>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
