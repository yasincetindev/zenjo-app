import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('home.title')} subtitle={t('home.subtitle')} />

      <p className="description">{t('home.description')}</p>

      <nav>
        <Link to="/privacy">{t('nav.privacy')}</Link>
        <Link to="/support">{t('nav.support')}</Link>
      </nav>

      <Footer />
    </>
  );
}
