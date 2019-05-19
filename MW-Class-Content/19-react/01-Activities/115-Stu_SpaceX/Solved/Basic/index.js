import axios from 'axios';
import Launch from './Launch';

const ROCKETID = 'falcon9';
console.log(`Finding historical data for ${ROCKETID}
---`);

// axios get request returns a promise which resolves with SpaceX API results
axios.get('https://api.spacexdata.com/v1/launches')
  // arrow function to resolve the promise, handle the response from the API
  .then(response => getFailureData(response.data))
  .catch(err => console.log(err));

const getFailureData = (data) => {

  // get only those launches pertaining to the current vehicle (falcon9)
  data.filter(rawLaunch => rawLaunch.rocket.rocket_id === ROCKETID)

    // convert launches to 'Launch' objects (returns array of Launch objects)
    .map(relevantLaunch => new Launch(relevantLaunch))

    // get only those Launch objects which were failures
    .filter(relevantLaunch => relevantLaunch.wasFailure())

    // log information about each failed launch
    .forEach(failedLaunch => console.log(failedLaunch.launchInfo()));
};
