import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const questions = [
    {
      id: 1,
      title:
        "Why is shipping cost not mentioned with the price of the product?",
      info:
        "Shipping costs usually varies depending on the amount of the total purchase made, its weight and the location it's been shipped to."
    },
    {
      id: 2,
      title: "How private is my information, especially card details?",
      info:
        "Your card details are safer online than many other retail stores as long as  the online store uses a secure server for your order. "
    },
    {
      id: 3,
      title: "What if i dont get an confirmation after placing my order?",
      info:
        "If you do not receive your order details in an email or text messages within 24hours, contact customer service. It might be their system has not received the order,or it wa rejected for some reasons."
    },
    {
      id: 4,
      title: "How genuine is your product?",
      info:
        "With many platforms, sellers make an agreement that they will only sell genuine products. Violation of this rule will result in the exist of that seller from the platform. To ensure this, sample products are tested that are prone to complaints."
    },

    {
      id: 5,
      title: "How long should it take to receive an order?",
      info:
        "A third party is typically involved in the delivery of an order. Once you place an order, you should be given an expected delivery date. When calculating this date, few things are taken into consideration like packaging, transist time to the delivery provider and transist time to delivery address. Many sites promise same-day delivery, which typically costs quite a bit more."
    },

    {
      id: 6,
      title: "How do i get a refund?",
      info:
        "Refunds are usually issued when a seller cannot provide a suitable replacement. In these cases, a full refund is typically provided once the item has been returned."
    }
  ];
  return (
    <section className="mb-5">
      <div className="banner2 text-center">
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <div>
            <h2 className="first-text ml-5">About Us</h2>
            <h2 className="ml-5">
              {" "}
              <Link to="/">Home</Link> / About us{" "}
            </h2>
          </div>
        </div>
      </div>

      <article className="container">
        <div className="row">
          <div className="col-md-6  AboutPage-body">
            <h1>Who we are</h1>
            <h5> Fashion Democracy </h5>
            <hr></hr>
            <p className="mr-5 ">
              We believe in a world where you have total freedom to be you,
              without judgement. To experiment. To express yourself. To be brave
              and grab life as the extraordinary adventure it is. So we make
              sure everyone has an equal chance of discover all the amazing
              things they're capable of -no matter who they are, where they are
              from or what looks like to boss. We exist to give you the
              confidence to be whoever you want to be.
            </p>
            <br />
            <div>
              <img
                src={"/images/pic3.jpg"}
                className="img-fluid image"
                alt="About-pic"
              />
            </div>
          </div>

          <div className="col-md-6 mt-5 AboutPage-body2">
            <img
              src={"/images/slider/slider-2.jpg"}
              className="img-fluid image"
              alt="About-pic"
            />
            <h1>Choice For All</h1>
            <h5> Fashion Democracy </h5>
            <hr></hr>
            <p className="mr-5 ">
              Our audience (AKA you) is wonderfully unique. And we do everything
              we can to help you find your fit, offering our hummer clothing
              Brands in more than 30 sizes - and we're committed to providing
              all sizes at the same price -so you can be confident we've got the
              perfect thing for you. We are also proud to partner with PREETY
              LITTLE THINGS, one of the biggest voices LGBTO activism, on a
              gender-neutral collection to unite in accelerating acceptance.
            </p>
          </div>
        </div>
      </article>

      {/* FAQ starts */}
      <div
        className="banner d-flex justify-content-center text-center"
        id="faq"
      >
        <div className="text-center faq-content-header">
          <h2 className="mt-5">OUR FAQS</h2>
          <hr />
        </div>
      </div>
      <div className="faq_container bg-white mb-5 mt-3">
        <div className="faq_content">
          <h1>Frequently Asked Questions About Us</h1>
          <p>
            Looking for more information? Our database Frequently Asked
            Questions is filled with a lot of answers to the most pressing
            inquiries.
          </p>
        </div>
        {questions.map(question => (
          <FaqChild {...question} key={question.id} />
        ))}
      </div>
    </section>
  );
}

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
    //   FAQ ENDS
  );
}

export default About;
