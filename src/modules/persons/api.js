import request from "~/utils/request";
import errorHandler from "~/utils/errorHandler";
import { popupDispatch } from "~/utils/popupDispatch";

const personData = ({
  name,
  lastname,
  middlename,
  positionCurrent,
  information,
  region,
  avatar,
  parent
}) => {
  const data = new FormData();
  if (avatar && avatar[0] instanceof File) {
    data.append("avatar", avatar[0]);
  } else {
    data.append("avatar", "");
  }
  data.append("name", name);
  data.append("lastname", lastname);
  data.append("middlename", middlename);
  data.append("positionCurrent", positionCurrent);
  data.append("information", information);
  data.append("region", region);
  data.append("parent", parent);

  return data;
};

export const addPerson = async person => {
  const data = personData(person);
  try {
    const res = await request({
      url: "/persons",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
    });

    if (res.status === 200) {
      popupDispatch("Персона успешно добавлена", "success");
      return res.data;
    }
  } catch (e) {
    errorHandler(e);
  }
};

export const getPersons = async (params = undefined) => {
  let url = `/persons`;
  if (params) {
    const query = new URLSearchParams(params);
    url += "?" + query.toString();
  }

  try {
    return await request({
      url,
      method: "GET"
    });
  } catch (e) {
    errorHandler(e);
  }
};

export const getPerson = async id => {
  try {
    return await request({
      url: `/persons/${id}`,
      method: "GET"
    });
  } catch (e) {
    errorHandler(e);
  }
};
