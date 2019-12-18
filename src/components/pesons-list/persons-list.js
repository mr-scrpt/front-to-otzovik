import React from "react";
import usePersons from "~h/usePersons";

const PersonsList = () => {
  /* const personsList = usePersons({
    limit: 2,
    currentPage: 1,
    sortField: "name",
    sortDir: "asc"
  }); */
  const personsList = usePersons();

  if (personsList && personsList.length) {
    return (
      <ul>
        {personsList.map(
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
