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
import { apiURL } from '../../Config/config';
import IndexRegisterModal from '../IndexRegisterModal/IndexRegisterModal';

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
    color:'navbar-transparent',
    ButtonText:'Register',
       
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
onSubmit = async (event) => {
  const action = {type:"GET_TOKEN", token:'', isLogIn:'',username: event.target.email.value, password: event.target.password1.value}
  this.props.dispatch(action)
  event.preventDefault(event);

    let formdata =new FormData()
    formdata.append('first_name',event.target.name.value)
    formdata.append('last_name',event.target.prenom.value)
    formdata.append('email',event.target.email.value)
    formdata.append('password',event.target.password1.value)
    const requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: formdata
    };
    fetch(apiURL+'/register',requestOptions)
    .then(response => {
      if(response.status == 201)
      {
        this.getTokenUser();
      }
  
    })
    .catch(error => console.log('error', error)); 
};

getTokenUser=()=>{

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "username": this.props.auth.username,
      "password": this.props.auth.password
    }),
  };
  
  fetch(apiURL+"/api/login_check", requestOptions)
    .then(response => {
      if(response.status == 200){
        response.text().then(result =>{
          const str = JSON.stringify(result).substring(14)
          const newStr = str.substring(0, str.length - 4)
          const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username}
          this.props.dispatch(action)
          
          window.location='/espace-client'
        })

      }
      else{
        const action = {type:"GET_TOKEN", token:'', isLogIn:false }
          this.props.dispatch(action)
      }
    })
    .catch(error => console.log('error', error));
 
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
                <DropdownItem>
                  
                 <div> <IndexRegisterModal  DemarerText={this.state.ButtonText} onSubmit={this.onSubmit.bind(this)} /></div>
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
              
                {this.props.auth.client && this.props.auth.client.user ?
                <Row>
                  <Col className="redirect-espace-client-style" onClick={this.redirectToEspace}>
                    <span className="bonjour-style-navbar">Bonjour </span>
                  {this.props.auth.client.user.firstName+" "+ this.props.auth.client.user.lastName}
                  </Col>
                  <Col><Button onClick={this.logout}>Logout</Button></Col>
                
                </Row>: this.props.auth.client ? <Row>
                  <Col className="redirect-espace-client-style" onClick={this.redirectToEspace}>
                    <span className="bonjour-style-navbar">Bonjour </span>
                  {this.props.auth.client.firstName+" "+ this.props.auth.client.lastName}
                  </Col>
                  <Col><Button onClick={this.logout}>Logout</Button></Col>
                
                </Row>:<Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
              ><Link to="/login"><i className="tim-icons icon-spaceship" />Login</Link></Button> }

         
              
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

  