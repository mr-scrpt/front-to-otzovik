import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import { fetchRegionsListRequest } from "~m/regions";
import RegionForm from "~f/region-form";
import RegionList from "~c/adm/region-list";
const AdmRegion = props => {
  useEffect(() => {
    const { fetchRegionsListRequest } = props;
    fetchRegionsListRequest();
  }, []);
  useEffect(() => {
    console.log("render page");
  });
  const {
    regionsList: { data: list = [] }
  } = props;

  return (
    <>
      {<RegionList list={list} />}
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
