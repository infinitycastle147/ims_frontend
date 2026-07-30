import Axios from 'axios';
import { url } from './index';
const token = localStorage.getItem('jwt');
const id = localStorage.getItem('id');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const getCheckWarehouse = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/wmanager/checkwarehousebyWid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getPendingOrders = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallPendingByWId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallapprovedbutisDFByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallapprovedbutisDFByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallDeliveredordersByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallDeliveredordersByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallapprovedbutisDTByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallapprovedbutisDTByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallcancelledByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/getallcancelledByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}

export const getdetailsofwarehouse = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/warehouseDetails/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallProducts = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/supply-order/warehouse/getallproduct/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const makeSupplierOrderByWId = async (data) => {
    try {
        const response = await Axios.post(`${url}/api/supply-order/wmanager/makeSupplierOrderByWId/${id}/data`, null, {
            params: {
                data: data
            },
            ...config  
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}