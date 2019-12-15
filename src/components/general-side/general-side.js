import React from "react";
import NavRegionList from "~n/nav-region-list";
import { Route, Switch } from "react-router-dom";
import Region from "~p/region";
const GeneralSide = props => {
  const { path } = props.match;
  console.log(path);

  return (
    <>
      <header className="header">Хдер</header>
      <hr />
      <nav className="nav">
        <Route path={`${path}`} component={NavRegionList} />
      </nav>
      <hr />
      <main className="main">
        <Switch>
          <Route path={`/`} exact render={() => <div>Главная</div>} />
          <Route path={`/:alias`} component={Region} /> />
        </Switch>
      </main>
      <hr />
      <footer className="footer">Футер</footer>
    </>
  );
};

export default GeneralSide;
