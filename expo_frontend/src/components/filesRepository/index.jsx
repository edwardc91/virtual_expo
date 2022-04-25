import React, {Component} from 'react';
import {Container, Mask, View, Row, Col, Fa, Button} from 'mdbreact';

import "./filesRepository.css";
import FilesList from "../filesList";

class FilesRepository extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:9000/api/files/?format=json', {
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
                console.log("Network response was ok for fetch files");
                response.json().then((data) => {
                    console.log(data);
                    this.setState({files: data});
                });
            } else {
                console.error("Network response was NOT ok for fetch files");
                return [];
            }
        });
    }

    render() {
        return (
            <div id="files" className="pb-5">
                <View id="main-view-files">
                    <Mask className="d-flex justify-content-center align-items-center rgba-black-strong">
                        <Container className="white-text text-center animated fadeInRight">
                            <h4 className="display-4">Descargue nuestros panfletos, videos y mucho mas de nuestro repositorio...</h4>
                        </Container>
                    </Mask>
                </View>
                <FilesList files={this.state.files}/>
            </div>
        );
    }
}

export default FilesRepository;