import React from "react";
import { Field, Form, Formik, ErrorMessage  } from "formik";
import * as Yup from "yup";

const onSubmit = (values, onSubmitProps) => {
    alert("Message sent")
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required!'),
  email: Yup.string().required('Email is Required'),
  message: Yup.string().required('Message is Required').min(2).max(200)
})

function TextError(props) {
  return (
      <div className="error">
          {props.children}
      </div>
  )
}



function ContactForm() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="Contact_form">
          <div className="row">
            <div className="col-6 nameInput">
              <Field id="name" type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component={TextError}/>
            </div>
            <div className="col-6">
              <Field id="email" type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={TextError}/>
            </div>
            <div className="col-12">
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Message"
                type="text"
                className="nameInput"
              />
              <ErrorMessage name="message" component={TextError}/>
            </div>
              <button className="submit" type="submit">
                Submit
              </button>
          
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;