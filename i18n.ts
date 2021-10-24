import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      Register: 'Register',
      Email: 'Email address',
      Password: 'Password',
      Submit: 'Submit',
      Required: 'Required',
      InvalidEmail: 'Invalid email',
      PasswordLength: 'Your password must contain at least 8 characters',
    },
  },
  pt: {
    translation: {
      Register: 'Cadastro',
      Email: 'Email',
      Password: 'Senha',
      Submit: 'Enviar',
      Required: 'Obrigatório',
      InvalidEmail: 'Email inválido',
      PasswordLength: 'Sua senha deve conter pelo menos 8 caracteres',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
