import { ALL_JOBS, ADD_JOB } from '../constants';
import axios from 'axios';


export const getAllJobs = () => dispatch => {
    axios.get('http://localhost:5000/api/jobs')
        .then(response => {

            console.log("Response: ", response);
            dispatch({ type: ALL_JOBS, payload: response.data})
        })
        .catch(err => {
            console.log("Error: ", err);
        })
   
}

export const addJob = (job) => dispatch => {
    console.log("Job", job);
    axios.post('http://localhost:5000/api/jobs', job)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADD_JOB, payload:response.data})

        })
        .catch(err => {
            console.log("Error: ", err.response.data);
        })
}