import React, { Component } from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { addJob } from '../../Redux/actions/';

class AddJob extends Component {
    state = {
        position: "",
        company: "",
        salary: "",
        contact: "",
        url: "",
        site: "",
        notes: ""
    }

    onPositionChange = e => {
        this.setState({
            position: e.target.value
        })
    }

    onCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    onSalaryChange = e => {
        this.setState({
            salary: e.target.value
        })
    }

    onContactChange = e => {
        this.setState({
            contact: e.target.value
        })
    }

    onUrlChange = e => {
        this.setState({
            url: e.target.value
        })
    }

    onSiteChange = e => {
        this.setState({
            site: e.target.value
        })
    }

    onNotesChange = e => {
        this.setState({
            notes: e.target.value
        })
    }
    onSubmitClicked = () => {
        let job = {
            position: "mid prog",
            company: "redw",
            salary: "10000",
            contact_id: 1,
            url: "redwood.edu",
            site_id: 1,
            notes: "great place code camp"
        }
        this.props.addJob(job);
    }
    
    render() {
        return (
            <div>
            <Navbar title="Add a Job"/>

                <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-2 col-form-label">Position</label>
                    <div className="col-10">
                        <input className="form-control" type="text" value={this.state.position} onChange={this.onPositionChange} id="example-text-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-search-input" className="col-2 col-form-label">Company</label>
                    <div className="col-10">
                        <input className="form-control" type="search" value={this.state.company} onChange={this.onCompanyChange} id="example-search-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-email-input" className="col-2 col-form-label">Salary</label>
                    <div className="col-10">
                        <input className="form-control" type="text" value={this.state.salary} onChange={this.onSalaryChange} id="example-email-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-tel-input" className="col-2 col-form-label">Contact</label>
                    <div className="col-10">
                        <input className="form-control" type="tel" value={this.state.contact} onChange={this.onContactChange} id="example-tel-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-url-input" className="col-2 col-form-label">Url</label>
                    <div className="col-10">
                        <input className="form-control" type="url" value={this.state.url} onChange={this.onUrlChange} id="example-url-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-password-input" className="col-2 col-form-label">Site</label>
                    <div className="col-10">
                        <input className="form-control" type="text" value={this.state.site} onChange={this.onSiteChange} id="example-password-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-number-input" className="col-2 col-form-label">Notes</label>
                    <div className="col-10">
                        <input className="form-control" type="text" value={this.state.notes} onChange={this.onNotesChange} id="example-number-input" />
                    </div>
                </div>
                <button className="btn btn-danger" onClick={this.onSubmitClicked} >Submit</button></div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    addJob: (job) => { dispatch(addJob(job))}
});

export default connect(null, mapPropsToDispatch)(AddJob);