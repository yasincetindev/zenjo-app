import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import FaqItem from '../components/FaqItem';

export default function Support() {
  const { t } = useTranslation();

  const faqs = t('support.faqs', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <>
      <Header title={t('support.title')} subtitle={t('support.subtitle')} />

      <ContactCard />

      <h2>{t('support.faqTitle')}</h2>

      {faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.q} answer={faq.a} />
      ))}

      <Footer
        links={[
          { to: '/', label: t('nav.home') },
          { to: '/privacy', label: t('nav.privacy') },
        ]}
      />
    </>
  );
}
