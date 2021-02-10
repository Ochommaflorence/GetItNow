import React from "react";
// import InputField from './InputField';
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="mt-5">
      <div className="banner1 text-center">
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <div>
            <h2 className="first-text ml-5">Contact Us</h2>
            <h2 className="ml-5"> <Link to="/">Home</Link> / Contact us </h2>
          </div>
        </div>
      </div>
      <article className="container">
        <p className="ml-5 mt-5 contact-header text-center">Get In Touch</p>
        <div className="contactPage-Form mb-5">
          <form className="contact-form-content ml-5 mb-5">
            <label className="mt-5">First name</label>
            <br />
            <input
              type="text"
              name="first name"
              placeholder="your firstname"
              required
            />
            <br />

            <label>Last name</label>
            <br />
            <input
              type="text"
              name="last name"
              placeholder="Your lastname"
              required
            />
            <br />

            <label>Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="your email address"
              required
            />
            <br />

            <label>Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              placeholder="your subject of this message"
              required
            />
            <br />

            <label>Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              placeholder="Write something about us"
              required
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
