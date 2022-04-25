import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    Mask,
    Container,
    Row,
    Col,
    Fa,
    Button
} from 'mdbreact';

import './baseNavBar.css';
import logoDDJ from '../../statics/images/logo_DDJ.png';


class BaseNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            activeGallery: false,
            activeWho: false,
            activeFiles: false,
            activeComments: false,
        };
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
        this.handleLinkGallery = this.handleLinkGallery.bind(this);
        this.handleLinkWho = this.handleLinkWho.bind(this);
        this.handleLinkFiles = this.handleLinkFiles.bind(this);
        this.handleLinkComments = this.handleLinkComments.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleLinkGallery() {
        this.setState({
            collapse:false,
            activeGallery: true,
            activeWho: false,
            activeFiles: false,
            activeComments: false
        })
    }

    handleLinkWho() {
        this.setState({
            collapse:false,
            activeGallery: false,
            activeWho: true,
            activeFiles: false,
            activeComments: false
        })
    }

    handleLinkFiles() {
        this.setState({
            collapse:false,
            activeGallery: false,
            activeWho: false,
            activeFiles: true,
            activeComments: false
        })
    }

    handleLinkComments() {
        this.setState({
            collapse:false,
            activeGallery: false,
            activeWho: false,
            activeFiles: false,
            activeComments: true
        })
    }

    handleNavbarClick() {
        this.setState({
            collapse: false
        });
    }

    render() {
        const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
        return (
            <div id="main-navbar">
                <Navbar dark expand="md" fixed="top" scrolling>
                    <Container>
                        <NavbarBrand>
                            <img src={logoDDJ} width="45" height="45" alt=""/>
                            <strong className="white-text"> Dentro del Juego</strong>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.onClick}/>
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem className={this.state.activeGallery ? 'active' : ''} onClick={this.handleLinkGallery}>
                                    <NavLink to="/gallery"><Fa icon="picture-o"/>Galeria</NavLink>
                                </NavItem>
                                <NavItem className={this.state.activeWho ? 'active' : ""} onClick={this.handleLinkWho}>
                                    <NavLink to="/who"><Fa icon="question-circle"/> ¿Quienes somos?</NavLink>
                                </NavItem>
                                <NavItem className={this.state.activeFiles ? 'active' : ""} onClick={this.handleLinkFiles}>
                                    <NavLink to="/files"><Fa icon="file"/> Archivos</NavLink>
                                </NavItem>
                                <NavItem className={this.state.activeComments ? 'active' : ""} onClick={this.handleLinkComments}>
                                    <NavLink to="/comments"><Fa icon="comment"/> Comentarios</NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
                { this.state.collapse && overlay}
            </div>
        );
    }
}

export default BaseNavBar;