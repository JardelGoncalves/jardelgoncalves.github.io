import * as yup from 'yup';

export const authValidator = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required()
}).noUnknown()
