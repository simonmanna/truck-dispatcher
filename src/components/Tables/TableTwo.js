"use strict";
import React from "react";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const productData = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];
const TableTwo = () => {
  return React.createElement(
    "div",
    {
      className:
        "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
    },
    React.createElement(
      "div",
      { className: "px-4 py-6 md:px-6 xl:px-7.5" },
      React.createElement(
        "h4",
        { className: "text-xl font-semibold text-black dark:text-white" },
        "Top Products",
      ),
    ),
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5",
      },
      React.createElement(
        "div",
        { className: "col-span-3 flex items-center" },
        React.createElement("p", { className: "font-medium" }, "Product Name"),
      ),
      React.createElement(
        "div",
        { className: "col-span-2 hidden items-center sm:flex" },
        React.createElement("p", { className: "font-medium" }, "Category"),
      ),
      React.createElement(
        "div",
        { className: "col-span-1 flex items-center" },
        React.createElement("p", { className: "font-medium" }, "Price"),
      ),
      React.createElement(
        "div",
        { className: "col-span-1 flex items-center" },
        React.createElement("p", { className: "font-medium" }, "Sold"),
      ),
      React.createElement(
        "div",
        { className: "col-span-1 flex items-center" },
        React.createElement("p", { className: "font-medium" }, "Profit"),
      ),
    ),
    productData.map((product, key) =>
      React.createElement(
        "div",
        {
          className:
            "grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5",
          key: key,
        },
        React.createElement(
          "div",
          { className: "col-span-3 flex items-center" },
          React.createElement(
            "div",
            { className: "flex flex-col gap-4 sm:flex-row sm:items-center" },
            React.createElement(
              "div",
              { className: "h-12.5 w-15 rounded-md" },
              React.createElement(image_1.default, {
                src: product.image,
                width: 60,
                height: 50,
                alt: "Product",
              }),
            ),
            React.createElement(
              "p",
              { className: "text-sm text-black dark:text-white" },
              product.name,
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "col-span-2 hidden items-center sm:flex" },
          React.createElement(
            "p",
            { className: "text-sm text-black dark:text-white" },
            product.category,
          ),
        ),
        React.createElement(
          "div",
          { className: "col-span-1 flex items-center" },
          React.createElement(
            "p",
            { className: "text-sm text-black dark:text-white" },
            "$",
            product.price,
          ),
        ),
        React.createElement(
          "div",
          { className: "col-span-1 flex items-center" },
          React.createElement(
            "p",
            { className: "text-sm text-black dark:text-white" },
            product.sold,
          ),
        ),
        React.createElement(
          "div",
          { className: "col-span-1 flex items-center" },
          React.createElement(
            "p",
            { className: "text-sm text-meta-3" },
            "$",
            product.profit,
          ),
        ),
      ),
    ),
  );
};
exports.default = TableTwo;
