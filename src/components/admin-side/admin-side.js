import React from "react";
import { Route, Switch } from "react-router-dom";
import AdmMain from "~p/adm/adm-main";
import AdmRegion from "~p/adm/adm-region";
import AdmNavMainList from "../navigation/adm-nav-main-list";

const AdminSide = ({ match }) => {
  const { path } = match;

  return (
    <>
      <Route path={`${path}`} component={AdmNavMainList} />
      <Switch>
        <Route path={`${path}`} exact component={AdmMain} />
        <Route path={`${path}/regions`} component={AdmRegion} />
        <Route path={`${path}/users`} render={() => <div>Юзеры</div>} />
        <Route path={`${path}/persons`} render={() => <div>Персоны</div>} />
        <Route path={`${path}/tails`} render={() => <div>Истории</div>} />
        }/>
      </Switch>
    </>
  );
};

export default AdminSide;
