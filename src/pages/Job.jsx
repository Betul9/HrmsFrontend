import { React, useEffect, useState } from "react";
import { Icon, Menu, Table, Header } from "semantic-ui-react";
import JobService from "../services/JobService";

export default function Job() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService()
    jobService.getJobs().then(result=>setJobs(result.data.data))
  }, [])
 

  return (
    <div>
      <Header size="medium">Jobs</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Name</Table.HeaderCell>
            <Table.HeaderCell># of Employers Needed</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Job Owner</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {jobs.map((job)=>(
            <Table.Row key={job.id}>
            <Table.Cell>{job.jobName}</Table.Cell>
            <Table.Cell>{job.employeeNumber}</Table.Cell>
            <Table.Cell>{job.city}</Table.Cell>
            <Table.Cell>{job.employer.companyName}</Table.Cell>
          </Table.Row>
          ))}   
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
