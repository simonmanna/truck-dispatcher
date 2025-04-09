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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const MultiSelect = ({ id }) => {
    const [options, setOptions] = (0, react_1.useState)([]);
    const [selected, setSelected] = (0, react_1.useState)([]);
    const [show, setShow] = (0, react_1.useState)(false);
    const dropdownRef = (0, react_1.useRef)(null);
    const trigger = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const loadOptions = () => {
            const select = document.getElementById(id);
            if (select) {
                const newOptions = [];
                for (let i = 0; i < select.options.length; i++) {
                    newOptions.push({
                        value: select.options[i].value,
                        text: select.options[i].innerText,
                        selected: select.options[i].hasAttribute("selected"),
                    });
                }
                setOptions(newOptions);
            }
        };
        loadOptions();
    }, [id]);
    const open = () => {
        setShow(true);
    };
    const isOpen = () => {
        return show === true;
    };
    const select = (index, event) => {
        const newOptions = [...options];
        if (!newOptions[index].selected) {
            newOptions[index].selected = true;
            newOptions[index].element = event.currentTarget;
            setSelected([...selected, index]);
        }
        else {
            const selectedIndex = selected.indexOf(index);
            if (selectedIndex !== -1) {
                newOptions[index].selected = false;
                setSelected(selected.filter((i) => i !== index));
            }
        }
        setOptions(newOptions);
    };
    const remove = (index) => {
        const newOptions = [...options];
        const selectedIndex = selected.indexOf(index);
        if (selectedIndex !== -1) {
            newOptions[index].selected = false;
            setSelected(selected.filter((i) => i !== index));
            setOptions(newOptions);
        }
    };
    const selectedValues = () => {
        return selected.map((option) => options[option].value);
    };
    (0, react_1.useEffect)(() => {
        const clickHandler = ({ target }) => {
            if (!dropdownRef.current)
                return;
            if (!show ||
                dropdownRef.current.contains(target) ||
                trigger.current.contains(target))
                return;
            setShow(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });
    return (react_1.default.createElement("div", { className: "relative z-50" },
        react_1.default.createElement("label", { className: "mb-3 block text-sm font-medium text-black dark:text-white" }, "Multiselect Dropdown"),
        react_1.default.createElement("div", null,
            react_1.default.createElement("select", { className: "hidden", id: id },
                react_1.default.createElement("option", { value: "1" }, "Option 2"),
                react_1.default.createElement("option", { value: "2" }, "Option 3"),
                react_1.default.createElement("option", { value: "3" }, "Option 4"),
                react_1.default.createElement("option", { value: "4" }, "Option 5")),
            react_1.default.createElement("div", { className: "flex flex-col items-center" },
                react_1.default.createElement("input", { name: "values", type: "hidden", defaultValue: selectedValues() }),
                react_1.default.createElement("div", { className: "relative z-20 inline-block w-full" },
                    react_1.default.createElement("div", { className: "relative flex flex-col items-center" },
                        react_1.default.createElement("div", { ref: trigger, onClick: open, className: "w-full" },
                            react_1.default.createElement("div", { className: "mb-2 flex rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" },
                                react_1.default.createElement("div", { className: "flex flex-auto flex-wrap gap-3" },
                                    selected.map((index) => (react_1.default.createElement("div", { key: index, className: "my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30" },
                                        react_1.default.createElement("div", { className: "max-w-full flex-initial" }, options[index].text),
                                        react_1.default.createElement("div", { className: "flex flex-auto flex-row-reverse" },
                                            react_1.default.createElement("div", { onClick: () => remove(index), className: "cursor-pointer pl-2 hover:text-danger" },
                                                react_1.default.createElement("svg", { className: "fill-current", role: "button", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                                    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z", fill: "currentColor" }))))))),
                                    selected.length === 0 && (react_1.default.createElement("div", { className: "flex-1" },
                                        react_1.default.createElement("input", { placeholder: "Select an option", className: "h-full w-full appearance-none bg-transparent p-1 px-2 outline-none", defaultValue: selectedValues() })))),
                                react_1.default.createElement("div", { className: "flex w-8 items-center py-1 pl-1 pr-1" },
                                    react_1.default.createElement("button", { type: "button", onClick: open, className: "h-6 w-6 cursor-pointer outline-none focus:outline-none" },
                                        react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                            react_1.default.createElement("g", { opacity: "0.8" },
                                                react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z", fill: "#637381" }))))))),
                        react_1.default.createElement("div", { className: "w-full px-4" },
                            react_1.default.createElement("div", { className: `max-h-select absolute left-0 top-full z-40 w-full overflow-y-auto rounded bg-white shadow dark:bg-form-input ${isOpen() ? "" : "hidden"}`, ref: dropdownRef, onFocus: () => setShow(true), onBlur: () => setShow(false) },
                                react_1.default.createElement("div", { className: "flex w-full flex-col" }, options.map((option, index) => (react_1.default.createElement("div", { key: index },
                                    react_1.default.createElement("div", { className: "w-full cursor-pointer rounded-t border-b border-stroke hover:bg-primary/5 dark:border-form-strokedark", onClick: (event) => select(index, event) },
                                        react_1.default.createElement("div", { className: `relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 ${option.selected ? "border-primary" : ""}` },
                                            react_1.default.createElement("div", { className: "flex w-full items-center" },
                                                react_1.default.createElement("div", { className: "mx-2 leading-6" }, option.text))))))))))))))));
};
exports.default = MultiSelect;
