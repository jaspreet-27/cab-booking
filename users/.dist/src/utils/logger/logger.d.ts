declare const logger: {
    info: (msg: any, ...args: any) => Promise<void>;
    error: (msg: any, ...args: any) => Promise<void>;
};
export default logger;
