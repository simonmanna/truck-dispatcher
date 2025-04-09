"use strict";
import React from "react";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SwitcherOne = () => {
  const [enabled, setEnabled] = (0, react_1.useState)(false);
  return React.createElement(
    "div",
    null,
    React.createElement(
      "label",
      {
        htmlFor: "toggle1",
        className: "flex cursor-pointer select-none items-center",
      },
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("input", {
          type: "checkbox",
          id: "toggle1",
          className: "sr-only",
          onChange: () => {
            setEnabled(!enabled);
          },
        }),
        React.createElement("div", {
          className: "block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]",
        }),
        React.createElement("div", {
          className: `absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${enabled && "!right-1 !translate-x-full !bg-primary dark:!bg-white"}`,
        }),
      ),
    ),
  );
};
exports.default = SwitcherOne;
