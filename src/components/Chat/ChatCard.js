"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const chatData = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    text: "How are you?",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    text: "Waiting for you!",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    text: "What's up?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];
const ChatCard = () => {
  return React.createElement(
    "div",
    {
      className:
        "col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4",
    },
    React.createElement(
      "h4",
      {
        className:
          "mb-6 px-7.5 text-xl font-semibold text-black dark:text-white",
      },
      "Chats",
    ),
    React.createElement(
      "div",
      null,
      chatData.map((chat, key) =>
        React.createElement(
          link_1.default,
          {
            href: "/",
            className:
              "flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4",
            key: key,
          },
          React.createElement(
            "div",
            { className: "relative h-14 w-14 rounded-full" },
            React.createElement(image_1.default, {
              width: 56,
              height: 56,
              src: chat.avatar,
              alt: "User",
              style: {
                width: "auto",
                height: "auto",
              },
            }),
            React.createElement("span", {
              className: `absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`} `,
            }),
          ),
          React.createElement(
            "div",
            { className: "flex flex-1 items-center justify-between" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "h5",
                { className: "font-medium text-black dark:text-white" },
                chat.name,
              ),
              React.createElement(
                "p",
                null,
                React.createElement(
                  "span",
                  { className: "text-sm text-black dark:text-white" },
                  chat.text,
                ),
                React.createElement(
                  "span",
                  { className: "text-xs" },
                  " . ",
                  chat.time,
                  " min",
                ),
              ),
            ),
            chat.textCount !== 0 &&
              React.createElement(
                "div",
                {
                  className:
                    "flex h-6 w-6 items-center justify-center rounded-full bg-primary",
                },
                React.createElement(
                  "span",
                  { className: "text-sm font-medium text-white" },
                  " ",
                  chat.textCount,
                ),
              ),
          ),
        ),
      ),
    ),
  );
};
exports.default = ChatCard;
