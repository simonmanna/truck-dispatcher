"use client";
import React from "react";
("use strict");
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Breadcrumb_1 = __importDefault(
  require("@/components/Breadcrumbs/Breadcrumb"),
);
const CheckboxFive_1 = __importDefault(
  require("@/components/Checkboxes/CheckboxFive"),
);
const CheckboxFour_1 = __importDefault(
  require("@/components/Checkboxes/CheckboxFour"),
);
const CheckboxOne_1 = __importDefault(
  require("@/components/Checkboxes/CheckboxOne"),
);
const CheckboxThree_1 = __importDefault(
  require("@/components/Checkboxes/CheckboxThree"),
);
const CheckboxTwo_1 = __importDefault(
  require("@/components/Checkboxes/CheckboxTwo"),
);
const SwitcherFour_1 = __importDefault(
  require("@/components/Switchers/SwitcherFour"),
);
const SwitcherOne_1 = __importDefault(
  require("@/components/Switchers/SwitcherOne"),
);
const SwitcherThree_1 = __importDefault(
  require("@/components/Switchers/SwitcherThree"),
);
const SwitcherTwo_1 = __importDefault(
  require("@/components/Switchers/SwitcherTwo"),
);
const DatePickerTwo_1 = __importDefault(
  require("@/components/FormElements/DatePicker/DatePickerTwo"),
);
const DatePickerOne_1 = __importDefault(
  require("@/components/FormElements/DatePicker/DatePickerOne"),
);
const MultiSelect_1 = __importDefault(
  require("@/components/FormElements/MultiSelect"),
);
const SelectGroupTwo_1 = __importDefault(
  require("@/components/SelectGroup/SelectGroupTwo"),
);
const FormElements = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Breadcrumb_1.default, { pageName: "FormElements" }),
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
              "Input Fields",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "label",
                {
                  className:
                    "mb-3 block text-sm font-medium text-black dark:text-white",
                },
                "Default Input",
              ),
              React.createElement("input", {
                type: "text",
                placeholder: "Default Input",
                className:
                  "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
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
                "Active Input",
              ),
              React.createElement("input", {
                type: "text",
                placeholder: "Active Input",
                className:
                  "w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white",
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
                "Disabled label",
              ),
              React.createElement("input", {
                type: "text",
                placeholder: "Disabled label",
                disabled: true,
                className:
                  "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black",
              }),
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
              "Toggle switch input",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(SwitcherOne_1.default, null),
            React.createElement(SwitcherTwo_1.default, null),
            React.createElement(SwitcherThree_1.default, null),
            React.createElement(SwitcherFour_1.default, null),
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
              "Time and date",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(DatePickerOne_1.default, null),
            React.createElement(DatePickerTwo_1.default, null),
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
              "File upload",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "label",
                {
                  className:
                    "mb-3 block text-sm font-medium text-black dark:text-white",
                },
                "Attach file",
              ),
              React.createElement("input", {
                type: "file",
                className:
                  "w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary",
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
                "Attach file",
              ),
              React.createElement("input", {
                type: "file",
                className:
                  "w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white",
              }),
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
              "Textarea Fields",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "label",
                {
                  className:
                    "mb-3 block text-sm font-medium text-black dark:text-white",
                },
                "Default textarea",
              ),
              React.createElement("textarea", {
                rows: 6,
                placeholder: "Default textarea",
                className:
                  "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
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
                "Active textarea",
              ),
              React.createElement("textarea", {
                rows: 6,
                placeholder: "Active textarea",
                className:
                  "w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white",
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
                "Disabled textarea",
              ),
              React.createElement("textarea", {
                rows: 6,
                disabled: true,
                placeholder: "Disabled textarea",
                className:
                  "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black",
              }),
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
              "Checkbox and radio",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(CheckboxOne_1.default, null),
            React.createElement(CheckboxTwo_1.default, null),
            React.createElement(CheckboxThree_1.default, null),
            React.createElement(CheckboxFour_1.default, null),
            React.createElement(CheckboxFive_1.default, null),
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
              "Select input",
            ),
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-5.5 p-6.5" },
            React.createElement(SelectGroupTwo_1.default, null),
            React.createElement(MultiSelect_1.default, { id: "multiSelect" }),
          ),
        ),
      ),
    ),
  );
};
exports.default = FormElements;
