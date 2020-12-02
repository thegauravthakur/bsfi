import React, { Fragment, useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Head from "next/head";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        text: message,
      }),
    })
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setEmail("");
        setName("");
        setMessage("");
        setTimeout(() => setSuccess(false), 15000);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="flex-1">
        <div className="justify-between flex-row lg:flex px-4 py-4 sm:mt-5 sm:px-32 xl:px-52 ">
          <div className="max-w-md md:pr-10 mb-10">
            <h2 className="font-bold text-3xl">Get in touch</h2>
            <p className="text-gray-500 text-lg my-3">
              We are available all 7 days a week from 9 AM to 7 PM (IST). At
              this moment we do not provide our service outside Kullu, Himachal
              Pradesh.
            </p>
            <div className="flex my-3">
              <div className="h-6 w-6 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">+91-9459849894</p>
            </div>
            <div className="flex my-3">
              <div className="h-6 w-6 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">gthakur581@gmail.com</p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-3xl lg:hidden">Send a Message</h2>
            {success ? (
              <p className="bg-blue-600 py-2 px-2 rounded text-white">
                Email Send Successfully! We'll get back to you as soon as
                possible.
              </p>
            ) : null}
            {error ? (
              <p className="bg-red-600 py-2 px-2 rounded text-white">
                There was some problem while sending the mail. Please try again
                later.
              </p>
            ) : null}
            <form onSubmit={onSubmitHandler}>
              <input
                required
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="bg-gray-100 w-full py-3 px-2 my-3 text-lg rounded-xl focus:outline-none focus:ring-2"
                placeholder="Full Name"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="bg-gray-100 w-full py-3 px-2 my-3 text-lg rounded-xl focus:outline-none focus:ring-2"
                placeholder="Email Address"
              />
              <textarea
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="h-40 bg-gray-100 w-full py-3 px-2 my-3 text-lg rounded-xl focus:outline-none focus:ring-2"
                placeholder="Enter your message"
              />
              <button
                type="submit"
                className="px-5 py-2 text-white rounded-md focus:outline-none hover:bg-blue-600 bg-blue-500 "
              >
                <div className="flex justify-evenly align-middle">
                  {loading ? <div className="lds-dual-ring" /> : null}
                  <div>Submit</div>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="px-4 pt-4 pb-10 sm:mt-5 sm:px-32 xl:px-52">
          <h2 className="font-bold text-3xl">Come Visit Us</h2>
          <p className="text-gray-500 text-lg my-3 max-w-md">
            If you want to meet us in person, you can visit our store which is
            located in Kullu, Himachal Pradesh.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34016.34121211111!2d77.02624540699662!3d31.96932372563451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f22509173eff%3A0xa8dc6063af316093!2sBhaga%20Sidh%20Furniture%20Industry!5e0!3m2!1sen!2sin!4v1606574415836!5m2!1sen!2sin"
            className="w-full h-56 md:h-96 rounded-xl"
            frameBorder="0"
            aria-hidden="false"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
