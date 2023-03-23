import env from 'dotenv';

env.config();

export default {
  port: process.env.SERVICE_PORT || 3000,
  loggerOptions: {
    name: process.env.SERVICE_NAME || 'ms-absence-argon',
    level: process.env.LOG_LEVEL || 'debug',
  },
};
