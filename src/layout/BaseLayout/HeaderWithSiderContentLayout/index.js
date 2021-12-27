import React, { useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import OurHeader from "components/OurHeader";
import { Content, Footer } from "antd/lib/layout/layout";
import OurSider from "components/OurSider";


const HeaderWithSiderContentLayout = ({children}) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <OurHeader/>
      <Layout className="site-layout" style={{ minHeight: '100vh' }} hasSider={true}>
        <OurSider />
        <Layout>
          <Content style={{ margin: '0 16px',display:'block', width:'100%' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by <a href="https://github.com/memahesh" target="_blank">Mahesh Medam</a>.
          </Footer>
        </Layout>
      </Layout>
    </Layout>
    );
}

export default HeaderWithSiderContentLayout;
