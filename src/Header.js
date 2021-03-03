import React, { useState } from "react";
// import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    // <div className="header">
    //   <h1 className="text">GURA</h1>
    //   <ul className="menu-ul">
    //     <li>
    //       <Link to="/">Discover</Link>
    //     </li>
    //     <li>
    //       <Link to="/Host">Host a Session</Link>
    //     </li>
    //     <li>
    //       <Link to="/Signup">SignUp</Link>
    //     </li>
    //     <li>
    //       <Link to="/Login">Login</Link>
    //     </li>
    //   </ul>
    // </div>
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
    
          <NavbarText className="mr-auto h2 text-dark font-weight-bold">
            GURA
          </NavbarText>
        
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-dark font-weight-bold">
                Discover
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/Host" className="text-dark font-weight-bold">
                Host a Session
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Signup" className="text-dark font-weight-bold">
                Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/login"
                className="text-dark
                font-weight-bold"
              >
                Log in
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
