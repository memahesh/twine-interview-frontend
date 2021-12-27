import { Col, Row } from "antd"
import Text from "antd/lib/typography/Text"
import Title from "antd/lib/typography/Title"
import "./style.css";

const OurCard = ({employeeDetails, showModal}) => {
    return <div onClick={()=>showModal(employeeDetails)} className="our-card">
    <Row gutter={16} style={{border: "2px solid #d7dfe6", margin:"10px"}}>
        <Col span={2} style={{
            background:employeeDetails?.rehire_eligible?(employeeDetails?.voluntary?"green":"red"):"grey",
            margin:"10px"
        }}>
        
        </Col>
        <Col span={20}>
        <Title level={4}>
            {employeeDetails?.name}
        </Title>
        <Text>
            {employeeDetails?.position}
        </Text>
        </Col>
    </Row>
    </div>
}

export default OurCard