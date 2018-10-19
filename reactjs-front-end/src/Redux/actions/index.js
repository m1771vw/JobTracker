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
    dispatch({ type:EDIT_JOB, id, index})
}

export const updateJob = (id, index, body) => dispatch => {
    console.log("BODY:",body);
    axios.put(`http://localhost:5000/api/jobs/${id}`, body)
        .then(response => {
            console.log("Axios Edit Response:", response.data);
            dispatch({ type:UPDATE_JOB, index, payload:response.data})
        })
        .catch(err =>{

        })
}

export const register = (user) => dispatch => {
    console.log("USER:", user);
    axios.post(`http://localhost:5000/api/JobTrackerUser/`, user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {

        })
}

export const login = (user) => dispatch => {
    console.log("USER:", user);
    axios.post(`http://localhost:5000/api/JobTrackerUser/login`, user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {

        })
}