import React, { Component } from 'react';
import { Menu, Drawer } from 'antd';
import { UserOutlined, MenuOutlined, TeamOutlined, MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    size: 'large',
    visible:false
  };

  showDrawer = () => {
    this.setState({visible:true})
  };
  onClose = () => {
    this.setState({visible:false})
  };
  menuMobile = () => {

  return (
    <>
      <Button type="link" className="topbar-menu mobileVisible" onClick={this.showDrawer} icon={<MenuOutlined />} />
      
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <Menu mode="vertical">
        <Menu.Item>
          <a href="#">Home</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Qui Sommes Nous</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Services</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Offres</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Devenir partenaire</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Contact</a>
        </Menu.Item>
      </Menu>
      </Drawer>
    </>
  );
};

  render() {
    const { size } = this.state;
    return (
      <div>
      
      {/* <Menu mode="horizontal" className="position-items">
        <Menu.Item key="null">
          {this.menuMobile()}
        </Menu.Item>
        <Menu.Item key="mail">
          <span className="mobileHidden"> Devenir partenaire </span><span className="mobileVisible"><TeamOutlined /></span>
        </Menu.Item>
        <Menu.Item key="app" >
          <span className="mobileHidden">Contact</span><span className="mobileVisible"><TeamOutlined /></span>
        </Menu.Item>
        <Menu.Item>
          <Button shape="round" icon={<UserOutlined />} size={size} >
            Login
          </Button>
        </Menu.Item>
      </Menu> */}
      <div className="topbar">
            {this.menuMobile()}
            <div className="mobileHidden">
              <a href="#" className="topbar-menu">Devenir partenaire <span className="mobileVisible"><TeamOutlined /></span></a>
              <a href="#" className="topbar-menu">Contact <span className="mobileVisible"><TeamOutlined /></span></a>
            </div>
            <Button shape="round" className="btn-login" icon={<UserOutlined className="login-icon"/>} size={size} >
              <span className="mobileHidden"> Login </span> 
            </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
