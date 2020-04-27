import React from 'react'
import {Timeline, Row,Button, Col, Typography} from 'antd'
import {rdfDumps} from '../api/queries' 

const {Text} = Typography
 
export default function RdfTimeLine(props){
    const spliced = [... rdfDumps]
    const dumps = props.total !== -1? spliced.splice(0, props.total):rdfDumps
    return(
        <>
            {props.total !== -1 ?(
                <>
                <Row justify="center" gutter={[16,16]} style={{marginBottom:16}}>
                    <Col>
                        <Text strong> Recent RDF Dumps</Text>                    
                    </Col>
                </Row>
                </>
            ):''}
            <Timeline mode="left">
            {dumps.map((dump, idx) => (
                <Timeline.Item key={idx} color={idx !== 0?'blue':'green'}>
                    <a href={dump.link}>
                        Download version: {dump.date}
                    </a>
                </Timeline.Item>
            ))}
        </Timeline>     
        <Row justify="center">
            <Col>
                
            </Col>
        </Row>       
        </>

    )
}