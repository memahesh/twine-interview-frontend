import { Button, Card, Col, Divider, Input, Row } from "antd";
import { getEmployeeData } from "apiCalls";
import CardList from "components/Cards/CardList";
import ErrorComponent from "components/ErrorComponent";
import LoadingComponent from "components/LoadingComponent";
import OurModal from "components/OurModal";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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








export default EmployeeTimelines;