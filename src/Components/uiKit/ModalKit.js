import React, { Component } from 'react'
import { Modal, Button, Input, Select } from 'antd';
import 'antd/dist/antd.css'; 
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { connect } from 'react-redux';

class ModalKit extends Component {
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
    console.log("aux",aux);
   const ERROR = [...this.state.registerFormData.validation.error]
   const ERROR_MSG=[...this.state.registerFormData.validation.errorMsg]
  
  const action = {type:"GET_ERROR", registerValue:aux }
  this.props.dispatch(action)
 }
    render() {
      console.log('state',this.state);
        return (
        <div>
          <Modal
          title={this.props.title}
          visible={this.props.isModalVisible}
          closable={false}
          footer={null}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
              >
         {this.props.register === "register" ? (

          <div>
            <span >{this.props.labelname}</span>
            <Input  id="name" 
             onChange={(e)=>this.onChangeRegisterForm(e.target.value,"name",0)}
              value={this.state.registerFormData.name} />
            {this.state.registerFormError[0]&&<div style={{color:'red'}}>{this.state.registerFormErrorMsg[0]}</div>}
          </div>
          ):null
        }
          { this.props.register === "register" ?
          (
            <div >
            <span >{this.props.labelprenom}</span>
            <Input  id="prenom"  onChange={(e)=>this.onChangeRegisterForm(e.target.value,"prenom",1)} 
            value={this.state.registerFormData.prenom}/>
            {this.props.auth.registerValue&&this.props.auth.registerValue.validation.error[1]?<div style={{color:'red'}}>{this.props.auth.registerValue.validation.errorMsg[1]}</div>:null}
          </div>
          ):null
          }
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.email}</span>
            <Input
              type="email"
              className="form-control color-input"
              id="email"
              placeholder="name@example.com"
              value={this.state.registerFormData.email}
              onChange={(e)=>this.onChangeRegisterForm(e.target.value,"email",2)}
            />
            {this.state.registerFormError[2]&&<div style={{color:'red'}}>{this.state.registerFormErrorMsg[2]}</div>}
          </div>
          ):null
          }
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.password}</span>
            <Input
              type="password"
              className="form-control color-input"
              value={this.state.registerFormData.password1}
              onChange={(e)=>this.onChangeRegisterForm(e.target.value,'password1',3)}
            />
            {this.state.registerFormError[3]&&<span style={{color:'red'}}>{this.state.registerFormErrorMsg[3]}</span>}
          </div>
          ):null
          }
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.confirmpassword}</span>
            <Input
              type="password"
              className="form-control color-input"
              id="password2"
              value={this.state.registerFormData.password2}
              onChange={(e)=>this.onChangeRegisterForm(e.target.value,'password2',4)}
            />
            {this.state.registerFormError[4]&&<span style={{color:'red'}}>{this.state.registerFormErrorMsg[4]}</span>}
            </div>
          ):null
          }
          {this.props.entreprise === "entreprise" ? (
            <div>
          <span >{this.props.nomEntreprise}</span>
          <Input 
           id="nomEntreprise"
           value={this.props.entrepriseFormData.raison_sociale}
          onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'raison_sociale',0)} />
          {this.props.entrepriseFormError[0]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[0]}</span>}
        </div>
          ):null

          }

          {this.props.entreprise === "entreprise" ? (
            <div >
        <span>{this.props.activite}</span>
        <select  className="form-control color-input" id="activite" value={this.props.entrepriseFormData.activite}
        onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'activite',1)}  >
          <option>Industrielle</option>
          <option>Distribution</option>
          <option>Services</option>
        </select>
      </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
            <span>{this.props.produit}</span>
            <input
              className="form-control color-input"
              id="produit" 
              value={this.props.entrepriseFormData.produit}
             onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'produit',2)} 
             
            />
            {this.props.entrepriseFormError[2]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[2]}</span>}
          </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
            <span>{this.props.affaire}</span>
            <input
              className="form-control color-input"
              id="affaire" 
              value={this.props.entrepriseFormData.affaire}
              onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'affaire',3)} 
            />
            {this.props.entrepriseFormError[3]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[3]}</span>}
          </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
        <span>{this.props.rne}</span>
        <input
          className="form-control color-input"
          id="rne"
          value={this.props.entrepriseFormData.rne}
              onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'rne',4)} 
        />
        {this.props.entrepriseFormError[4]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[4]}</span>}
      </div>
          ):null

          }
        
          {this.props.entreprise === "entreprise" ? (
            <div >
      <span>{this.props.siteweb}</span>
      <input
      
        className="form-control color-input"
        id="siteweb"
        value={this.props.entrepriseFormData.siteweb}
        onChange={(e)=>this.props.onChangeEntrepriseForm(e.target.value,'siteweb',5)} 
      />
      {this.props.entrepriseFormError[5]&&<span style={{color:'red'}}>{this.props.entrepriseFormErrorMsg[5]}</span>}
       </div>
          ):null

          }
        <div>
          <button className="form-control btn btn-primary" type="submit" onClick={this.props.onSubmit} >
            Submit
          </button>
        </div>
      
          </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps) (ModalKit)