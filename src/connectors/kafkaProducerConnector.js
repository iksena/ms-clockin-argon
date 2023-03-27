import HttpErrors from 'http-errors';

/**
 * Represent connector to kafka message producer
 */
class KafkaProducerConnector {
  /**
   * Initialize KafkaProducerConnector
   *
   * @param {object} opts - options data
   * @property {function} opts.config - kafka producer config
   * @property {function} opts.producer - kafka producer
   * @property {object} opts.logger - logger object
   * @returns {void}
   */
  constructor(opts) {
    Object.assign(this, opts);
  }

  /**
   * Produce messages to kafka topic employee update
   *
   * @param {object} messages - kafka messages
   * @returns {void}
   */
  async sendToEmployeeUpdate(message) {
    const payload = {
      topic: this.config.topicEmployeeUpdate,
      messages: [{ value: JSON.stringify(message) }],
    };

    try {
      this.logger.info(`Sending message ${JSON.stringify(message)} to topic ${payload.topic}`);

      await this.producer.send(payload);
    } catch (error) {
      this.logger.error(`Error while produce message ${JSON.stringify(message)} to topic ${payload.topic} with error:`, error);

      throw new HttpErrors.InternalServerError('Failed to produce message to Kafka');
    }

    this.logger.info(`Successfully send message ${JSON.stringify(message)} to topic ${payload.topic}`);
  }
}

export default KafkaProducerConnector;
