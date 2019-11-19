import axios from "axios";

const baseURL = `${process.env.HOST}${process.env.API}`;
const instance = axios.create({ baseURL });

const request = ({ url, method, headers, data }) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await instance({ url, method, headers, data });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });

export default request;
