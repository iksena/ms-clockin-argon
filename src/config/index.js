import env from 'dotenv';

env.config();

export default {
  port: process.env.SERVICE_PORT || 3000,
  loggerOptions: {
    name: process.env.SERVICE_NAME || 'ms-clockin-argon',
    level: process.env.LOG_LEVEL || 'debug',
  },
  resources: {
    db: {
      collections: {
        absences: process.env.DB_ABSENCES_COLLECTION,
        employees: process.env.DB_EMPLOYEES_COLLECTION,
      },
      instances: process.env.DB_INSTANCES,
      options: process.env.DB_OPTIONS,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    kafkaProducer: {
      clientId: process.env.SERVICE_NAME || 'ms-clockin-argon',
      brokers: [process.env.KAFKA_BROKER || 'learning-gull-9735-us1-kafka.upstash.io:9092'],
      sasl: {
        mechanism: process.env.KAFKA_SASL_MECHANISM || 'scram-sha-256',
        username: process.env.KAFKA_USER || 'bGVhcm5pbmctZ3VsbC05NzM1JAy9aOO3xqybxXcAiEaA9QmFkMbJQPh_zC7BGI8',
        password: process.env.KAFKA_PASSWORD || '733fc1b7b87a4f03b38a128baddfccbb',
      },
      ssl: process.env.KAFKA_SSL || true,
      topicEmployeeUpdate: process.env.KAFKA_TOPIC_EMPLOYEE_UPDATE || 'ID.ARGON.EMPLOYEE_CLOCKIN.UPDATE',
    },
  },
};
