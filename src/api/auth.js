import axiosInstance from './axiosInstance';

export const login = async (usernaem,password) =>{
    try{
        const response = await axiosInstance.post('/login',{
            email,
            password,
        });
         return response.data;
    }catch(error){
        throw error.response.data;
    }
};

