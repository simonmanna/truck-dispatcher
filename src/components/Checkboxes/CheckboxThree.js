"use strict";
import React from "react";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CheckboxThree = () => {
  const [isChecked, setIsChecked] = (0, react_1.useState)(false);
  return React.createElement(
    "div",
    null,
    React.createElement(
      "label",
      {
        htmlFor: "checkboxLabelThree",
        className: "flex cursor-pointer select-none items-center",
      },
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("input", {
          type: "checkbox",
          id: "checkboxLabelThree",
          className: "sr-only",
          onChange: () => {
            setIsChecked(!isChecked);
          },
        }),
        React.createElement(
          "div",
          {
            className: `box mr-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked && "border-primary bg-gray dark:bg-transparent"}`,
          },
          React.createElement(
            "span",
            {
              className: `text-primary opacity-0 ${isChecked && "!opacity-100"}`,
            },
            React.createElement(
              "svg",
              {
                className: "h-3.5 w-3.5 stroke-current",
                fill: "none",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
              React.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12",
              }),
            ),
          ),
        ),
      ),
      "Checkbox Text",
    ),
  );
};
exports.default = CheckboxThree;
