import axios from 'axios';
import inquirer from 'inquirer';
import Launch from './Launch-Bonus';

let rocketId;

inquirer.prompt({
  type: 'list',
  name: 'vehicle',
  message: 'Which vehicle are you investigating?',
  choices: [
    'falcon1',
    'falcon9',
    'falconheavy',
    'dragon'
  ]
}).then((answer) => {
  // store answer to question for later filtering of results from API
  rocketId = answer.vehicle;

  // use axios to make a request, which returns a promise
  return axios.get('https://api.spacexdata.com/v1/launches');
})
// arrow function to resolve the promise, handle the response from the API
.then(response => getFailureData(response.data, rocketId))
.catch(err => console.log(err));

const getFailureData = (data, id) => {

  // filter launches to only those of currently interesting ID
  data.filter(rawLaunch => rawLaunch.rocket.rocket_id === id)

    // convert launches to 'Launch' objects
    .map(relevantLaunch => new Launch(relevantLaunch))

    // get only those launches which were failures
    .filter(relevantLaunch => relevantLaunch.wasFailure())

    // log information about each of-interest launch
    .forEach(failedLaunch => console.log(failedLaunch.launchInfo()));

  // BONUS: log failure rate of launch
  console.log(`Failure Rate: ${Launch.getFailureRate()} (${Launch.failureCount}/${Launch.count})`);
};
