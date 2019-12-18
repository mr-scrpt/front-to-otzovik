import React from "react";
import useRegions from "~h/useRegions";
import { Link } from "react-router-dom";
const NavRegionList = ({ match }) => {
  const regions = useRegions();
  return (
    <ul>
      {regions &&
        regions.map(row => (
          <li key={row.alias}>
            {/*  <Link to={`${match.path}${row.alias}`}>{row.name}</Link>*/}
            <Link
              to={{
                pathname: `/${row.alias}`,
                state: {
                  id: row._id,
                  name: row.name
                }
              }}
            >
              {row.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NavRegionList;
