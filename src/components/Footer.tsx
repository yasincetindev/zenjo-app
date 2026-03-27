import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  links?: { to: string; label: string }[];
}

export default function Footer({ links }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer>
      {links && links.length > 0 && (
        <p>
          {links.map((link, i) => (
            <span key={link.to}>
              {i > 0 && ' · '}
              <Link to={link.to}>{link.label}</Link>
            </span>
          ))}
        </p>
      )}
      <p>{t('footer.copyright')}</p>
    </footer>
  );
}
