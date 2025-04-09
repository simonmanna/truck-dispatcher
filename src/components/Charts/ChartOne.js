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
const react_1 = __importDefault(require("react"));
const dynamic_1 = __importDefault(require("next/dynamic"));
const ReactApexChart = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("react-apexcharts"))), {
    ssr: false,
});
const options = {
    legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        fontFamily: "Satoshi, sans-serif",
        height: 335,
        type: "area",
        dropShadow: {
            enabled: true,
            color: "#623CEA14",
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },
        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: "#fff",
        strokeColors: ["#3056D3", "#80CAEE"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: "0px",
            },
        },
        min: 0,
        max: 100,
    },
};
const ChartOne = () => {
    const series = [
        {
            name: "Product One",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
        },
        {
            name: "Product Two",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
        },
    ];
    return (react_1.default.createElement("div", { className: "col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap" },
            react_1.default.createElement("div", { className: "flex w-full flex-wrap gap-3 sm:gap-5" },
                react_1.default.createElement("div", { className: "flex min-w-47.5" },
                    react_1.default.createElement("span", { className: "mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary" },
                        react_1.default.createElement("span", { className: "block h-2.5 w-full max-w-2.5 rounded-full bg-primary" })),
                    react_1.default.createElement("div", { className: "w-full" },
                        react_1.default.createElement("p", { className: "font-semibold text-primary" }, "Total Revenue"),
                        react_1.default.createElement("p", { className: "text-sm font-medium" }, "12.04.2022 - 12.05.2022"))),
                react_1.default.createElement("div", { className: "flex min-w-47.5" },
                    react_1.default.createElement("span", { className: "mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary" },
                        react_1.default.createElement("span", { className: "block h-2.5 w-full max-w-2.5 rounded-full bg-secondary" })),
                    react_1.default.createElement("div", { className: "w-full" },
                        react_1.default.createElement("p", { className: "font-semibold text-secondary" }, "Total Sales"),
                        react_1.default.createElement("p", { className: "text-sm font-medium" }, "12.04.2022 - 12.05.2022")))),
            react_1.default.createElement("div", { className: "flex w-full max-w-45 justify-end" },
                react_1.default.createElement("div", { className: "inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4" },
                    react_1.default.createElement("button", { className: "rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark" }, "Day"),
                    react_1.default.createElement("button", { className: "rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark" }, "Week"),
                    react_1.default.createElement("button", { className: "rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark" }, "Month")))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { id: "chartOne", className: "-ml-5" },
                react_1.default.createElement(ReactApexChart, { options: options, series: series, type: "area", height: 350, width: "100%" })))));
};
exports.default = ChartOne;
