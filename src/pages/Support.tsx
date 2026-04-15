import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import FaqItem from '../components/FaqItem';

type Faq = { q: string; a: string };

export default function Support() {
  const { t } = useTranslation();

  const groups = t('support.faqGroups', { returnObjects: true }) as {
    title: string;
    faqs: Faq[];
  }[];

  return (
    <>
      <Header title={t('support.title')} subtitle={t('support.subtitle')} motif />

      <ContactCard />

      <h2>{t('support.faqTitle')}</h2>

      {groups.map((group, gi) => (
        <div key={gi}>
          <div className="faq-group-title">{group.title}</div>
          {group.faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
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
