import mongodb from 'mongodb';
import KafkaJs from 'kafkajs';

import connectMongoDb from './connectMongoDb.js';
import connectKafkaProducer from './connectKafkaProducer.js';
import connectors from '../../connectors/index.js';
import config from '../../config/index.js';

const { KafkaProducerConnector } = connectors;

/**
 * dbInitialization
 * @param {object} app - app
 */
const dbInitialization = async (app) => {
  const mongo = await connectMongoDb(mongodb, config.resources.db, app.locals.logger);

  Object.assign(app.locals, { mongo });
};

/**
 * Initialize Kafka Connector
 * @param {object} app - app
 *
 * @returns {promise} - kafka connector promise
 */
const kafkaProducerInitialization = async (app) => {
  const { logger } = app.locals;
  const producer = await connectKafkaProducer(KafkaJs, logger, config.resources.kafkaProducer);

  const kafkaProducer = new KafkaProducerConnector({
    logger,
    producer,
    config: config.resources.kafkaProducer,
  });

  Object.assign(app.locals, { kafkaProducer });
};

export default [
  dbInitialization,
  kafkaProducerInitialization,
];
