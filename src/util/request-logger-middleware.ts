import * as express from 'express';

const requestLoggerMiddleware = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  console.info(`${request.method} ${request.originalUrl}`);
  const startTime = new Date().getTime();
  response.on('finish', () => {
    const elapsedTime = new Date().getTime() - startTime;
    console.info(`Request method: ${request.method} | Request URL: ${request.originalUrl} | Status: ${response.statusCode} | Elapsed time: ${elapsedTime}`);
  });
  next();
};

export { requestLoggerMiddleware }