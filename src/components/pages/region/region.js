import React from "react";

const Region = props => {
  const { params } = props.match;
  const { name, id: _id } = props.location.state;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Region;
