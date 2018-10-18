import React from 'react';
import { array } from 'prop-types'

let testData = [
    {
        "job_id": 1,
        "position": "Junior programmer",
        "company": "Apple",
        "salary": "100,000",
        "contact_id": 1,
        "url": "indeed/apple.com",
        "site_id": 1,
        "notes": "Junior level programmer with greate benefits",
        "contact": {
            "contact_id": 1,
            "name": "Recruiter Nguyen",
            "email": "recruiterenguyen@yahoo.com",
            "phone": "714-909-0098"
        },
        "site": {
            "site_id": 1,
            "name": "Indeed"
        }
    }
]

const Dashboard = props => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Add a Job</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
    
                    </ul>
                </div>
            </nav>
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
                    {testData.map((item, index) => {
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
                                <td><button className="btn btn-danger" onClick={() => { props.deleteUser(index) }} >Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    );
}

Dashboard.propTypes = {
    dashboard: array
}

export default Dashboard;