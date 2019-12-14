import axios from "axios";
const baseURL = `${process.env.HOST}${process.env.API}`;
const instance = axios.create({ baseURL });

const request = ({ url, method, headers, data }) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await instance({ url, method, headers, data });
      if (result.status !== 200) {
        throw new Error(result);
      }
      console.log(result);

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
          case 404:
            //popupDispatch("Запрашиваемый ресурс не найден!");
            return reject(eResponse);
          case 500:
          case 502:
          case 503:
            //popupDispatch("Ошибка сервера!");
            return reject({ details: "Ошибка сервера" });
          default:
            //popupDispatch(eResponse.message);
            return reject(eResponse);
        }
      } else {
        //popupDispatch("Неизвестная ошибка сервера!");
        return reject(e.message);
      }
    }
  });

export default request;
