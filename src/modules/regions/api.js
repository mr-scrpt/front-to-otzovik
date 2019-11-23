import request from "../../utils/request";
import axios from "axios";
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
  const data = new FormData();

  data.append("name", name);
  data.append("flag", flag.file);

  try {
    const res = await request({
      url: "/regions",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: data
    });

    if (res.status === 200) {
      popupDispatch("Регион успешно создан", "success");
      return res.data;
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};
