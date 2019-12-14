import React, { useState, useEffect, useCallback } from "react";

const RegionListItem = ({ item, onEdit }) => {
  const { name, flag, alias, _id } = item;

  const edit = () => {
    onEdit(_id);
  };
  console.log("rerender");

  return (
    <li className="list__item region-list__item">
      <input type="text" name="name" value={name} readOnly disabled />
      <img src={`http://localhost:3000/${flag}`} alt="" width="200" />
      <input type="text" name="alias" value={alias} readOnly disabled />
      <button type="button" onClick={edit}>
        Редактировать
      </button>
    </li>
  );
};

export default RegionListItem;
