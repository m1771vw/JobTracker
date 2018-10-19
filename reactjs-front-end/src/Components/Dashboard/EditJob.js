import React, { Component } from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { editJob } from '../../Redux/actions/';
import { Redirect } from 'react-router-dom';

class EditJob extends Component {
    state = {
        position: "",
        company: "",
        salary: "",
        contact: "",
        url: "",
        site: "",
        notes: "",
        submitClicked: false
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
        let contact_id = Number(this.state.contact);
        let site_id = Number(this.state.site);
        let { submitClicked, contact, site, ...newJob } = this.state
        let finalJob = { ...newJob, contact_id, site_id }
        this.props.EditJob(finalJob);
        this.setState({
            submitClicked:true
        })

    }
    
    render() {
        return (
            <div>
            { this.state.submitClicked ? <Redirect to='/dashboard'/>
            :
            <div>
            <Navbar title="Edit Job"/>
                {/* <div style ={{margin: "20px"}}> */}
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
                <button className="btn btn-warning" onClick={this.onSubmitClicked} >Update</button>
                </div>
            }
            </div>
            
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    editJob: (job) => { dispatch(editJob(job))}
});

export default connect(null, mapPropsToDispatch)(EditJob);