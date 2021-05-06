import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    username:"",
    password:"" ,
    passwordFocus:false,
    emailFocus:false,
    collapseOpen:false,
    collapseOut:'',
    color:'navbar-transparent'
       
  };
}




componentDidMount(){
  window.addEventListener("scroll", this.changeColor);
  return function cleanup() {
    window.removeEventListener("scroll", this.changeColor);
  };
}

 changeColor = () => {
  if (
    document.documentElement.scrollTop > 99 ||
    document.body.scrollTop > 99
  ) {
    
    this.setState({color:'bg-info'})
  } else if (
    document.documentElement.scrollTop < 100 ||
    document.body.scrollTop < 100
  ) {
    this.setState({color:'navbar-transparent'})
    
  }
};
 toggleCollapse = () => {
  document.documentElement.classList.toggle("nav-open");
  this.setState({collapseOpen:true})
};
 onCollapseExiting = () => {

  this.setState({collapseOut:"collapsing-out"})
};
 onCollapseExited = () => {
 
  this.setState({collapseOut:''})
};


logout =()=>{
  const action = {type:"LOGOUT",
  token: null,
  client: null,
  isLogIn:false}
  this.props.dispatch(action)
  window.location='/';
}


scrollToDownload = () => {
  document
    .getElementById("download-section")
    .scrollIntoView({ behavior: "smooth" });
};
redirectToEspace=()=>{
  window.location ='espace-client'
}
render(){
 
  return (
    <Navbar className={"fixed-top " + this.state.color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>shifti</span>
          </NavbarBrand>
          <button
            aria-expanded={this.state.collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + this.state.collapseOut}
          navbar
          isOpen={this.state.collapseOpen}
          onExiting={this.onCollapseExiting}
          onExited={this.onCollapseExited}
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
                  aria-expanded={this.state.collapseOpen}
                  className="navbar-toggler"
                  onClick={this.toggleCollapse}
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
              
                {this.props.auth && this.props.auth.client?
                <Row>
                  <Col className="redirect-espace-client-style" onClick={this.redirectToEspace}>
                    <span className="bonjour-style-navbar">Bonjour </span>
                  {this.props.auth.client.user.firstName+" "+ this.props.auth.client.user.lastName}
                  </Col>
                  <Col><Button onClick={this.logout}>Logout</Button></Col>
                
                </Row>:<Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
              ><Link to="/login"><i className="tim-icons icon-spaceship" />Login</Link></Button>  }
              
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})


const mapDispatchToProps = (dispatch) => {
return {
dispatch: (action) => {
dispatch(action);
},
};
};
export default connect (mapStateToProps, mapDispatchToProps)(Navbars)

  