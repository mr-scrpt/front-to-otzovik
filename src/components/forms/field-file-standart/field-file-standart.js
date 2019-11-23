import React from "react";

const handleChange = handler => ({ target: { files } }) => {
  return handler(files.length ? { file: files[0], name: files[0].name } : {});
};

const FieldFileStandart = ({
  input: { onChange, onBlur, value: omitValue, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <input
    type="file"
    onChange={handleChange(onChange)}
    onBlur={handleChange(onBlur)}
    {...inputProps}
    {...props}
  />
);
export default FieldFileStandart;

/* const FieldFileStandart = ({
  input,
  type,
  placeholder,
  myClass,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <input
      type="file"
      {...input}
      placeholder={placeholder}
      type={type}
      className={myClass}
    />
  );
};
 */
