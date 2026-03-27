import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  const { t } = useTranslation();

  const analyticsItems = t('privacy.analyticsItems', { returnObjects: true }) as string[];
  const howWeUseItems = t('privacy.howWeUseItems', { returnObjects: true }) as string[];
  const yourRightsItems = t('privacy.yourRightsItems', { returnObjects: true }) as string[];

  return (
    <>
      <Header title={t('privacy.title')} subtitle={t('privacy.subtitle')} />

      <span className="effective-date">{t('privacy.effectiveDate')}</span>

      <p>{t('privacy.intro')}</p>

      <h2>{t('privacy.informationWeCollect')}</h2>
      <p>{t('privacy.informationWeCollectText')}</p>
      <p>{t('privacy.informationWeCollectText2')}</p>

      <h3>{t('privacy.deviceIdentifiers')}</h3>
      <p>{t('privacy.deviceIdentifiersText')}</p>

      <h3>{t('privacy.analyticsData')}</h3>
      <p>{t('privacy.analyticsDataText')}</p>
      <ul>
        {analyticsItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t('privacy.analyticsDataText2')}</p>

      <h3>{t('privacy.crashDiagnostics')}</h3>
      <p>{t('privacy.crashDiagnosticsText')}</p>

      <h2>{t('privacy.howWeUse')}</h2>
      <ul>
        {howWeUseItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t('privacy.thirdParty')}</h2>
      <p>{t('privacy.thirdPartyText')}</p>
      <ul>
        <li>
          <strong>Google AdMob</strong> — {t('privacy.thirdPartyAdmob')} (
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyAdmobLink')}
          </a>
          )
        </li>
        <li>
          <strong>Firebase Analytics</strong> — {t('privacy.thirdPartyAnalytics')} (
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyAnalyticsLink')}
          </a>
          )
        </li>
        <li>
          <strong>Firebase Crashlytics</strong> — {t('privacy.thirdPartyCrashlytics')} (
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyCrashlyticsLink')}
          </a>
          )
        </li>
      </ul>

      <h2>{t('privacy.dataRetention')}</h2>
      <p>{t('privacy.dataRetentionText')}</p>

      <h2>{t('privacy.dataSharing')}</h2>
      <p>{t('privacy.dataSharingText')}</p>

      <h2>{t('privacy.childrensPrivacy')}</h2>
      <p>{t('privacy.childrensPrivacyText')}</p>

      <h2>{t('privacy.yourRights')}</h2>
      <p>{t('privacy.yourRightsText')}</p>
      <ul>
        {yourRightsItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t('privacy.changes')}</h2>
      <p>{t('privacy.changesText')}</p>

      <h2>{t('privacy.contactUs')}</h2>
      <p>{t('privacy.contactUsText')}</p>
      <p>
        <a href="mailto:yasincetin.dev@gmail.com">yasincetin.dev@gmail.com</a>
      </p>

      <Footer
        links={[
          { to: '/', label: t('nav.home') },
          { to: '/support', label: t('nav.support') },
        ]}
      />
    </>
  );
}
