import request from "../../utils/request";

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

    //res.status !== 200 ? console.log(445) : res.json();
  } catch (e) {
    console.log(e);
    return e;
  }
};
