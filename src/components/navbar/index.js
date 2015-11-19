import React from 'react';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class Navigation extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a href="#">Sabor</a>
          </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to="/team">
            <NavItem eventKey={1} href="#">Team</NavItem>
          </LinkContainer>
          <LinkContainer to="/releve">
            <NavItem eventKey={2} href="#">Releve</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation;



                // <li className="active"><a onClick="$('#home').scrollView()">Home</a></li>
                // <li><a onClick="$('#contact').scrollView()">Contact</a></li>
                // <li><a href="resources/resume.pdf">Resume</a></li>
