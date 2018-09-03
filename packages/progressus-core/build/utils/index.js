'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateUtc = dateUtc;
exports.validateEmail = validateEmail;
function dateUtc(date = new Date()) {
  function getDate(d) {
    return d.toUTCString();
  }
  if (date instanceof Date) {
    return getDate(date);
  } else {
    return getDate(new Date());
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validation = exports.validation = (type = 'text', value, confirm) => {
  const error = {
    isError: false,
    errorText: ''
  };
  switch (type) {
    case 'text':
      error.isError = typeof value !== 'string';
      error.errorText = error.isError ? 'Debe ser texto este campo' : '';
      break;
    case 'password':
      error.isError = typeof value !== 'string';
      error.errorText = error.isError ? 'Ingrese una contraseña válida' : '';
      break;
    case 'confirm':
      error.isError = value !== confirm;
      error.errorText = error.isError ? 'El valor no es igual' : '';
      break;
    case 'email':
      error.isError = !validateEmail(value);
      error.errorText = error.isError ? 'Ingrese un email válido' : '';
      break;
    default:
      break;
  }
  return error;
};