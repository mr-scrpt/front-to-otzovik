import React, { useState, useEffect } from "react";
import {
  reduxForm,
  Field,
  formValueSelector,
  reset,
  resetForm
} from "redux-form";
import { connect } from "react-redux";
import FieldStandart from "~f/field-standart";
import FieldFileStandart from "~f/field-file-standart";
import validatorStandart from "~f/validator-standart";
import { fetchRegionAddRequest } from "~m/regions/";
let RegionForm = ({
  handleSubmit,
  name,
  flag,
  fetchRegionAddRequest,
  reset
}) => {
  const [region, setRegion] = useState({ name: "" });

  useEffect(() => {
    setRegion({ name, flag }); //Флаг нельзя передать строкой, это бинарные данные
    //reset("selectingFormValues");
  }, [name, flag]);

  return (
    <form
      onSubmit={handleSubmit(() => {
        fetchRegionAddRequest(region);
        reset("selectingFormValues");
      })}
    >
      <Field
        name="name"
        type="text"
        placeholder="Название региона"
        component={FieldStandart}
        defaultValue={region.name}
      />
      <Field name="flag" component={FieldFileStandart} />

      <button type="submit">Submit</button>
    </form>
  );
};

RegionForm = reduxForm({
  form: "selectingFormValues",
  multipartForm: true,
  validate: validatorStandart,
  enableReinitialize: true
})(RegionForm);

const selector = formValueSelector("selectingFormValues");

const mapStateToProps = state => ({
  name: selector(state, "name"),
  flag: selector(state, "flag")
});
const mapDispatchToProps = {
  fetchRegionAddRequest,
  reset
};

RegionForm = connect(mapStateToProps, mapDispatchToProps)(RegionForm);

export default RegionForm;
