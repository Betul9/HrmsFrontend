import { React, useEffect, useState } from "react";
import { Icon, Header, Card, Button } from "semantic-ui-react";
import JobService from "../services/JobService";
import PersonnelService from "../services/PersonnelService";

export default function JobApprove() {
  const [jobs, setJobs] = useState([]);

  let jobService = new JobService();
  let personnelService = new PersonnelService();

  useEffect(() => {
    jobService.getJobsNotActive().then((result) => setJobs(result.data.data));
  }, []);

  function setJobStatusToActive(job){
    personnelService.setJobStatusToActive(job);
  }

  return (
    <div>
      <Header size="huge">Jobs to Be Approved</Header>
      <Card.Group>
        {jobs.map((job) => (
          <Card fluid key={job.id}>
            <Card.Content header={job.jobName} />
            <Card.Content meta={job.workingTime} />
            <Card.Content meta={job.workingType} />
            <Card.Content extra>
              <Icon name="user" />
              {job.employer.companyName}
            </Card.Content>
            <Button.Group>
              <Button>Cancel</Button>
              <Button.Or />
              <Button onClick={setJobStatusToActive(job)} positive>Save</Button>
            </Button.Group>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
