import React from 'react'
import {Divider, Row, Col, Button, Typography} from 'antd'
import {GithubOutlined} from '@ant-design/icons'
import {RiDownload2Line} from 'react-icons/ri'
import KgImage from '../assets/kg.svg'
import Layout from '../components/Layout'
import {virtuosoQueries, rdfDumps} from '../api/queries'
import QueryCard from '../components/queryCard'
import RdfTimeLine from '../components/RdfTimeLine'
const {Text, Title, Paragraph} = Typography
export default class Kg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            queries:virtuosoQueries,
            lastRdfDump:rdfDumps[0].link
        }
        
    }
    render(){
    return(
        <Layout>

            <Row align="bottom" justify="space-between">
                <Col xs={24} md={10}>
                <Title level={3}>
                        Drugs4Covid Knowledge Graph
                    </Title>
                <Paragraph className="justify-text">
                    We are creating a catalogue of medicines that are being used to combat COVID-19.
                    Using Artificial Intelligence techniques and Citizen Science, we exploit the existing
                    scientific literature about coronavirus (more than 60,000 papers).
                    <br/>
                    <Text strong>
                        Following, there are some examples of questions doctors and researchers might find useful.
                        People interested in different active sustances, drugs or diseases just need to change them in the SPAR-QL code provided.
                    </Text>
                </Paragraph>
                </Col>
                <Col xs={24} md={6}>
                    <img src={KgImage} className="responsiveImg" alt=""/>
                </Col>
            </Row>
            <Divider></Divider>
            <Row>
                <Col>
                <Title level={4}>Useful Links:</Title>

                </Col>
            </Row>
            <Row gutter={[16,16]} align="top">
                <Col>
                    <Button href="https://github.com/oeg-upm/drugs4covid19-kg">Github Repository <GithubOutlined/></Button>
                </Col>
                <Col>
                    <Button href="https://w3id.org/def/DRUGS4COVID19">Drugs4Covid Ontology</Button>
                </Col>
                <Col>
                    <Button href={this.state.lastRdfDump}>Drugs4Covid KG Dump (RDF)</Button>
                </Col>                
                <Col>
                    <Button href="#rdfDumps">Check historic KG Dumps</Button>
                </Col>      
            </Row>

            <Divider></Divider>
            <Row style={{marginTop:16}} gutter={[16,16]} align="top">
            {this.state.queries.map((query, idx) => (
                <Col span={24}>
                    <QueryCard key={idx} data={query}/>                
                </Col>
            ))}
            <Divider></Divider>
            </Row>

            <section id="rdfDumps">
                <Row>
                    <Col>
                        <Title level={3}>RDF Dumps Timeline</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <RdfTimeLine key="1" total={-1}></RdfTimeLine>
                    </Col>
                </Row>
            </section>

        </Layout>
    )
    }
}