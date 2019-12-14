import React, { useState, useEffect } from "react";

const useRegionData = list => {
  const [regions, setRegions] = useState(list);

  useEffect(() => {
    const listInitial = list.map(item => ({ ...item, edit: false }));
    setRegions(listInitial);
  }, [list]); // [list] или просто []

  const regionClearClone = id => {
    return regions.map(item => ({ ...item, edit: false }));
  };
  const changeRegion = id => {
    //const regionClone = regions.map(item => ({ ...item, edit: false }));
    const regionClone = regionClearClone(id);
    const regionIndex = regionClone.findIndex(elem => elem._id === id);

    regionClone[regionIndex] = {
      ...regionClone[regionIndex],
      edit: !regionClone[regionIndex].edit
    };
    console.log(regionClone[regionIndex]);
    setRegions(regionClone);
  };
  const resetRegion = id => {
    const regionClone = regionClearClone(id);
    setRegions(regionClone);
  };
  return { regions, changeRegion, resetRegion };
};

export default useRegionData;
