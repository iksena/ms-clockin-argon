import Express from 'express';
import BodyParser from 'body-parser';
import Bunyan from 'bunyan';
import CORS from 'cors';

import config from './config/index.js';
import middlewares from './middlewares/index.js';
import routes from './routes/index.js';

const { port, loggerOptions } = config;
const { errorMiddleware, notFoundMiddleware } = middlewares;

const logger = Bunyan.createLogger(loggerOptions);

const start = () => {
  const app = Express();

  app.use(CORS());
  app.use(BodyParser.urlencoded({ extended: true }));
  app.use(BodyParser.json());
  app.locals.logger = logger;
  app.locals.config = config;

  routes.forEach((route) => app.use(route));

  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  app.listen(port, () => logger.info(`Listening to port ${port}`));
};

start();
