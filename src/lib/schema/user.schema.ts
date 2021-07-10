import * as yup from 'yup';

export const userValidator = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required()
}).noUnknown()
