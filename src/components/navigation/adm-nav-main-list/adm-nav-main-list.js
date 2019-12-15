import React from "react";
import { Link } from "react-router-dom";
const list = [
  { path: "", title: "Главная" },
  { path: "users", title: "Пользователи" },
  { path: "regions", title: "Регионы" },
  { path: "persons", title: "Персоны" },
  { path: "tails", title: "Истории" }
];
const AdmNavMainList = ({ match }) => {
  return (
    <nav>
      {list &&
        list.map(({ path, title }, idx) => (
          <Link to={`${match.path}${path}`} key={path}>
            {title}
          </Link>
        ))}
    </nav>
  );
};

export default AdmNavMainList;
