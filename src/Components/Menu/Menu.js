import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import logo from '../../assets/img/shifti-logo.png';
import { Row, Col } from 'antd';

class MenuNav extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col flex="100px" >
                        <img className="logo-img" src={logo} />
                    </Col>

                    <Col flex="auto" className="page-menu">

                        <Menu mode="horizontal" className="menu">

                            <Menu.Item key="mail" className="item">
                                Home
                            </Menu.Item>
                            <Menu.Item key="app" >
                                Qui sommes Nous
                            </Menu.Item>
                            <Menu.Item>
                                Services
                            </Menu.Item>

                            <Menu.Item>
                                Offres
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                {/* 
                <div className="respensive-1">
                    <Row>
                        <Col flex="100px" >
                            <img className="logo-img" src={logo} />
                        </Col>

                        <Col flex="auto" className="page-menu-resp1">

                            <Menu mode="horizontal" className="menu">

                                <Menu.Item key="mail" className="item">
                                    Home
                                </Menu.Item>
                                <Menu.Item key="app" >
                                    Qui sommes Nous
                                </Menu.Item>
                                <Menu.Item>
                                    Services
                                </Menu.Item>

                                <Menu.Item>
                                    Offres
                                </Menu.Item>
                            </Menu>

                        </Col>

                    </Row>

                </div>

                <div className="respensive-2">
                    <Row>
                        <Col flex="100px" >
                            <img className="logo-img" src={logo} />
                        </Col>

                        <Col flex="auto" className="page-menu">

                            <Menu mode="horizontal" className="menu">

                                <Menu.Item key="mail" className="item">
                                    Home
                                </Menu.Item>
                                <Menu.Item key="app" >
                                    Qui sommes Nous
                                </Menu.Item>
                                <Menu.Item>
                                    Services
                                </Menu.Item>

                                <Menu.Item>
                                    Offres
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </div>

                <div className="respensive-3">
                    <Row>
                        <Col flex="100px" >
                            <img className="logo-img" src={logo} />
                        </Col>

                        <Col flex="auto" className="page-menu">

                            <Menu mode="horizontal" className="menu">

                                <Menu.Item key="mail" className="item">
                                    Home
                                </Menu.Item>
                                <Menu.Item key="app" >
                                    Qui sommes Nous
                                </Menu.Item>
                                <Menu.Item>
                                    Services
                                </Menu.Item>

                                <Menu.Item>
                                    Offres
                                </Menu.Item>
                            </Menu>

                        </Col>

                    </Row>

                </div> */}

            </div>




        );
    }
}

export default MenuNav;