import React, { Component } from "react";
import { Card, Row, Col, CardBody, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class UiVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "MineWatch", link : "#" },
                { title : "Video", link : "#" },
            ],
        };
    }


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Video" breadcrumbItems={this.state.breadcrumbItems} />

                    <Row>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
        
                                        <h4 className="card-title">Camera 1</h4>
                                        <p className="card-title-desc">Mine site Area 1.</p>
        
                                    
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col> 
        
                            <Col xl={6}>
                                <Card>
                                <CardBody>
        
        <h4 className="card-title">Camera 2</h4>
        <p className="card-title-desc">Mine site Area 2.</p>

    
        <div className="embed-responsive embed-responsive-16by9">
            <iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
        </div>
    </CardBody>
                                </Card>
                            </Col> 
        
                        </Row> 
        
                        
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default UiVideo;
