import React, { Component } from "react";
import { connect } from "react-redux";

import { Container,Button } from "reactstrap";
import { apiURL } from "../../Config/config";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import ModalKit from "../uiKit/ModalKit";
import { Spin } from 'antd';
import { Carousel } from "bootstrap";




class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible:false,
      loading:false,
      registerFormData:
      {name:'',prenom:"",email:'',password1:'',password2:'',
      validation:
      {
        error:
        [true,true,true,true],
        errorMsg:
        ['merci de remplir votre nom',
        'merci de remplir votre prénom',
        'merci de remplir votre email',
        'merci de remplir votre mot de passe',
        'merci de confirmer votre mot de passe'

      ]}},
      registerFormError:[false,false,false,false,false],
      registerFormErrorMsg:['','','',''],
      passwordValue:""
      /*name:"",
      prenom:"",
      email:"",
      password1:"",
      password2:"",
      username:"",*/
      
    };
  }

 onChangeRegisterForm=(value,key,index)=>{
  console.log("hello from register");
  let aux = {...this.state.registerFormData}
  aux[key]=value
  if(key==='name'){
    if(value.trim()===''){
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='merci de remplir votre nom'
    }else{
      aux.validation.error[index]=false
      aux.validation.errorMsg[index]=''
    }
  }
  if(key==='prenom'){
    if(value.trim()===''){
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='merci de remplir votre prenom'
    }else{
      aux.validation.error[index]=false
      aux.validation.errorMsg[index]=''
    }
  }

  if(key=="email"){
        
    if(isEmpty(value)){
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='merci de remplir votre Email'
    } if(!isEmail(value)){
      
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='merci de remplir votre email correctement'
    }
    
    
    else{
      aux.validation.error[index]=false
      aux.validation.errorMsg[index]=''
    }
  }
  if(key==='password1'){
    if(value.trim()===''){
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='merci de remplir votre password'
    }
    else if (value.length < 8)
        {
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='le mot de passe doit contient 8 caractére'
        }
        else{
          this.setState({passwordValue:value})
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
       
        }
  } 
  if(key=="password2"){
        
        
    if(isEmpty(value)){
      
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='merci de confirmer votre mot de passe'
    }else if (value.length < 8)
    {
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='le mot de passe doit contient 8 caractére'
    }else if(value !== this.state.passwordValue){
     
      aux.validation.error[index]=true
      aux.validation.errorMsg[index]='password not match'
    }
    
    else{
      aux.validation.error[index]=false
      aux.validation.errorMsg[index]=''
    }
  }
  this.setState({registerFormData:aux})
 }


 
   onSubmit = async () => {
    
    const action = {type:"GET_TOKEN", token:'', isLogIn:false,username: this.state.registerFormData.email, password: this.state.registerFormData.password1}
    this.props.dispatch(action)
    const ERROR = [...this.state.registerFormData.validation.error]
    const ERROR_MSG=[...this.state.registerFormData.validation.errorMsg]
    this.setState({
      registerFormError:ERROR,
      registerFormErrorMsg:ERROR_MSG
    })
    if(!this.state.registerFormData.validation.error.includes(true)){
      this.setState({loading:true})
      let formdata =new FormData()
      formdata.append('first_name',this.state.registerFormData.name)
      formdata.append('last_name',this.state.registerFormData.prenom)
      formdata.append('email',this.state.registerFormData.email)
      formdata.append('password',this.state.registerFormData.password1)
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
      

    
  }
   }
  getTokenUser= async()=>{
 
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
    
    const dataToken = await fetch(apiURL+"/api/login_check", requestOptions);
    if(dataToken.status == 200)
    {
    const result = await dataToken.json();
      //const result = dataTokenJson.text();
      console.log("token", JSON.stringify(result));
      const str = JSON.stringify(result).substring(10)
      const newStr = str.substring(0, str.length - 2) 
      console.log("hello",newStr);
      const dataMagasin = await fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
        'Authorization': 'Bearer '+newStr}});
        console.log("essai3", dataMagasin);
        const dataMagasinJson = await  dataMagasin.json();
        console.log("essai4",dataMagasinJson);
        const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username, user:dataMagasinJson}
        this.props.dispatch(action) 
        this.setState({loading:false})  
        window.location='/espace-client'
      
    }
    else{
      const action = {type:"GET_TOKEN", token:'', isLogIn:false }
      this.props.dispatch(action)
    }
  //  await fetch(apiURL+"/api/login_check", requestOptions)
  //     .then(response => {
  //       if(response.status == 200){
  //         response.text().then(result =>{
  //           const str = JSON.stringify(result).substring(14)
  //           const newStr = str.substring(0, str.length - 4) 
           
  //           fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
  //             'Authorization': 'Bearer '+newStr}})
  //            .then(response => response.json()).then(data => {
  //              console.log('data',data);
  //               const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username, user:data}
  //               this.props.dispatch(action)
  //           window.location='/espace-client'
  //         })
  //       })
  //       }
  //       else{
  //         const action = {type:"GET_TOKEN", token:'', isLogIn:false }
  //           this.props.dispatch(action)
  //       }
  //     })
  //     .catch(error => console.log('error', error));
   
  }

   handleOk = () => {
    this.setState({isModalVisible:false})
   };

    handleCancel = () => {
    this.setState({isModalVisible:false})
   };
  /*onChangeName(e) {
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
  
    }*/

  
  showModal=()=>{
    this.setState({isModalVisible:true})
  }
  render() {
    
      return (
        <div>
        <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        
        {this.state.loading?
        (<div className="example">
        <Spin size="large" />
        
      </div>):(
      <div>
        <Carousel />
        <Container >
          
        <div className="content-center brand">
          <h1 className="h1-seo">Shifti</h1>
          <h3 className="d-none d-sm-block">
          Démarez votre commerce en ligne avec Shifti
          </h3>
         {/* <IndexRegisterModal  DemarerText={this.state.ButtonText} onSubmit={this.onSubmit.bind(this)} />*/}
         <Button onClick={this.showModal}>Démarer</Button>
          
          <ModalKit 
          isModalVisible= {this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          register={"register"}
          labelname={"Nom"}
          labelprenom={"Prénom"}
          email={"Adresse Email"}
          password={"Mot de passe"}
          confirmpassword={"Confirmer mot de passe"}
          onChangeRegisterForm={this.onChangeRegisterForm}  
         registerFormError={this.state.registerFormError}
         registerFormErrorMsg={this.state.registerFormErrorMsg}
         registerFormData={this.state.registerFormData}
          onSubmit={this.onSubmit}
          />
         
        </div>
      </Container>
   </div>
      )
      

      
        }
      </div>
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