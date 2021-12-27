import { Col, Divider, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import SendEmail from "components/SendEmail";

const OurModal  = ({modalData, isModalVisible, handleCancel}) => {
    const {employeeDetails} = modalData;
    return <>
        <Modal title="Employee Details" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <Row gutter={10} style={{border: "2px solid #d7dfe6"}}>
                <Col span={2} style={{
                    background:employeeDetails?.rehire_eligible?(employeeDetails?.voluntary?"green":"red"):"grey",
                    margin:"10px",
                    height:"auto"
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
            <Divider />
            <Row gutter={10}>
                <Col>
                    <Text>
                        Go to <a href={employeeDetails?.profile_link}>{employeeDetails?.name}'s Profile</a>
                    </Text>
                </Col>
            </Row>
            <Row gutter={10}>
                <Col>
                    <Text strong>
                        {
                            !employeeDetails?.termination_reason?"No recorded Termination Reason":employeeDetails.termination_reason
                        }
                    </Text>
                </Col>
            </Row>
            <Divider />
            <Row gutter={10}>
                {
                    (employeeDetails?.voluntary && employeeDetails?.rehire_eligible)?<SendEmail employeeDetails={employeeDetails}/>:(<></>)
                }
            </Row>
        </Modal>
    </>
}

export default OurModal;