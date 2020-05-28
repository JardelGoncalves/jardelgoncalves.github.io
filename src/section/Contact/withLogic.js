import React, { useState } from 'react';
import qs from 'qs';
import { notify } from 'react-notify-toast';

import validator from '../../utils/validator';
import api from '../../services/api';

const withLogic = (Component) => ({ id }) => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    name: '',
    email: '',
    pages: null,
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    pages: null,
    description: '',
  });

  const onInputChange = (name, value) => {
    setState((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, email, pages, description } = state;

    const validations = validator({
      'name:required': name,
      'email:required|email': email,
      'pages:required|isPage': pages ? pages.value : '',
      'description:required': description,
    });

    if (validations.hasError()) {
      setErrors((old) => ({
        name: '',
        email: '',
        pages: '',
        description: '',
        ...old,
        ...validations.error,
      }));
      return;
    }
    try {
      setLoading(true);

      await api.post('mail', qs.stringify({
        name,
        email,
        pages: pages.value,
        description,
      }), { mode: 'no-cors' });

      setState({
        name: '',
        email: '',
        pages: null,
        description: '',
      });

      setErrors({
        name: '',
        email: '',
        pages: '',
        description: '',
      });

      notify.hide();
      notify.show(
        'Sua mensagem foi enviada. Em breve entrarei em contato! 😎',
        'success'
      );
    } catch (err) {
      const { response } = err;
      if (
        response
        && response.status === 422
        && response.data
        && response.data.message
      ) {
        setErrors((old) => ({
          name: '',
          email: '',
          pages: '',
          description: '',
          ...old,
          ...response.data.message,
        }));
      } else {
        notify.show(
          'Todo mundo falha e dessa vez foi o servidor. Tente novamente! 😓',
          'error',
          3000,
        );
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Component
      id={id}
      state={state}
      errors={errors}
      loading={loading}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default withLogic;
