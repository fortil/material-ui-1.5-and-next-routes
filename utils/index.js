export function dateUtc(date = new Date()) {
  function getDate(d) {
    return d.toUTCString()
  }
  if (date instanceof Date) {
    return getDate(date)
  } else {
    return getDate(new Date())
  }
}

export const validateStrongPWD = pwd => {
  let level = 0
  if (/[a-z]/.test(pwd)) {
    level += 10
  }
  if (/[A-Z]/.test(pwd)) {
    level += 10
  }
  if (/[0-9]/.test(pwd)) {
    level += 20
  }
  if (pwd.length > 5) {
    level += 20
  }
  if (pwd.length > 8) {
    level += 20
  }
  if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(pwd)) {
    level += 20
  }
  return level
}

export const validatePhone = phone => /\(\+\d{2}\)\(\d{3}\)\d{3}-\d{1,4}/.test(phone) || /\d{9,12}/.test(phone)

export const validateDate = date => /\d{4}-\d{2}-\d{2}/.test(date)

export const validateWords = l => value => typeof value === 'string' && value.length >= l

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validation = (type = 'text', value, confirm) => {
  const error = {
    isError: false,
    errorText: ''
  }
  switch (type) {
    case 'text':
      error.isError = typeof value !== 'string'
      error.errorText = error.isError ? 'Debe ser texto este campo' : ''
      break
    case 'password':
      error.isError = typeof value !== 'string'
      error.errorText = error.isError ? 'Ingrese una contraseña válida' : ''
      break
    case 'confirm':
      error.isError = value !== confirm
      error.errorText = error.isError ? 'El valor no es igual' : ''
      break
    case 'email':
      error.isError = !validateEmail(value)
      error.errorText = error.isError ? 'Ingrese un email válido' : ''
      break
    default:
      break
  }
  return error
}

export function isObject(obj) {
  if (obj instanceof Object && typeof obj === 'object' && !Array.isArray(obj)) {
    return true
  }
  return false 
}

export function isEquivalent(a, b) {
  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)

  if (aProps.length != bProps.length) {
    return false
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i]
    if (isObject(a[propName]) && isObject(b[propName])) {
      isEquivalent(a[propName], b[propName])
    } else {
      if (a[propName] !== b[propName]) {
        return false
      }
    }
  }
  return true
}

export const dictorionary ={ 
  user: {
    'address': 'Dirección',
    'lastSession': 'Última sessión',
    'city': 'Ciudad',
    'country': 'País',
    'name': 'Nombre',
    'birthDate': 'Fecha de nacimiento',
    'emailVerified': 'Email verificado',
    'cellphoneEmergency': 'Teléfono de emergencia',
    'comments': 'Comentarios',
    'createdAt': 'Creado en',
    'educationLevel': 'Nivel de educación',
    'email': 'Email',
    'eps': 'EPS',
    'gender': 'Géero',
    'heLivesWith': 'Vive con',
    'idNumber': 'DNI',
    'idType': 'Tipo de documento',
    'direction': 'Dirección',
    'uid': 'UID',
    'ocupy': 'Ocupación',
    'occupy': 'Ocupación',
    'photoURL': 'Foto',
    'complete': 'Completo',
    'lastname': 'Apellido',
  }
}

export const fieldsAllowUser = [
  'address',
  'city',
  'country',
  'name',
  'lastname',
  'birthDate',
  'comments',
  'educationLevel',
  'gender',
  'ocupy',
  'occupy',
  'photoURL',
]

export const convertKeysToValues = (key, type = 'user') => {
  return dictorionary[type][key]
}

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
export const getOtherCollection = collection => {
  const dic = { consultant: 'doctor', doctor: 'consultant' }
  return dic[collection]
}

export const guid = function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}