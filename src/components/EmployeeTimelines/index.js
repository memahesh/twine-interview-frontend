import { Button, Card, Col, Divider, Input, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { getEmployeeData } from "apiCalls";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useState } from "react/cjs/react.development";
import { jsonGroupByKey } from "utils";

const EmployeeTimelines = (props) => {

    const {key, name, dataURL} = props.tab;

    const {isLoading, data, isError, error} = useQuery([`getEmployeeDetails ${key}`, dataURL], () => getEmployeeData(dataURL));

    return <>
        {
            isLoading?(<LoadingComponent />):(
                isError?(<ErrorComponent error={error}/>):(
                    <DataComponent data = {data} />
                )
            )
        }
    </>;
}

const LoadingComponent = () => {
    return (
        <h2>
        Loading ....
    </h2>
    );
}

const ErrorComponent = ({error}) => {
    return <h2>
        {error.message}
    </h2>
}

const DataComponent = ({data}) => {

    const [formattedData, setFormattedData] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    const formatData = async () => {
        setFormattedData(jsonGroupByKey(data, 'terminated_date'));
    }

    useEffect(()=>{
        formatData(data);
    },[]);

    const showModal = (data) => {
        setIsModalVisible(true);
        setModalData({
            employeeDetails:data
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setModalData({});
    };

    return <>
        {
            formattedData && Object.keys(formattedData).map((key, index) => {
                return <>
                        <Row gutter={16}>
                            <Col>
                                <h2>{key}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <CardList employeeDetailList = {formattedData[key]} showModal={showModal} />
                            </Col>
                        </Row>
                    </>;
            })
        }
        <OurModal modalData={modalData} isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </>;
}

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

const SendEmail = ({employeeDetails}) => {
    const [comment, setComment] = useState("");
    return <>
        <Input.Group compact>
            <Input style={{ width: 'calc(100% - 150px)' }} 
                placeholder={`Reach Out to ${employeeDetails?.name}`}
                required
                onChange={(e) => {
                    setComment(e.target.value);
                }} 
            />
            <Button type="default" htmlType="submit" >Send Email</Button>
        </Input.Group>
    </>;
}

const OurCard = ({employeeDetails, showModal}) => {
    return <div  onClick={()=>showModal(employeeDetails)}>
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

const CardList = ({employeeDetailList, showModal}) => {
    return <>
        {employeeDetailList.map((value, index) => {
            console.log(value);
            return <OurCard employeeDetails={value} key={index} showModal={showModal} />;
        })}
    </>;
}

export default EmployeeTimelines;