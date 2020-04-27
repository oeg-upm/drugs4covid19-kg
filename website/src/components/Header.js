import React from 'react'
import logo from '../assets/logo.svg'
import {MdMenu} from 'react-icons/md'
import {Menu, Button, Tooltip, Affix, Anchor, Row, Col} from 'antd'
import {MenuOutlined} from '@ant-design/icons'

export default function Header(props){
    return(
        <Row align="middle" justify="space-between">
            <Col>
            <a href="https://drugs4covid.oeg-upm.net/">
            <img src={logo} alt=""/>            
            </a>
            </Col>
            <Col>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <a href="https://drugs4covid.oeg-upm.net/">About</a>
                        </Menu.Item>
                        <Menu.Item>
                        <a href="https://kg.drugs4covid.oeg-upm.net/sparql">Sparql Endpoint</a>
                        </Menu.Item>
                    </Menu>
            </Col>
        </Row>
    )
}