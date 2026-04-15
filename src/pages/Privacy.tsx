import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionNav from '../components/SectionNav';

export default function Privacy() {
  const { t } = useTranslation();

  const analyticsEvents = t('privacy.analyticsEvents', { returnObjects: true }) as string[];
  const analyticsProps = t('privacy.analyticsProps', { returnObjects: true }) as string[];
  const crashKeys = t('privacy.crashKeys', { returnObjects: true }) as string[];
  const fcmTopics = t('privacy.fcmTopics', { returnObjects: true }) as string[];
  const howWeUseItems = t('privacy.howWeUseItems', { returnObjects: true }) as string[];
  const yourRightsItems = t('privacy.yourRightsItems', { returnObjects: true }) as string[];

  const sections = [
    { id: 'information', label: t('privacy.informationWeCollect') },
    { id: 'how-we-use', label: t('privacy.howWeUse') },
    { id: 'third-party', label: t('privacy.thirdParty') },
    { id: 'retention', label: t('privacy.dataRetention') },
    { id: 'sharing', label: t('privacy.dataSharing') },
    { id: 'children', label: t('privacy.childrensPrivacy') },
    { id: 'rights', label: t('privacy.yourRights') },
    { id: 'changes', label: t('privacy.changes') },
    { id: 'contact', label: t('privacy.contactUs') },
  ];

  return (
    <div className="privacy">
      <Header title={t('privacy.title')} subtitle={t('privacy.subtitle')} motif />

      <span className="effective-date">{t('privacy.effectiveDate')}</span>

      <p>{t('privacy.intro')}</p>

      <SectionNav title={t('privacy.tocTitle')} items={sections} />

      <h2 id="information">{t('privacy.informationWeCollect')}</h2>
      <p>{t('privacy.informationWeCollectText')}</p>
      <p>{t('privacy.informationWeCollectText2')}</p>

      <h3>{t('privacy.deviceIdentifiers')}</h3>
      <p>{t('privacy.deviceIdentifiersText')}</p>

      <h3>{t('privacy.analyticsData')}</h3>
      <p>{t('privacy.analyticsDataText')}</p>
      <ul>
        {analyticsEvents.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t('privacy.analyticsPropsText')}</p>
      <ul>
        {analyticsProps.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t('privacy.analyticsDataText2')}</p>

      <h3>{t('privacy.crashDiagnostics')}</h3>
      <p>{t('privacy.crashDiagnosticsText')}</p>
      <ul>
        {crashKeys.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t('privacy.pushNotifications')}</h3>
      <p>{t('privacy.pushNotificationsText')}</p>
      <ul>
        {fcmTopics.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t('privacy.remoteConfig')}</h3>
      <p>{t('privacy.remoteConfigText')}</p>

      <h3>{t('privacy.performance')}</h3>
      <p>{t('privacy.performanceText')}</p>

      <h2 id="how-we-use">{t('privacy.howWeUse')}</h2>
      <ul>
        {howWeUseItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 id="third-party">{t('privacy.thirdParty')}</h2>
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
        <li>
          <strong>Firebase Cloud Messaging</strong> — {t('privacy.thirdPartyFcm')} (
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyFcmLink')}
          </a>
          )
        </li>
        <li>
          <strong>Firebase Remote Config</strong> — {t('privacy.thirdPartyRemoteConfig')} (
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyRemoteConfigLink')}
          </a>
          )
        </li>
        <li>
          <strong>Firebase Performance Monitoring</strong> — {t('privacy.thirdPartyPerformance')} (
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyPerformanceLink')}
          </a>
          )
        </li>
        <li>
          <strong>Apple SKAdNetwork</strong> — {t('privacy.thirdPartyAppleAd')} (
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
            {t('privacy.thirdPartyAppleAdLink')}
          </a>
          )
        </li>
      </ul>

      <h2 id="retention">{t('privacy.dataRetention')}</h2>
      <p>{t('privacy.dataRetentionText')}</p>

      <h2 id="sharing">{t('privacy.dataSharing')}</h2>
      <p>{t('privacy.dataSharingText')}</p>

      <h2 id="children">{t('privacy.childrensPrivacy')}</h2>
      <p>{t('privacy.childrensPrivacyText')}</p>

      <h2 id="rights">{t('privacy.yourRights')}</h2>
      <p>{t('privacy.yourRightsText')}</p>
      <ul>
        {yourRightsItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 id="changes">{t('privacy.changes')}</h2>
      <p>{t('privacy.changesText')}</p>

      <h2 id="contact">{t('privacy.contactUs')}</h2>
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
    </div>
  );
}
