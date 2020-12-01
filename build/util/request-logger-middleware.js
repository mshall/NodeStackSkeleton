"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLoggerMiddleware = void 0;
const requestLoggerMiddleware = (request, response, next) => {
    console.info(`${request.method} ${request.originalUrl}`);
    const startTime = new Date().getTime();
    response.on('finish', () => {
        const elapsedTime = new Date().getTime() - startTime;
        console.info(`Request method: ${request.method} | Request URL: ${request.originalUrl} | Status: ${response.statusCode} | Elapsed time: ${elapsedTime}`);
    });
    next();
};
exports.requestLoggerMiddleware = requestLoggerMiddleware;
