"use client"

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function CompliancePage() {
  const { t } = useTranslation('adminCompliancePage');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const handleTabChange = (tab: string) => {
    router.push(`${pathname}?tab=${tab}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{t('overview.gdpr.title')}</CardTitle>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <p className="text-xs text-gray-500">{t('overview.gdpr.status')}</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{t('overview.ccpa.title')}</CardTitle>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <p className="text-xs text-gray-500">{t('overview.ccpa.status')}</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{t('overview.audit.title')}</CardTitle>
                <Lock className="w-5 h-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-600">{t('overview.audit.status')}</div>
                <p className="text-xs text-gray-500">{t('overview.audit.lastAudit', { days: 2 })}</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'logs':
        return (
            <Card className="bg-white border-none shadow-sm">
                <CardHeader>
                    <CardTitle>{t('logs.title')}</CardTitle>
                    <CardDescription>{t('logs.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{t('logs.content')}</p>
                </CardContent>
            </Card>
        );
      case 'policies':
        return (
            <Card className="bg-white border-none shadow-sm">
                <CardHeader>
                    <CardTitle>{t('policies.title')}</CardTitle>
                    <CardDescription>{t('policies.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{t('policies.content')}</p>
                </CardContent>
            </Card>
        );
      case 'reports':
        return (
            <Card className="bg-white border-none shadow-sm">
                <CardHeader>
                    <CardTitle>{t('reports.title')}</CardTitle>
                    <CardDescription>{t('reports.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{t('reports.content')}</p>
                </CardContent>
            </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B1F3B]">{t('header.title')}</h1>
            <p className="text-gray-500 mt-1">{t('header.description')}</p>
          </div>
          <Button size="lg" className="bg-[#1B1F3B] text-white hover:bg-[#2A3050] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span>{t('header.auditButton')}</span>
          </Button>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 px-4" aria-label="Tabs">
                <button onClick={() => handleTabChange('overview')} className={`${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>{t('tabs.overview')}</button>
                <button onClick={() => handleTabChange('logs')} className={`${activeTab === 'logs' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>{t('tabs.logs')}</button>
                <button onClick={() => handleTabChange('policies')} className={`${activeTab === 'policies' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>{t('tabs.policies')}</button>
                <button onClick={() => handleTabChange('reports')} className={`${activeTab === 'reports' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>{t('tabs.reports')}</button>
            </nav>
        </div>
        <main className="flex-1 py-6">
            {renderContent()}
        </main>
      </div>
    </div>
  );
}
