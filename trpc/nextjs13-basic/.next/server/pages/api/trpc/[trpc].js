"use strict";
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
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@trpc/server");

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@trpc/server/adapters/next");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("iron-session");

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ "(api)/./src/pages/api/ironSession/ironSession.config.ts":
/*!*********************************************************!*\
  !*** ./src/pages/api/ironSession/ironSession.config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sessionConfig\": () => (/* binding */ sessionConfig)\n/* harmony export */ });\n// This is where we specify the typings of req.session.*\nconst sessionConfig = {\n    cookieName: \"myapp_cookiename\",\n    password: \"complex_password_at_least_32_characters_long\",\n    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2lyb25TZXNzaW9uL2lyb25TZXNzaW9uLmNvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0Esd0RBQXdEO0FBVWpELE1BQU1BLGdCQUFnQjtJQUMzQkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1YsNEZBQTRGO0lBQzVGQyxlQUFlO1FBQ2JDLFFBQVFDLGtCQUF5QjtJQUNuQztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMxMy1iYXNpYy8uL3NyYy9wYWdlcy9hcGkvaXJvblNlc3Npb24vaXJvblNlc3Npb24uY29uZmlnLnRzPzk5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBUaGlzIGlzIHdoZXJlIHdlIHNwZWNpZnkgdGhlIHR5cGluZ3Mgb2YgcmVxLnNlc3Npb24uKlxuZGVjbGFyZSBtb2R1bGUgXCJpcm9uLXNlc3Npb25cIiB7XG4gIGludGVyZmFjZSBJcm9uU2Vzc2lvbkRhdGEge1xuICAgIHVzZXI/OiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBlbWFpbDogc3RyaW5nO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25Db25maWcgPSB7XG4gIGNvb2tpZU5hbWU6IFwibXlhcHBfY29va2llbmFtZVwiLFxuICBwYXNzd29yZDogXCJjb21wbGV4X3Bhc3N3b3JkX2F0X2xlYXN0XzMyX2NoYXJhY3RlcnNfbG9uZ1wiLFxuICAvLyBzZWN1cmU6IHRydWUgc2hvdWxkIGJlIHVzZWQgaW4gcHJvZHVjdGlvbiAoSFRUUFMpIGJ1dCBjYW4ndCBiZSB1c2VkIGluIGRldmVsb3BtZW50IChIVFRQKVxuICBjb29raWVPcHRpb25zOiB7XG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59O1xuXG5cbiJdLCJuYW1lcyI6WyJzZXNzaW9uQ29uZmlnIiwiY29va2llTmFtZSIsInBhc3N3b3JkIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/ironSession/ironSession.config.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_trpc_trpc_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/trpc/trpc.server */ \"(api)/./src/pages/config/trpc/trpc.server.ts\");\n/* harmony import */ var _config_trpc_trpc_server_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/trpc/trpc.server.context */ \"(api)/./src/pages/config/trpc/trpc.server.context.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({\n    router: _config_trpc_trpc_server__WEBPACK_IMPORTED_MODULE_1__.appRouter,\n    createContext: (params)=>{\n        return (0,_config_trpc_trpc_server_context__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n            type: \"server\",\n            req: params.req,\n            res: params.res\n        });\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtFO0FBRVI7QUFDWTtBQUV0RSxpRUFBZUEsZ0ZBQW9CQSxDQUFDO0lBQ2xDRyxRQUFRRiwrREFBU0E7SUFDakJDLGVBQWUsQ0FBQ0UsU0FBVztRQUN6QixPQUFPRiwrRUFBYUEsQ0FBQztZQUNuQkcsTUFBTTtZQUNOQyxLQUFLRixPQUFPRSxHQUFHO1lBQ2ZDLEtBQUtILE9BQU9HLEdBQUc7UUFDakI7SUFDRjtBQUNGLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqczEzLWJhc2ljLy4vc3JjL3BhZ2VzL2FwaS90cnBjL1t0cnBjXS50cz9jZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIkB0cnBjL3NlcnZlci9hZGFwdGVycy9uZXh0XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uUlNDIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy90cnBjL3RycGMucnNjXCI7XG5pbXBvcnQgeyBhcHBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3RycGMvdHJwYy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3RycGMvdHJwYy5zZXJ2ZXIuY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOZXh0QXBpSGFuZGxlcih7XG4gIHJvdXRlcjogYXBwUm91dGVyLFxuICBjcmVhdGVDb250ZXh0OiAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRleHQoe1xuICAgICAgdHlwZTogXCJzZXJ2ZXJcIixcbiAgICAgIHJlcTogcGFyYW1zLnJlcSxcbiAgICAgIHJlczogcGFyYW1zLnJlcyxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZU5leHRBcGlIYW5kbGVyIiwiYXBwUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInJvdXRlciIsInBhcmFtcyIsInR5cGUiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./src/pages/config/trpc/trpc.server.context.ts":
