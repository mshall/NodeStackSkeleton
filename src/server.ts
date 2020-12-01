import express from 'express';
import * as bodyParser from 'body-parser';
import appRouter from './database/routes';

const app = express();
app.use(bodyParser.json());

app.use(appRouter);

app.get('/hello', (req, res, next) => {
  res.send('Hello world')
});
export { app }
app.listen(process.env.PORT || 4040, () => {
  console.log("server started");
})