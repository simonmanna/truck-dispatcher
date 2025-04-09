"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const DropdownDefault_1 = __importDefault(
  require("../Dropdowns/DropdownDefault"),
);
const brandData = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-06.svg",
    name: "Youtube",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];
const TableFour = () => {
  return React.createElement(
    "div",
    { className: "col-span-12 xl:col-span-7" },
    React.createElement(
      "div",
      {
        className:
          "rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",
      },
      React.createElement(
        "div",
        { className: "mb-6 flex justify-between" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h4",
            {
              className: "text-title-sm2 font-bold text-black dark:text-white",
            },
            "Top Channels",
          ),
        ),
        React.createElement(DropdownDefault_1.default, null),
      ),
      React.createElement(
        "div",
        { className: "flex flex-col" },
        React.createElement(
          "div",
          {
            className:
              "grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4",
          },
          React.createElement(
            "div",
            { className: "p-2.5 xl:p-4" },
            React.createElement(
              "h5",
              { className: "text-sm font-medium uppercase xsm:text-base" },
              "Source",
            ),
          ),
          React.createElement(
            "div",
            { className: "p-2.5 text-center xl:p-4" },
            React.createElement(
              "h5",
              { className: "text-sm font-medium uppercase xsm:text-base" },
              "Visitors",
            ),
          ),
          React.createElement(
            "div",
            { className: "p-2.5 text-center xl:p-4" },
            React.createElement(
              "h5",
              { className: "text-sm font-medium uppercase xsm:text-base" },
              "Revenues",
            ),
          ),
          React.createElement(
            "div",
            { className: "hidden p-2.5 text-center sm:block xl:p-4" },
            React.createElement(
              "h5",
              { className: "text-sm font-medium uppercase xsm:text-base" },
              "Conversion",
            ),
          ),
        ),
        brandData.map((brand, key) =>
          React.createElement(
            "div",
            {
              className: `grid grid-cols-3 sm:grid-cols-4 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`,
              key: key,
            },
            React.createElement(
              "div",
              { className: "flex items-center gap-3 p-2.5 xl:p-5" },
              React.createElement(
                "div",
                { className: "h-9 w-full max-w-9 flex-shrink-0" },
                React.createElement(image_1.default, {
                  src: brand.logo,
                  width: 60,
                  height: 50,
                  alt: "Brand",
                }),
              ),
              React.createElement(
                "p",
                {
                  className:
                    "hidden font-medium text-black dark:text-white sm:block",
                },
                brand.name,
              ),
            ),
            React.createElement(
              "div",
              { className: "flex items-center justify-center p-2.5 xl:p-5" },
              React.createElement(
                "p",
                { className: "font-medium text-black dark:text-white" },
                brand.visitors,
                "K",
              ),
            ),
            React.createElement(
              "div",
              { className: "flex items-center justify-center p-2.5 xl:p-5" },
              React.createElement(
                "p",
                { className: "font-medium text-meta-3" },
                "$",
                brand.revenues,
              ),
            ),
            React.createElement(
              "div",
              {
                className:
                  "hidden items-center justify-center p-2.5 sm:flex xl:p-5",
              },
              React.createElement(
                "p",
                { className: "font-medium text-meta-5" },
                brand.conversion,
                "%",
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
exports.default = TableFour;
