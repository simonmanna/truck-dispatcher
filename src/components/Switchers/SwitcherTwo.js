"use strict";
import React from "react";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SwitcherTwo = () => {
  const [enabled, setEnabled] = (0, react_1.useState)(false);
  return React.createElement(
    "div",
    { "x-data": "{ switcherToggle: false }" },
    React.createElement(
      "label",
      {
        htmlFor: "toggle2",
        className: "flex cursor-pointer select-none items-center",
      },
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement("input", {
          id: "toggle2",
          type: "checkbox",
          className: "sr-only",
          onChange: () => {
            setEnabled(!enabled);
          },
        }),
        React.createElement("div", {
          className:
            "h-5 w-14 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]",
        }),
        React.createElement("div", {
          className: `dot absolute -top-1 left-0 h-7 w-7 rounded-full bg-white shadow-switch-1 transition ${enabled && "!right-0 !translate-x-full !bg-primary dark:!bg-white"}`,
        }),
      ),
    ),
  );
};
exports.default = SwitcherTwo;
