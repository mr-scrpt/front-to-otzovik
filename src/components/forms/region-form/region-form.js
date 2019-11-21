import React, { useState, useEffect } from "react";
import { reduxForm, Field, formValueSelector, formValues } from "redux-form";
import { connect } from "react-redux";
import fieldStandart from "../field-standart";
import validatorStandart from "../validator-standart";

let RegionForm = ({ handleSubmit, name, flag, actionSubmit }) => {
  const [region, setRegion] = useState({ name });

  useEffect(() => {
    setRegion({ name, flag: "flag.jpg" }); //Флаг нельзя передать строкой, это бинарные данные
  }, [name]);

  return (
    <form onSubmit={handleSubmit(() => actionSubmit(region))}>
      <h1>{region.name}</h1>
      <Field
        name="name"
        type="text"
        id="first-name"
        placeholder="Название региона"
        component={fieldStandart}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

RegionForm = reduxForm({
  form: "selectingFormValues",
  validate: validatorStandart
})(RegionForm);

const selector = formValueSelector("selectingFormValues");

const mapStateToProps = state => ({
  name: selector(state, "name")
});

/* const mapDispatchToProps = {
  fetchRegionAddRequest
}; */
RegionForm = connect(mapStateToProps)(RegionForm);

export default RegionForm;
