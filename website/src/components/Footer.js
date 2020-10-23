import React from 'react'
import {Row, Col, Avatar,Typography, Tooltip} from 'antd'
import {TwitterOutlined} from '@ant-design/icons'
import logo from '../assets/logo.svg'
const {Text} = Typography
const images = require.context('../assets/', true);

export default function Footer(props){
    return(
        <div className="mt-xs-3 mt-md-5">
            <Row justify="space-between" align="middle">
                <Col>
                    <div className="m-2">
                        <img src={logo} alt="DRUGS4COVID"   style={{ height: 50 }} className="img-fluid"/>
                    </div>
                </Col>
                <Col xs={12}>
                    <Row gutter={[16,16]} justify="center" align="bottom">
                        <Col span={8}>
                            <Text strong>
                                With the financial support of
                            </Text>
                            <img src={images('./logos/bbva.png')} alt="" className="img-fuid"/>
                        </Col>
                        <Col span={12}>
                            <Text type="secondary" >
                                Drugs4Covid++ - AYUDAS FUNDACIÓN BBVA A EQUIPOS DE INVESTIGACIÓN CIENTÍFICA SARS-CoV-2 y COVID-19
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{float:'right'}}>
                        <Col>

                        <Row gutter={[16,16]} justify="center" align="middle">
                            <Col>
                            <img src={images('./logos/oeg.jpg')} alt="" className="img-fluid smallImage"/>
                            </Col>
                            <Col>
                            <img src={images('./logos/FacInformatica.jpg')} alt="" className="img-fluid smallImage"/>
                            </Col>
                            <Col>
                            <img src={images('./logos/upm.png')} alt="" className="img-fluid smallImage"/>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}