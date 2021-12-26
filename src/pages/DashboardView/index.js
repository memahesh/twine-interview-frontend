import React from "react";
import { Typography } from "antd";
import TabSubLayout from "layout/TabSubLayout";
import EmployeeTimelines from "components/EmployeeTimelines";

const { Title } = Typography;

const DashboardView = () => {

  const tabs = [
    {
      key: "rehireEligibleEmployees",
      name : "Rehire Eligible Employees",
      dataURL: "http://localhost:4000/rehireEligibleEmployees"
    },
    {
      key: "rehireUnknownEmployees",
      name : "Rehire Unknown Employees",
      dataURL: "http://localhost:4000/rehireUnknownEmployees"
    },
    {
      key: "rehireInEligibleEmployees",
      name : "Rehire InEligible Employees",
      dataURL: "http://localhost:4000/rehireInEligibleEmployees"
    }
  ]

  return (
    <div>
      <Title level={1}>DASHBOARD</Title>
      <TabSubLayout tabs={tabs} tabContentComponent={<EmployeeTimelines />} />
    </div>
  );
};

export default DashboardView;
