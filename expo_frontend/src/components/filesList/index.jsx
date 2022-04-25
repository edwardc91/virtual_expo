import React, {Component} from 'react';
import {Container, Card, CardBody, Row, Col, Fa, Button} from 'mdbreact';


class FilesList extends Component {
    constructor(props) {
        super(props)
    }

    renderFilesList() {
        if (this.props.files.length > 0) {
            return this.props.files.map(function (file, index) {
                return (
                    <Row key={file.id} className="justify-content-center">
                        <Card className="mt-3 col-12">
                            <div className="text-center align-items-center py-5 px-4">
                                <div>
                                    <div className="d-flex">
                                        <h5><span className="badge badge-dark">{index + 1}</span></h5>
                                        <h3 className="card-title pl-5">{file.name}</h3>
                                    </div>
                                    <hr className="hr-dark"/>
                                    <p>{file.description}</p>
                                    <a className="btn btn-sm btn-elegant waves-effect waves-light" href={file.file}><Fa icon="download"/> Descargar</a>
                                </div>
                            </div>
                        </Card>
                    </Row>
                );
            });
        } else {
            return (<div>"No existen archivos en la base de datos"</div>);
        }
    }

    render() {
        return (
            <div className="mt-5">
                <Container>
                    <h4 className="display-4">Nuestros archivos</h4>
                    <hr/>
                    {this.renderFilesList()}
                </Container>
            </div>
        );
    }
}

export default FilesList;