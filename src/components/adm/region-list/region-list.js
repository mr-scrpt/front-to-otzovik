import React, { useState, useEffect } from "react";
import RegionListItem from "../region-list-item";
import RegionListItemEdit from "../../forms/region-list-item-edit";
const RegionList = ({ list }) => {
  const [region, setRegion] = useState();
  useEffect(() => {
    setRegion(list);
  }, [list]);
  const editItem = id => {
    const regionToEdit =
      region &&
      region.map(item => {
        item.mode === "edit" && resetItem(item._id);
        item.mode = item._id === id ? "edit" : "standart";

        return item;
      });

    setRegion(regionToEdit);
  };
  const applyItem = id => {
    const regionToApply =
      region &&
      region.map(item => {
        item._id === id && (item.mode = "standart");
        return item;
      });
    setRegion(regionToApply);
  };

  const resetItem = id => {
    const regionToReset =
      region &&
      region.map(item => {
        item._id === id && (item.mode = "standart");
        return item;
      });
    setRegion(regionToReset);
  };
  return (
    <ul className="list region-list">
      {region &&
        region.map(item => (
          <React.Fragment key={item._id}>
            {item.mode === "edit" ? (
              <RegionListItemEdit
                item={item}
                onApply={applyItem}
                onReset={resetItem}
                defaultValue="ddd"
              />
            ) : (
              <RegionListItem item={item} onEdit={editItem} />
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};
export default RegionList;
