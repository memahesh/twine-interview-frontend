import { Button, Col, Divider, Row } from "antd";
import { CounterContext } from "provider/CounterContextProvider";
import React from "react";

const Counter = (props) => {
    const {id, details} = props;
    const { removeCounter, incrementCounter, decrementCounter } = React.useContext(CounterContext);
    console.log(props);
    return (<>
        <Divider orientation="left" type="default" dashed style={{color:"ghostwhite"}}>{details.name}</Divider>
        <Row gutter={10}>
            <Col>
                <Button type="default" size="small" onClick={() => {
                     console.log(`Increment Counter Button Clicked for ${id}...`);
                     incrementCounter(id);
                }}>+</Button>
            </Col>
            <Col>{details.value}</Col> 
            <Col>
                <Button type="default" size="small" onClick={() => {
                     console.log(`Decrement Counter Button Clicked for ${id}...`);
                     decrementCounter(id);
                }}>-</Button>
            </Col>
            <Col>
                <Button type="default" size="small" onClick={() => {
                     console.log(`Remove Counter Button Clicked for ${id}...`);
                     removeCounter(id);
                }}>x</Button>
            </Col>
        </Row>
    </>);
}

export default Counter;