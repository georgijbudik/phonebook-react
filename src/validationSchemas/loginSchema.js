import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      '*Invalid email format'
    )
    .required('*Email is required'),
  password: Yup.string()
    .required('*Password is required')
    .min(7, '*Password must be at least 6 characters'),
});
