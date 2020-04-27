import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Row, Col} from 'antd'
export default function Layout(props){
    return(
        <Row type="flex" justify="center">
            <Col xs={22} md={20}  xl={18}>
                <Header></Header>
                {props.children}
                <Footer></Footer>
            </Col>
        </Row>
    )
}