"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const react_1 = __importDefault(require("react"));
const FormElements_1 = __importDefault(
  require("../../../components/FormElements"),
);
const DefaultLayout_1 = __importDefault(
  require("../../../components/Layouts/DefaultLayout"),
);
exports.metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
const FormElementsPage = () => {
  return react_1.default.createElement(
    DefaultLayout_1.default,
    null,
    react_1.default.createElement(FormElements_1.default, null),
  );
};
exports.default = FormElementsPage;
