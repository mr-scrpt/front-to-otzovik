import request from "../../utils/request";
import { longStackSupport } from "q";

export const getRegionList = async () => {
  try {
    return await request({
      url: "/regions",
      method: "GET"
    });
  } catch (e) {
    return e;
  }
};

export const addRegion = async ({ name, flag }) => {
  try {
    const res = await request({
      url: "/regions",
      method: "POST",
      data: { name, flag }
    });
    console.log(res);

    //res.status !== 200 ? console.log(445) : res.json();
  } catch (e) {
    console.log(e);
    return e;
  }
};
