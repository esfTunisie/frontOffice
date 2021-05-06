import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { Container,Button } from "reactstrap";
import IndexRegisterModal from "../IndexRegisterModal/IndexRegisterModal";
import { withRouter } from "react-router-dom";
import { apiURL } from "../../Config/config";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonText:'Démarer',
      first_name:"",
      last_name:'',
      email:"",
      password:""
    };
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

  

  render() {
    
      return (
        <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Shifti</h1>
            <h3 className="d-none d-sm-block">
            Démarez votre commerce en ligne avec Shifti
            </h3>
            <IndexRegisterModal  DemarerText={this.state.ButtonText} onSubmit={this.onSubmit.bind(this)} />
          </div>
        </Container>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);