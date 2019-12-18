import React, { useEffect, useState } from "react";
//import { connect } from "react-redux";
import { fetchRegionsListRequest } from "~m/regions";
import { useDispatch, useSelector } from "react-redux";
const useRegions = () => {
  const [regions, setRegions] = useState([]);
  const { regionsList } = useSelector(state => ({
    regionsList: state.regions.list
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegionsListRequest());
  }, []);
  useEffect(() => {
    setRegions(regionsList);
  }, [regionsList]);

  return regions;
};

export default useRegions;
