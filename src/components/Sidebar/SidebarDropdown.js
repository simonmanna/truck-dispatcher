"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const SidebarDropdown = ({ item }) => {
    const pathname = (0, navigation_1.usePathname)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6" }, item.map((item, index) => (react_1.default.createElement("li", { key: index },
            react_1.default.createElement(link_1.default, { href: item.route, className: `group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === item.route ? "text-white" : ""}` }, item.label)))))));
};
exports.default = SidebarDropdown;
