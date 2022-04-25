import React, {Component} from 'react';
import {View, Mask, Container, Input, Row, Col, Fa, Button} from 'mdbreact';

import "./comments.css";
import CommentsList from "../commentsList";

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };

        this.updateComments = this.updateComments.bind(this);
    }

    updateComments() {
        fetch('http://localhost:9000/api/expo_comments/?format=json', {
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
                    this.setState({comments: data});
                });
            } else {
                console.error("Network response was NOT ok for fetch works");
                return [];
            }
        });
    }

    componentWillMount() {
        this.updateComments();
    }

    render() {
        return (
            <div id="comments" className="pb-5">
                <View id="main-view-comments">
                    <Mask className="d-flex justify-content-center align-items-center rgba-black-strong">
                        <Container className="white-text text-center animated fadeInRight">
                            <h4 className="display-4">Vea los comentarios subidos y escriba uno...</h4>
                        </Container>
                    </Mask>
                </View>

                <CommentsList comments={this.state.comments}/>
                <Container>
                    <hr className="hr-dark"/>
                    <h5>Escriba su comentario</h5>
                    <Row>
                        <div className="form-group">
                            <textarea className="form-control mb-1" cols="140" rows="4"/>
                            <Button color="elegant">Comentar</Button>
                        </div>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Comments;