import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import AdminSide from "../admin-side";

const App = () => {
  return (
    <>
      <Switch>
        <Route path={`/`} exact render={() => <div>Главная страница</div>} />
        <Route path={`/admin`} component={AdminSide} />
      </Switch>
    </>
  );
};
export default App;
