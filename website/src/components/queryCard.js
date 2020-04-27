import React from 'react'
import {Input, Row, Col, Card, Tabs, Typography, Button, message,Spin, Table} from 'antd'
import {EyeOutlined, EyeInvisibleOutlined, SettingOutlined} from '@ant-design/icons'
import {sendQuery} from '../api/virtuoso'
const {TabPane} = Tabs
const {Paragraph, Title} =  Typography
const {TextArea} = Input

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    s = s.toLocaleLowerCase()
    return s.charAt(0).toUpperCase() + s.slice(1)

  }
export default class Kg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:this.props.data.title,
            description:this.props.data.description,
            sparqlQuery:this.props.data.sparql,
            editedSparqlQuery:this.props.data.sparql,
            editSparqlQuery:false,
            sparqlResult:{},
            loading:{
                answer:false,
                official:false,
                edited:false
            },
            showQuery:false,
            showSparqlResult:true,
            error:false
        
        }
    }
    changeQueryState(){
        const next = !this.state.showQuery;
        this.setState({showQuery:next})
    }
    rewriteSparqlQuery = (e) => {
        console.log(e)
        this.setState({editedSparqlQuery:e.target.value})
    }
    changeEditSparqlQueryState = () => {
        const next = !this.state.editSparqlQuery;
        this.setState({editSparqlQuery:next})
    }
    changeSparqlResultState = () => {
        const next = !this.state.showSparqlResult;
        this.setState({showSparqlResult:next})
    }
    execute = (querytype, query) => {
        let loading = this.state.loading
        loading[querytype] = true
        this.setState({loading:loading})
        sendQuery(query).then((data) => {
            console.log(data)
            let result = {columns:[], data:data.results.bindings}
            data.head.vars.map((col) => {
                result.columns.push(  {
                    title:capitalize(col.toString()),
                    dataIndex: col,
                    key: col,
                    render: val => val !== undefined?val.value:''
                  })
                  loading[querytype] = false
            })
            return Promise.resolve(result)
        }).then((data) => this.setState({sparqlResult:data, showSparqlResult:true, loading:loading}))
        .catch((err) => {
            console.log(err)
            message.error("Opps..")
            this.setState({error:true})
        })
    }
    render(){
    return(
        <>
        <Card 
        className="shadowEffect"
        >
            <Row>
                <Col>
                <Title className="blue" level={4}>{this.state.title}</Title>
                </Col>
            </Row>
            {this.state.description !== undefined ?(
            <Row>
                <Col>
                    <Paragraph>
                        {this.state.description}
                    </Paragraph>
                </Col>
            </Row>
            ):''}

            <Row gutter={[16,16]} align="top">
                <Col>
                <Button onClick={() => this.execute('official',this.state.sparqlQuery)}>
                    Answer <Spin spinning={this.state.loading.official} indicator={<SettingOutlined spin/>} />
                </Button>                      
                </Col>
                <Col>
                <Button onClick={() => this.changeQueryState()}>
                    {this.state.showQuery ? 'Hide':'Show'} query {this.state.showQuery ? <EyeInvisibleOutlined/>:<EyeOutlined/>}
                </Button>                
                </Col>
                {
                    Object.keys(this.state.sparqlResult).length ?(
                        <Col>
                        <Button onClick={() => this.changeSparqlResultState()}>
                                {this.state.showSparqlResult ? 'Hide':'Show'} result {this.state.showSparqlResult ? <EyeInvisibleOutlined/>:<EyeOutlined/>}
                        </Button>                  
                        </Col>                        
                    ):''
                }
            </Row>
            {this.state.showQuery ? (
                <Tabs>
                    <TabPane tab="SPARQL" key="0">
                        <div style={{padding:16}}>
                            <Row gutter={[16,16]}>
                                <Col>
                                <Title level={4}>SPARQL Query</Title>
                                </Col>
                                <Col>
                                <Button  onClick={() => this.execute('official',this.state.sparqlQuery)}>
                                Run <Spin spinning={this.state.loading.official} indicator={<SettingOutlined spin/>} />
                                </Button>
                                </Col>
                            </Row>
                        <Paragraph style={{whiteSpace: 'pre-line'}}>
                            {this.state.sparqlQuery}
                        </Paragraph>
                        <Row gutter={[16,16]}>
                            <Col>
                                <Button onClick={() => this.changeEditSparqlQueryState()}>
                                    {this.state.editSparqlQuery?("Close"):("Rewrite the Query")}
                                </Button>
                            </Col>
                            {
                                this.state.editSparqlQuery ? (
                                    <Col>
                                        <Button  onClick={() => this.execute('edited', this.state.editedSparqlQuery)}>
                                        Run Edited Query <Spin spinning={this.state.loading.edited} indicator={<SettingOutlined spin/>} />
                                        </Button>                                    
                                    </Col>
                                ):''
                            }
                        </Row>
                        {this.state.editSparqlQuery ? (
                            <TextArea
                                rows={10}
                                value={this.state.editedSparqlQuery}
                                onChange={e => this.rewriteSparqlQuery(e)}
                            >

                            </TextArea>
                        ):''}
                        </div>
                    </TabPane>
                </Tabs>
            ):''}
            { Object.keys(this.state.sparqlResult).length !== 0 && this.state.showSparqlResult?(
                <Table style={{marginTop:16}} dataSource={this.state.sparqlResult.data} columns={this.state.sparqlResult.columns}/>
            ):''}            
        </Card>
        </>
    )}
}