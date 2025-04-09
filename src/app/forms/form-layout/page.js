"use strict";
import React from "react";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Breadcrumb_1 = __importDefault(
  require("../../../components/Breadcrumbs/Breadcrumb"),
);
const DefaultLayout_1 = __importDefault(
  require("../../../components/Layouts/DefaultLayout"),
);
const SelectGroupOne_1 = __importDefault(
  require("../../../components/SelectGroup/SelectGroupOne"),
);
const link_1 = __importDefault(require("next/link"));
exports.metadata = {
  title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
const FormLayout = () => {
  return React.createElement(
    DefaultLayout_1.default,
    null,
    React.createElement(Breadcrumb_1.default, { pageName: "FormLayout" }),
    React.createElement(
      "div",
      { className: "grid grid-cols-1 gap-9 sm:grid-cols-2" },
      React.createElement(
        "div",
        { className: "flex flex-col gap-9" },
        React.createElement(
          "div",
          {
            className:
              "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
          },
          React.createElement(
            "div",
            {
              className:
                "border-b border-stroke px-6.5 py-4 dark:border-strokedark",
            },
            React.createElement(
              "h3",
              { className: "font-medium text-black dark:text-white" },
              "Contact Form",
            ),
          ),
          React.createElement(
            "form",
            { action: "#" },
            React.createElement(
              "div",
              { className: "p-6.5" },
              React.createElement(
                "div",
                { className: "mb-4.5 flex flex-col gap-6 xl:flex-row" },
                React.createElement(
                  "div",
                  { className: "w-full xl:w-1/2" },
                  React.createElement(
                    "label",
                    {
                      className:
                        "mb-3 block text-sm font-medium text-black dark:text-white",
                    },
                    "First name",
                  ),
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Enter your first name",
                    className:
                      "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                  }),
                ),
                React.createElement(
                  "div",
                  { className: "w-full xl:w-1/2" },
                  React.createElement(
                    "label",
                    {
                      className:
                        "mb-3 block text-sm font-medium text-black dark:text-white",
                    },
                    "Last name",
                  ),
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Enter your last name",
                    className:
                      "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                  }),
                ),
              ),
              React.createElement(
                "div",
                { className: "mb-4.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Email ",
                  React.createElement(
                    "span",
                    { className: "text-meta-1" },
                    "*",
                  ),
                ),
                React.createElement("input", {
                  type: "email",
                  placeholder: "Enter your email address",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "div",
                { className: "mb-4.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Subject",
                ),
                React.createElement("input", {
                  type: "text",
                  placeholder: "Select subject",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(SelectGroupOne_1.default, null),
              React.createElement(
                "div",
                { className: "mb-6" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Message",
                ),
                React.createElement("textarea", {
                  rows: 6,
                  placeholder: "Type your message",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "button",
                {
                  className:
                    "flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90",
                },
                "Send Message",
              ),
            ),
          ),
        ),
      ),
      React.createElement(
        "div",
        { className: "flex flex-col gap-9" },
        React.createElement(
          "div",
          {
            className:
              "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
          },
          React.createElement(
            "div",
            {
              className:
                "border-b border-stroke px-6.5 py-4 dark:border-strokedark",
            },
            React.createElement(
              "h3",
              { className: "font-medium text-black dark:text-white" },
              "Sign In Form",
            ),
          ),
          React.createElement(
            "form",
            { action: "#" },
            React.createElement(
              "div",
              { className: "p-6.5" },
              React.createElement(
                "div",
                { className: "mb-4.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Email",
                ),
                React.createElement("input", {
                  type: "email",
                  placeholder: "Enter your email address",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Password",
                ),
                React.createElement("input", {
                  type: "password",
                  placeholder: "Enter password",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "div",
                { className: "mb-5.5 mt-5 flex items-center justify-between" },
                React.createElement(
                  "label",
                  { htmlFor: "formCheckbox", className: "flex cursor-pointer" },
                  React.createElement(
                    "div",
                    { className: "relative pt-0.5" },
                    React.createElement("input", {
                      type: "checkbox",
                      id: "formCheckbox",
                      className: "taskCheckbox sr-only",
                    }),
                    React.createElement(
                      "div",
                      {
                        className:
                          "box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark",
                      },
                      React.createElement(
                        "span",
                        { className: "text-white opacity-0" },
                        React.createElement(
                          "svg",
                          {
                            className: "fill-current",
                            width: "10",
                            height: "7",
                            viewBox: "0 0 10 7",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          React.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z",
                            fill: "",
                          }),
                        ),
                      ),
                    ),
                  ),
                  React.createElement("p", null, "Remember me"),
                ),
                React.createElement(
                  link_1.default,
                  {
                    href: "#",
                    className: "text-sm text-primary hover:underline",
                  },
                  "Forget password?",
                ),
              ),
              React.createElement(
                "button",
                {
                  className:
                    "flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90",
                },
                "Sign In",
              ),
            ),
          ),
        ),
        React.createElement(
          "div",
          {
            className:
              "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
          },
          React.createElement(
            "div",
            {
              className:
                "border-b border-stroke px-6.5 py-4 dark:border-strokedark",
            },
            React.createElement(
              "h3",
              { className: "font-medium text-black dark:text-white" },
              "Sign Up Form",
            ),
          ),
          React.createElement(
            "form",
            { action: "#" },
            React.createElement(
              "div",
              { className: "p-6.5" },
              React.createElement(
                "div",
                { className: "mb-4.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Name",
                ),
                React.createElement("input", {
                  type: "text",
                  placeholder: "Enter your full name",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "div",
                { className: "mb-4.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Email",
                ),
                React.createElement("input", {
                  type: "email",
                  placeholder: "Enter your email address",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "div",
                { className: "mb-4.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Password",
                ),
                React.createElement("input", {
                  type: "password",
                  placeholder: "Enter password",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "div",
                { className: "mb-5.5" },
                React.createElement(
                  "label",
                  {
                    className:
                      "mb-3 block text-sm font-medium text-black dark:text-white",
                  },
                  "Re-type Password",
                ),
                React.createElement("input", {
                  type: "password",
                  placeholder: "Re-enter password",
                  className:
                    "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                }),
              ),
              React.createElement(
                "button",
                {
                  className:
                    "flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90",
                },
                "Sign Up",
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
exports.default = FormLayout;
