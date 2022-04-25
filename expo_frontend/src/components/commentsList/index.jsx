import React, {Component} from 'react';
import {Container, Card, CardBody, Row, Col, Fa, Button} from 'mdbreact';
import moment from 'moment';


class CommentsList extends Component {
    constructor(props) {
        super(props)
    }

    renderCommentsList() {
        if (this.props.comments.length > 0) {
            return this.props.comments.map(function (comment, index) {
                let dateFormat = moment(comment.created_at).fromNow();
                return (
                    <Row key={comment.id} className="justify-content-center mt-4 animated fadeIn">
                        <Card className="col-12 mb-3">
                            <CardBody>
                                <div className="media d-block d-md-flex border-2">
                                    <div className="media-text text-center text-md-left ml-md-3 ml-0">
                                        <span className="grey-text">{dateFormat}</span>
                                        <p style={{fontSize: 20 + "px"}}>{comment.comment}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Row>
                );
            });
        } else {
            return (
                <h4 className="h4-responsive mt-4">"No se han publicado commentarios, sea el primero. Gracias..."</h4>);
        }
    }

    render() {
        return (
            <div className="mt-5">
                <Container>
                    <h4 className="display-4">Sus comentarios</h4>
                    <hr/>
                    <Row>
                        <div className="card-header border-0 font-weight-bold col-12">
                            {this.props.comments.length} cometario(s)
                        </div>
                    </Row>
                    {this.renderCommentsList()}
                </Container>
            </div>
        );
    }
}

export default CommentsList;