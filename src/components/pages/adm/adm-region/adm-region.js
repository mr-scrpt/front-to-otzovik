import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRegionsListRequest } from "../../../../modules/regions";

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

  return (
    <>
      {list && <RegionList list={list} />}
      <RegionForm />
    </>
  );
};

const mapStateToProps = ({ regions }) => ({
  regionsList: regions.list
});
const mapDispatchToProps = {
  fetchRegionsListRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmRegion);
