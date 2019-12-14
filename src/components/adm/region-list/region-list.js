import React, { useMemo, useCallback } from "react";
import RegionListItem from "~f/region-list-item";
import RegionListItemEdit from "~f/region-list-item-edit";
import useRegionData from "./use-region-data";
const RegionList = ({ list }) => {
  const { regions = [], changeRegion, resetRegion } = useRegionData(list);

  return (
    <ul className="list region-list">
      {regions.length &&
        regions.map(item => (
          <React.Fragment key={item._id}>
            {item.edit ? (
              <RegionListItemEdit
                item={item}
                onEdit={changeRegion}
                onReset={resetRegion}
              />
            ) : (
              <RegionListItem item={item} onEdit={changeRegion} />
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default RegionList;
