const errors = {
  'user-not-found-in-db': {
    code: 'El usuario está registrado',
    message: 'El usuario está registrado pero no existe en la base de datos, asegurese que está ingresando por la ruta correcta'
  },
  'auth/user-not-found': {
    code: 'El usario no existe',
    message: 'Registrese para poder acceder a Progressus'
  },
  'auth/email-already-in-use': {
    code: 'El usuario ya existe',
    message: 'El usuario con el correo electrónico proporcionado ya existe.'
  },
  'auth/wrong-password': {
    code: 'Contraseña incorrecta',
    message: 'La contraseña suministrada es inválida'
  },
  'invalid-argument': {
    code: 'Argumento inválido'
  },
}

export default class MyError extends Error {
  constructor(error) {
    super(error)
    if (error.code) {
      this.data = error.code
      this.message = (errors[error.code] && errors[error.code].message) || error.message || 'Hubo un error '
      this.code = (errors[error.code] && errors[error.code].code) || error.code || 'Hubo un error '
    } else {
      this.data = 'no-data'
      this.message = error.message || JSON.stringify(error) || 'Hubo un error '
      this.code = error.code || JSON.stringify(error) || 'Hubo un error '
    }
    Error.captureStackTrace(this, MyError)
  }
}