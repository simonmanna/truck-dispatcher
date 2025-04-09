"use strict";
import React from "react";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CheckboxFive = () => {
  const [isChecked, setIsChecked] = (0, react_1.useState)(false);
  return React.createElement(
    "div",
    null,
    React.createElement(
      "label",
      {
        htmlFor: "checkboxLabelFive",
        className: "flex cursor-pointer select-none items-center",
      },
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("input", {
          type: "checkbox",
          id: "checkboxLabelFive",
          className: "sr-only",
          onChange: () => {
            setIsChecked(!isChecked);
          },
        }),
        React.createElement(
          "div",
          {
            className: `box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${isChecked && "!border-4"}`,
          },
          React.createElement("span", {
            className: "h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent",
          }),
        ),
      ),
      "Checkbox Text",
    ),
  );
};
exports.default = CheckboxFive;
