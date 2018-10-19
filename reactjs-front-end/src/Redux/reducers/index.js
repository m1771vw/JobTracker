import { ALL_JOBS, ADD_JOB, DELETE_JOB } from '../constants';

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
  console.log("Action payload:", action.payload);
  switch (action.type) {
    case ALL_JOBS:
      return { ...state, jobs: action.payload};
    case ADD_JOB:
    console.log("trying to add job",action.payload);
    console.log("Currewnt state", state);
    let newJob = [...state.jobs, action.payload];
    console.log("New Job", newJob);
      return { ...state,
               jobs: [...state.jobs, action.payload]
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: [...state.jobs.slice(0, action.index),
               ...state.jobs.slice(action.index+1)
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;