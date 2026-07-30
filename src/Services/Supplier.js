import Axios from 'axios';
import { url } from './index';
const token = localStorage.getItem('jwt');
const id =  localStorage.getItem('id');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};
export const getPendingorders = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getSupplyorderPending/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallDeliveredordersBySid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallDeliveredordersBySid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallcancelledBySid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallcancelledBySid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallapprovedbutisDTBySid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallapprovedbutisDTBySid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallapprovedbutisDFBySid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallapprovedbutisDFBySid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const MakestatusAOC = async (id1,status) => {
    try {
        const response = await Axios.post(`${url}/api/supply-order/${id1}/status`, null, {
            params: {
                status: status
            },
            ...config  
        });
        console.log(response.data,"hi0")
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


// http://localhost:8080/api/supply-order/so506262/status?status=approved