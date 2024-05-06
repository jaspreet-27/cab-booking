"use strict";
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
    info: async (msg, ...args) => {
        info.info(msg, ...args);
    },
    error: async (msg, ...args) => {
        error.error(msg, ...args);
    },
};
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFtQztBQUNuQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDOUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQy9ELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUN4QyxNQUFNLFFBQVEsR0FBRyxHQUFHLE9BQU8sbUJBQW1CLENBQUE7QUFFOUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FDL0IsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixNQUFNLENBQUMsS0FBSyxFQUFFLEVBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO0lBQzFCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQTtJQUNaLElBQUksQ0FBQztRQUNILE1BQU0sS0FBSyxHQUNULFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFBLFNBQU0sR0FBRSxDQUFBO1FBQ3pFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sS0FBYyxJQUFJLEVBQWIsSUFBSSxVQUFLLElBQUksRUFBN0MsaUNBQXNDLENBQU8sQ0FBQTtRQUNuRCxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxF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