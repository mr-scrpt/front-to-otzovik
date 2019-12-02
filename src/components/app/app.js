import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminSide from "../admin-side";
import { connect } from "react-redux";

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
const mapStateToProps = state => ({
  //name: state.
});
export default connect(mapStateToProps)(App);
