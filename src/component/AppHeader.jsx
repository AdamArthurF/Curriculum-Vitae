import React, {Component} from 'react';
import fotoSMA from '../img/fotoSMA3.jpg';
import {Button, Col, Container, Media, Row} from "reactstrap";

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Adam Arthur Faizal',
        }
    }
    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <Container className="themed-container" fluid={true}>
                        <Row>
                            <Col sm="5" className="header-left d-flex flex-column justify-content-end align-items-center">
                                <img src={fotoSMA} alt="Arthur" className="rounded-circle mb-2"/>
                                <Media className="border-bottom border-dark">
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-address-card fa-3x mr-3"/>
                                    </Media>
                                    <Media body>
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">Data Pribadi</h2>
                                        </Media>
                                        <Media>
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-home fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">Perumahan Josroyo Indah, Jaten, Karanganyar</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                        <Media>
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-info-circle fa-2x mr-3 mt-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">Pontianak, 20 Juli 2002</h6>
                                                    <h6 className="mb-0">Laki-laki</h6>
                                                    <h6 className="mb-0">Islam</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                        <Media>
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-phone-square fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">+62 812-3453-5633</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                        <Media>
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-globe fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">adamarthurf.github.io</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                        <Media className="mb-3">
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-envelope-square fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">adam.faizal.af6@gmail.com</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="7" className="header-right d-flex flex-column align-items-stretch justify-content-end">
                                <h1 className="display-4 font-weight-bold ml-3">{this.state.name}</h1>
                                <p className="mb-4 ml-3">
                                    <Button color="info">Web Developer</Button>{' '}
                                    <Button color="info">Mobile-Apps Developer</Button>{' '}
                                    <Button color="info">Cyber Security</Button>
                                </p>
                                <Media className="ml-3 border-bottom border-info">
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-user-graduate fa-3x mr-3"/>
                                    </Media>
                                    <Media body className="mb-3">
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">Pendidikan</h2>
                                        </Media>
                                        <section>
                                            <p className="mb-0">2007 - 2009 <span className="font-weight-bold">SD Negeri 7 Randudongkal, Pemalang</span></p>
                                            <p className="mb-0">2009 - 2010 <span className="font-weight-bold">SD Negeri 5 Mangkukusuman, Tegal</span></p>
                                            <p className="mb-0">2010 - 2013 <span className="font-weight-bold">SD Negeri 3 Jaten, Karanganyar</span></p>
                                            <p className="mb-0">2013 - 2016 <span className="font-weight-bold">SMP Negeri 3 Pedan, Klaten</span></p>
                                            <p className="mb-0">2016 - 2019 <span className="font-weight-bold">SMA Negeri 1 Karanganyar, Karanganyar</span></p>
                                            <p className="mb-0">2019 - Sekarang <span className="font-weight-bold">Universitas Sebelas Maret, Surakarta</span></p>
                                        </section>
                                    </Media>
                                </Media>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </React.Fragment>
        )
    }
}

export default AppHeader;