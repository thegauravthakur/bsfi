import React from "react";

const FeaturesSection = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center text-blue-700 ">
        Our Specialities
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-md mx-auto text-center ">
        We have more than 20 years of professional expertise in the market of
        furniture and home renovation
      </p>
      <div className="flex flex-wrap">
        <div className="md:w-1/6" />
        <div className="w-40 sm:w-48 shadow-2xl py-7 px-3 rounded-xl my-10  mx-auto ">
          <div className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto ">
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-gray-700 text-center my-3">
            All Kind of Furniture
          </h3>
          <p className="text-md mt-3 text-gray-600 max-w-md mx-auto text-center">
            We manufacture all kind of wooden furniture. We also manufacture
            furniture on order.
          </p>
        </div>

        <div className="w-40 sm:w-48 shadow-2xl py-7 px-3 rounded-xl my-10  mx-auto ">
          <div className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto ">
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 className="font-bold text-gray-700 text-center my-3">
            Custom Build
          </h3>
          <p className="text-md mt-3 text-gray-600 max-w-md mx-auto text-center">
            You can additionally provide an entirely custom order according to
            your necessities
          </p>
        </div>
        <div className="w-40 sm:w-48 shadow-2xl py-7 px-3 rounded-xl my-10  mx-auto ">
          <div className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto ">
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-gray-700 text-center my-3">
            99% Client Satisfaction
          </h3>
          <p className="text-md mt-3 text-gray-600 max-w-md mx-auto text-center">
            We know the value of client gratification and all our businesses are
            towards raising it more and more
          </p>
        </div>
        <div className="w-40 sm:w-48 shadow-2xl py-7 px-3 rounded-xl my-10  mx-auto ">
          <div className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
          </div>
          <h3 className="font-bold text-gray-700 text-center my-3">
            Handmade furniture
          </h3>
          <p className="text-md mt-3 text-gray-600 max-w-md mx-auto text-center">
            All our furniture are handmade by adept craftsmen who have decades
            of expertise in this domain
          </p>
        </div>
        <div className="md:w-1/6" />
      </div>
    </div>
  );
};

export default FeaturesSection;
