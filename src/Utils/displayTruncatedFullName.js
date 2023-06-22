const displayTruncatedFullName = (fullName) => {
  const [firstName, lastName] = fullName.split(" ");
  return shortenName(firstName, lastName);
};

const shortenName = (firstName, lastName) => {
  if (firstName.length + lastName.length >= 40) {
    if (firstName.length > lastName.length) {
      //shorten firstName
      return shortenName(`${firstName[0].toUpperCase()}.`, lastName);
    } else {
      //shorten firstName
      return shortenName(firstName, `${lastName[0].toUpperCase()}.`);
    }
  } else return `${firstName} ${lastName}`;
};

// console.log(
//   displayTruncatedFullName("fitititititititiititti litittottottitititititoti")
// );

export default displayTruncatedFullName;
