import { React, useEffect, useState } from "react";
import { Icon, Menu, Table, Header } from "semantic-ui-react";
import PersonnelService from "../services/PersonnelService";

export default function PersonnelList() {
 
  const [personnels, setPersonnels] = useState([]);

  useEffect(() => {
    let personnelService = new PersonnelService()
    personnelService.getPersonnels().then(result=>setPersonnels(result.data.data))
  }, [])
 
  return (
    <div>
      <Header size="medium">Personnels</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {personnels.map((personnel)=>(
            <Table.Row key={personnel.id}>
            <Table.Cell>{personnel.firstName}</Table.Cell>
            <Table.Cell>{personnel.lastName}</Table.Cell>
            <Table.Cell>{personnel.email}</Table.Cell>
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