/*!******************************************************!*\
  !*** ./src/pages/config/trpc/trpc.server.context.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(iron_session__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_ironSession_ironSession_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/ironSession/ironSession.config */ \"(api)/./src/pages/api/ironSession/ironSession.config.ts\");\n\n\nasync function createContext(params) {\n    // This is the server context\n    const { req , res , type  } = params;\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, _api_ironSession_ironSession_config__WEBPACK_IMPORTED_MODULE_1__.sessionConfig);\n    return {\n        type,\n        session\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvY29uZmlnL3RycGMvdHJwYy5zZXJ2ZXIuY29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJEO0FBQ2M7QUFhbEUsZUFBZUUsY0FDcEJDLE1BQXdCLEVBQ0Y7SUFDdEIsNkJBQTZCO0lBQzdCLE1BQU0sRUFBRUMsSUFBRyxFQUFFQyxJQUFHLEVBQUVDLEtBQUksRUFBRSxHQUFHSDtJQUMzQixNQUFNSSxVQUFVLE1BQU1QLDREQUFjQSxDQUFDSSxLQUFLQyxLQUFLSiw4RUFBYUE7SUFDNUQsT0FBTztRQUFFSztRQUFNQztJQUFRO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMxMy1iYXNpYy8uL3NyYy9wYWdlcy9jb25maWcvdHJwYy90cnBjLnNlcnZlci5jb250ZXh0LnRzPzI5ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHJwY05leHQgZnJvbSBcIkB0cnBjL3NlcnZlci9hZGFwdGVycy9uZXh0XCI7XG5pbXBvcnQgeyBnZXRJcm9uU2Vzc2lvbiwgSXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5pbXBvcnQgeyBzZXNzaW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2FwaS9pcm9uU2Vzc2lvbi9pcm9uU2Vzc2lvbi5jb25maWdcIjtcbmltcG9ydCB7IGdldFNlc3Npb25SU0MgfSBmcm9tIFwiLi90cnBjLnJzY1wiO1xuXG5leHBvcnQgdHlwZSBUcnBjU2VydmVyUGFyYW1zID0ge1xuICB0eXBlOiBcInNlcnZlclwiIHwgXCJzZXJ2ZXItY29tcG9uZW50XCI7XG59ICYgdHJwY05leHQuQ3JlYXRlTmV4dENvbnRleHRPcHRpb25zO1xuXG5leHBvcnQgdHlwZSBUcnBjQ29udGV4dCA9IHtcbiAgdHlwZTogXCJzZXJ2ZXJcIiB8IFwic2VydmVyLWNvbXBvbmVudFwiO1xuICBzZXNzaW9uPzogSXJvblNlc3Npb247XG4gIGdldFJzY1Nlc3Npb24/OiAoKSA9PiBQcm9taXNlPElyb25TZXNzaW9uPjsgLy8gYXZhaWxhYmxlIGluIGBzZXJ2ZXItY29tcG9uZW50YFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoXG4gIHBhcmFtczogVHJwY1NlcnZlclBhcmFtc1xuKTogUHJvbWlzZTxUcnBjQ29udGV4dD4ge1xuICAvLyBUaGlzIGlzIHRoZSBzZXJ2ZXIgY29udGV4dFxuICBjb25zdCB7IHJlcSwgcmVzLCB0eXBlIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRJcm9uU2Vzc2lvbihyZXEsIHJlcywgc2Vzc2lvbkNvbmZpZyk7XG4gIHJldHVybiB7IHR5cGUsIHNlc3Npb24gfTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRJcm9uU2Vzc2lvbiIsInNlc3Npb25Db25maWciLCJjcmVhdGVDb250ZXh0IiwicGFyYW1zIiwicmVxIiwicmVzIiwidHlwZSIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/config/trpc/trpc.server.context.ts\n");

