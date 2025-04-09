"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const page_1 = __importDefault(require("@/components/Charts/page"));
const DefaultLayout_1 = __importDefault(require("@/components/Layouts/DefaultLayout"));
const react_1 = __importDefault(require("react"));
exports.metadata = {
    title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
const BasicChartPage = () => {
    return (react_1.default.createElement(DefaultLayout_1.default, null,
        react_1.default.createElement(page_1.default, null)));
};
exports.default = BasicChartPage;
