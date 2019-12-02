import request from "../../utils/request";
import { popupDispatch } from "../../utils/popupDispatch";

const regionData = ({ name, flag }) => {
  console.log(name, flag);

  const data = new FormData();
  if (flag && flag.file instanceof File) {
    data.append("flag", flag.file);
  } else {
    data.append("flag", "");
  }

  data.append("name", name);

  return data;
};

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

export const addRegion = async region => {
  console.log(region);
  const data = regionData(region);
  try {
    const res = await request({
      url: "/regions",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
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

export const updRegion = async region => {
  const data = regionData(region);

  try {
    const res = await request({
      url: `/regions/${region.id}`,
      method: "PATCH",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: data
    });

    if (res.status === 200) {
      popupDispatch("Регион успешно обновлен", "success");
      return res.data;
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};
