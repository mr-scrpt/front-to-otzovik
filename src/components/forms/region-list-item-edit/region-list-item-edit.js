import React, { useState, useEffect, useCallback } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import FieldStandart from "~f/field-standart";
import FieldFileStandart from "~f/field-file-standart";
import validatorStandart from "~f/validator-standart";
import { fetchRegionUpdRequest, fetchRegionDelRequest } from "~m/regions";

let RegionListItemEdit = ({
  handleSubmit,
  onEdit,
  onReset,
  fetchRegionUpdRequest,
  fetchRegionDelRequest,
  item,
  nameChange,
  flagChange,
  aliasChange,
  initialize
}) => {
  const [region, setRegion] = useState({});

  useEffect(() => {
    initialize({ name: item.name });
  }, [item, item.name]);

  useEffect(() => {
    setRegion(region => ({
      ...region,
      name: nameChange,
      flag: flagChange,
      id: item._id
    }));
  }, [nameChange, aliasChange, flagChange]);

  return (
    <li className="list__item region-list__item">
      <form
        onSubmit={handleSubmit(() => {
          onEdit(item._id);
          fetchRegionUpdRequest(region);
        })}
        onReset={() => {
          onReset(item._id);
        }}
      >
        <Field
          name="name"
          type="text"
          placeholder="Название региона"
          component={FieldStandart}
        />
        <Field name="flag" component={FieldFileStandart} />

        <button type="submit">Применить</button>
        <button type="reset">Отменить</button>
        <button
          type="button"
          onClick={() => {
            fetchRegionDelRequest(item._id);
          }}
        >
          Удалить
        </button>
      </form>
    </li>
  );
};
RegionListItemEdit = reduxForm({
  form: "editRegionRow",
  validate: validatorStandart,
  //enableReinitialize: true,
  multipartForm: true

  //destroyOnUnmount: true
})(RegionListItemEdit);

const selector = formValueSelector("editRegionRow");

const mapStateToProps = (state, { item: { name, alias } }) => ({
  nameChange: selector(state, "name"),
  flagChange: selector(state, "flag"),
  aliasChange: selector(state, "alias")
  /*  initialValues: {
    name,
    alias
  } */
});
const mapDispatchToProps = {
  fetchRegionUpdRequest,
  fetchRegionDelRequest
};

RegionListItemEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionListItemEdit);

export default RegionListItemEdit;
