import React from "react";
import Comp from "../images/home-img.png";

function CallToAction() {
  return (
    <>
      <div className="bg-secondary ">
        <div className="border-b border-gray-900/10 py-12 mx-36">
          <h2 className=" font-semibold text-gray-900 text-xl flex justify-center">Get a quote</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 flex justify-center">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                for="full-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Names
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autocomplete="given-name"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="company-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  autocomplete="family-name"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="phone number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone no."
                  name="phone no."
                  type="phone no."
                  autocomplete="phone no."
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="Quantity"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Quantity
              </label>
              <div className="mt-2">
                <input
                  id="Quantity"
                  name="Quantity"
                  type="Quantity"
                  autocomplete="Quantity"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="finishing"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                finishing
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="finishing"
                  id="finishing"
                  autocomplete="finishing"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                for="company-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  autocomplete="family-name"
                  className="px-2 block w-full h-20 rounded-sm border-0 py-0 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
