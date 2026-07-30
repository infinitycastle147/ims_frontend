import Axios from 'axios';
import { url } from './index';

// const token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQURNSU4ifV0sInN1YiI6ImFzaGlzaEBnbWFpbC5jb20iLCJpYXQiOjE3MDYzNTA4ODcsImV4cCI6MTcwNjM2ODg4N30.N07njdeJTWXnw7UHF8XL8-TcN4gJViNORA7oDfiZwKP82K6aiT0NgG1qfnGCpNGP64_H1vMHgbxkfbjEHqYGCA";
const token = localStorage.getItem('jwt');
const id = localStorage.getItem('id');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const getorder_statusCByDId = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/order/orderstatusCByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getw2worder_statusCByDId = async () => {
    try {


        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusCByDId/${id}`, config);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }

}
export const getorder_statusPByDId = async () => {
    try {
        console.log(id);
        const response = await Axios.get(`${url}/api/order/orderstatusPByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getw2worder_statusPByDId = async () => {
    try {
        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusPByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getDeliveryManProfile = async () => {
    try {
        const response = await Axios.get(`${url}/api/deliveryman/profile/${id}`, config);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const updateProfile = async (data) => {
    try {
        const response = await Axios.post(`${url}/api/deliveryman/${id}`, data, config);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getorderstatusShipped = async () => {
    try {
        const response = await Axios.get(`${url}/api/order/orderstatusSByDId/${id}`, config);
        // console.log("hello1");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getw2worderstatusShipped = async () => {
    try {
        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusSByDId/${id}`, config);
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const Completedorder = async (id1, status) => {

    try {
        const response = await Axios.post(`${url}/api/order/${id1}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const Completedw2worder = async (id1, status) => {
    try {
        const response = await Axios.post(`${url}/api/w2worder/${id1}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const Shippedw2wOrder = async (order) => {
    try {
        console.log(id)
        console.log(order)
        const response = await Axios.post(`${url}/api/w2worder/assignBydeliveryman/${id}/data`, null, {
            params: {
                data: order
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ShippedOrder = async (order) => {
    try {
        const response = await Axios.post(`${url}/api/order/assignBydeliveryman/${id}/data`, null, {
            params: {
                data: order
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const NumberofCustomer = async () => {
    try {
        const response = await Axios.get(`${url}/api/order/numberofcustomer/${id}`, config);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const totalCompletedOrders = async () => {
    try {
        const response = await Axios.get(`${url}/api/order/orderstatusCByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const totalCancelOrder = async () => {
    try {
        const response = await Axios.get(`${url}/api/order/totalorderCancelByDid/${id}`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const totalWarehouse = async () => {
    try {
        const response = await Axios.get(`${url}/api/w2worder/numberofwarehouseByDid/${id}`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const totalCompletedW2WOrders = async () => {
    try {
        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusCByDId/${id}`, config);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ReturnOrderpending = async () => {
    try {
        const response = await Axios.get(`${url}/api/return-order/orderstatusPbyDid/${id}`,config);
        return response.data;
    } catch (error) {   
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ReturnOrderShipped = async () => {
    try {
        const response = await Axios.get(`${url}/api/return-order/orderstatusSbyDid/${id}`,config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ReturnSupplyOrderShipped = async () => {
    try {
        const response = await Axios.get(`${url}/api/return-supply-order/statusSByDid/${id}`,config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}

export const ROChangeStatustoS = async (order) => {
    try {
      
        const response = await Axios.post(`${url}/api/return-order/assignBydeliveryman/${id}/data`, null, {
            params: {
                data: order
            },
            ...config  
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const RSOCompleted = async (id1, status) => {

    try {
        const response = await Axios.post(`${url}/api/return-supply-order/${id1}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ROCompleted = async (id1, status) => {

    try {
        const response = await Axios.post(`${url}/api/return-order/${id1}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const CReturnOrder = async () => {
    try {
        const response = await Axios.get(`${url}/api/return-order/orderstatusRbyDid/${id}`,config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getsupplyorderstatusDbyDId = async () => {
    try {
        const response = await Axios.get(`${url}/api/supply-order/getsupplyorderstatusDbyDId/${id}`,config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getsupplyorderstatusABDTbyDId = async () => {
    try {
        const response = await Axios.get(`${url}/api/supply-order/getsupplyorderstatusABDTbyDId/${id}`,config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getsupplyorderstatusABDFbyDId = async () => {
    try {
        const response = await Axios.get(`${url}/api/supply-order/getsupplyorderstatusABDFbyDId/${id}`,config);
        // return response.data;
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const CReturnSupplyOrder = async () => {
    try {
        const response = await Axios.get(`${url}/api/return-supply-order/statusCByDid/${id}`,config);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const UpdatestatusDTByDid = async (data) => {

    try {
        const response = await Axios.post(`${url}/api/supply-order/UpdatestatusDTByDid/${id}/data`, null, {
            params: {
                data: data
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ChangeStatusDt = async (id1,status) => {

    try {
        const response = await Axios.post(`${url}/api/supply-order/${id1}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
