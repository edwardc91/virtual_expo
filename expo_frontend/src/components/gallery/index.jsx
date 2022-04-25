import React, {Component} from 'react';
import {View, Mask, Container, Row, Col, Fa, Button} from 'mdbreact';

import "./gallery.css";

import WorksList from "../worksList";

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            works: []
        }
    }


    componentWillMount() {
        fetch('http://localhost:9000/api/works/?format=json', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                //'authorization': 'token ' + this.props.user_token
            }
        }).then(response => {
            console.log(response);
            if (response.ok) {
                console.log("Network response was ok for fetch works");
                response.json().then((data) => {
                    console.log(data);
                    this.setState({works: data});
                });
            } else {
                console.error("Network response was NOT ok for fetch works");
                return [];
            }
        });
    }

    componentWillUnmount() {
        //this.serverRequest.abort();
    }

    render() {
        return (
            <div id="gallery" className="pb-5">
                <View id="main-view-gallery">
                    <Mask className="d-flex justify-content-center align-items-center rgba-black-strong">
                        <Container className="white-text text-center animated fadeInRight">
                            <h4 className="display-4">Vea nuestras obras en exposicion y deje sus comentarios.</h4>
                        </Container>
                    </Mask>
                </View>

                <WorksList works={this.state.works}/>
            </div>
        );
    }
}

export default Gallery;