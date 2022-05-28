import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
  Row,
  Col,
} from "reactstrap";

const Navigator = () => {
  return (
    <div>
      <Navbar color="danger" expand="md" fixed="top" dark>
        <NavbarBrand href="/">PDF Editor</NavbarBrand>

        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="mx-auto" navbar fill>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                All Tools
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Convert PDF
              </DropdownToggle>
              <DropdownMenu right style={{ minWidth: "20rem" }}>
                <Row>
                  <Col md={6}>
                    <div>CONVERT FROM PDF</div>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem>Reset</DropdownItem>
                  </Col>
                  <Col md={6}>
                    <div>CONVERT TO PDF</div>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem>Reset</DropdownItem>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/components/">Merge</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Compress</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/components/">Convert</NavLink>
            </NavItem> */}
          </Nav>

          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigator;
