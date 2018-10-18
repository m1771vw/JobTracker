// uncomment to import your constants into your reducer
// import {  } from '../constants';


/**
 *    You may define your initialState as any data structure you'd like
 *    I have scaffolded it as an object (common practice) but you may choose to 
 *    do otherwise.
 */
const initialState = {}

/**
 *    You will add different action logic here by creating
 *    case statements
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;