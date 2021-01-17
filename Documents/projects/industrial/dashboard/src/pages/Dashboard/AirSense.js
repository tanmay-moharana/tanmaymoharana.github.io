import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody,CardTitle} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Environment
import ReactEnvironmentChart from 'react-environment-chart';
import {Intensity} from 'react-environment-chart';
import {PM} from 'react-environment-chart';
import {Temperature} from 'react-environment-chart';
import {Humidity} from 'react-environment-chart';

import LineApexChart from "../AllCharts/apex/chartapex";

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";

class AirSense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "EnviroSense", link : "#" },
                { title : "AirSense", link : "#" },
            ],
            reports : [
                { icon : "ri-stack-line", title : "Air Quality Index", value : "1452", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-store-2-line", title : "Co2 Level", value : "38452", rate : "2.4%", desc : "From previous period" },
                { icon : "ri-briefcase-4-line", title : "CO Level", value : "15.4", rate : "2.4%", desc : "From previous period" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="AirSense" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle>CO2 Level</CardTitle>
                                <Intensity text="CO2 Level"value={44.8} height={200}/>

                            </CardBody>
                            </Card>
                            </Col>
                            <Col>
                            <Card>
                                    <CardBody>
                                        <CardTitle>PM Matter</CardTitle>
                            
                                <PM title-text="PM Matter"value={44.8} height={200}/>
                            
                            </CardBody>
                            </Card>
                            </Col>
                            <Card>
                                    <CardBody>
                                        <CardTitle>Humidity</CardTitle>
                                
                                <Humidity title-text={"Humidity"}value={44.8} height={120}/>  
                            
                            </CardBody>
                            </Card>
                            <Col xl={8}>
                                {/* revenue Analytics */}
                                <RevenueAnalytics card-title mb-4="AirAnalytics"/>
                            </Col>
                            

                            <Col xl={4}>  
                            <Card>
                                    <CardBody>
                                        <CardTitle>Temperature</CardTitle>
                                
                                <Temperature title-text="Temperature"value={30.8} height={400}/>  
                            
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

export default AirSense;
