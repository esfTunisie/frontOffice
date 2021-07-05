import React, { Component } from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import vente from '../../assets/img/vente.png';
import vente2 from '../../assets/img/vente2.png';
import visibilite from '../../assets/img/visibilite.png';
import visibilite2 from '../../assets/img/visibilite2.png';
import livraison from '../../assets/img/livraison.png';
import template from '../../assets/img/template.png';
import pack from '../../assets/img/pack.png';
import bondeP1 from '../../assets/img/bondeP1.png';
import { Carousel } from 'antd';
import { RightOutlined } from '@ant-design/icons';


class Content extends Component {
    state = {
        size: "large"
    }
    render() {
        const contentStyle = {
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',

        };
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5
                }}
            />
        );
        const size = this.state
        return (
            <div>
                <div>
                    <Row justify="center" className="row-service1">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-service">

                            <h1 className="title-row">Vendez N'importe<br />Quand , N'importe Où</h1>
                            <p className="text-row">Shifti vous donne le pouvoir de vendre<br />
                                facilement n'importe où, à n'importe qui sur<br />
                                Internet et dans le monde entier. Contrôlez<br />
                                tout à partir d'une plate-forme unique avec un<br />
                                inventaire, une gestion des commandes et une<br />
                                tarification centralisée. Ce n'est pas plus<br />
                                simple que cela.</p>

                            <div className="button-header">
                                <Button className="button-service" shape="round" size={size} > C'est parti</Button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <img src={vente} className="img-width" />
                            <img src={vente2} className="vente2" />
                        </Col>
                    </Row>

                    <Row justify="center" className="row-service2">

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-service">

                            <img src={visibilite} className="img-width" />
                            <img src={visibilite2} className="visibilite2" />
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-service" className="col-service">
                            <h1 className="title-row">Augmentez La Visibilité<br />De Votre Entreprise</h1>
                            <p className="text-row">Éliminez les incertitudes liées au marketing, grâce à notre centre de<br />
                                services mutualisés et à nos outils intégrés qui vous aident à créer, à<br />
                                mettre en œuvre et à analyser vos campagnes de marketing digital.</p>

                            <div className="button-header">
                                <Button className="button-service" shape="round" size={size} > C'est parti</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row justify="center" className="row-service3">
                        <Col span={12} className="col-service">
                            <h1 className="title-row3">Livrez Là Où Sont<br />Vos Clients</h1>
                            <p className="text-row-3">Coordination de la préparation de commande. Livraison :<br />
                                coordination les acteurs de la livraisons pour l’acheminement des<br />
                                produits vers et depuis les villes intérieurs. Retour marchandise : gestion des retours marchandises.<br />
                                Réclamation client : traitement des réclamation et costumer success.</p>

                            <div className="button-header">
                                <Button className="button-service" shape="round" size={size} > C'est parti</Button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <img src={livraison} className="img-width" />
                        </Col>
                    </Row>

                    <div className="row-service4">

                        <Row justify="center">
                            <Col>
                                <h1 className="title-row-4">Développez votre<br />présence en ligne</h1>
                                <span className="text-row-4">Suivez ces étapes pour créer votre site web :</span>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 1 }}></Col>

                            <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 2 }}>
                                <hr className="hr" />
                                <h1 className="title-row-5">Personnalisez votre site</h1>
                                <p className="text-row-5">Choisissez un template<br />
                                    et personnalisez-le, ou<br />
                                    obtenez un site sur-mesure<br />
                                    en répondant à quelques<br />
                                    questions sur vous et votre activité.</p>
                            </Col>

                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 3 }}>
                                <hr className="hr" />
                                <h1 className="title-row-5">Ajoutez des fonctionnalités</h1>
                                <p className="text-row-5">Ajoutez des fonctionnalités<br />
                                    Lancez votre blog, ouvrez une<br />
                                    boutique en ligne et acceptez<br />
                                    des réservations en ligne. Ajoutez<br />
                                    des fonctionnalités à votre guise.</p>
                            </Col>

                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 4 }}></Col>
                        </Row>


                        <Row>
                            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 1 }}></Col>

                            <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 2 }}>
                                <hr className="hr" />
                                <h1 className="title-row-5">Modifiez la version mobile</h1>
                                <p className="text-row-5">Optimisez l'affichage de votre<br />
                                    site sur tous les écrans et<br />
                                    modifiez-le directement depuis<br />
                                    l'éditeur mobile.</p>
                            </Col>

                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 3 }}>
                                <hr className="hr" />
                                <h1 className="title-row-5">Optimisez votre référencement</h1>
                                <p className="text-row-5">Soyez visible sur Google grâce<br />
                                    à notre plan SEO personnalisé.<br />
                                    Il suffit de répondre à quelques<br />
                                    questions au moment de créer<br />
                                    votre site web.</p>
                            </Col>

                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 4 }}></Col>
                        </Row>
                    </div>

                    <Row justify="center" className="row-service3">
                        <Col span={12} className="col-service">
                            <img src={template} className="template" />
                            <h1 className="content-title-template">Nos templates et shops</h1>


                            <Carousel autoplay>
                                <div>
                                    <h3 style={contentStyle}><img src={template} /></h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}><img src={template} /></h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}><img src={template} /></h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}><img src={template} /></h3>
                                </div>
                            </Carousel>
                        </Col>

                        <p className="nos-template-button" > Voir tout <RightOutlined /></p>

                    </Row>
                    <p className="nos-template-button" > Voir tout <RightOutlined /></p>

                    <Row justify="center" className="row-service3">
                        <Col span={12} className="col-service">
                            <img src={pack} className="template1" />
                            <h1 className="content-title-template1">Nos packs</h1>
                        </Col>
                    </Row>

                    <div className="row-content-pack">
                        <div className="col-content-pack1">
                            <h1 className="pack-Starter">Starter </h1>
                            <p className="text-pack-Starter">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <p className="bas-pack-Starter">
                                300dt<span className="span-pack">/Mois</span>
                            </p>
                        </div>
                        <div className="col-content-pack2">
                            <h1 className="pack-Pioneer">Pioneer </h1>
                            <p className="text-pack-Pioneer">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <p className="bas-pack-Pioneer">
                                1500dt<span className="span-pack">/Mois</span>
                            </p>
                        </div>
                        <div className="col-content-pack3">
                            <img src={bondeP1} className="bondeP1" />
                            <h1 className="pack-Gold"> Gold</h1>
                            <p className="text-pack-Gold">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <p className="bas-pack-Gold">
                                2000dt<span className="span-pack">/Mois</span>
                            </p>
                        </div>
                    </div>

                    <Row justify="center" className="row-pack">
                        <Col span={12} className="">
                            <h1 className="title-desc">Pourquoi Shifti
                                est le meilleur choix
                                pour vous</h1>
                        </Col>
                        <Col span={12}>
                            <p className="text-desc">
                                Avec Wix, vous pouvez créer vous-même un site web gratuit et professionnel. Vous pouvez commencer avec un modèle design et le personnaliser, ou obtenir un site créé pour vous sur-mesure. Bénéficiez d'une solution tout-en-un : hébergement web fiable et gratuit, sécurité maximale, référencement puissant et assistance 24h/24.
                                Plus de 160 millions de personnes dans le monde ont déjà choisi Wix pour créer un site web gratuit. Faites comme eux, lancez-vous.
                            </p>
                            <p className="desc-button" > Commencer <RightOutlined className="icon" /></p>
                        </Col>
                    </Row>
                </div>



            </div >

        );
    }
}

export default Content;