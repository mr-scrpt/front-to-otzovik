import React, { useState, useEffect } from "react";

const useRegionData = list => {
  const [regions, setRegions] = useState();

  useEffect(() => {
    const listInitial = list.map(item => ({ ...item, edit: false }));
    setRegions(listInitial);
  }, [list]); // [list] или просто []

  const changeRegion = id => {
    const regionClone = regions.map(item => ({ ...item, edit: false }));
    const regionIndex = regionClone.findIndex(elem => elem._id === id);

    regionClone[regionIndex] = {
      ...regionClone[regionIndex],
      edit: !regionClone[regionIndex].edit
    };

    setRegions(regionClone);
  };

  return { regions, changeRegion };
};

export default useRegionData;
