import React, { useState, useEffect } from "react";
import RegionListItem from "../../forms/region-list-item";
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
  const onDelete = () => {};
  return (
    <ul className="list region-list">
      {regions && regions.map(item => <div key={item._id}>{item.name}</div>)}
      {regions &&
        regions.map(item => (
          <React.Fragment key={item._id}>
            {item.edit ? (
              <RegionListItemEdit
                item={item}
                onEdit={editItem}
                onDelete={onDelete}
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
