import request from "../../utils/request";
import errorHandler from "../../utils/errorHandler";
import { popupDispatch } from "../../utils/popupDispatch";
const regionData = ({ name, flag }) => {
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
    errorHandler(e);
  }
};

export const addRegion = async region => {
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
    errorHandler(e);
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
    errorHandler(e);
  }
};

export const deleteRegion = async id => {
  try {
    const res = await request({
      url: `/regions/${id}`,
      method: "DELETE"
    });

    if (res.status === 200) {
      popupDispatch("Регион успешно удален", "success");
      return res.data;
    }
  } catch (e) {
    errorHandler(e);
  }
};
