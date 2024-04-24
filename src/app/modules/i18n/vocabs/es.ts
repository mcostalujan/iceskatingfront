// Spain
export const locale = {
  lang: 'es',
  data: {
    TRANSLATOR: {
      SELECT: 'Elige tu idioma',
    },
    MENU: {
      NEW: 'nuevo',
      ACTIONS: 'Comportamiento',
      CREATE_POST: 'Crear nueva publicación',
      PAGES: 'Pages',
      FEATURES: 'Caracteristicas',
      APPS: 'Aplicaciones',
      DASHBOARD: 'Home'
    },
    AUTH: {
      GENERAL: {
        OR: 'O',
        SUBMIT_BUTTON: 'Enviar',
        NO_ACCOUNT: '¿No tienes una cuenta? ',
        ALREADY_HAVE_ACCOUNT: '¿Ya tienes cuenta? ',
        SIGNUP_BUTTON: 'Regístrate',
        FORGOT_BUTTON: 'Olvidé mi contraseña',
        RESET_PASSWORD_MESSAGE: 'Ingresa tu correo electrónico para recuperar contraseña.',
        PASSWORD_SENT_MESSAGE: 'Correo enviado. Por favor revisa tu bandeja.',
        RESET_PASSWORD_BUTTON: 'Enviar',
        RESET_PASSWORD_CANCEL_BUTTON: 'Cancelar',
        BACK_BUTTON: 'Espalda',
        PRIVACY: 'Intimidad',
        LEGAL: 'Legal',
        CONTACT: 'Contacto',
        PLEASE_WAIT: 'Por favor, espere...',
      },
      LOGIN: {
        HEADING: 'Iniciar Sesión',
        TITLE: 'Crear una cuenta',
        GOOGLE_SIGN_IN_BUTTON: 'Continuar con Google',
        GOOGLE_SIGN_IN_APPLE: 'Continuar con Apple',
        OR_WITH_EMAIL_LABEL: 'O ingresar cuenta',
        OR_WITH_EMAIL_REGISTER_LABEL: 'O crear cuenta',
        ALERT_CREDENTIALS_FOR_LOGIN_1: 'Ingrese',
        ALERT_CREDENTIALS_FOR_LOGIN_2: ' correo electrónico',
        ALERT_CREDENTIALS_FOR_LOGIN_3: ' y',
        ALERT_CREDENTIALS_FOR_LOGIN_4: ' contraseña',
        ALERT_CREDENTIALS_FOR_LOGIN_5: ' para continuar.',
        BAD_CREDENTIALS: 'Las credenciales son incorrectas.',
        BUTTON: 'Registrarse',
        CONTINUE_BUTTON: 'Continuar',
      },
      FORGOT: {
        TITLE: 'Contraseña olvidada?',
        DESC: 'Ingrese su correo electrónico para restablecer su contraseña',
        SUCCESS: 'Your account has been successfully reset.',
        ERROR_OCURRED: 'Lo sentimos, ha ocurrido un error. Por favor, intente en unos minutos.'
      },
      REGISTER: {
        TITLE: 'Sign Up',
        DESC: 'Enter your details to create your account',
        SUCCESS: 'Your account has been successfuly registered.',
        PASSWORDS_DO_NOT_MATCH: 'Las contraseñas no coinciden.',
        DETAILS_INCORRECT: 'Los datos ingresados son incorrectos.',
        SUBMIT_BUTTON: 'Crear cuenta'
      },
      INPUT: {
        EMAIL: 'Correo electrónico',
        FULLNAME: 'Nombre completo',
        PASSWORD: 'Contraseña',
        CONFIRM_PASSWORD: 'Confirmar contraseña',
        USERNAME: 'Usuario',
        ENTER_EMAIL: 'Ingrese correo electrónico',
        ENTER_FULLNAME: 'Ingrese nombre completo',
        ENTER_PASSWORD: 'Ingrese contraseña',
        ENTER_PASSWORD_AGAIN: 'Ingrese contraseña nuevamente',
      },
      VALIDATION: {
        EMAIL_NOT_ENTERED: 'Correo electrónico requerido.',
        EMAIL_NOT_VALID: 'Correo electrónico no válido.',
        EMAIL_NOT_LONG_ENOUGH: 'Correo electrónico debe tener al menos 3 caracteres.',
        EMAIL_TOO_LONG: 'Correo electrónico no puede tener más de 360 caracteres.',

        PASSWORD_NOT_ENTERED: 'Contraseña requerida.',
        PASSWORD_NOT_VALID: 'Contraseña no válida.',
        PASSWORD_NOT_LONG_ENOUGH: 'Contraseña debe tener al menos 3 caracteres.',
        PASSWORD_TOO_LONG: 'Contraseña no puede tener más de 100 caracteres.',


        FULLNAME_NOT_ENTERED: 'Nombre completo requerido.',
        FULLNAME_NOT_VALID: 'Nombre completo no válido.',
        FULLNAME_NOT_LONG_ENOUGH: 'Nombre completo debe tener al menos 3 caracteres.',
        FULLNAME_TOO_LONG: 'Nombre completo no puede tener más de 100 caracteres.',



        INVALID: '{{name}} is not valid',
        REQUIRED: '{{name}} is required',
        MIN_LENGTH: '{{name}} minimum length is {{min}}',
        AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
        NOT_FOUND: 'The requested {{name}} is not found',
        INVALID_LOGIN: 'The login detail is incorrect',
        REQUIRED_FIELD: 'Required field',
        MIN_LENGTH_FIELD: 'Minimum field length:',
        MAX_LENGTH_FIELD: 'Maximum field length:',
        INVALID_FIELD: 'Field is not valid',
      }
    },
    ECOMMERCE: {
      COMMON: {
        SELECTED_RECORDS_COUNT: 'Selected records count: ',
        ALL: 'All',
        SUSPENDED: 'Suspended',
        ACTIVE: 'Active',
        FILTER: 'Filter',
        BY_STATUS: 'by Status',
        BY_TYPE: 'by Type',
        BUSINESS: 'Business',
        INDIVIDUAL: 'Individual',
        SEARCH: 'Search',
        IN_ALL_FIELDS: 'in all fields'
      },
      ECOMMERCE: 'eCommerce',
      CUSTOMERS: {
        CUSTOMERS: 'Customers',
        CUSTOMERS_LIST: 'Customers list',
        NEW_CUSTOMER: 'New Customer',
        DELETE_CUSTOMER_SIMPLE: {
          TITLE: 'Customer Delete',
          DESCRIPTION: 'Are you sure to permanently delete this customer?',
          WAIT_DESCRIPTION: 'Customer is deleting...',
          MESSAGE: 'Customer has been deleted'
        },
        DELETE_CUSTOMER_MULTY: {
          TITLE: 'Customers Delete',
          DESCRIPTION: 'Are you sure to permanently delete selected customers?',
          WAIT_DESCRIPTION: 'Customers are deleting...',
          MESSAGE: 'Selected customers have been deleted'
        },
        UPDATE_STATUS: {
          TITLE: 'Status has been updated for selected customers',
          MESSAGE: 'Selected customers status have successfully been updated'
        },
        EDIT: {
          UPDATE_MESSAGE: 'Customer has been updated',
          ADD_MESSAGE: 'Customer has been created'
        }
      }
    }
  }
};
