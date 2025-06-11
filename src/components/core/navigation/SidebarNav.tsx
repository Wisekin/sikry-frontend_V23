"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import {
  LayoutDashboard,
  Search,
  Building2,
  LineChart,
  Database,
  BarChart3,
  BarChart2,
  Map,
  PieChart,
  BarChart,
  MessageSquare,
  Wallet,
  RefreshCw,
  Users,
  Star,
  Filter,
  Gauge,
  Video,
  MessageCircle,
  BarChart4,
  Settings,
  Shield,
  UserPlus,
  CreditCard,
  ShieldAlert,
} from "lucide-react"

export function SidebarNav() {
  const pathname = usePathname()
  const { t } = useTranslation('common')

  const navItems = [
    {
      title: t('nav.dashboard'),
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: t('nav.search'),
      href: "/search",
      icon: Search,
    },
    {
      title: t('nav.companies'),
      href: "/companies",
      icon: Building2,
    },
    {
      title: t('nav.marketIntel'),
      href: "/market-intel",
      icon: LineChart,
    },
    {
      title: t('nav.scrapers'),
      href: "/scrapers",
      icon: Database,
    },
    {
      title: t('nav.statistics'),
      href: "/statistics",
      icon: BarChart3,
      subItems: [
        {
          title: t('nav.statisticsOverview'),
          href: "/statistics",
          icon: BarChart2,
        },
        {
          title: t('nav.statisticsCollectionTrends'),
          href: "/statistics/collection-trends",
          icon: BarChart,
        },
        {
          title: t('nav.statisticsGeographicDistribution'),
          href: "/statistics/geographic-distribution",
          icon: Map,
        },
        {
          title: t('nav.statisticsSectorDistribution'),
          href: "/statistics/sector-distribution",
          icon: PieChart,
        },
        {
          title: t('nav.statisticsSourceComparison'),
          href: "/statistics/source-comparison",
          icon: BarChart,
        },
      ],
    },
    {
      title: t('nav.communications'),
      href: "/comms",
      icon: MessageSquare,
      subItems: [
        {
          title: t('nav.overview'),
          href: "/comms/overview",
          icon: BarChart2,
        },
        {
          title: t('comms.campaigns'),
          href: "/comms/campaigns",
          icon: MessageSquare,
        },
        {
          title: t('comms.templates'),
          href: "/comms/templates",
          icon: MessageSquare,
        },
        {
          title: t('comms.bulkSender'),
          href: "/comms/bulk-sender",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: t('nav.financial'),
      href: "/financial",
      icon: Wallet,
      subItems: [
        {
          title: t('financial.records'),
          href: "/financial/records",
          icon: BarChart2,
        },
        {
          title: t('financial.summary'),
          href: "/financial/summary",
          icon: BarChart2,
        },
        {
          title: t('financial.campaignRoi'),
          href: "/financial/campaign-roi",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.reengagement'),
      href: "/reengagement",
      icon: RefreshCw,
      subItems: [
        {
          title: t('reengagement.tasks'),
          href: "/reengagement/tasks",
          icon: BarChart2,
        },
        {
          title: t('reengagement.classification'),
          href: "/reengagement/classification",
          icon: BarChart2,
        },
        {
          title: t('reengagement.automation'),
          href: "/reengagement/automation",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.referrals'),
      href: "/referrals",
      icon: Users,
      subItems: [
        {
          title: t('referrals.dashboard'),
          href: "/referrals/dashboard",
          icon: BarChart2,
        },
        {
          title: t('referrals.tracking'),
          href: "/referrals/tracking",
          icon: BarChart2,
        },
        {
          title: t('referrals.rewards'),
          href: "/referrals/rewards",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.reviews'),
      href: "/reviews",
      icon: Star,
      subItems: [
        {
          title: t('reviews.requests'),
          href: "/reviews/requests",
          icon: BarChart2,
        },
        {
          title: t('reviews.booster'),
          href: "/reviews/booster",
          icon: BarChart2,
        },
        {
          title: t('reviews.monitoring'),
          href: "/reviews/monitoring",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.funnels'),
      href: "/funnels",
      icon: Filter,
      subItems: [
        {
          title: t('funnels.builder'),
          href: "/funnels/builder",
          icon: BarChart2,
        },
        {
          title: t('funnels.progress'),
          href: "/funnels/progress",
          icon: BarChart2,
        },
        {
          title: t('funnels.automation'),
          href: "/funnels/automation",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.gapAnalysis'),
      href: "/gap-analysis",
      icon: Gauge,
      subItems: [
        {
          title: t('gapAnalysis.form'),
          href: "/gap-analysis/form",
          icon: BarChart2,
        },
        {
          title: t('gapAnalysis.letters'),
          href: "/gap-analysis/letters",
          icon: BarChart2,
        },
        {
          title: t('gapAnalysis.results'),
          href: "/gap-analysis/results",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.vsl'),
      href: "/vsl",
      icon: Video,
      subItems: [
        {
          title: t('vsl.templates'),
          href: "/vsl/templates",
          icon: BarChart2,
        },
        {
          title: t('vsl.pages'),
          href: "/vsl/pages",
          icon: BarChart2,
        },
        {
          title: t('vsl.tracking'),
          href: "/vsl/tracking",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.leadResponse'),
      href: "/lead-response",
      icon: MessageCircle,
      subItems: [
        {
          title: t('leadResponse.rules'),
          href: "/lead-response/rules",
          icon: BarChart2,
        },
        {
          title: t('leadResponse.queue'),
          href: "/lead-response/queue",
          icon: BarChart2,
        },
        {
          title: t('leadResponse.analytics'),
          href: "/lead-response/analytics",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.analytics'),
      href: "/analytics",
      icon: BarChart4,
      subItems: [
        {
          title: t('analytics.performance'),
          href: "/analytics/performance",
          icon: BarChart2,
        },
        {
          title: t('analytics.conversion'),
          href: "/analytics/conversion",
          icon: BarChart2,
        },
        {
          title: t('analytics.revenue'),
          href: "/analytics/revenue",
          icon: BarChart2,
        },
      ],
    },
    {
      title: t('nav.admin'),
      href: "/admin",
      icon: Settings,
      subItems: [
        {
          title: t('admin.teamManagement'),
          href: "/admin/team",
          icon: UserPlus,
        },
        {
          title: t('admin.billing'),
          href: "/admin/billing",
          icon: CreditCard,
        },
        {
          title: t('admin.antiSpam'),
          href: "/admin/anti-spam",
          icon: ShieldAlert,
        },
      ],
    },
  ]

  return (
    <nav className="flex flex-col gap-2 p-4">
      {navItems.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
          {item.subItems && (
            <div className="ml-6 mt-1 flex flex-col gap-1">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                    pathname === subItem.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <subItem.icon className="h-4 w-4" />
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
