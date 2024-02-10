export const validatePassword = value => {
  let error;
  if (!value) {
    error = 'Password is required';
  } else if (value.length < 7) {
    error = 'Must be 7 characters or more';
  }
  return error;
};
