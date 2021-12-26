import React from "react";
import { Layout, Menu } from "antd";
import OurHeader from "components/OurHeader";
import { Content } from "antd/lib/layout/layout";


const HeaderContentLayout = ({ children }) => {
  return (
    <Layout>
      <OurHeader />
      <Content
        style={{ padding: 50, minHeight: "calc(100vh - 64px)", height: "100%" }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default HeaderContentLayout;
