import React, { useEffect, useMemo } from "react";
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
  const { regionsList = [] } = props;

  return (
    <>
      {regionsList.length && <RegionList list={regionsList} />}

      <RegionForm />
    </>
  );
};

const mapStateToProps = ({ regions }) => ({
  regionsList: regions.list.data
});
const mapDispatchToProps = {
  fetchRegionsListRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmRegion);
