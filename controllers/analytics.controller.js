class AnalyticsController {
  analyticsRepository;

  constructor(_analyticsRepository, _authRepository) {
    this.analyticsRepository = _analyticsRepository;
  }

  async getAnalytics() {
    const analytics = await this.analyticsRepository.getAnalytics();

    return analytics;
  }

}

module.exports = AnalyticsController;
