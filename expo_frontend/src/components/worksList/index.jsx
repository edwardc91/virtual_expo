import React, {Component} from 'react';
import {Container, Row, Col, Fa, Button} from 'mdbreact';

import WorkCard from "../workCard";

class WorksList extends Component {
    constructor(props) {
        super(props)
    }

    renderWorksList() {
        if (this.props.works.length > 0) {
            return this.props.works.map(function (work) {
                return (
                    <WorkCard key={work.id} name={work.name} authors={work.authors} description={work.description} image_url={work.image}/>
                );
            });
        } else {
            return (<div>"No existen obras en la base de datos"</div>);
        }
    }

    render() {
        return (
            <div className="mt-5">
                <Container >
                    <h4 className="display-4">Nuestras obras</h4>
                    <hr/>
                    <Row className="justify-content-center">
                        {this.renderWorksList()}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WorksList;