import { isEmpty, isEmail } from 'validator';

const pages = [
  '1 página',
  '2 páginas',
  '3 páginas',
  '4 páginas',
  '5 páginas',
  '6 páginas',
  '7 páginas',
  '8 páginas',
  '9 páginas',
  '+10 páginas',
];

export default (validations = {}, messages = {}) => {
  const errors = {};

  const explode = (separator = ' ', text = '') => text.split(separator);

  const pushError = (key, message, defaultMessage) => {
    const [keyName] = explode(':', key);
    if (!errors[keyName]) {
      errors[keyName] = message || defaultMessage;
    }
  };

  const validatorMethods = {
    required: (value, key, message) => {
      if (!value || isEmpty(String(value))) {
        pushError(key, message, 'Campo é obrigatório.');
      }
    },

    email: (value, key, message) => {
      if (!isEmail(String(value))) {
        pushError(key, message, 'Email inválido.');
      }
    },

    isPage: (value, key, message) => {
      if (!pages.includes(value)) {
        pushError(key, message, 'Quantidade de página inválida.');
      }
    },

    callback: (func, key, message) => {
      if (!func()) {
        pushError(key, message, 'Informação inválida.');
      }
    },
  };

  Object.keys(validations).forEach((prop) => {
    const [keyName, validationPlainText] = explode(':', prop);
    const validationsArray = explode('|', validationPlainText);

    validationsArray.map((validate) => {
      const message = messages[`${keyName}|${validate}`];

      return validatorMethods[validate](validations[prop], keyName, message);
    });
  });

  const hasError = () => Boolean(Object.keys(errors).length);

  return {
    error: errors,
    hasError: () => hasError(),
  };
};
