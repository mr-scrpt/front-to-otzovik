import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchRegionsListSuccess } from "../../../../modules/regions";
import request from "../../../../utils/request";

import axios from "axios";

const AdmRegionList = props => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const { fetchRegionsListSuccess } = props;
    const { regionsList } = props;
    (async () => {
      const myRes = await request({
        url: "/regions",
        method: "GET"
      });

      fetchRegionsListSuccess(myRes.data);
      setRegions(myRes.data);
    })();
  }, []);

  //setRegions();

  return (
    <ul>
      <h1>title</h1>
      {regions &&
        regions.map(({ name, flag, alias, _id }) => (
          <li key={_id}>
            Имя: {name}, Флаг: {flag}, алиас: {alias}
          </li>
        ))}
    </ul>
  );
};

const mapStateToProps = ({ regions }) => ({
  regionsList: regions.list
});
const mapDispatchToProps = {
  fetchRegionsListSuccess
};
//export default AdmRegionList;
export default connect(mapStateToProps, mapDispatchToProps)(AdmRegionList);
//fetchRegionsListSuccess
