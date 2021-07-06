//import useState hook to create menu collapse state
import React, { useState } from "react";
import { connect } from 'react-redux'
import imageShifty from "../../assets/img/Ellipse1.svg"
import imageShiftyPoint from "../../assets/img/1.svg"
import { Input, Row, Col, Button } from 'antd';
import imageShiftyLogin from "../../assets/img/imageLogin.png"



const BluePage = (props) => {
    if(props.register)
    {
        return (
            <div  className="blue-page-shifty">
                    <img className="blue-page-image" src={imageShifty} />
            </div>
            );
        };
    
    if(props.login)
    {
        return (
            <div  className="blue-page-shifty">
                     
                    <img className="blue-page-image" src={imageShifty} />
            </div>
            );
        };
    
    if(props.userInformation)
    {
        return(
            <div  className="blue-page-shifty">
                <Row>
                    Information et coordonnées
                </Row>
                <Row>
                    Paramétre
                </Row>
                <Row>
                    Magasin
                </Row>
            </div>
        );
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
      
export default connect(mapStateToProps, mapDispatchToProps)(BluePage);