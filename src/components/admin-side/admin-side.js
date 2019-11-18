import React from "react";
import { Route, Switch } from "react-router-dom";
import AdmMain from "../pages/adm/adm-main";
import AdmRegionList from "../pages/adm/adm-region-list";
import AdmNavMainList from "../navigation/adm-nav-main-list";

const list = [
  { path: "", title: "Главная" },
  { path: "users", title: "Пользователи" },
  { path: "regions", title: "Регионы" },
  { path: "persons", title: "Персоны" },
  { path: "tails", title: "Истории" }
];

const AdminSide = ({ match }) => {
  const { path } = match;

  return (
    <>
      <Route path={`${path}`} component={AdmNavMainList} />
      <Switch>
        <Route path={`${path}`} exact component={AdmMain} />
        <Route path={`${path}/regions`} component={AdmRegionList} />
        <Route path={`${path}/users`} render={() => <div>Регионы</div>} />
        <Route path={`${path}/persons`} render={() => <div>Регионы</div>} />
        <Route path={`${path}/tails`} render={() => <div>Регионы</div>} />
        }/>
      </Switch>
    </>
  );
};

export default AdminSide;
