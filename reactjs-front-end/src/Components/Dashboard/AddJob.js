import React, { Component } from 'react';


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
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Add a Job</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div class="form-group row">
                    <label for="example-text-input" class="col-2 col-form-label">Position</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.position} onChange={this.onPositionChange} id="example-text-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-search-input" class="col-2 col-form-label">Company</label>
                    <div class="col-10">
                        <input class="form-control" type="search" value={this.state.company} onChange={this.onCompanyChange} id="example-search-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-email-input" class="col-2 col-form-label">Salary</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.salary} onChange={this.onSalaryChange} id="example-email-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-tel-input" class="col-2 col-form-label">Contact</label>
                    <div class="col-10">
                        <input class="form-control" type="tel" value={this.state.contact} onChange={this.onContactChange} id="example-tel-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-url-input" class="col-2 col-form-label">Url</label>
                    <div class="col-10">
                        <input class="form-control" type="url" value={this.state.url} onChange={this.onUrlChange} id="example-url-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-password-input" class="col-2 col-form-label">Site</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.site} onChange={this.onSiteChange} id="example-password-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-number-input" class="col-2 col-form-label">Notes</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value={this.state.notes} onChange={this.onNotesChange} id="example-number-input" />
                    </div>
                </div>
                <button className="btn btn-danger"  >Submit</button></div>
        );
    }
}

export default AddJob;