import { ALL_JOBS } from '../constants';

const initialState = {
  jobs: []
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