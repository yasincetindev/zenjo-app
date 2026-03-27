import { useTranslation } from 'react-i18next';

export default function ContactCard() {
  const { t } = useTranslation();

  return (
    <div className="contact-card">
      <p>{t('support.contactPrompt')}</p>
      <p className="email">
        <a href="mailto:yasincetin.dev@gmail.com">yasincetin.dev@gmail.com</a>
      </p>
      <p className="response-time">{t('support.responseTime')}</p>
    </div>
  );
}
