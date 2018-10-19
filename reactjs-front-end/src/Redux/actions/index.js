import { ALL_JOBS, ADD_JOB, DELETE_JOB, EDIT_JOB, UPDATE_JOB } from '../constants';
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
    axios.post('http://localhost:5000/api/jobs', job)
        .then(response => {
            console.log("Axios Post Response:",response.data);
            dispatch({ type: ADD_JOB, payload:response.data})

        })
        .catch(err => {
            // console.log("Error: ", err.response.data);
        })
}

export const deleteJob = (id, index) => dispatch => {
    axios.delete(`http://localhost:5000/api/jobs/${id}`)
         .then(response => {
             console.log("Axios Delete Response:",response.data);
             dispatch({ type: DELETE_JOB, index, payload:response.data})
         })
         .catch(err => {

         })
}

export const editJob = (id, index) => dispatch => {
    axios.put(`http://localhost:5000/api/jobs/${id}`)
        .then(response => {
            console.log("Axios Edit Response:", response.data);
            dispatch({ type:EDIT_JOB, index, payload:response.data})
        })
        .catch(err =>{

        })
}

export const updateJob = (id, index) => dispatch => {
    axios.put(`http://localhost:5000/api/jobs/${id}`)
        .then(response => {
            console.log("Axios Edit Response:", response.data);
            dispatch({ type:UPDATE_JOB, index, payload:response.data})
        })
        .catch(err =>{

        })
}