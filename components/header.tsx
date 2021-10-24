import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { i18n } = useTranslation()

  const handleLang = (lang: string) => i18n.changeLanguage(lang)

  return (
    <header className="bg-dark">
      <div className="container py-4 d-flex justify-content-between">
        <Link href="/">
          <a className="d-inline-block">
            <h1 className="text-light m-0 d-inline-block">App</h1>
          </a>
        </Link>
        <div className="btn-group" role="group" aria-label="Language Selection">
          <button
            type="button"
            onClick={() => handleLang('en')}
            className={`btn ${
              i18n.language === 'en' ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => handleLang('pt')}
            className={`btn ${
              i18n.language === 'pt' ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            PT
          </button>
        </div>
      </div>
    </header>
  )
}
