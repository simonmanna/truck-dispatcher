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
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        fontFamily: "Satoshi, sans-serif",
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: "25%",
                    },
                },
            },
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "25%",
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",
        markers: {
            radius: 99,
        },
    },
    fill: {
        opacity: 1,
    },
};
const ChartTwo = () => {
    const series = [
        {
            name: "Sales",
            data: [44, 55, 41, 67, 22, 43, 65],
        },
        {
            name: "Revenue",
            data: [13, 23, 20, 8, 13, 27, 15],
        },
    ];
    return (react_1.default.createElement("div", { className: "col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4" },
        react_1.default.createElement("div", { className: "mb-4 justify-between gap-4 sm:flex" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h4", { className: "text-xl font-semibold text-black dark:text-white" }, "Profit this week")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "relative z-20 inline-block" },
                    react_1.default.createElement("select", { name: "#", id: "#", className: "relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none" },
                        react_1.default.createElement("option", { value: "", className: "dark:bg-boxdark" }, "This Week"),
                        react_1.default.createElement("option", { value: "", className: "dark:bg-boxdark" }, "Last Week")),
                    react_1.default.createElement("span", { className: "absolute right-3 top-1/2 z-10 -translate-y-1/2" },
                        react_1.default.createElement("svg", { width: "10", height: "6", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z", fill: "#637381" }),
                            react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z", fill: "#637381" })))))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { id: "chartTwo", className: "-mb-9 -ml-5" },
                react_1.default.createElement(ReactApexChart, { options: options, series: series, type: "bar", height: 350, width: "100%" })))));
};
exports.default = ChartTwo;
