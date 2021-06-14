import React from "react";
import Employer from "../pages/Employer";
import Jobseeker from "../pages/Jobseeker";
import Job from "../pages/Job";
import Personnel from "../pages/Personnel";
import { Route } from "react-router";

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
      <Route exact path="/" component={Job} />
      <Route exact path="/jobs" component={Job} />
      <Route path="/jobseekers" component={Jobseeker} />
      <Route path="/employers" component={Employer} />
      <Route path="/personnels" component={Personnel} />
    </div>
  );
}
