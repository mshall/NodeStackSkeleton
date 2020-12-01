import express from 'express';
import * as bodyParser from 'body-parser';
import appRouter from './database/routes';
import { addModel } from './util/database/database';
import CoffeeMachine from './database/dbmodel/coffee-machine.model';
import { requestLoggerMiddleware } from './util/request-logger-middleware';

const app = express();
app.use(bodyParser.json());
app.use(requestLoggerMiddleware)
app.use(appRouter);

app.get('/hello', (req, res, next) => {
  res.send('Hello world')
});

addModel(CoffeeMachine);
export { app }
app.listen(process.env.PORT || 4040, () => {
  console.log("server started");
})