"use strict";
import React from "react";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SwitcherFour = () => {
  const [enabled, setEnabled] = (0, react_1.useState)(false);
  return React.createElement(
    "div",
    null,
    React.createElement(
      "label",
      {
        htmlFor: "toggle4",
        className: "flex cursor-pointer select-none items-center",
      },
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("input", {
          type: "checkbox",
          id: "toggle4",
          className: "sr-only",
          onChange: () => {
            setEnabled(!enabled);
          },
        }),
        React.createElement("div", {
          className: "block h-8 w-14 rounded-full bg-black",
        }),
        React.createElement("div", {
          className: `absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${enabled && "!right-1 !translate-x-full"}`,
        }),
      ),
    ),
  );
};
exports.default = SwitcherFour;
