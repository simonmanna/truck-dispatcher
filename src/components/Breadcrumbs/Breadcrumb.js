"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const Breadcrumb = ({ pageName }) => {
  return React.createElement(
    "div",
    {
      className:
        "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
    },
    React.createElement(
      "h2",
      { className: "text-title-md2 font-semibold text-black dark:text-white" },
      pageName,
    ),
    React.createElement(
      "nav",
      null,
      React.createElement(
        "ol",
        { className: "flex items-center gap-2" },
        React.createElement(
          "li",
          null,
          React.createElement(
            link_1.default,
            { className: "font-medium", href: "/" },
            "Dashboard /",
          ),
        ),
        React.createElement(
          "li",
          { className: "font-medium text-primary" },
          pageName,
        ),
      ),
    ),
  );
};
exports.default = Breadcrumb;
