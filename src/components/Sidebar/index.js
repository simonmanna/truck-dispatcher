"use client";
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navigation_1 = require("next/navigation");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const SidebarItem_1 = __importDefault(
  require("@/components/Sidebar/SidebarItem"),
);
const ClickOutside_1 = __importDefault(require("@/components/ClickOutside"));
const useLocalStorage_1 = __importDefault(require("@/hooks/useLocalStorage"));

const menuGroups = [
  {
    name: "Truck Dispatcher",
    menuItems: [
      {
        // Dashboard: A grid-like icon representing an overview
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M2 2H8V8H2V2ZM10 2H16V8H10V2ZM2 10H8V16H2V10ZM10 10H16V16H10V10Z",
            fill: "",
          }),
        ),
        label: "Dashboards",
        route: "/dasboard",
      },
      {
        // Orders: A truck icon for transportation orders
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M14 5H10V3C10 2.45 9.55 2 9 2H5C4.45 2 4 2.45 4 3V5H2C1.45 5 1 5.45 1 6V12C1 12.55 1.45 13 2 13H4.17C4.36 13.59 4.92 14 5.5 14C6.08 14 6.64 13.59 6.83 13H11.17C11.36 13.59 11.92 14 12.5 14C13.08 14 13.64 13.59 13.83 13H16C16.55 13 17 12.55 17 12V6C17 5.45 16.55 5 16 5H14ZM5.5 12.5C5.22 12.5 5 12.28 5 12C5 11.72 5.22 11.5 5.5 11.5C5.78 11.5 6 11.72 6 12C6 12.28 5.78 12.5 5.5 12.5ZM12.5 12.5C12.22 12.5 12 12.28 12 12C12 11.72 12.22 11.5 12.5 11.5C12.78 11.5 13 11.72 13 12C13 12.28 12.78 12.5 12.5 12.5Z",
            fill: "",
          }),
        ),
        label: "Orders",
        route: "/orders",
      },
      {
        // Drivers: A steering wheel icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M9 1C4.58 1 1 4.58 1 9C1 13.42 4.58 17 9 17C13.42 17 17 13.42 17 9C17 4.58 13.42 1 9 1ZM9 15C5.69 15 3 12.31 3 9C3 5.69 5.69 3 9 3C12.31 3 15 5.69 15 9C15 12.31 12.31 15 9 15ZM12 6H6V8H12V6ZM8 12H10V10H8V12Z",
            fill: "",
          }),
        ),
        label: "Drivers",
        route: "/drivers",
      },
      {
        // Customers: A person icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M9 9C11.21 9 13 7.21 13 5C13 2.79 11.21 1 9 1C6.79 1 5 2.79 5 5C5 7.21 6.79 9 9 9ZM9 11C6.33 11 1 12.34 1 15V17H17V15C17 12.34 11.67 11 9 11Z",
            fill: "",
          }),
        ),
        label: "Customers",
        route: "/customers",
      },
      {
        // Dispatches: A route/path icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M12 2L14 4L12 6V4H6V6L4 4L6 2H12ZM4 12H12V14L14 12L12 10V12H4V10L2 12L4 14V12Z",
            fill: "",
          }),
        ),
        label: "Dispatches",
        route: "/dispatches",
      },
      {
        // Trucks: A truck outline icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M15 4H11V2H3V8H1V12H3.5C3.5 12.83 4.17 13.5 5 13.5C5.83 13.5 6.5 12.83 6.5 12H11.5C11.5 12.83 12.17 13.5 13 13.5C13.83 13.5 14.5 12.83 14.5 12H17V8L15 4ZM5 12C5.28 12 5.5 11.78 5.5 11.5C5.5 11.22 5.28 11 5 11C4.72 11 4.5 11.22 4.5 11.5C4.5 11.78 4.72 12 5 12ZM13 12C13.28 12 13.5 11.78 13.5 11.5C13.5 11.22 13.28 11 13 11C12.72 11 12.5 11.22 12.5 11.5C12.5 11.78 12.72 12 13 12Z",
            fill: "",
          }),
        ),
        label: "Trucks",
        route: "/trucks",
      },
      {
        // Invoices: A dollar/document icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M14 2H4C3.45 2 3 2.45 3 3V15C3 15.55 3.45 16 4 16H14C14.55 16 15 15.55 15 15V3C15 2.45 14.55 2 14 2ZM13 14H5V4H13V14ZM9 6H7V8H9V6ZM11 10H7V12H11V10Z",
            fill: "",
          }),
        ),
        label: "Invoices",
        route: "/invoices",
      },
      {
        // Maintenance: A wrench icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M14.71 6.71C15.1 6.32 15.1 5.69 14.71 5.3L12.7 3.29C12.31 2.9 11.68 2.9 11.29 3.29L9.59 5L13 8.41L14.71 6.71ZM4 8.41L5.71 6.71C6.1 6.32 6.1 5.69 5.71 5.3L3.7 3.29C3.31 2.9 2.68 2.9 2.29 3.29L0.59 5L4 8.41ZM8.41 13L6.71 14.71C6.32 15.1 5.69 15.1 5.3 14.71L3.29 12.7C2.9 12.31 2.9 11.68 3.29 11.29L5 9.59L8.41 13ZM13 4L9.59 0.59L11.29 2.29C11.68 2.68 12.31 2.68 12.7 2.29L14.71 4.3C15.1 4.69 15.1 5.32 14.71 5.71L13 4Z",
            fill: "",
          }),
        ),
        label: "Maintenance",
        route: "/maintenance",
      },
      {
        // Calendar & Reminders: A calendar icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M14 2H12V1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1V2H8V1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1V2H4C3.45 2 3 2.45 3 3V15C3 15.55 3.45 16 4 16H14C14.55 16 15 15.55 15 15V3C15 2.45 14.55 2 14 2ZM13 14H5V5H13V14Z",
            fill: "",
          }),
        ),
        label: "Calendar & Reminders",
        route: "/calendar",
      },
      {
        // Expenses: A money/coin icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M9 1C4.58 1 1 4.58 1 9C1 13.42 4.58 17 9 17C13.42 17 17 13.42 17 9C17 4.58 13.42 1 9 1ZM9 15C5.69 15 3 12.31 3 9C3 5.69 5.69 3 9 3C12.31 3 15 5.69 15 9C15 12.31 12.31 15 9 15ZM10 6H8V7H10V6ZM11 8H7V10H11V8ZM10 11H8V12H10V11Z",
            fill: "",
          }),
        ),
        label: "Expenses",
        route: "/expenses",
      },
      {
        // Fuel: A fuel pump icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M13 1H3C2.45 1 2 1.45 2 2V11C2 11.55 2.45 12 3 12H4V15C4 15.55 4.45 16 5 16H11C11.55 16 12 15.55 12 15V12H13C13.55 12 14 11.55 14 11V5L16 3V10C16 10.55 16.45 11 17 11V2C17 1.45 16.55 1 16 1H13ZM10 14H6V11H10V14ZM12 10H3V3H12V10Z",
            fill: "",
          }),
        ),
        label: "Fuel",
        route: "/fuel",
      },
      {
        // Messages: An envelope icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M16 3H2C1.45 3 1 3.45 1 4V14C1 14.55 1.45 15 2 15H16C16.55 15 17 14.55 17 14V4C17 3.45 16.55 3 16 3ZM15 5L9 9L3 5V4L9 8L15 4V5Z",
            fill: "",
          }),
        ),
        label: "Messages",
        route: "/messages",
      },
      {
        // Documents: A document/file icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M14 2H4C3.45 2 3 2.45 3 3V15C3 15.55 3.45 16 4 16H14C14.55 16 15 15.55 15 15V3C15 2.45 14.55 2 14 2ZM13 14H5V4H13V14Z",
            fill: "",
          }),
        ),
        label: "Documents",
        route: "/documents",
      },
      {
        // Settings: A gear icon
        icon: react_1.default.createElement(
          "svg",
          {
            className: "fill-current",
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          react_1.default.createElement("path", {
            d: "M9 11.5C10.38 11.5 11.5 10.38 11.5 9C11.5 7.62 10.38 6.5 9 6.5C7.62 6.5 6.5 7.62 6.5 9C6.5 10.38 7.62 11.5 9 11.5ZM14.83 6.94L13.41 5.52C13.81 4.78 14 4 14 3.18L15.36 3.64C15.67 4.34 15.83 5.11 15.83 5.89C15.83 6.17 15.81 6.45 15.77 6.72L14.83 6.94ZM3.18 3.64L4.54 3.18C4.74 3.94 5.07 4.66 5.52 5.29L4.1 6.71C3.74 6.06 3.54 5.33 3.54 4.58C3.54 4.31 3.56 4.04 3.61 3.77L3.18 3.64ZM14 9C14 9.82 13.81 10.6 13.41 11.34L14.83 12.76C15.19 12.11 15.39 11.38 15.39 10.63C15.39 10.36 15.37 10.09 15.32 9.82L14 9ZM3.59 9.18C3.54 9.45 3.52 9.72 3.52 10C3.52 10.78 3.71 11.56 4.11 12.3L2.69 13.72C2.33 13.07 2.13 12.34 2.13 11.59C2.13 11.32 2.15 11.05 2.2 10.78L3.59 9.18ZM9 14.5C7.62 14.5 6.5 13.38 6.5 12H11.5C11.5 13.38 10.38 14.5 9 14.5Z",
            fill: "",
          }),
        ),
        label: "Settings",
        route: "/settings",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = (0, navigation_1.usePathname)();
  const [pageName, setPageName] = (0, useLocalStorage_1.default)(
    "selectedMenu",
    "dashboard",
  );
  return react_1.default.createElement(
    ClickOutside_1.default,
    { onClick: () => setSidebarOpen(false) },
    react_1.default.createElement(
      "aside",
      {
        className: `fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`,
      },
      react_1.default.createElement(
        "div",
        {
          className:
            "flex items-center justify-between gap-0 px-2 py-0.5 lg:py-0.5",
        },
        react_1.default.createElement(
          link_1.default,
          { href: "/" },
          react_1.default.createElement(image_1.default, {
            width: 266,
            height: 52,
            src: "/images/logo/trucking3.png",
            alt: "Logo",
            priority: true,
          }),
        ),
        react_1.default.createElement(
          "button",
          {
            onClick: () => setSidebarOpen(!sidebarOpen),
            "aria-controls": "sidebar",
            className: "block lg:hidden",
          },
          react_1.default.createElement(
            "svg",
            {
              className: "fill-current",
              width: "20",
              height: "18",
              viewBox: "0 0 20 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            react_1.default.createElement("path", {
              d: "M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",
              fill: "",
            }),
          ),
        ),
      ),
      react_1.default.createElement(
        "div",
        {
          className:
            "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear",
        },
        react_1.default.createElement(
          "nav",
          { className: "mt-1 px-4 py-2 lg:mt-1 lg:px-6" },
          menuGroups.map((group, groupIndex) =>
            react_1.default.createElement(
              "div",
              { key: groupIndex },
              react_1.default.createElement(
                "h2",
                { className: "mb-4 ml-1 text-sm font-semibold text-bodydark2" },
                group.name,
              ),
              react_1.default.createElement(
                "ul",
                { className: "mb-2 flex flex-col gap-1" },
                group.menuItems.map((menuItem, menuIndex) =>
                  react_1.default.createElement(SidebarItem_1.default, {
                    key: menuIndex,
                    item: menuItem,
                    pageName: pageName,
                    setPageName: setPageName,
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
exports.default = Sidebar;
