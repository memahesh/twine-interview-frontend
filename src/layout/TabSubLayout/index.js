import { Tabs } from 'antd';
import React, { cloneElement } from 'react';
const { TabPane } = Tabs;


const TabSubLayout = (props) => {
    const {tabs, tabContentComponent} = props;
    
    return (<div>
        <Tabs defaultActiveKey="0">
            {
                tabs.map((tab, index) => {
                    return (
                        <TabPane tab = {tab.name} key={index}>
                            {cloneElement(tabContentComponent, {tab})}
                        </TabPane>
                    );
                })
            }
            
        </Tabs>
    </div>);
}

export default TabSubLayout;