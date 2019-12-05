import React, { memo, useEffect } from "react";
import RegionListItem from "~f/region-list-item";
import RegionListItemEdit from "~f/region-list-item-edit";
import useRegionData from "./use-region-data";
const RegionList = ({ list }) => {
  const { regions = [], changeRegion } = useRegionData(list);
  useEffect(() => {
    console.log("render region list");
  });
  return (
    <ul className="list region-list">
      {/* {regions && regions.map(item => <div key={item._id}>{item.name}</div>)} */}
      {regions.map(item => (
        <React.Fragment key={item._id}>
          {item.edit ? (
            <RegionListItemEdit item={item} onEdit={changeRegion} />
          ) : (
            <RegionListItem item={item} onEdit={changeRegion} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default memo(RegionList);
