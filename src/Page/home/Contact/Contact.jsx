import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bysxj7e",
        "template_3njsueq",
        form.current,
        "cG6iKSknxUUl_PYBy"
      )
      .then(
        (result) => {
          Swal.fire(
            "Message sent Successfully!",
            "success"
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="md:mt-64 w-full h-screen bg-green-200 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 md:text-center">
          <p className="text-4xl font-bold inline text-gray-500 border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-500">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2">
            <label className="text-gray-500">Name</label>

            <input
              type="text"
              name="from_name"
              placeholder="Enter your name" required
              className="p-2 bg-transparent border-green-400 border-2 rounded-md text-gray-700 focus:outline-none"
            />
            <label className="text-gray-500">Email</label>

            <input
              type="email"
              name="from_email" required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-green-400 border-2 rounded-md text-gray-700 focus:outline-none"
            />
            <label className="text-gray-500">Message</label>

            <textarea
              name="message" required
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 border-green-400 rounded-md text-gray-700 focus:outline-none"></textarea>

            <input
              className="btn bg-green-300 text-gray-600 rounded-2xl hover:text-green-500 duration-100"
              type="submit"
              value="Let's Talk"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
