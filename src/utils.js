import { v4 as uuidv4 } from 'uuid';

export const generateUUID = () => {
    return uuidv4();
}

export const jsonGroupByKey = (jsonData, key) => {
    const result = jsonData?.reduce((acc, entry) => {
        acc[entry[key]] = (acc[entry[key]] || []);
        acc[entry[key]].push(entry);
        return acc;
      }, []);
    return result;
}