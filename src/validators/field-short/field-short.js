export const fieldShort = register => {
  return register({ required: true, minLength: 1, maxLength: 20 });
};
