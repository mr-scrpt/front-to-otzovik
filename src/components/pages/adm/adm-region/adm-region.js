import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchRegionsListRequest,
  fetchRegionAddRequest
} from "../../../../modules/regions";

import RegionForm from "../../../forms/region-form";
import RegionList from "../../../adm/region-list";
const AdmRegion = props => {
  useEffect(() => {
    const { fetchRegionsListRequest } = props;
    fetchRegionsListRequest();
  }, []);
  const {
    regionsList: { data: list }
  } = props;

  const { fetchRegionAddRequest } = props;
  return (
    <>
      <RegionList list={list} />
      <RegionForm actionSubmit={fetchRegionAddRequest} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdmRegion);
