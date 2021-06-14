import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Input, Menu, Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="Home" />
          <Menu.Item name="Jobseekers"/>
          <Menu.Item name="Employers" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="Login" />
            <Menu.Item name="Register" />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
