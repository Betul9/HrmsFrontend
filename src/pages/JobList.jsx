import { React, useEffect, useState } from "react";
import { Icon, Header, Card } from "semantic-ui-react";
import JobService from "../services/JobService";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService.getJobsActive().then((result) => setJobs(result.data.data));
  }, []);

  return (
    <div>
      <Header size="huge">Jobs</Header>
      <Card.Group>
          {jobs.map((job)=>(
          <Card fluid key={job.id}>
            <Card.Content header={job.jobName} />
            <Card.Content meta={job.workingTime}/>
            <Card.Content meta={job.workingType}/>
            <Card.Content extra>
            <Icon name="user" />{job.employer.companyName}
            </Card.Content>
          </Card>
          ))}
          
        
      </Card.Group>
    </div>
  );
}
