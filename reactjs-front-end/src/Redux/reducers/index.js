import { ALL_JOBS } from '../constants';

const initialState = {
  jobs: []
  // jobs: [{
  //       "job_id": 0,
  //       "position": "",
  //       "company": "",
  //       "salary": "",
  //       "contact_id": 0,
  //       "url": "",
  //       "site_id": 0,
  //       "notes": "",
  //       "contact": {
  //           "contact_id": 1,
  //           "name": "Recruiter Nguyen",
  //           "email": "recruiterenguyen@yahoo.com",
  //           "phone": "714-909-0098"
  //       },
  //       "site": {
  //           "site_id": 1,
  //           "name": "Indeed"
  //       }
  // }]
}

/**
 *    You will add different action logic here by creating
 *    case statements
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_JOBS:
      return { ...state, jobs: action.payload};
    default:
      return state;
  }
}

export default rootReducer;