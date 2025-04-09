"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Calender_1 = __importDefault(require("@/components/Calender"));
const DefaultLayout_1 = __importDefault(
  require("@/components/Layouts/DefaultLayout"),
);
exports.metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};
const CalendarPage = () => {
  return React.createElement(
    DefaultLayout_1.default,
    null,
    React.createElement(Calender_1.default, null),
  );
};
exports.default = CalendarPage;
