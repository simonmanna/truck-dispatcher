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
const ClickOutside = ({ children, exceptionRef, onClick, className, }) => {
    const wrapperRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const handleClickListener = (event) => {
            let clickedInside = false;
            if (exceptionRef) {
                clickedInside =
                    (wrapperRef.current &&
                        wrapperRef.current.contains(event.target)) ||
                        (exceptionRef.current && exceptionRef.current === event.target) ||
                        (exceptionRef.current &&
                            exceptionRef.current.contains(event.target));
            }
            else {
                clickedInside =
                    wrapperRef.current &&
                        wrapperRef.current.contains(event.target);
            }
            if (!clickedInside)
                onClick();
        };
        document.addEventListener("mousedown", handleClickListener);
        return () => {
            document.removeEventListener("mousedown", handleClickListener);
        };
    }, [exceptionRef, onClick]);
    return (react_1.default.createElement("div", { ref: wrapperRef, className: `${className || ""}` }, children));
};
exports.default = ClickOutside;
