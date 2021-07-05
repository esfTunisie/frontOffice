import React, { Component } from 'react';
import { Button } from 'antd';
import iconShifti from '../../assets/img/shifti-icon.png';
import DesktopShifti1 from '../../assets/img/DesktopShifti1.png';
import DesktopShifti2 from '../../assets/img/DesktopShifti2.png';
// import { Container, Row, Col } from 'react-bootstrap';


class Header extends Component {
  state = {
    size: "large"
  }
  render() {
    const size = this.state

    return (
      <div>

        <div className="page">
          <h1 className="title">Démarez votre commerce <br />
            en ligne avec <span className="color-title">Shifti</span></h1>
          <img src={iconShifti} className="shifti-icon" />
        </div>
        <div className="button-header">
          <Button className="button" shape="round" size={size} > C'est parti</Button>
        </div>
        <img src={DesktopShifti1} className="DesktopShifti1" />

        <img src={DesktopShifti2} className="DesktopShifti2" />




      </div>


    );
  }
}

export default Header;

