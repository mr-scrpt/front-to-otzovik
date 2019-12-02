import React, { useState, useEffect } from "react";
import RegionListItem from "../region-list-item";
import RegionListItemEdit from "../../forms/region-list-item-edit";
const RegionList = ({ list }) => {
  const [regions, setRegions] = useState();
  useEffect(() => {
    const listInitial = list.map(item => ({ ...item, edit: false }));
    setRegions(listInitial);
  }, [list]); // [list] или просто []

  const editItem = id => {
    const regionClone = regions.map(item => ({ ...item, edit: false }));
    const regionIndex = regionClone.findIndex(elem => elem._id === id);
    const regionOld = regions[regionIndex];

    const regionNew = {
      ...regionOld,
      edit: !regionOld.edit
    };

    const updateRegion = [
      ...regionClone.slice(0, regionIndex),
      regionNew,
      ...regionClone.slice(regionIndex + 1)
    ];

    setRegions(updateRegion);
  };
  const applyItem = id => {
    const regionToApply =
      regions &&
      regions.map(item => {
        //item._id === id && (item.mode = "standart");
        item._id === id && !item.edit;
        return item;
      });
    setRegion(regionToApply);
  };

  const resetItem = id => {
    const regionToReset =
      regions &&
      regions.map(item => {
        item._id === id && (item.mode = "standart");
        return item;
      });
    setRegions(regionToReset);
  };

  return (
    <ul className="list region-list">
      {regions && regions.map(item => <div key={item._id}>{item.name}</div>)}
      {regions &&
        regions.map(item => (
          <React.Fragment key={item._id}>
            {item.edit ? (
              <RegionListItemEdit item={item} onEdit={editItem} />
            ) : (
              <RegionListItem item={item} onEdit={editItem} />
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};
export default RegionList;
