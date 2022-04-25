import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    View,
    Mask,
    Card,
    CardBody,
    Input,
    Container,
    Row,
    Col,
    Fa,
    Button
} from 'mdbreact';

import "./intro.css";

class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="intro">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center rgba-black-strong">
                        <Container>
                            <Row className="mt-2 pd-2 mt-md-5 pt-md-5">
                                <div className="white-text text-center text-md-left col-md-6 mb-5 animated fadeInLeft">
                                    <h1 className="h1-responsive font-weight-bold">¡¡Bienvenidos a nuestra
                                        exposicion!! </h1>
                                    <hr className="hr-light"/>
                                    <h6 className="mb-4">Sea bienvenido a esta nueva exposicion de nuestro proyecto <b>Dentro
                                        del Juego</b>. Vea y comente nuestras obras expuestas <Link
                                        className="white-text"
                                        to="/gallery"><b>aqui</b></Link>. O descargue nuestros videos y documentos <Link
                                        to="/gallery" className="white-text"><b>aqui</b></Link>.
                                    </h6>
                                    <h6>Por favor deje un
                                        comentario con sus impresiones, ideas, consejos. Muchas gracias.</h6>
                                    <Button outline color="white">Ver mas...</Button>
                                </div>
                                <Col md="6" xl="5" className="mb-4">
                                    <Card id="classic-card" className="animated fadeInRight">
                                        <CardBody className="z-depth-2 white-text">
                                            <h3 className="text-center"><Fa icon="comment"/> Deje un comentario:</h3>
                                            <hr className="hr-light"/>
                                            <Input type="textarea" label="Su comentario"/>
                                            <div className="text-center mt-4 black-text">
                                                <Button color="elegant">Comentar</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Mask>
                </View>
            </div>
        );
    }
}

export default Intro;