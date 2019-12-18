import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { fetchRegionsListRequest } from "~m/regions";
import RegionFormAdd from "~/components/forms/region-form-add";
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

      <RegionFormAdd />
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
