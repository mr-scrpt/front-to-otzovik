import React from "react";
import RegionListItem from "../region-list-item";
const RegionList = ({ list }) => {
  return (
    <ul className="list region-list">
      {list &&
        list.map(item => (
          <React.Fragment key={item._id}>
            <RegionListItem item={item} />
          </React.Fragment>
        ))}
    </ul>
  );
};
export default RegionList;
