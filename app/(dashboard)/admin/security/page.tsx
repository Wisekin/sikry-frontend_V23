"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ShieldCheck, KeyRound, Fingerprint } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SecurityPage() {
  const { t } = useTranslation('adminSecurityPage');

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-10">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B1F3B] flex items-center gap-3">
            <ShieldCheck className="w-8 h-8" />
            {t('header.title')}
          </h1>
          <p className="text-gray-500 mt-1">{t('header.subtitle')}</p>
        </div>
      </header>

      <div className="space-y-8">
        <Card className="bg-white border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Fingerprint className="w-5 h-5" />{t('twoFactor.title')}</CardTitle>
            <CardDescription>{t('twoFactor.description')}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="font-medium">{t('twoFactor.enforce')}</p>
            <Switch id="enforce-2fa" />
          </CardContent>
        </Card>

        <Card className="bg-white border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" />{t('sso.title')}</CardTitle>
            <CardDescription>{t('sso.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>{t('sso.button')}</Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><KeyRound className="w-5 h-5" />{t('apiKeys.title')}</CardTitle>
            <CardDescription>{t('apiKeys.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>{t('apiKeys.button')}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
