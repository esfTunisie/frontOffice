import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    size: 'large',
  };
  render() {
    const { size } = this.state;
    return (

      <Menu mode="horizontal" className="position-items">

        <Menu.Item key="mail">
          Devenir partenaire
        </Menu.Item>
        <Menu.Item key="app" >
          Contact
        </Menu.Item>
        <Menu.Item>
          <Button shape="round" icon={<UserOutlined />} size={size} >
            Login
          </Button>
        </Menu.Item>
      </Menu>



    );
  }
}

export default Navbar;
