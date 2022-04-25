import React from 'react';
import {
    View,
    Mask,
    Container,
    Row,
    Col,
    Fa,
    Button
} from 'mdbreact';

import './whoWeAre.css';

const WhoWeAre = () => {
    return (
        <div id="who-we-are">
            <View>
                <Mask className="d-flex justify-content-center align-items-center rgba-black-strong">
                    <Container className="white-text text-center animated fadeInUp">
                        <h2 className="display-4">¿Quienes somos?</h2>
                        <hr className="hr-light"/>
                        <p className="text-justify">
                            <b>Dentro del Juego</b> es un proyecto de autogestión y curaduría colectiva creado en 2015
                            para
                            promocionar el
                            trabajo de creadores visuales con escaso acceso a los circuitos
                            expositivos establecidos. Conformado básicamente por jóvenes artistas radicados en Santa
                            Clara,
                            pero
                            abiertos al intercambio estético intergeneracional, construye un espacio
                            alternativo que pretende dinamizar el desempeño institucional desde una perspectiva
                            dialógica
                            centrada en la
                            experiencia grupal. Esta postura permite un fuerte peso de la
                            reflexión estética y cosmovisiva que debe acompañar y generar cada propuesta. Además, por su
                            naturaleza
                            interactiva <b>Dentro del Juego</b> incluye a creadores de otras
                            manifestaciones del arte que compartan nuestros presupuestos funcionales.
                        </p>
                    </Container>
                </Mask>
            </View>
        </div>)
};

export default WhoWeAre;