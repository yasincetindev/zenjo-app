import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
  };

  return (
    <div className="lang-switch">
      <button onClick={toggle}>{t('nav.switchLang')}</button>
    </div>
  );
}
