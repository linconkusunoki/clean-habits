import * as React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { HttpMethod } from '../core/domain/interfaces'
import { useHttpClient } from '../hooks'
import { TFunction } from 'i18next'

const RegisterSchema = (t: TFunction) =>
  Yup.object().shape({
    email: Yup.string().email(t('InvalidEmail')).required(t('Required')),
    password: Yup.string().min(8, t('PasswordLength')).required(t('Required')),
  })

export const FormLogin = () => {
  const { t } = useTranslation()
  const httpClient = useHttpClient()
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema(t),
    onSubmit: async (formValues) => {
      await httpClient.request('/register', {
        method: HttpMethod.post,
        body: formValues,
      })
    },
  })

  return (
    <form onSubmit={form.handleSubmit} className="card p-4">
      <h2>{t('Register')}</h2>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          {t('Email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${form.errors.email && 'is-invalid'}`}
          disabled={form.isSubmitting}
          onChange={form.handleChange}
        />
        <div className="invalid-feedback">{form.errors.email}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          {t('Password')}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={`form-control ${form.errors.password && 'is-invalid'}`}
          disabled={form.isSubmitting}
          onChange={form.handleChange}
        />
        <div className="invalid-feedback">{form.errors.password}</div>
      </div>

      <button
        type="submit"
        disabled={form.isSubmitting}
        className="btn btn-primary"
      >
        {t('Submit')}
      </button>
    </form>
  )
}
