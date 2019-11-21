import axios from "axios";

const baseURL = `${process.env.HOST}${process.env.API}`;
const instance = axios.create({ baseURL });

const request = ({ url, method, headers, data }) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await instance({ url, method, headers, data });
      resolve(result);
    } catch (e) {
      if (e.response) {
        const eStatus = e.response.status || 404;
        const eResponse = e.response.data;

        console.group(`Error from: ${url}`);
        console.info(`Status: ${eStatus}`);
        console.dir(eResponse);
        console.groupEnd();

        switch (eStatus) {
          case 401:
          case 403:
            return reject(eResponse);
          case 500:
          case 502:
          case 503:
            console.log("Сделать всплывающую ошибку");
            return reject({ details: "Unknown error" });
          default:
            return reject(eResponse);
        }
      } else {
        console.log(e.message);
        return reject(e.message);
      }
    }
  });

export default request;
