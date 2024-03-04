/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Footer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"flex w-full  bg-blue-100 py-2 px-10 justify-center font-mono\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"2024 - GoQuiz - Chas Academy\"\n        }, void 0, false, {\n            fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Footer.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Footer.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsU0FBUztJQUNiLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ0M7c0JBQUU7Ozs7Ozs7Ozs7O0FBR1Q7QUFFQSxpRUFBZUgsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcXVpei8uL2NvbXBvbmVudHMvRm9vdGVyLmpzP2UxYWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgIGJnLWJsdWUtMTAwIHB5LTIgcHgtMTAganVzdGlmeS1jZW50ZXIgZm9udC1tb25vXCI+XG4gICAgICA8cD4yMDI0IC0gR29RdWl6IC0gQ2hhcyBBY2FkZW15PC9wPlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sIm5hbWVzIjpbIkZvb3RlciIsImZvb3RlciIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Header = ()=>{\n    // State to check existence of .env.local\n    const [fileExist, setFileExist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // On mount we check if the .env.local is present\n        async function checkEnv() {\n            const res = await fetch(\"/api/envHandler\");\n            const data = await res.json();\n            setFileExist(data.fileExists);\n        }\n        checkEnv();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex w-full h-[40px]  bg-blue-100 py-2 px-10 justify-between font-mono\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"hover:text-gray-500 hover:underline\",\n                children: \"GOQUIZ\"\n            }, void 0, false, {\n                fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Header.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between gap-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"hover:text-gray-500 hover:underline\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Header.js\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, undefined),\n                    fileExist ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/adminpage\",\n                        className: \"hover:text-gray-500 hover:underline\",\n                        children: \"Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Header.js\",\n                        lineNumber: 30,\n                        columnNumber: 6\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        onClick: ()=>alert(\"You are missing the .env.local file.\"),\n                        className: \"hover:text-gray-500 hover:underline\",\n                        children: \"Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Header.js\",\n                        lineNumber: 34,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Header.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/components/Header.js\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBRTVDLE1BQU1HLFNBQVM7SUFDZCx5Q0FBeUM7SUFDekMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNULGlEQUFpRDtRQUNqRCxlQUFlSztZQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtZQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7WUFDM0JMLGFBQWFJLEtBQUtFLFVBQVU7UUFDN0I7UUFDQUw7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ007UUFBT0MsV0FBVTs7MEJBQ2pCLDhEQUFDYixrREFBSUE7Z0JBQUNjLE1BQUs7Z0JBQUlELFdBQVU7MEJBQXNDOzs7Ozs7MEJBSS9ELDhEQUFDRTtnQkFBSUYsV0FBVTs7a0NBQ2QsOERBQUNiLGtEQUFJQTt3QkFBQ2MsTUFBSzt3QkFBSUQsV0FBVTtrQ0FBc0M7Ozs7OztvQkFJOURULDBCQUNBLDhEQUFDSixrREFBSUE7d0JBQUNjLE1BQUs7d0JBQWFELFdBQVU7a0NBQXNDOzs7OztrREFJeEUsOERBQUNiLGtEQUFJQTt3QkFBQ2MsTUFBSzt3QkFBSUUsU0FBUyxJQUFNQyxNQUFNO3dCQUF5Q0osV0FBVTtrQ0FBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sSTtBQUVBLGlFQUFlVixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29xdWl6Ly4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblx0Ly8gU3RhdGUgdG8gY2hlY2sgZXhpc3RlbmNlIG9mIC5lbnYubG9jYWxcblx0Y29uc3QgW2ZpbGVFeGlzdCwgc2V0RmlsZUV4aXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIE9uIG1vdW50IHdlIGNoZWNrIGlmIHRoZSAuZW52LmxvY2FsIGlzIHByZXNlbnRcblx0XHRhc3luYyBmdW5jdGlvbiBjaGVja0VudigpIHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9lbnZIYW5kbGVyXCIpO1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRzZXRGaWxlRXhpc3QoZGF0YS5maWxlRXhpc3RzKTtcblx0XHR9XG5cdFx0Y2hlY2tFbnYoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLVs0MHB4XSAgYmctYmx1ZS0xMDAgcHktMiBweC0xMCBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vXCI+XG5cdFx0XHQ8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG5cdFx0XHRcdEdPUVVJWlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC03XCI+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5cblx0XHRcdFx0XHRIb21lXG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0ey8qIElmIC5lbnYubG9jYWwgaXMgcHJlc2VudCB3ZSBzaG93IGFkbWluLCBpZiBub3QgaXRzIGhpZGRlbi4gKi99XG5cdFx0XHRcdHtmaWxlRXhpc3QgPyAoXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hZG1pbnBhZ2VcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktNTAwIGhvdmVyOnVuZGVybGluZVwiPlxuXHRcdFx0XHRcdFx0QWRtaW5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXsoKSA9PiBhbGVydChcIllvdSBhcmUgbWlzc2luZyB0aGUgLmVudi5sb2NhbCBmaWxlLlwiKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5cblx0XHRcdFx0XHRcdEFkbWluXG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiZmlsZUV4aXN0Iiwic2V0RmlsZUV4aXN0IiwiY2hlY2tFbnYiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZmlsZUV4aXN0cyIsImhlYWRlciIsImNsYXNzTmFtZSIsImhyZWYiLCJkaXYiLCJvbkNsaWNrIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./context/QuizContext.js":
/*!********************************!*\
  !*** ./context/QuizContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizContext: () => (/* binding */ QuizContext),\n/* harmony export */   QuizProvider: () => (/* binding */ QuizProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst QuizContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst QuizProvider = ({ children })=>{\n    const [stateQuestions, setStateQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        questions: []\n    });\n    const [isSending, setIsSending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchQuestions = async ()=>{\n        try {\n            const response = await fetch(\"/api/store\");\n            const data = await response.json();\n            setStateQuestions(data);\n        } catch (error) {\n            console.error(\"Error fetching questions:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuizContext.Provider, {\n        value: {\n            stateQuestions,\n            setStateQuestions,\n            isSending,\n            setIsSending,\n            fetchQuestions\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/context/QuizContext.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1F1aXpDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFekMsTUFBTUUsNEJBQWNGLG9EQUFhQSxHQUFHO0FBRXBDLE1BQU1HLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxXQUFXLEVBQUU7SUFBQztJQUVyRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVMsaUJBQWlCO1FBQ3JCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDUixrQkFBa0JPO1FBQ3BCLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUEscUJBQ0UsOERBQUNiLFlBQVllLFFBQVE7UUFDbkJDLE9BQU87WUFDTGI7WUFDQUM7WUFDQUU7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQ047Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3F1aXovLi9jb250ZXh0L1F1aXpDb250ZXh0LmpzPzQwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFF1aXpDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgUXVpelByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGVRdWVzdGlvbnMsIHNldFN0YXRlUXVlc3Rpb25zXSA9IHVzZVN0YXRlKHsgcXVlc3Rpb25zOiBbXSB9KTtcblxuICBjb25zdCBbaXNTZW5kaW5nLCBzZXRJc1NlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoUXVlc3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdG9yZVwiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRTdGF0ZVF1ZXN0aW9ucyhkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHF1ZXN0aW9uczpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxRdWl6Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc3RhdGVRdWVzdGlvbnMsXG4gICAgICAgIHNldFN0YXRlUXVlc3Rpb25zLFxuICAgICAgICBpc1NlbmRpbmcsXG4gICAgICAgIHNldElzU2VuZGluZyxcbiAgICAgICAgZmV0Y2hRdWVzdGlvbnMsIC8vIG5ldyBmZXRjaFF1ZXN0aW9ucyBmdW5jdGlvblxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9RdWl6Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiUXVpekNvbnRleHQiLCJRdWl6UHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlUXVlc3Rpb25zIiwic2V0U3RhdGVRdWVzdGlvbnMiLCJxdWVzdGlvbnMiLCJpc1NlbmRpbmciLCJzZXRJc1NlbmRpbmciLCJmZXRjaFF1ZXN0aW9ucyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/QuizContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _context_QuizContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/QuizContext */ \"./context/QuizContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_QuizContext__WEBPACK_IMPORTED_MODULE_3__.QuizProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ozayozdemir/my-app/chas/goquizvercel/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ1k7QUFDdkI7QUFFOUIsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsOERBQVlBOzswQkFDWCw4REFBQ0QsMERBQU1BOzs7OzswQkFDUCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0wsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0FBRUEsaUVBQWVHLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3F1aXovLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgUXVpelByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9RdWl6Q29udGV4dFwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFF1aXpQcm92aWRlcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1F1aXpQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwiUXVpelByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();