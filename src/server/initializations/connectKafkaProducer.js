/**
 * Connect to kafka producer
 *
 * @param {object} kafkaJs - kafka
 * @param {object} logger - logger
 * @param {object} kafkaConfig - configuration
 *
 * @returns {object} producer - producer
 */
const connectKafkaProducer = async (kafkaJs, logger, kafkaConfig) => {
  logger.info('Initialize kafka producer');

  const { Kafka } = kafkaJs;
  const kafka = new Kafka({
    clientId: kafkaConfig.clientId,
    brokers: kafkaConfig.brokers,
    sasl: kafkaConfig.sasl,
    ssl: kafkaConfig.ssl,
  });
  console.log(kafkaConfig);
  const producer = kafka.producer();

  logger.info('Connecting to kafka confluent producer');

  await producer.connect();

  logger.info('Connected to kafka confluent producer');

  return producer;
};

export default connectKafkaProducer;
