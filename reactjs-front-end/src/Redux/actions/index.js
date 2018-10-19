import { ALL_JOBS } from '../constants';
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