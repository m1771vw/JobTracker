DROP DATABASE jobtrackerdb;
CREATE DATABASE jobtrackerdb;
\c jobtrackerdb; 

CREATE TABLE "StatusTypes"(
    status_type_id              SERIAL PRIMARY KEY,
    status_type                 varchar(50)
);

INSERT INTO "StatusTypes"(status_type)
VALUES
('Applied'),
('Called back'),
('Phone interview'),
('In person interview'),
('Second in person interview'),
('Offer'),
('Rejected'),
('Accepted'),
('Declined');

CREATE TABLE "Contacts"(
    contact_id                  SERIAL PRIMARY KEY,
    name                        varchar(50),
    email                       varchar(50),
    phone                       varchar(50)
);

INSERT INTO "Contacts"(name, email, phone)
VALUES
('Recruiter Nguyen', 'recruiterenguyen@yahoo.com', '714-909-0098');

CREATE TABLE "Sites"(
    site_id                     SERIAL PRIMARY KEY,
    name                        varchar(50)
);

INSERT INTO "Sites"(name)
VALUES
('Indeed'),
('Monster'),
('Dice'),
('ZipRecruiter');

CREATE TABLE "Jobs"(
    job_id                      SERIAL PRIMARY KEY,
    position                    varchar(50),
    company                     varchar(50), 
    salary                      varchar(50),
    contact_id                  integer REFERENCES "Contacts" (contact_id),
    url                         varchar(500),
    site_id                     integer REFERENCES "Sites" (site_id),
    notes                       varchar(500)
);

INSERT INTO "Jobs"(position, company, salary, contact_id, url, site_id, notes)
VALUES
('Junior programmer', 'Apple', '100,000', 1, 'indeed/apple.com', 1, 'Junior level programmer with greate benefits');

CREATE TABLE "StatusHistory" (
    status_history_id           SERIAL PRIMARY KEY,
    job_id                      integer REFERENCES "Jobs" (job_id),
    date                        TIMESTAMP,
    status_type_id              integer REFERENCES "StatusTypes" (status_type_id)
);

INSERT INTO "StatusHistory"(job_id, date, status_type_id)
VALUES
(1, '2018/10/18 12:10:50', 1),
(1, '2018/10/19 10:05:30', 9);