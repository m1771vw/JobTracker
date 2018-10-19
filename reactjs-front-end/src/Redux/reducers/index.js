import { ALL_JOBS, ADD_JOB, DELETE_JOB, EDIT_JOB, UPDATE_JOB } from '../constants';

const initialState = {
  jobs: [],
  editJob: {},
  editIndex: 0,
  editId: 0
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
    case ADD_JOB:
    let newJob = [...state.jobs, action.payload];
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
    case EDIT_JOB:
      return {
        ...state,
        editJob: state.jobs[action.index],
        editIndex:action.index,
        editId:action.id
      };
    case UPDATE_JOB:
      return {
        ...state,
        jobs: [
          ...state.jobs.slice(0, action.index),
          action.payload,
          ...state.jobs.slice(action.index+1)
        ],
      };
    default:
      return state;
  }
}

export default rootReducer;