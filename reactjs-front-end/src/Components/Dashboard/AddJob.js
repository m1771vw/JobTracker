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
                        <input class="form-control" type="text" value="Enter position" id="example-text-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-search-input" class="col-2 col-form-label">Company</label>
                    <div class="col-10">
                        <input class="form-control" type="search" value="Enter company" id="example-search-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-email-input" class="col-2 col-form-label">Salary</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value="Enter Salary" id="example-email-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-tel-input" class="col-2 col-form-label">Contact</label>
                    <div class="col-10">
                        <input class="form-control" type="tel" value="Enter phone number" id="example-tel-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-url-input" class="col-2 col-form-label">Url</label>
                    <div class="col-10">
                        <input class="form-control" type="url" value="Enter url" id="example-url-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-password-input" class="col-2 col-form-label">Site</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value="Enter site" id="example-password-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-number-input" class="col-2 col-form-label">Notes</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value="Enter comments" id="example-number-input" />
                    </div>
                </div>
                <button className="btn btn-danger"  >Submit</button></div>
        );
    }
}

export default AddJob;