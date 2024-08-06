import axios from 'axios';

const API_URL='https://test-backend-opal-two.vercel.app'

export const uploadFile = async (data)=>{
    try {
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    }catch(error)
    {
        console.error("Error while calling the api",error.message);
    }
}
