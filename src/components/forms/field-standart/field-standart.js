import React from "react";

const FieldStandart = ({
  input,
  type,
  placeholder,
  myClass,
  toChange,
  meta: { touched, error },

  ...rest
}) => {
  return (
    <>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={myClass}
      />
      {touched && error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};
export default FieldStandart;
