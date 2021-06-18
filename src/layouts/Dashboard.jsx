import React from "react";
import EmployerList from "../pages/EmployerList";
import JobseekerList from "../pages/JobseekerList";
import JobList from "../pages/JobList";
import PersonnelList from "../pages/PersonnelList";
import { Route } from "react-router";
import JobAdd from "../pages/JobAdd";
import JobApprove from "../pages/JobApprove";

export default function Dashboard() {
  return (
    <div>
      {/* <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Employer />
          </Grid.Column>
          <Grid.Column width={8}>
            <Jobseeker />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Job />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
      <Route exact path="/" component={JobList} />
      <Route exact path="/jobs" component={JobList} />
      <Route exact path="/job-add" component={JobAdd} />
      <Route exact path="/job-approve" component={JobApprove} />
      <Route path="/jobseekers" component={JobseekerList} />
      <Route path="/employers" component={EmployerList} />
      <Route path="/personnels" component={PersonnelList} />
    </div>
  );
}
