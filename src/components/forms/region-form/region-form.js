import React, { useState, useEffect } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import FieldStandart from "../field-standart";
import FieldFileStandart from "../field-file-standart";
import validatorStandart from "../validator-standart";

let RegionForm = ({ handleSubmit, name, flag, actionSubmit }) => {
  const [region, setRegion] = useState({ name: "" });

  useEffect(() => {
    setRegion({ name, flag }); //Флаг нельзя передать строкой, это бинарные данные
  }, [name, flag]);

  return (
    <form
      onSubmit={handleSubmit(() => {
        actionSubmit(region);
      })}
    >
      <Field
        name="name"
        type="text"
        placeholder="Название региона"
        component={FieldStandart}
      />
      <Field name="flag" component={FieldFileStandart} />

      {/* <Field
        name="flag"
        type="text"
        placeholder="Герб региона"
        component={fieldStandart}
      /> */}

      <button type="submit">Submit</button>
    </form>
  );
};

RegionForm = reduxForm({
  form: "selectingFormValues",
  multipartForm: true,
  validate: validatorStandart
})(RegionForm);

const selector = formValueSelector("selectingFormValues");

const mapStateToProps = state => ({
  name: selector(state, "name"),
  flag: selector(state, "flag")
});

RegionForm = connect(mapStateToProps)(RegionForm);

export default RegionForm;
