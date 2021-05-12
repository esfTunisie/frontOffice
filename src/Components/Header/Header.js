import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { Container,Button } from "reactstrap";
import IndexRegisterModal from "../IndexRegisterModal/IndexRegisterModal";
import { withRouter } from "react-router-dom";
import { apiURL } from "../../Config/config";

import MyModal from "../uiKit/myModal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible:false,
      

      name:"",
      prenom:"",
      email:"",
      password1:"",
      password2:"",
      username:""
    };
  }

 


 
   onSubmit = async () => {

    const action = {type:"GET_TOKEN", token:'', isLogIn:'',username: this.state.email, password: this.state.password1}
    this.props.dispatch(action)
    

      let formdata =new FormData()
      formdata.append('first_name',this.state.name)
      formdata.append('last_name',this.state.prenom)
      formdata.append('email',this.state.email)
      formdata.append('password',this.state.password1)
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
            console.log("hello",newStr);
            fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
              'Authorization': 'Bearer '+newStr}})
             .then(response => response.json()).then(data => {
                const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username, user:data}
                this.props.dispatch(action)
              
          
            
            window.location='/espace-client'
          })
        })
        }
        else{
          const action = {type:"GET_TOKEN", token:'', isLogIn:false }
            this.props.dispatch(action)
        }
      })
      .catch(error => console.log('error', error));
   
  }

   handleOk = () => {
    this.setState({isModalVisible:false})
   };

    handleCancel = () => {
    this.setState({isModalVisible:false})
   };
  onChangeName(e) {
     this.setState({
       name: e
     });
    
   }
 
   onChangePrenom(e) {
     this.setState({
      prenom: e
     });
    
  }
   onChangeEmail(e) {
     this.setState({
       email: e
    });
 
   }
   onChangePasswordOne=(e)=> {
      this.setState({password1:e})
    
    }

    onChangePasswordTwo(e) {
     this.setState({
      password2: e
  });
  
    }

  
  showModal=()=>{
    this.setState({isModalVisible:true})
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
           {/* <IndexRegisterModal  DemarerText={this.state.ButtonText} onSubmit={this.onSubmit.bind(this)} />*/}
           <Button onClick={this.showModal}>Démarer</Button>
          
            <MyModal 
            isModalVisible= {this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            register={"register"}
            labelname={"Nom"}
            labelprenom={"Prénom"}
            email={"Adresse Email"}
            password={"Mot de passe"}
            confirmpassword={"Confirmer mot de passe"}
            onChangeName={(e)=>this.setState({name:e.target.value})}
            onChangePrenom={(e)=>this.setState({prenom:e.target.value})}
            onChangeEmail={(e)=>this.setState({email:e.target.value})}
            onChangePasswordOne={(e)=>this.onChangePasswordOne(e.target.value)}
            onChangePasswordTwo={(e)=>this.setState({password2:e.target.value})}
            onSubmit={this.onSubmit}
            />
           
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