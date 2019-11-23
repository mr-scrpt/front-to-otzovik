import React from "react";

const RegionListItem = ({ item }) => {
  const { name, flag, alias, _id } = item;
  console.log(_id);

  return (
    <li className="list__item region-list__item">
      <input type="text" name="name" value={name} disabled />
      <input type="text" name="flag" value={flag} disabled />
      <input type="text" name="alias" value={alias} disabled />
    </li>
  );
};

export default RegionListItem;
