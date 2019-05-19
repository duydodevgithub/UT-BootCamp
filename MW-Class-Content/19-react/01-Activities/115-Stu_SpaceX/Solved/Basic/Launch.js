// Using named object destructuring we can both destructure the object parameter and rename the destructured parts
export default class Launch {
  constructor({
    details,
    flight_number: number,
    launch_success: succeeded,
    launch_year: year
  }) {
    this.details = details || 'No information provided.';
    this.number = number;
    this.succeeded = succeeded;
    this.year = year;
  }

  wasFailure() {
    return !this.succeeded;
  }

  launchInfo() {
    return `${this.year} - Flight No. ${this.number}:
    ${this.details}`;
  }
}
