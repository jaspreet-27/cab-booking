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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const namespace = require('continuation-local-storage').getNamespace('logger');
const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const appRoot = require('app-root-path');
const logsPath = `${appRoot}/lib/logger/logs/`;
const fileFormat = format.combine(format.timestamp(), format.align(), format.printf((info) => {
    let log = '';
    try {
        const logId = namespace && namespace.get('logId') ? namespace.get('logId') : (0, uuid_1.v4)();
        const { timestamp, level, message } = info, args = __rest(info, ["timestamp", "level", "message"]);
        const ts = timestamp.slice(0, 19).replace('T', ' ');
        log = `${ts} - ${logId} - ${level}: ${message ? message.trim() : ''} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
        return log;
    }
    catch (error) {
        console.log('Error @ fileFormat @ logger ', error);
    }
}));
const info = createLogger({
    level: 'info',
    format: fileFormat,
    transports: [
        new DailyRotateFile({
            level: 'info',
            filename: `${logsPath}/info-%DATE%.log`,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            colorize: false,
        }),
    ],
});
const error = createLogger({
    level: 'error',
    format: fileFormat,
    transports: [
        new DailyRotateFile({
            level: 'error',
            filename: `${logsPath}/error-%DATE%.log`,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            colorize: false,
        }),
    ],
});
const consoleFormat = format.combine(format.colorize(), format.timestamp(), format.align(), format.printf((info) => {
    let log = '';
    try {
        const logId = namespace && namespace.get('logId') ? namespace.get('logId') : (0, uuid_1.v4)();
        const { timestamp, level, message } = info, args = __rest(info, ["timestamp", "level", "message"]);
        const ts = timestamp.slice(0, 19).replace('T', ' ');
        log = `${ts} - ${logId} - ${level}: ${message ? message.trim() : ''} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
        return log;
    }
    catch (error) {
        console.log('Error @ fileFormat @ logger ', error);
    }
}));
if (process.env.NODE_ENV !== 'production') {
    info.add(new transports.Console({
        format: consoleFormat,
    }));
    error.add(new transports.Console({
        format: consoleFormat,
    }));
}
const logger = {
    info: (msg, ...args) => __awaiter(void 0, void 0, void 0, function* () {
        info.info(msg, ...args);
    }),
    error: (msg, ...args) => __awaiter(void 0, void 0, void 0, function* () {
        error.error(msg, ...args);
    }),
};
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFvQztBQUNwQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0UsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQzdELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QyxNQUFNLFFBQVEsR0FBRyxHQUFHLE9BQU8sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FDL0IsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsS0FBSyxFQUFFLEVBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO0lBQzFCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQztRQUNILE1BQU0sS0FBSyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFBLFNBQU0sR0FBRSxDQUFDO1FBQ3RGLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sS0FBYyxJQUFJLEVBQWIsSUFBSSxVQUFLLElBQUksRUFBN0MsaUNBQXNDLENBQU8sQ0FBQztRQUNwRCxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENB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