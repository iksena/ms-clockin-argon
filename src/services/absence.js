/**
 * Represents service to handle absence
 */
class AbsenceService {
  /**
     *
     * @param {Object} args - class argument
     * @param {Object} args.logger - bunyan logger
     * @param {Object} args.absenceRepository - absences repository
    */
  constructor(args) {
    Object.assign(this, args);
  }

  /**
   * Save absence to database
   * @param {Object} payload - absence payload
   */
  async saveAbsence(payload) {
    await this.absenceRepository.save(payload);
  }

  async getAbsences(filter) {
    return this.absenceRepository.get(filter);
  }
}

export default AbsenceService;
