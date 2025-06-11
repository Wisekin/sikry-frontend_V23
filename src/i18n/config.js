import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18n

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common', 'auth', 'dashboard', 'companiesPage', 'dashboardPage', 'analyticsOverviewPage', 'performanceAnalyticsPage', 'conversionAnalyticsPage', 'revenueAnalyticsPage', 'adminPage', 'adminUsersPage', 'adminBillingPage', 'adminSecurityPage', 'adminCompliancePage', 'adminAntiSpamPage', 'adminMonitoringPage', 'adminTeamPage', 'commsPage', 'leadResponse/analyticsPage', 'leadResponse/queuePage'], // namespaces
    defaultNS: 'common',
  });

export default i18n;
