const stringMaxLength = (string, maxLength) => {
  return string.length > maxLength
    ? string.substring(0, maxLength).concat("...")
    : string;
};

export default stringMaxLength;
