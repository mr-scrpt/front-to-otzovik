export const fieldFileSize = register => {
  return register({
    validate: value => {
      if (value.length) {
        return value[0].size <= 1024 * 1024 * 3;
      }
    }
  });
};
