import axios from "axios"

export const getEmployeeData = async (dataURL) => {
    const {data} = await axios.get(dataURL);
    return data;
}