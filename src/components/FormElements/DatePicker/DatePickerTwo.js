"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const flatpickr_1 = __importDefault(require("flatpickr"));
const react_1 = require("react");
const DatePickerTwo = () => {
  (0, react_1.useEffect)(() => {
    // Init flatpickr
    (0, flatpickr_1.default)(".form-datepicker", {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);
  return React.createElement(
    "div",
    null,
    React.createElement(
      "label",
      {
        className: "mb-3 block text-sm font-medium text-black dark:text-white",
      },
      "Select date",
    ),
    React.createElement(
      "div",
      { className: "relative" },
      React.createElement("input", {
        className:
          "form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
        placeholder: "mm/dd/yyyy",
        "data-class": "flatpickr-right",
      }),
      React.createElement(
        "div",
        {
          className:
            "pointer-events-none absolute inset-0 left-auto right-5 flex items-center",
        },
        React.createElement(
          "svg",
          {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          React.createElement("path", {
            d: "M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z",
            fill: "#64748B",
          }),
        ),
      ),
    ),
  );
};
exports.default = DatePickerTwo;
