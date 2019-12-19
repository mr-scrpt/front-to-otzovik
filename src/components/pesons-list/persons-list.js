import React from "react";
import usePersons from "~h/usePersons";

const PersonsList = ({ list }) => {
  if (list && list.length) {
    return (
      <ul>
        {list.map(
          ({ _id, name, lastname, middlename, published, avatar, alias }) => (
            <div key={_id}>
              <h3>{name}</h3>
            </div>
          )
        )}
      </ul>
    );
  } else {
    return <div>Ни одной персоны не добавлено!</div>;
  }
};

export default PersonsList;
