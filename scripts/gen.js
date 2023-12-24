"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var app_key = "4feb1177-c322-44ae-b8fe-e3c02c935ebf";
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setInterval(function () {
            var generated = new Array(50).fill(1).map(function () { return JSON.stringify(gen); });
            fetch("https://api.us-east.aws.tinybird.co/v0/events?name=events", {
                method: "POST",
                body: generated.join("\n"),
                headers: {
                    Authorization: "Bearer p.eyJ1IjogIjk3MDAzNTM4LWM5NDItNDI1ZS05MDlmLTViYjRlMzg3ZTJiYyIsICJpZCI6ICJjZDIyNzM0NC0zNjFmLTRkZDUtYTFlYS0zNjk0MmM3NDc0MjIiLCAiaG9zdCI6ICJ1cy1lYXN0LWF3cyJ9.8qTnOQP7vSAiz81zRaZ8jWt98tg9O6DWYvwvMt7TG7s",
                },
            })
                .then(function (res) { return res.json(); })
                .then(function (data) { return console.log(data); })
                .catch(console.error);
        }, 10 * 1000);
        return [2 /*return*/];
    });
}); })();
function gen() {
    return {
        id: faker_1.faker.string.uuid(),
        app_key: app_key,
        user: faker_1.faker.string.numeric(2),
        version: faker_1.faker.helpers.arrayElement([
            "1.0.0",
            "1.1.0",
            "1.2.0",
            "1.2.1",
            "1.3.0",
            "2.0.0",
        ]),
        environment: faker_1.faker.helpers.arrayElement(["production", "preview"]),
        browser: faker_1.faker.helpers.weightedArrayElement([
            { weight: 5, value: { name: "Chrome", version: "120" } },
            { weight: 5, value: { name: "Chrome", version: "118" } },
            { weight: 5, value: { name: "Chrome", version: "119" } },
            { weight: 3, value: { name: "Edge", version: "120" } },
            { weight: 2, value: { name: "Edge", version: "118" } },
            { weight: 1, value: { name: "Edge", version: "119" } },
            { weight: 1, value: { name: "Firefox", version: "120" } },
            { weight: 2, value: { name: "Firefox", version: "118" } },
            { weight: 5, value: { name: "Firefox", version: "119" } },
            { weight: 3, value: { name: "Safari", version: "17.0" } },
            { weight: 4, value: { name: "Safari", version: "17.1" } },
            { weight: 2, value: { name: "Safari", version: "17.2" } },
        ]),
        timestamp: faker_1.faker.date.recent({ days: 20 }).toISOString(),
        exception: genException(),
    };
}
function genException() {
    return faker_1.faker.helpers.weightedArrayElement([
        {
            weight: 1,
            value: {
                handled: false,
                crash: false,
                name: "TypeError",
                message: "Cannot read properties of undefined (reading 'date')",
                stacktrace: {
                    frames: [
                        {
                            colno: 23,
                            lineno: 45,
                            filename: "/src/utils/utils.ts",
                            function: "getDate",
                        },
                        {
                            colno: 12,
                            lineno: 13,
                            filename: "/src/utils/dates.ts",
                            function: "formatDate",
                        },
                        {
                            colno: 13,
                            lineno: 22,
                            filename: "/src/components/Button.tsx",
                            function: "onClick",
                        },
                    ],
                },
            },
        },
        {
            weight: 2,
            value: {
                handled: false,
                crash: false,
                name: "TypeError",
                message: "Cannot read properties of undefined (reading 'date')",
                stacktrace: {
                    frames: [
                        {
                            colno: 23,
                            lineno: 45,
                            filename: "/src/utils/utils.ts",
                            function: "getDate",
                        },
                        {
                            colno: 12,
                            lineno: 13,
                            filename: "/src/utils/dates.ts",
                            function: "formatDate",
                        },
                        {
                            colno: 32,
                            lineno: 14,
                            filename: "/src/App.tsx",
                            function: "onClick",
                        },
                    ],
                },
            },
        },
        {
            weight: 3,
            value: {
                handled: true,
                crash: false,
                name: "UserNotFoundError",
                message: "Can't find user",
                stacktrace: {
                    frames: [
                        {
                            colno: 23,
                            lineno: 45,
                            filename: "/src/api/user.ts",
                            function: "getDate",
                        },
                        {
                            colno: 13,
                            lineno: 22,
                            filename: "/src/components/User.tsx",
                        },
                    ],
                },
            },
        },
        {
            weight: 2,
            value: {
                handled: true,
                crash: false,
                name: "UserNotFoundError",
                message: "Can't find user",
                stacktrace: {
                    frames: [
                        {
                            colno: 23,
                            lineno: 45,
                            filename: "/src/api/user.ts",
                            function: "fetchUser",
                        },
                        {
                            colno: 13,
                            lineno: 22,
                            filename: "/src/components/User.tsx",
                        },
                    ],
                },
            },
        },
        {
            weight: 2,
            value: {
                handled: true,
                crash: false,
                name: "UserNotFoundError",
                message: "Can't find user",
                stacktrace: {
                    frames: [
                        {
                            colno: 23,
                            lineno: 45,
                            filename: "/src/database/user.ts",
                            function: "getUser",
                        },
                        {
                            colno: 43,
                            lineno: 123,
                            filename: "/src/utils/utils.ts",
                        },
                    ],
                },
            },
        },
    ]);
}
