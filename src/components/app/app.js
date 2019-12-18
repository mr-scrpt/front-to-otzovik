import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminSide from "~c/admin-side";
import GeneralSide from "~c/general-side";
import Region from "~p/region";
const App = () => {
  return (
    <>
      <Switch>
        <Route path={`/admin`} component={AdminSide} />
        {/*  <Route path={`/`} component={GeneralSide} /> */}

        <Route path={`/`} component={GeneralSide} />
      </Switch>
    </>
  );
};

export default App;
