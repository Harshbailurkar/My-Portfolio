import profileImg from "../../Portfolio Vector Images/Profile-photo.png";
import HeroSocialLink from "../socialLinks/HeroSocialLink";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { Fade } from "react-awesome-reveal";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import resume from "/Resume.pdf";
import { Helmet } from "react-helmet";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    swal("Sending ...!", "Please wait", "info");
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          swal(
            "Message send!",
            "wait I will reach you as soon as possible",
            "success"
          );
          form.current.reset();
        },
        (error) => {
          swal("message not send", "please try Again", "error");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Harsh Bailurkar</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col md:flex-row md:w-full p-5 md:p-10 pt-10 md:pt-20  order-2 md:order-1">
        <Fade triggerOnce>
          <div className="md:mr-20 mb-10 md:mb-0 flex flex-col justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-48 md:w-72 mx-auto md:mx-0 rounded-full shadow-lg mb-4"
            />
            <a
              href={resume}
              download="HarshBailurkarResume.pdf"
              className="block text-center mt-4 md:mt-0 text-purple-600 btn"
            >
              See My Resume
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-semibold text-center mb-9">
              Contact Me
            </h1>

            <p className="text-xl md:text-2xl pt-5  text-center md:text-left text-zinc-500">
              I am available on almost every social media. You can message me, I
              will reply within 24 hours. <br />
              Feel free to reach out to me for collaborations, projects, or just
              a friendly chat!
            </p>

            <div className="flex content-center ">
              <IconContext.Provider
                value={{
                  color: "red",
                  className: "global-class-name mt-5  ",
                  size: "2em",
                }}
              >
                <MdOutlineEmail />{" "}
                <h2 className="text-xl md:text-2xl pt-5 text-center text-zinc-500">
                  {" "}
                  harshbailurkar@gmail.com
                </h2>
              </IconContext.Provider>
            </div>
            <section className=" pt-5 text-center">
              <HeroSocialLink />
            </section>
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-2xl">Phone: +91 9423147698</p>
              <p className="text-2xl">Address: Kolhapur,Maharastra, India</p>
            </div>
          </div>
        </Fade>
      </div>
      <h2 className="text-3xl font-semibold mb-4 pl-20">Send a Message</h2>

      <div className="flex flex-col md:flex-row justify-center items-center pl-20 bg-gray-100">
        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <label
              htmlFor=""
              className="text-xl mb-4 p-10 text-center items-center"
            >
              Your Name :
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-3/4 md:w-1/2 p-2 rounded formcolor"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <label
              htmlFor=""
              className="text-xl mb-4 p-10 text-center items-center"
            >
              Your Email :
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              className="w-3/4 md:w-1/2 p-2 rounded formcolor"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <label htmlFor="" className="text-xl mb-4 p-10 ">
              Message :
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              className="w-3/4 md:w-1/2 p-2 rounded formcolor"
            ></textarea>
          </div>
          <div className="flex flex-col md:flex-row justify-end items-end p-10 w-10/12">
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
