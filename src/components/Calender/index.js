"use strict";
import React from "react";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Breadcrumb_1 = __importDefault(require("../Breadcrumbs/Breadcrumb"));
const Calendar = () => {
  return React.createElement(
    "div",
    { className: "mx-auto max-w-7xl" },
    React.createElement(Breadcrumb_1.default, { pageName: "Calendar" }),
    React.createElement(
      "div",
      {
        className:
          "w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
      },
      React.createElement(
        "table",
        { className: "w-full" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            {
              className: "grid grid-cols-7 rounded-t-sm bg-primary text-white",
            },
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Sunday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Sun ",
              ),
            ),
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Monday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Mon ",
              ),
            ),
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Tuesday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Tue ",
              ),
            ),
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Wednesday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Wed ",
              ),
            ),
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Thursday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Thur ",
              ),
            ),
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Friday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Fri ",
              ),
            ),
            React.createElement(
              "th",
              {
                className:
                  "flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5",
              },
              React.createElement(
                "span",
                { className: "hidden lg:block" },
                " Saturday ",
              ),
              React.createElement(
                "span",
                { className: "block lg:hidden" },
                " Sat ",
              ),
            ),
          ),
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            { className: "grid grid-cols-7" },
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "1",
              ),
              React.createElement(
                "div",
                {
                  className:
                    "group h-16 w-full flex-grow cursor-pointer py-1 md:h-30",
                },
                React.createElement(
                  "span",
                  { className: "group-hover:text-primary md:hidden" },
                  "More",
                ),
                React.createElement(
                  "div",
                  {
                    className:
                      "event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100",
                  },
                  React.createElement(
                    "span",
                    {
                      className:
                        "event-name text-sm font-semibold text-black dark:text-white",
                    },
                    "Redesign Website",
                  ),
                  React.createElement(
                    "span",
                    {
                      className:
                        "time text-sm font-medium text-black dark:text-white",
                    },
                    "1 Dec - 2 Dec",
                  ),
                ),
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "2",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "3",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "4",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "5",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "6",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "7",
              ),
            ),
          ),
          React.createElement(
            "tr",
            { className: "grid grid-cols-7" },
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "8",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "9",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "10",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "11",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "12",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "13",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "14",
              ),
            ),
          ),
          React.createElement(
            "tr",
            { className: "grid grid-cols-7" },
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "15",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "16",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "17",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "18",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "19",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "20",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "21",
              ),
            ),
          ),
          React.createElement(
            "tr",
            { className: "grid grid-cols-7" },
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "22",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "23",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "24",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "25",
              ),
              React.createElement(
                "div",
                {
                  className:
                    "group h-16 w-full flex-grow cursor-pointer py-1 md:h-30",
                },
                React.createElement(
                  "span",
                  { className: "group-hover:text-primary md:hidden" },
                  "More",
                ),
                React.createElement(
                  "div",
                  {
                    className:
                      "event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100",
                  },
                  React.createElement(
                    "span",
                    {
                      className:
                        "event-name text-sm font-semibold text-black dark:text-white",
                    },
                    "App Design",
                  ),
                  React.createElement(
                    "span",
                    {
                      className:
                        "time text-sm font-medium text-black dark:text-white",
                    },
                    "25 Dec - 27 Dec",
                  ),
                ),
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "26",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "27",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "28",
              ),
            ),
          ),
          React.createElement(
            "tr",
            { className: "grid grid-cols-7" },
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "29",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "30",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "31",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "1",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "2",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "3",
              ),
            ),
            React.createElement(
              "td",
              {
                className:
                  "ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31",
              },
              React.createElement(
                "span",
                { className: "font-medium text-black dark:text-white" },
                "4",
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
exports.default = Calendar;
