import React, { useState, useEffect } from "react";
import {
  reduxForm,
  Field,
  formValueSelector,
  reset,
  initialize
} from "redux-form";
import { connect } from "react-redux";

import FieldStandart from "../field-standart";
import FieldFileStandart from "../field-file-standart";
import { fetchRegionUpdRequest } from "../../../modules/regions";

let RegionListItemEdit = ({
  onApply,
  handleSubmit,
  onReset,
  fetchRegionUpdRequest,
  item,
  nameChange,
  flagChange,
  aliasChange,
  reset,
  initialize
}) => {
  const [region, setRegion] = useState({});
  useEffect(() => {
    return () => {
      console.log("unmount");

      reset();
    };
  }, []);

  useEffect(() => {
    //reset();

    setRegion({ name: item.name, flag: item.flag, id: item._id });
    initialize();
    /* return () => {
      initialize();
    }; */
  }, [item]);

  useEffect(() => {
    setRegion({ name: nameChange, flag: flagChange, id: item._id });
  }, [nameChange, aliasChange, flagChange]);

  return (
    <li className="list__item region-list__item">
      <form
        onSubmit={handleSubmit(() => {
          onApply(item._id);
          fetchRegionUpdRequest(region);
        })}
        onReset={() => {}}
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
      </form>
    </li>
  );
};
RegionListItemEdit = reduxForm({
  form: "editRegionRow",
  enableReinitialize: true,
  multipartForm: true
})(RegionListItemEdit);

const selector = formValueSelector("editRegionRow");

const mapStateToProps = (state, { item: { name, alias } }) => ({
  nameChange: selector(state, "name"),
  flagChange: selector(state, "flag"),
  aliasChange: selector(state, "alias"),
  initialValues: {
    name,
    alias
  }
});
const mapDispatchToProps = {
  fetchRegionUpdRequest,
  reset
};

RegionListItemEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionListItemEdit);

export default RegionListItemEdit;
