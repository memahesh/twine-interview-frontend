import OurCard from "../OurCard";

const CardList = ({employeeDetailList, showModal}) => {
    return <>
        {employeeDetailList.map((value, index) => {
            console.log(value);
            return <OurCard employeeDetails={value} key={index} showModal={showModal} />;
        })}
    </>;
}

export default CardList;