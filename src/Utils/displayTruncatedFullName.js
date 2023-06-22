const displayTruncatedFullName = (user) => {
  return shortenName(user.first_name, user.last_name);
};

const shortenName = (firstName, lastName) => {
  if (firstName.length + lastName.length >= 40) {
    if (firstName.length > lastName.length) {
      //shorten firstName
      shortenName(firstName[0].toUpperCase(), lastName);
    } else {
      //shorten firstName
      shortenName(firstName, lastName[0].toUpperCase());
    }
  } else return `${firstName} ${lastName}`;
};

export default displayTruncatedFullName;
