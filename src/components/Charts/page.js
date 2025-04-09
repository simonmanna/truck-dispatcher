"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Breadcrumb_1 = __importDefault(require("@/components/Breadcrumbs/Breadcrumb"));
const ChartOne_1 = __importDefault(require("@/components/Charts/ChartOne"));
const ChartTwo_1 = __importDefault(require("@/components/Charts/ChartTwo"));
const dynamic_1 = __importDefault(require("next/dynamic"));
const react_1 = __importDefault(require("react"));
const ChartThree = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/Charts/ChartThree"))), {
    ssr: false,
});
const Chart = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Breadcrumb_1.default, { pageName: "Chart" }),
        react_1.default.createElement("div", { className: "grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5" },
            react_1.default.createElement(ChartOne_1.default, null),
            react_1.default.createElement(ChartTwo_1.default, null),
            react_1.default.createElement(ChartThree, null))));
};
exports.default = Chart;
