import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchRegionsListRequest,
  fetchRegionAddRequest
} from "../../../../modules/regions";
import RegionForm from "../../../forms/region-form";
import Notification from "../../../notification";
const AdmRegionList = props => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const { fetchRegionsListRequest } = props;
    fetchRegionsListRequest();
    setRegions();
  }, []);
  const {
    regionsList: { data: list }
  } = props;

  const { fetchRegionAddRequest } = props;
  return (
    <>
      <ul>
        <h1>title</h1>
        {list &&
          list.map(({ name, flag, alias, _id }) => (
            <li key={_id}>
              Имя: {name}, Флаг: {flag}, алиас: {alias}
            </li>
          ))}
      </ul>
      <RegionForm actionSubmit={fetchRegionAddRequest} />
      <Notification />
    </>
  );
};

const mapStateToProps = ({ regions }) => ({
  regionsList: regions.list
});
const mapDispatchToProps = {
  fetchRegionsListRequest,
  fetchRegionAddRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmRegionList);
