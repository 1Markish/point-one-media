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
                for="size"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Size 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="size"
                  id="size"
                  autocomplete="size"
                  className="px-2 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightGreen-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="pages"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                No. of pages
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pages"
                  id="pages"
                  autocomplete="pages"
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

            <div className="sm:col-span-6">
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

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload artwork
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PDF,PNG or JPEG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
