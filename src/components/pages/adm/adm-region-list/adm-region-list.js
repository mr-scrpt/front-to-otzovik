import React from "react";
const regionsList = [
  { name: "Харьковская", flag: "img/flag.jpg", alias: "kharkivska" },
  { name: "Запорожская", flag: "img/flag.jpg", alias: "zaporojska" },
  { name: "Киевская", flag: "img/flag.jpg", alias: "kieyvska" }
];
const AdmRegionList = () => {
  return (
    <ul>
      {regionsList &&
        regionsList.map(({ name, flag, alias }) => (
          <li key={alias}>
            Имя: {name}, Флаг: {flag}, алиас: {alias}
          </li>
        ))}
    </ul>
  );
};

export default AdmRegionList;
