import React from "react";
import PersonFormAdd from "~f/person-form-add";
import PersonsList from "~c/pesons-list";
import Sorting from "~c/sorting";
const Region = props => {
  const { params } = props.match;
  const { name, id } = props.location.state;

  return (
    <div>
      <h1>
        {name} / {id}
      </h1>
      <Sorting />
      <PersonsList />
      <PersonFormAdd parent={id} />
    </div>
  );
};

export default Region;
