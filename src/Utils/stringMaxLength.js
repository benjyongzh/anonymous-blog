const stringMaxLength = (string, maxLength) => {
  return string.substring(0, maxLength).concat("...");
};

export default stringMaxLength;
