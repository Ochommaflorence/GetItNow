import React, { useEffect, useRef, useState } from "react";
import "./Faq.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Faq() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const questions = [
    {
      id: 1,
      title: "Do I have to allow the use of cookes?",
      info:
        "Unicorn vinyl poutine brooklyn.",
    },
    {
      id: 2,
      title: "How do I change my My Page password?",
      info:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      title: "What is BankID?",
      info:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      title: "Whose birth number can I use?",
      info:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
  ];

  return (
    <>
    <div className="banner d-flex justify-content-center text-center">
    <div className="banner-content">
         <h2>Our Faqs</h2>
    </div>
  </div> 
    <div className="faq_container bg-white mb-5 mt-3">
      <div className="row faq_content_wrap" data-aos="zoom-in">
        <div className="col-lg-6 col-md-6 col-12 mb-3">
          <div className="faq_content">
            <h1>Frequently Asked Questions About Us</h1>
            <p>
              Looking for more information? Our database of Frequently Asked
              Questions is filled with a lot of answers to the most pressing
              inquiries.
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 mb-5">
          <div className="faq_img_wrap">
            <img
              src="images/faq.png"
              alt="aimart real estate"
              className="img-fluid ml-3"
            />
          </div>
        </div>
      </div>
      {questions.map((question) => (
        <FaqChild {...question} key={question.id} />
      ))}
    </div>
    </>
  );
}

// Child component
function FaqChild({ title, info }) {
  const [open, setOpen] = useState(false);

  const parentRef = useRef();
  return (
    <div className="accordion_wrap">
      <div
        className="d-flex justify-content-between content_header"
        onClick={() => setOpen(!open)}
      >
        <div className="d-flex justify-content-between">
          <span className="letter pr-4">
            <i className="far fa-question-circle" />
          </span>
          <h3>{title}</h3>
        </div>

         <div className="toGGle">
         <i
          className={
            open ? "fas fa-chevron-circle-up" : "fas fa-chevron-circle-down"
          }
        ></i>
         </div>
      </div>

      <div
        className="content"
        ref={parentRef}
        style={
          open
            ? { height: parentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="d-flex justify-content-start info_wrap">
          <span className="letter text-dark mb-2 pr-4">A.</span>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

