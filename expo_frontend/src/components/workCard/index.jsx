import React, {Component} from 'react';
import {Card, CardBody, View, Mask, Row, Col, Fa, Button} from 'mdbreact';

class WorkCard extends Component {
    constructor(props) {
        super(props);
    }

    renderAuthors(){
        let authors_length = this.props.authors.length;
        return this.props.authors.map(function (author, index) {
            return(
                <span key={author.id}>
                    {author.name}{index < authors_length -1 ? ", ": ""}
                </span>
            )
        });
    }

    render() {
        return (
            <Col md="5" className="mt-5 mt-md-0">
                <Card className="text-center z-depth-2">
                    <View className="overlay z-depth-3">
                        <img src={this.props.image_url} className="card-img-top"/>
                        <a>
                            <Mask className="rgba-white-light waves-effect waves-light"/>
                        </a>
                    </View>
                    <CardBody>
                        <h1 className="card-title">{this.props.name}</h1>
                        <hr/>
                        <h5 className="h5-responsive"><Fa icon="user"/> Autor(es): {this.renderAuthors()}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <hr/>
                        <Button color="elegant"><Fa icon="comment"/> Agregar comentario</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default WorkCard;