import React from "react";

const fieldStandart = ({
  input,
  type,
  placeholder,
  myClass,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={myClass}
      />
      {touched && error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default fieldStandart;
