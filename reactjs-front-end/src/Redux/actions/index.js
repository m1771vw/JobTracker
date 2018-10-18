import { ALL_JOBS } from './constants';
import axios from 'axios';


export const getAllJobs = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/api/jobs')
    dispatch({ type: ALL_JOBS, payload: response.data})
}