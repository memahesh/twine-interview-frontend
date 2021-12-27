import { Button, Input, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import Counter from "components/Counter";
import { CounterContext } from "provider/CounterContextProvider";
import React, { useState } from "react";
import { generateUUID } from "utils";


const OurSider = (props) => {

    const { counterMap, createCounter } = React.useContext(CounterContext);

    const [newCounterName, setNewCounterName] = useState(null);

    const addNewCounter = (e) => {
        e.preventDefault();
        console.log("Create Counter Button Clicked...");
        if(
            newCounterName == "" ||
            newCounterName == null
        ){
            alert("New Counter Name can not be empty");
        }else{
            createCounter({
                [generateUUID()]:{
                    name: newCounterName,
                    value:0
                } 
            });
        }    
    }

    return (
        <Sider>
            <Menu theme="dark">
                {
                    Object.keys(counterMap).map((key) => {
                        console.log(key);
                        return <Menu.Item key={key} style={{height:"auto"}}>
                            <Counter id={key} details={counterMap[key]}/>
                        </Menu.Item>
                    })
                }

                <Menu.Item key={"Create Counter"} style={{height:"auto"}}>
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 50px)' }} 
                            bordered={false} 
                            placeholder="New Counter Name..." 
                            required
                            onChange={(e) => {
                                setNewCounterName(e.target.value);
                            }} />
                        <Button type="default" htmlType="submit" onClick={addNewCounter}>+</Button>
                    </Input.Group>
                </Menu.Item>
            </Menu>
        </Sider>
        );
}

export default OurSider;