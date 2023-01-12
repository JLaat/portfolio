import React from "react";
import Socials from "./Socials";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.init("EJD9wEXzKFdBHhW5T");

    emailjs
      .sendForm("service_zkfuzva", "template_g7wxsre", formRef.current)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="h-[100vh] relative">
      <div className="w-[10px] md:w-[20px] h-[100%] bg-blue-600 absolute"></div>
      <div className="cWrapper flex flex-col justify-center items md:flex-row p-[20px] md:p-[50px]">
        <div className="cLeft flex-1">
          <h1 className="font-poppins text-[2em] md:text-[4em]">My Socials</h1>
          <Socials />
        </div>
        <div className="cRight flex-1 flex justify-center  flex-col">
          <p className="font-poppins text-[1.5em]">
            <b>Interested?</b> Get in touch.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="#"
            className="mt-[20px] flex flex-col gap-10"
          >
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-[50%] h-[50px] mx-[10px] border-b-neutral-400 border-solid border-b-2"
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="w-[50%] h-[50px] mx-[10px] border-b-neutral-400 border-solid border-b-2"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              className="w-[50%] h-[50px] mx-[10px] border-b-neutral-400 border-solid border-b-2"
            />
            <textarea
              rows={5}
              placeholder="Message"
              name="user_message"
              className="w-[100%] mx-[10px] border-neutral-400 border-solid border-2"
            />
            <button
              type="submit"
              className=" w-[30%] m-[10px] p-3  text-white font-poppins font-semibold bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