/***/ }),

/***/ "(api)/./src/pages/config/trpc/trpc.server.ts":
/*!**********************************************!*\
  !*** ./src/pages/config/trpc/trpc.server.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRouter\": () => (/* binding */ appRouter),\n/* harmony export */   \"middleware\": () => (/* binding */ middleware),\n/* harmony export */   \"publicProcedure\": () => (/* binding */ publicProcedure),\n/* harmony export */   \"router\": () => (/* binding */ router),\n/* harmony export */   \"trpcServer\": () => (/* binding */ trpcServer)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Avoid exporting the entire t-object\n// since it's not very descriptive.\n// For instance, the use of a t variable\n// is common in i18n libraries.\nconst trpcServer = _trpc_server__WEBPACK_IMPORTED_MODULE_1__.initTRPC.context().create({\n    transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),\n    errorFormatter ({ shape , error  }) {\n        return {\n            ...shape,\n            data: {\n                ...shape.data,\n                zod: error.cause instanceof zod__WEBPACK_IMPORTED_MODULE_0__.ZodError ? error.cause.flatten().fieldErrors : null\n            }\n        };\n    }\n});\n// Base router and procedure helpers\nconst router = trpcServer.router;\nconst publicProcedure = trpcServer.procedure;\nconst middleware = trpcServer.middleware;\nconst appRouter = router({\n    hello: publicProcedure.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        text: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n    })).query(async ({ input , ctx  })=>{\n        if (ctx.type === \"server\") {\n            console.log(\"server user\", ctx.session?.user);\n        } else if (ctx.type === \"server-component\") {\n            const session = await ctx.getRscSession();\n            console.log(\"rsc user\", session?.user);\n        }\n        return {\n            greeting: `hello ${input.text}`\n        };\n    }),\n    login: publicProcedure.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({})).mutation(async ({ ctx  })=>{\n        const user = {\n            email: \"jun@mistplay.com\",\n            name: \"jun\"\n        };\n        ctx.session.user = {\n            email: user.email,\n            name: user.name\n        };\n        await ctx.session?.save();\n        return user;\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvY29uZmlnL3RycGMvdHJwYy5zZXJ2ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDaUI7QUFDakI7QUFJbEMsc0NBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQ3hCLE1BQU1JLGFBQWFGLDBEQUFnQixHQUFnQkksTUFBTSxDQUFDO0lBQy9EQyxhQUFhSixrREFBU0E7SUFDdEJLLGdCQUFlLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFLEVBQUU7UUFDL0IsT0FBTztZQUNMLEdBQUdELEtBQUs7WUFDUkUsTUFBTTtnQkFDSixHQUFHRixNQUFNRSxJQUFJO2dCQUNiQyxLQUNFRixNQUFNRyxLQUFLLFlBQVlaLHlDQUFRQSxHQUMzQlMsTUFBTUcsS0FBSyxDQUFDQyxPQUFPLEdBQUdDLFdBQVcsR0FDakMsSUFBSTtZQUNaO1FBQ0Y7SUFDRjtBQUNGLEdBQUc7QUFFSCxvQ0FBb0M7QUFDN0IsTUFBTUMsU0FBU1osV0FBV1ksTUFBTSxDQUFDO0FBQ2pDLE1BQU1DLGtCQUFrQmIsV0FBV2MsU0FBUyxDQUFDO0FBQzdDLE1BQU1DLGFBQWFmLFdBQVdlLFVBQVUsQ0FBQztBQUV6QyxNQUFNQyxZQUFZSixPQUFPO0lBQzlCSyxPQUFPSixnQkFDSkssS0FBSyxDQUNKdEIseUNBQVEsQ0FBQztRQUNQd0IsTUFBTXhCLHlDQUFRO0lBQ2hCLElBRUQwQixLQUFLLENBQUMsT0FBTyxFQUFFSixNQUFLLEVBQUVLLElBQUcsRUFBRSxHQUFLO1FBQy9CLElBQUlBLElBQUlDLElBQUksS0FBSyxVQUFVO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUMsZUFBZUgsSUFBSUksT0FBTyxFQUFFQztRQUMxQyxPQUFPLElBQUlMLElBQUlDLElBQUksS0FBSyxvQkFBb0I7WUFDMUMsTUFBTUcsVUFBVSxNQUFNSixJQUFJTSxhQUFhO1lBQ3ZDSixRQUFRQyxHQUFHLENBQUMsWUFBWUMsU0FBU0M7UUFDbkMsQ0FBQztRQUVELE9BQU87WUFDTEUsVUFBVSxDQUFDLE1BQU0sRUFBRVosTUFBTUUsSUFBSSxDQUFDLENBQUM7UUFDakM7SUFDRjtJQUVGVyxPQUFPbEIsZ0JBQWdCSyxLQUFLLENBQUN0Qix5Q0FBUSxDQUFDLENBQUMsSUFBSW9DLFFBQVEsQ0FBQyxPQUFPLEVBQUVULElBQUcsRUFBRSxHQUFLO1FBQ3JFLE1BQU1LLE9BQU87WUFDWEssT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQVgsSUFBSUksT0FBTyxDQUFFQyxJQUFJLEdBQUc7WUFDbEJLLE9BQU9MLEtBQUtLLEtBQUs7WUFDakJDLE1BQU1OLEtBQUtNLElBQUk7UUFDakI7UUFDQSxNQUFNWCxJQUFJSSxPQUFPLEVBQUVRO1FBQ25CLE9BQU9QO0lBQ1Q7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzMTMtYmFzaWMvLi9zcmMvcGFnZXMvY29uZmlnL3RycGMvdHJwYy5zZXJ2ZXIudHM/N2YzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6LCBab2RFcnJvciB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IFRSUENFcnJvciwgaW5pdFRSUEMgfSBmcm9tIFwiQHRycGMvc2VydmVyXCI7XG5pbXBvcnQgc3VwZXJqc29uIGZyb20gXCJzdXBlcmpzb25cIjtcbmltcG9ydCB7IFRycGNDb250ZXh0IH0gZnJvbSBcIi4vdHJwYy5zZXJ2ZXIuY29udGV4dFwiO1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIEF2b2lkIGV4cG9ydGluZyB0aGUgZW50aXJlIHQtb2JqZWN0XG4vLyBzaW5jZSBpdCdzIG5vdCB2ZXJ5IGRlc2NyaXB0aXZlLlxuLy8gRm9yIGluc3RhbmNlLCB0aGUgdXNlIG9mIGEgdCB2YXJpYWJsZVxuLy8gaXMgY29tbW9uIGluIGkxOG4gbGlicmFyaWVzLlxuZXhwb3J0IGNvbnN0IHRycGNTZXJ2ZXIgPSBpbml0VFJQQy5jb250ZXh0PFRycGNDb250ZXh0PigpLmNyZWF0ZSh7XG4gIHRyYW5zZm9ybWVyOiBzdXBlcmpzb24sXG4gIGVycm9yRm9ybWF0dGVyKHsgc2hhcGUsIGVycm9yIH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc2hhcGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLnNoYXBlLmRhdGEsXG4gICAgICAgIHpvZDpcbiAgICAgICAgICBlcnJvci5jYXVzZSBpbnN0YW5jZW9mIFpvZEVycm9yXG4gICAgICAgICAgICA/IGVycm9yLmNhdXNlLmZsYXR0ZW4oKS5maWVsZEVycm9yc1xuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufSk7XG5cbi8vIEJhc2Ugcm91dGVyIGFuZCBwcm9jZWR1cmUgaGVscGVyc1xuZXhwb3J0IGNvbnN0IHJvdXRlciA9IHRycGNTZXJ2ZXIucm91dGVyO1xuZXhwb3J0IGNvbnN0IHB1YmxpY1Byb2NlZHVyZSA9IHRycGNTZXJ2ZXIucHJvY2VkdXJlO1xuZXhwb3J0IGNvbnN0IG1pZGRsZXdhcmUgPSB0cnBjU2VydmVyLm1pZGRsZXdhcmU7XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXIgPSByb3V0ZXIoe1xuICBoZWxsbzogcHVibGljUHJvY2VkdXJlXG4gICAgLmlucHV0KFxuICAgICAgei5vYmplY3Qoe1xuICAgICAgICB0ZXh0OiB6LnN0cmluZygpLFxuICAgICAgfSlcbiAgICApXG4gICAgLnF1ZXJ5KGFzeW5jICh7IGlucHV0LCBjdHggfSkgPT4ge1xuICAgICAgaWYgKGN0eC50eXBlID09PSBcInNlcnZlclwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VydmVyIHVzZXJcIiwgY3R4LnNlc3Npb24/LnVzZXIpO1xuICAgICAgfSBlbHNlIGlmIChjdHgudHlwZSA9PT0gXCJzZXJ2ZXItY29tcG9uZW50XCIpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGN0eC5nZXRSc2NTZXNzaW9uISgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJzYyB1c2VyXCIsIHNlc3Npb24/LnVzZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBncmVldGluZzogYGhlbGxvICR7aW5wdXQudGV4dH1gLFxuICAgICAgfTtcbiAgICB9KSxcblxuICBsb2dpbjogcHVibGljUHJvY2VkdXJlLmlucHV0KHoub2JqZWN0KHt9KSkubXV0YXRpb24oYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgZW1haWw6IFwianVuQG1pc3RwbGF5LmNvbVwiLFxuICAgICAgbmFtZTogXCJqdW5cIixcbiAgICB9O1xuICAgIGN0eC5zZXNzaW9uIS51c2VyID0ge1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgfTtcbiAgICBhd2FpdCBjdHguc2Vzc2lvbj8uc2F2ZSgpO1xuICAgIHJldHVybiB1c2VyO1xuICB9KSxcbn0pO1xuXG4vLyBleHBvcnQgdHlwZSBkZWZpbml0aW9uIG9mIEFQSVxuZXhwb3J0IHR5cGUgQXBwUm91dGVyID0gdHlwZW9mIGFwcFJvdXRlcjtcbiJdLCJuYW1lcyI6WyJ6IiwiWm9kRXJyb3IiLCJpbml0VFJQQyIsInN1cGVyanNvbiIsInRycGNTZXJ2ZXIiLCJjb250ZXh0IiwiY3JlYXRlIiwidHJhbnNmb3JtZXIiLCJlcnJvckZvcm1hdHRlciIsInNoYXBlIiwiZXJyb3IiLCJkYXRhIiwiem9kIiwiY2F1c2UiLCJmbGF0dGVuIiwiZmllbGRFcnJvcnMiLCJyb3V0ZXIiLCJwdWJsaWNQcm9jZWR1cmUiLCJwcm9jZWR1cmUiLCJtaWRkbGV3YXJlIiwiYXBwUm91dGVyIiwiaGVsbG8iLCJpbnB1dCIsIm9iamVjdCIsInRleHQiLCJzdHJpbmciLCJxdWVyeSIsImN0eCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsInVzZXIiLCJnZXRSc2NTZXNzaW9uIiwiZ3JlZXRpbmciLCJsb2dpbiIsIm11dGF0aW9uIiwiZW1haWwiLCJuYW1lIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/config/trpc/trpc.server.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();