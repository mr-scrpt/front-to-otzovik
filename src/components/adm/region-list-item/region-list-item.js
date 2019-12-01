import React from "react";

const RegionListItem = ({ item, onEdit }) => {
  const { name, flag, alias, _id } = item;

  return (
    <li className="list__item region-list__item">
      <input type="text" name="name" defaultValue={name} disabled />
      <img src={`http://localhost:3000/${flag}`} alt="" width="200" />

      <input type="text" name="alias" defaultValue={alias} disabled />
      <button type="button" onClick={() => onEdit(_id)}>
        Редактировать
      </button>
    </li>
  );
};

export default RegionListItem;
