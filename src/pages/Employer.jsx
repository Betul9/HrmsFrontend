import React from "react";
import { useEffect, useState } from "react";
import { Icon, Menu, Table, Header } from "semantic-ui-react";
import EmployerService from "../services/EmployerService"

export default function Employer() {

  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getEmployers().then(result=>setEmployers(result.data.data))
  }, [])
 

  return (
    <div>
      <Header size="medium">Employers</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer)=>(
            <Table.Row key={employer.id}>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.website}</Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
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
