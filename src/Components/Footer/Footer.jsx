import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import logofooter from '../../assets/img/logofooter.png';
import { Input } from 'antd';

class Footer extends Component {
    render() {
        const { TextArea } = Input;
        const size = this.state
        return (
            <div>
                <Row justify="center" className="footer">
                    <Col span={9} className="col-footer-1">
                        <img src={logofooter} className="logofooter" />
                        <p className="text-footer1">Shifti est le centre Digital de services dédié à la
                            démocratisation et à l'accélération des projets de
                            boutiques en ligne. Nous mettons à la disposition des PMEs tous les outils et toutes les ressources nécessaires au lancement, à la réussite, et la pérennisation de leurs
                            commerce en ligne. Shifti est votre "One Stop Shop" pour vos projet e-commerce.</p>
                        <p className="button-footer" > Lire la suite <RightOutlined /></p>
                    </Col>
                    <Col span={15} className="col-footer-2">
                        <Row className="row-row-footer">
                            <Col span={9} >
                                <p className="title-color-footer">Liens utiles</p>
                                <p className="color-title-footer">A Propos</p>
                                <p className="color-title-footer">Services</p>
                                <p className="color-title-footer">Offres</p>
                                <p className="newslater">Newslater</p>
                            </Col>
                            <Col span={15}>
                                <p className="title-color-footer">Contact</p>
                                <p className="color-title-footer"><EnvironmentOutlined className="icon-footer" />  Résidence El Badr, Avenue Hédi Nouira,
                                    Ariana 2037,Tunisie</p>
                                <p className="color-title-footer"> <MailOutlined className="icon-footer" /> hello@esftunisie.com</p>
                                <p className="color-title-footer"><PhoneOutlined className="icon-footer" /> +216 20 28 69 66</p>
                                <TextArea className="input-footer" placeholder="Autosize height based on content lines" autoSize />
                                <Button className="subscribe" shape="round" size={size} > Subscribe</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>



            </div>
        );
    }
}

export default Footer;