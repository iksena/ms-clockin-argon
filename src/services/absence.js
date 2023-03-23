/**
 * Represents service to handle absence
 */
class AbsenceService {
  /**
     *
     * @param {Object} args - class argument
     * @param {Object} args.logger - bunyan logger
    */
  constructor(args) {
    Object.assign(this, args);
  }

  /**
   * Save absence to database
   * @param {Object} payload - absence payload
   */
  saveAbsence(payload) {
    this.logger.info(payload, 'Saving absence');
  }
}

export default AbsenceService;
