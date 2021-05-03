import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Navbars() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [collapseOut, setCollapseOut] = React.useState("");
    const [color, setColor] = React.useState("navbar-transparent");
    React.useEffect(() => {
      window.addEventListener("scroll", changeColor);
      return function cleanup() {
        window.removeEventListener("scroll", changeColor);
      };
    },[]);
    const changeColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setColor("bg-info");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setColor("navbar-transparent");
      }
    };
    const toggleCollapse = () => {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(!collapseOpen);
    };
    const onCollapseExiting = () => {
      setCollapseOut("collapsing-out");
    };
    const onCollapseExited = () => {
      setCollapseOut("");
    };
    const scrollToDownload = () => {
      document
        .getElementById("download-section")
        .scrollIntoView({ behavior: "smooth" });
    };
    return (
      <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <span>Shifti</span>
            </NavbarBrand>
            <button
              aria-expanded={collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + collapseOut}
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                   Shifti
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    onClick={toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Getting started
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem tag={Link} to="/register">
                    <i className="tim-icons icon-bullet-list-67" />
                    Register
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/espace-client">
                    <i className="tim-icons icon-single-02" />
                    Profile
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/template">
                    <i className="tim-icons icon-single-02" />
                    Template
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/offre">
                    <i className="tim-icons icon-single-02" />
                    Offre
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                >
                  <Link to="/login">
                  <i className="tim-icons icon-spaceship" />Login
                  </Link> 
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
  