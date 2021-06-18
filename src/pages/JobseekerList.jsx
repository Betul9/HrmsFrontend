import { React, useEffect, useState } from "react";
import { Icon, Menu, Table, Header } from "semantic-ui-react";
import JobseekerService from "../services/JobseekerService";

export default function JobseekerList() {
 
  const [jobseekers, setJobseekers] = useState([]);

  useEffect(() => {
    let jobseekerService = new JobseekerService()
    jobseekerService.getJobseekers().then(result=>setJobseekers(result.data.data))
  }, [])
 
  return (
    <div>
      <Header size="medium">Jobseekers</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Birth Year</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobseekers.map((jobseeker)=>(
            <Table.Row key={jobseeker.id}>
            <Table.Cell>{jobseeker.firstName}</Table.Cell>
            <Table.Cell>{jobseeker.lastName}</Table.Cell>
            <Table.Cell>{jobseeker.birthYear}</Table.Cell>
          </Table.Row>
          ))}   
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
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
