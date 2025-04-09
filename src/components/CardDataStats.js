"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardDataStats = ({ title, total, rate, levelUp, levelDown, children, }) => {
    return (react_1.default.createElement("div", { className: "rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark" },
        react_1.default.createElement("div", { className: "flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4" }, children),
        react_1.default.createElement("div", { className: "mt-4 flex items-end justify-between" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h4", { className: "text-title-md font-bold text-black dark:text-white" }, total),
                react_1.default.createElement("span", { className: "text-sm font-medium" }, title)),
            react_1.default.createElement("span", { className: `flex items-center gap-1 text-sm font-medium ${levelUp && "text-meta-3"} ${levelDown && "text-meta-5"} ` },
                rate,
                levelUp && (react_1.default.createElement("svg", { className: "fill-meta-3", width: "10", height: "11", viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z", fill: "" }))),
                levelDown && (react_1.default.createElement("svg", { className: "fill-meta-5", width: "10", height: "11", viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z", fill: "" })))))));
};
exports.default = CardDataStats;
