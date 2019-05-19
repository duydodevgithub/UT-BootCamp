export default class Launch {
  constructor({
    details,
    flight_number: number,
    launch_success: launchSuccess,
    launch_year: year
  }) {
    this.details = details || 'No information provided.';
    this.number = number;
    this.launchSuccess = launchSuccess;
    this.year = year;

    // BONUS - call static methods to track failure count
    Launch.count++;
    if (this.wasFailure()) {
      Launch.failureCount++;
    }
  }

  wasFailure() {
    return !this.launchSuccess
      || this.details.includes('fail') // BONUS: any mention of failure is bad.
      || this.details.includes('crash')
      || this.details.includes('lost');
  }

  launchInfo() {
    return `${this.year} - Flight No. ${this.number}:
    ${this.details}`;
  }

  // BONUS - static method for getting failure rate
  static getFailureRate() {
    return Launch.count ? Launch.failureCount / Launch.count : 'N/A - no launches';
  }
}

Launch.count = 0;
Launch.failureCount = 0;
