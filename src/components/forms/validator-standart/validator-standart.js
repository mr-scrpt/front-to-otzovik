import React from "react";

const validatorStandart = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "обязательное поле";
  }
  return errors;
};

export default validatorStandart;
