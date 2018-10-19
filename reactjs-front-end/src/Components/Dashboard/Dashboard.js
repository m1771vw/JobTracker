import React, { Component } from 'react';
import { array } from 'prop-types'
import { connect } from 'react-redux';
import { getAllJobs, deleteJob } from '../../Redux/actions/';
import Navbar from '../Navbar';
import { Redirect } from 'react-router-dom';

// let testData = [
//     {
//         "job_id": 1,
//         "position": "Junior programmer",
//         "company": "Apple",
//         "salary": "100,000",
//         "contact_id": 1,
//         "url": "indeed/apple.com",
//         "site_id": 1,
//         "notes": "Junior level programmer with great benefits",
//         "contact": {
//             "contact_id": 1,
//             "name": "Recruiter Nguyen",
//             "email": "recruiterenguyen@yahoo.com",
//             "phone": "714-909-0098"
//         },
//         "site": {
//             "site_id": 1,
//             "name": "Indeed"
//         }
//     }
// ]


class Dashboard extends Component {
    state = {
        editClicked: false
    }
    deleteUser = (id, index) => {
        console.log("Trying to delete index: ", index);
        this.props.deleteJob(id, index);
        // this.fetchAllJobs();
    }
    editUser = (id, index) => {
        this.setState({
            editClicked: true
        })
    }
    componentDidMount() {
        this.fetchAllJobs();
    }
    fetchAllJobs = () => {
        this.props.getAllJobs();
    }
    // componentDidUpdate(prevProps) {
    //     if(prevProps.jobs.count !== this.props.jobs.count) {

    //     }
    // }
    render() {
    
    return (
        <div>
            {this.state.editClicked ? <Redirect to='/editjob'/> :
        <div>
            <Navbar title="Dashboard"/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Contact</th>
                        <th>Url</th>
                        <th>Site</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {/* type: array< object { email, username, password } > */}
                    { this.props.jobs.jobs.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.job_id}</td>
                                <td>{item.position}</td>
                                <td>{item.company}</td>
                                <td>{item.salary}</td>
                                <td>{item.contact.name}</td>
                                <td>{item.url}</td>
                                <td>{item.site.name}</td>
                                <td>{item.notes}</td>
                                <td><button className="btn btn-warning" onClick={() => { this.editUser(item.job_id, index) }} >Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => { this.deleteUser(item.job_id, index) }} >Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }
        </div>

                
);}
}

Dashboard.propTypes = {
    dashboard: array
}
const mapPropsToDispatch = dispatch => ({
    getAllJobs: () => { dispatch(getAllJobs()) },
    deleteJob: (id, index) => { dispatch(deleteJob(id, index))}
  });

  const mapStateToProps = state => ({
    jobs: state
  });
export default connect(mapStateToProps, mapPropsToDispatch)(Dashboard);