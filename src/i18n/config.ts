import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-GB',
    debug: process.env.NODE_ENV === 'development',
    ns: [
      'common',
      'auth',
      'dashboard',
      'companiesPage',
      'analyticsOverviewPage',
      'performanceAnalyticsPage',
      'revenueAnalyticsPage',
      'conversionAnalyticsPage',
      'adminBillingPage',
      'adminUsersPage',
      'adminSecurityPage',
      'adminCompliancePage',
      'adminTeamPage',
      'adminAntiSpamPage',
      'adminMonitoringPage',
      'commsPage',
      'commsBulkSenderPage'
    ],
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      requestOptions: {
        cache: 'no-cache',
      },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    supportedLngs: ['en-GB', 'fr'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    cleanCode: true,
    saveMissing: process.env.NODE_ENV === 'development',
    saveMissingTo: 'all',
  })

export default i18n 