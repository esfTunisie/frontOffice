import React, { useState, useEffect  } from "react";
import { connect } from "react-redux"
import { Input, Row, Col, Button } from 'antd';
import LoginForm from "./Login/LoginForm";


const RegisterForm =(props)=>{
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [steps, setSteps] = useState(1)
    const [stepsOne, setStepsOne] = useState(false)
    const [stepsTwo, setStepsTwo] = useState(false)
    const [stepsThree, setStepsThree] = useState(false)
    const [NomEntreprise, setNomEntreprise] = useState(null)


    useEffect(() => {
        console.log("props",props);
      }, []);
    const LoginForm =()=>{
        window.location ="/loginPage"
       
    }
    const registration =()=>{
        window.location ="/registration"
    }
    const stepsUserInformation =()=>{
        if(steps == 1){
            if(setNomEntreprise !==''){
                setStepsOne(true);
                setSteps=+1;
            }
            
        }
        if(steps == 2 && stepsTwo == true){
            steps=+1;
        }
        if(steps == 3 && stepsThree == true){
            steps=+1;
        }
    }

    if(props.register){
        return (
            <div className="register-form-content">
                <div className="register-form-title">
                    Commencer !
                </div>
                <div className='register-form-compte'>
                    <span className='register-form-compte-exist'>j'ai un compte ? </span><span onClick={LoginForm} className='register-form-sign_in'> Sign In</span>
                </div>
                <div className='register-form-input'>
                    <Input placeholder='Nom et prenom' className="register-form-input-style" />
                    <Input placeholder='Adresse email' className="register-form-input-style" />
                    <Input placeholder='Numéro de téléphone' className="register-form-input-style" />
                    <Input.Password  placeholder='Mot de passe' className="register-form-input-style" />
                    <Input.Password  placeholder='Confirmer votre mot de passe' className="register-form-input-style" />
                    <Row className='register-form-button'><Button className='register-form-button-style'>S'inscrire</Button></Row>
                </div>
    
            </div>
        )
    }
    if(props.login){
        return (
            <div className="register-form-content">
                <div className="login-form-title">
                Content de te revoir
                </div>
              
                <div className='register-form-input'>
                    <Input placeholder='Adresse email' className="register-form-input-style" />
                    <Input.Password  placeholder='Mot de passe' className="register-form-input-style" />
                    <Row className='login-form-button'><Button className='login-form-button-style'>S'identifier</Button></Row>
                    <span onClick={registration} className='register-form-sign_in'> Sign up</span>
                </div>
            </div>
        )
    }
    if(props.userInformation){
        if(steps == 1){
            return(
            <div className="register-form-content">
                step 1
                <Input placeholder='Adresse email' onChange={(e)=>setNomEntreprise(e.target.value)} className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Row className='login-form-button'><Button onClick={stepsUserInformation} className='login-form-button-style'>S'identifier</Button></Row>
            </div>
            )
        }
        if(steps == 2){
            return(
                <div className="register-form-content">
                    step 2
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Row className='login-form-button'><Button className='login-form-button-style'>S'identifier</Button></Row>
            </div>
            )
        }
        if(steps == 3){
            return(
                <div className="register-form-content">
                    step 3
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Input placeholder='Adresse email' className="register-form-input-style" />
                <Row className='login-form-button'><Button className='login-form-button-style'>S'identifier</Button></Row>
            </div>
            )
        }
      
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
      
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);