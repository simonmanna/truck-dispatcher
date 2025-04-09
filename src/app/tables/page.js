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
  require("@/components/Breadcrumbs/Breadcrumb"),
);
const TableOne_1 = __importDefault(require("@/components/Tables/TableOne"));
const TableThree_1 = __importDefault(require("@/components/Tables/TableThree"));
const TableTwo_1 = __importDefault(require("@/components/Tables/TableTwo"));
const DefaultLayout_1 = __importDefault(
  require("@/components/Layouts/DefaultLayout"),
);
exports.metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
const TablesPage = () => {
  return React.createElement(
    DefaultLayout_1.default,
    null,
    React.createElement(Breadcrumb_1.default, { pageName: "Tables" }),
    React.createElement(
      "div",
      { className: "flex flex-col gap-10" },
      React.createElement(TableOne_1.default, null),
      React.createElement(TableTwo_1.default, null),
      React.createElement(TableThree_1.default, null),
    ),
  );
};
exports.default = TablesPage;
