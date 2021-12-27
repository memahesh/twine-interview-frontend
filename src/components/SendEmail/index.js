import { Button, Input } from "antd";
import { useState } from "react";

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

export default SendEmail;