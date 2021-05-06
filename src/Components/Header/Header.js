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
  

   
   onSubmit = (event) => {
    event.preventDefault(event);

    const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
     
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
        if(response.status == 200)
        {
        console.log("res",response);
          response.json().then(result =>{
            this.handleSubmit(event);
            window.location='/espace-client'
            console.log(result);
          })
        }
      })
      

    
  };

  handleSubmit=(event)=>{
    event.preventDefault(event)
    console.log(event.target.name.value);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "username": event.target.email.value,
        "password": event.target.password1.value
      }),
    };
    
    fetch(apiURL+"/api/login_check", requestOptions)
      .then(response => {
        if(response.status == 201){
          response.text().then(result =>{
            const str = JSON.stringify(result).substring(14)
            const newStr = str.substring(0, str.length - 4)
            const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:event.target.email.value,password:event.target.password1.value}
           this.props.dispatch(action)
            
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
    console.log(this.state.first_name);
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));