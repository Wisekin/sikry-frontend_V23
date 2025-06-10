export const translations = {
  en: {
    nav: {
      dashboard: "Dashboard",
      search: "Search",
      companies: "Companies",
      communications: "Communications",
      marketIntel: "Market Intel",
      scrapers: "Scrapers",
      statistics: "Statistics",
      statisticsOverview: "Statistics Overview",
      statisticsCollectionTrends: "Collection Trends",
      statisticsGeographicDistribution: "Geographic Distribution",
      statisticsSectorDistribution: "Sector Distribution",
      statisticsSourceComparison: "Source Comparison",
      scrapersOverview: "Scrapers Overview",
      newScraper: "New Scraper",
      runScraper: "Run Scraper",
      scheduleJob: "Schedule Job",
      settings: "Settings",
      admin: "Admin",
      financial: "Financial",
      reengagement: "Re-engagement",
      referrals: "Referrals",
      reviews: "Reviews",
      funnels: "Funnels",
      gapAnalysis: "Gap Analysis", // Nav link
      vsl: "VSL Pages",
      leadResponse: "Lead Response",
      analytics: "Analytics",
      overview: "Overview",
      secondary: {
        addCompany: "Add Company",
        importCompanies: "Import Companies",
        exportData: "Export Data",
        newMessage: "New Message",
        newCampaign: "New Campaign",
        templates: "Templates",
        newScraper: "New Scraper",
        runScraper: "Run Scraper",
        scheduleJob: "Schedule Job"
      }
    },
    comms: {
      title: "Communications",
      campaigns: "Campaigns",
      templates: "Templates",
      bulkSender: "Bulk Sender",
      newMessage: "New Message",
      newCampaign: "New Campaign",
      channel: "Channel",
      subject: "Subject",
      content: "Content",
      recipient: "Recipient",
      status: "Status",
      sentAt: "Sent At",
      deliveredAt: "Delivered At",
      openedAt: "Opened At",
      clickedAt: "Clicked At",
      pageDescription: "Manage your outreach communications and track engagement.",
      buttons: {
        newCommunication: "New Communication"
      },
      stats: {
        total: "Total",
        replied: "Replied"
      },
      tabs: {
        allCommunications: "All Communications"
      },
      loading: "Loading communications...",
      campaignsPageDescription: "Manage your communication campaigns and track their performance.",
      campaignsTabs: {
        allCampaigns: "All Campaigns"
      },
      templatesPageDescription: "Manage your communication templates for different channels.",
      templatesButtons: {
        newTemplate: "New Template"
      },
      templatesModifiedDatePrefix: "Modified",
      bulkSenderPageTitle: "Bulk Message Center",
      bulkSenderPageDescription: "Send personalized communications at scale with enterprise-grade delivery",
      bulkSenderMonthlyLimit: "Monthly Limit",
      bulkSenderStats: {
        emailCampaigns: "Email Campaigns",
        messagesSent: "Messages Sent",
        avgOpenRate: "Avg. Open Rate",
        avgClickRate: "Avg. Click Rate"
      },
      bulkSenderTabs: {
        email: "Email Campaign",
        linkedin: "LinkedIn Outreach",
        sms: "SMS Campaign"
      },
      bulkSenderEmail: {
        content: {
          title: "Message Content",
          description: "Compose your message or select from templates"
        },
        subject: {
          label: "Subject Line",
          placeholder: "Enter your email subject"
        },
        template: {
          label: "Template",
          placeholder: "Select a template"
        },
        templateOptions: {
          none: "No template",
          intro: "Introduction Sequence",
          followUp: "Follow-up Series",
          newsletter: "Monthly Newsletter",
          event: "Event Invitation",
          promo: "Product Promotion"
        },
        messageContent: {
          label: "Message Content",
          saveAsTemplate: "Save as Template",
          placeholder: "Compose your message here..."
        },
        personalizationInfo: "Personalization tags detected: {tags}. Ensure CSV has these columns.",
        enablePersonalization: "Enable recipient personalization",
        delivery: {
          title: "Delivery Strategy",
          description: "Optimize your sending strategy for maximum deliverability",
          timingLabel: "Delivery Timing",
          timingPlaceholder: "Select send strategy",
          options: {
            now: "Send immediately",
            schedule: "Schedule for later",
            optimal: "Optimal time per recipient",
            drip: "Drip campaign"
          },
          rateLabel: "Send Rate",
          ratePlaceholder: "Messages per hour",
          rateOptions: {
            10: "10 messages/hour",
            25: "25 messages/hour",
            50: "50 messages/hour (recommended)",
            100: "100 messages/hour",
            250: "250 messages/hour"
          }
        },
        tracking: {
          opens: "Track message opens",
          clicks: "Track link clicks",
          unsubscribe: "Include unsubscribe link",
          retry: "Automatically retry failed sends"
        }
      },
      bulkSenderAudience: {
        title: "Audience Selection",
        description: "Define who will receive this campaign",
        importLabel: "Import Recipients",
        buttons: {
          upload: "Upload CSV/Excel",
          fromCRM: "Select from CRM",
          pasteList: "Paste Email List"
        },
        summary: {
          title: "Recipients Summary",
          validEmails: "Valid emails",
          invalidEmails: "Invalid emails",
          unsubscribed: "Unsubscribed",
          duplicates: "Duplicate entries",
          noRecipients: "No recipients selected yet"
        }
      },
      bulkSenderDeliverability: {
        title: "Deliverability Assurance",
        description: "Ensure compliance with regulations",
        spamScoreLabel: "Spam Risk Score",
        spamScore: {
          low: "Low ({score}/10)"
        },
        complianceLabel: "Regulatory Compliance",
        complianceStatus: {
          passed: "Passed"
        },
        checks: {
          unsubscribe: "Unsubscribe mechanism detected",
          address: "Physical address included",
          canSpam: "CAN-SPAM requirements satisfied",
          gdpr: "GDPR compliant language detected"
        },
        senderInfoLabel: "Sender Information"
      },
      bulkSenderLinkedin: {
        content: {
          title: "LinkedIn Outreach Message",
          description: "Craft your connection request and follow-up message for LinkedIn."
        },
        connectionRequest: {
          label: "Connection Request Message (Optional)",
          placeholder: "e.g., Hi {{firstName}}, I came across your profile and was impressed by your work at {{companyName}}...",
          charCount: "{count} / 300 characters",
          helpText: "Keep it short and personalized. Max 300 characters for connection requests."
        },
        mainMessage: {
          label: "Main LinkedIn Message",
          placeholder: "e.g., Thanks for connecting, {{firstName}}! I'd love to discuss how our solutions could help {{companyName}} with...",
          charCount: "{count} / 2000 characters"
        },
        availableTags: {
          title: "Available LinkedIn tags:"
        },
        preview: {
          title: "LinkedIn Message Preview Area",
          placeholder: "Preview will appear here."
        }
      },
      bulkSenderSms: {
        content: {
          title: "SMS Campaign Content",
          description: "Compose your SMS message. Keep it concise and engaging."
        },
        message: {
          label: "SMS Message",
          placeholder: "Hi {{firstName}}, quick update from SIKRY...",
          charCountLabel: "Characters:",
          segmentInfo: "({count} SMS segment)"
        },
        availableTags: {
          title: "Available SMS tags:"
        },
        optOutTip: "Tip: Include opt-out info like 'Reply STOP to end' if legally required.",
        preview: {
          title: "SMS Preview",
          stopMessage: "STOP"
        }
      },
      bulkSenderFooter: {
        readyToSend: "Ready to send to",
        recipientsSuffix: "recipients",
        buttons: {
          saveDraft: "Save Draft",
          sendCampaign: "Send Campaign"
        }
      }
    },
    companies: {
      title: "Companies",
      addNew: "Add New Company",
      import: "Import Companies",
      export: "Export Companies",
      name: "Company Name",
      domain: "Domain",
      industry: "Industry",
      location: "Location",
      size: "Company Size",
      confidence: "Confidence",
      lastContacted: "Last Contacted",
      status: "Status",
      verified: "Verified",
      description: "Description",
      website: "Website",
      phone: "Phone",
      email: "Email",
      employees: "Employees",
      card: {
        employees: "employees",
        extractedData: "Extracted Data",
        lastUpdated: "Last Updated",
        viewDetails: "View Details",
        more: "more",
        confidence: {
          high: "High Confidence",
          medium: "Medium Confidence",
          low: "Low Confidence"
        }
      },
      details: {
        loading: "Loading company details...",
        notFound: {
          title: "Company Not Found",
          description: "The company you're looking for doesn't exist."
        },
        tabs: {
          overview: "Overview",
          engagement: "Engagement",
          insights: "Insights",
          configuration: "Configuration"
        },
        overview: {
          extractedData: {
            title: "Extracted Data",
            description: "Automatically detected information with confidence scores"
          },
          emailAddresses: {
            title: "Email Addresses"
          },
          phoneNumbers: {
            title: "Phone Numbers"
          },
          technologies: {
            title: "Technologies"
          },
          dataQualityMetrics: {
            title: "Data Quality Metrics",
            description: "Historical data extraction performance"
          },
          metrics: {
            overallConfidence: "Overall Confidence",
            dataCompleteness: "Data Completeness",
            sourceReliability: "Source Reliability"
          },
          scrapingHistory: {
            title: "Scraping History",
            fieldsFound: "{{count}} fields"
          }
        },
        insights: {
          title: "AI-Generated Insights",
          description: "Intelligent analysis of company data and market position",
          comingSoon: {
            title: "AI Insights Coming Soon",
            description: "Advanced market intelligence and competitive analysis will be available in the next update."
          }
        },
        config: {
          title: "Scraping Configuration",
          description: "Customize data extraction settings and field detection",
          autoDetection: {
            title: "Auto-Detection Settings",
            email: "Email Detection",
            phone: "Phone Detection",
            techStack: "Technology Stack Detection",
            socialMedia: "Social Media Detection"
          },
          status: {
            enabled: "Enabled",
            disabled: "Disabled"
          },
          confidenceThresholds: {
            title: "Confidence Thresholds",
            minScore: "Minimum Confidence Score"
          },
          buttons: {
            save: "Save Configuration",
            reset: "Reset to Defaults"
          }
        }
      },
      actions: {
        backToList: "Back to Companies"
      }
    },
    search: {
      title: "Search Companies",
      placeholder: "Search companies, contacts, or market data...",
      recentSearches: "Recent Searches",
      suggestions: {
        title: "Suggestions",
        quick: "Quick suggestions",
        recent: "Recent Searches",
        examples: {
          marketing: "Marketing agencies in Geneva using HubSpot",
          compare: "Compare SaaS companies with Series A funding",
          analyze: "Analyze tech startups using React with >50 employees",
          filter: "Filter Fintech companies in Switzerland by revenue"
        }
      },
      refine: "Refine your search...",
      searching: "Searching...",
      searchingMultiple: "Searching multiple sources...",
      results: "Found {{count}} results for '{{query}}'",
      all: "all companies",
      export: "Export Results",
      noResults: "No results found",
      tryAdjusting: "Try adjusting your filters or search terms",
      confidence: "Confidence",
      card: {
        employeesLabel: "{{count}} Employees",
        extractedDataTitle: "EXTRACTED DATA",
        emailCount: "{{count}} Email(s)",
        phoneCount: "{{count}} Phone(s)"
      },
      mainTitle: "Company Search",
      status: {
        searchingCompanies: "Searching for companies...",
        resultsFound: "{{count}} results found.",
        errorMessage: "Error: {{error}}",
        searchingWeb: "Searching The Web...",
        searchingWebSubtitle: "Please wait while we gather and enrich the results.",
        noResultsTitle: "No Results Found",
        noResultsSubtitle: "Try adjusting your filters or search terms for a better match."
      },
      buttons: {
        exportResults: "Export Results"
      },
      filters: {
        label: "Filters",
        dataSources: "Data Sources",
        industry: "Industry",
        allIndustries: "All Industries",
        softwareDev: "Software Development",
        marketing: "Marketing & Advertising",
        fintech: "Financial Technology",
        location: "Location",
        enterLocation: "Enter location...",
        companySize: "Company Size",
        allSizes: "All Sizes",
        employees: "Employees",
        minConfidence: "Minimum Confidence",
        anyScore: "Any Score",
        clear: "Clear All Filters",
        searchPlaceholder: "Search by company name, domain, or industry...",
        sourcesLabel: "Sources:",
        advancedFiltersTitle: "Advanced Filters",
        industryLabel: "Industry",
        locationLabel: "Location",
        locationPlaceholder: "e.g., Geneva, Switzerland",
        minConfidenceLabel: "Minimum Confidence"
      },
      sorting: {
        relevance: "Sort by Relevance",
        confidence: "Sort by Confidence",
        newest: "Sort by Newest"
      },
      dataSources: {
        title: "Data Sources",
        internal: "Internal Database",
        wikidata: "Wikidata",
        opencorporates: "OpenCorporates",
        businessRegistries: "Business Registries"
      },
      viewModes: {
        grid: "Grid View",
        list: "List View",
        map: "Map View",
        mapPlaceholder: "Map View Placeholder"
      },
      smartBar: {
        placeholder: "Search for companies or topics...",
        searchButton: "Search",
        sourceGoogle: "Google",
        sourceLinkedIn: "LinkedIn",
        sourceCrunchbase: "Crunchbase"
      },
      queryExamples: {
        title: "Query Examples",
        categories: {
          industrySpecific: "Industry Specific",
          technologyStack: "Technology Stack",
          businessCriteria: "Business Criteria"
        },
        queries: {
          industrySpecific: [
            "Marketing agencies in Geneva with 10-50 employees",
            "SaaS companies with Series A funding in Europe",
            "Fintech startups in Switzerland founded after 2020",
            "E-commerce platforms using Shopify with 100+ employees"
          ],
          technologyStack: [
            "Companies using React and TypeScript in their tech stack",
            "Startups built on AWS with Node.js backend",
            "Businesses using Salesforce CRM and HubSpot",
            "Companies with Python and machine learning capabilities"
          ],
          businessCriteria: [
            "B2B companies with remote-first culture",
            "Consulting firms with international clients",
            "Companies hiring software engineers in Zurich",
            "Businesses with sustainability focus and ESG reporting"
          ]
        }
      }
    },
    scrapers: {
      title: "Scrapers",
      run: "Run Scraper"
    },
    dashboard: {
      title: "Dashboard",
      welcome: "Welcome back",
      overview: "Overview",
      totalCompanies: "Total Companies",
      totalCommunications: "Total Communications",
      activeScrapers: "Active Scrapers",
      recentActivity: "Recent Activity",
      quickActions: "Quick Actions",
      insights: "Insights",
      performance: "Performance",
      insightsText: {
        verifiedCompanies: "Verified Companies",
        deliveryRate: "Delivery Rate",
        activeScrapersLabel: "Active Scrapers"
      }
    },
    marketIntel: {
      title: "Market Intelligence"
    },
    financial: {
      dashboard: "Financial Dashboard",
      dashboardDescription: "Overview of your financial data",
      addRecord: "Add Record",
      records: "Records",
      summary: "Summary",
      campaignRoi: "Campaign ROI",
      campaignROI: "Campaign ROI",
      campaign: "Campaign",
      revenue: "Revenue",
      cost: "Cost",
      costs: "Costs",
      expense: "Expense",
      refund: "Refund",
      currency: "Currency",
      type: "Type",
      source: "Source",
      amount: "Amount",
      category: "Category",
      netProfit: "Net Profit",
      roi: "ROI",
      searchPlaceholder: "Search financial records...",
      sourceType: "Source Type",
      sourceTypes: {
        campaign: "Campaign",
        contact: "Contact",
        scraper: "Scraper",
        subscription: "Subscription",
        manual: "Manual"
      },
      types: {
        income: "Income",
        expense: "Expense"
      },
      campaignRoiPage: {
        title: "Campaign ROI Analysis",
        description: "Evaluate the performance of your marketing campaigns."
      },
      campaignRoiStats: {
        overallRoi: "Overall Campaign ROI",
        vsLastPeriod: "{change} vs last period",
        topCampaign: "Top Campaign",
        roiPrefix: "ROI:",
        totalCampaignsTracked: "Total Campaigns Tracked"
      },
      campaignRoiFilters: {
        title: "Filters",
        startDatePlaceholder: "Start Date",
        endDatePlaceholder: "End Date",
        allStatuses: "All Statuses",
        applyButton: "Apply Filters"
      },
      campaignRoiTable: {
        title: "Campaign Performance Details",
        header: {
          campaignName: "Campaign Name",
          spend: "Spend",
          netProfit: "Net Profit",
          roiPercentage: "ROI (%)",
          status: "Status"
        },
        noData: "No campaign data found."
      },
      recordsPage: {
        title: "Financial Records",
        description: "View and manage your financial transactions."
      },
      recordsStats: {
        totalRevenue: "Total Revenue",
        totalExpenses: "Total Expenses",
        netProfit: "Net Profit",
        thisMonthSuffix: "{val} this month",
        unitUSD: "USD"
      },
      recordsTable: {
        title: "Transaction List",
        noData: "No financial records found."
      },
      summaryPage: {
        title: "Financial Summary",
        description: "An overview of your company's financial health."
      },
      summaryStats: {
        totalRevenueYTD: "Total Revenue (YTD)",
        totalExpensesYTD: "Total Expenses (YTD)",
        netProfitYTD: "Net Profit (YTD)",
        avgTransactionValue: "Avg. Transaction Value",
        monthlyBurnRate: "Monthly Burn Rate",
        revenueGrowth: "Revenue Growth",
        vsLastYear: "{change} vs last year",
        vsLastMonth: "{change} vs last month",
        ytdChange: "{change} YTD"
      },
      summaryCharts: {
        monthlyPerformance: {
          title: "Monthly Performance",
          legendExpenses: "Expenses"
        },
        expenseCategories: {
          title: "Expense Categories",
          salaries: "Salaries",
          marketing: "Marketing",
          operations: "Operations",
          software: "Software"
        },
        tooltipRevenue: "Revenue: {amount}",
        tooltipExpenses: "Expenses: {amount}"
      }
    },
    reengagement: {
      title: "Re-engagement",
      tasks: "Tasks",
      classification: "Classification",
      automation: "Automation"
    },
    referrals: {
      dashboard: "Dashboard",
      tracking: "Tracking",
      rewards: "Rewards"
    },
    reviews: {
      requests: "Requests",
      booster: "Booster",
      monitoring: "Monitoring"
    },
    funnels: {
      page: {
        title: "Funnels",
        description: "Manage and analyze your sales and marketing funnels."
      },
      stats: {
        activeFunnels: "Active Funnels",
        totalLeadsInFunnels: "Total Leads in Funnels",
        thisWeekSuffix: "+{count} this week",
        overallConversionRate: "Overall Conversion Rate",
        revenueFromFunnelsUSD: "Revenue from Funnels (USD)",
        lastMonthSuffix: "{amount} last month"
      },
      builder: {
        title: "Builder",
        description: "Build, visualize, and optimize your conversion funnels."
      },
      progress: {
        title: "Progress",
        description: "Track lead progression and identify bottlenecks."
      },
      automation: {
        title: "Automation",
        description: "Set up automated actions and triggers within your funnels."
      },
      topPerforming: {
        title: "Top Performing Funnels",
        conversionRateSuffix: "Conv. Rate",
        revenuePrefix: "Revenue:",
        noData: "No funnel data available yet. Create your first funnel to see performance here."
      }
    },
    gapAnalysis: {
      form: {
        title: "Create New Gap Analysis",
        description: "Fill in the details below to start a new gap analysis.",
        header: {
          backButton: "Back to Analyses",
          title: "New Gap Analysis Assessment",
          subtitle: "Step {currentStep} of {totalSteps}: Fill out the details for your analysis.",
          progressComplete: "Complete"
        },
        marketParams: {
          title: "Market Analysis Parameters",
          description: "Define the scope and focus for your gap analysis.",
          analysisTitleLabel: "Analysis Title",
          analysisTitlePlaceholder: "e.g., Global SaaS Market Analysis",
          industryPlaceholder: "Select an industry",
          industries: {
            technology: "Technology",
            finance: "Finance",
            healthcare: "Healthcare",
            retail: "Retail",
            manufacturing: "Manufacturing"
          },
          analysisDescriptionLabel: "Analysis Description",
          analysisDescriptionPlaceholder: "Briefly describe the goals and focus of this analysis.",
          marketSizeLabel: "Target Market Size",
          marketSizePlaceholder: "Select market size",
          marketSizes: {
            small: "Small (e.g., Niche, Local)",
            medium: "Medium (e.g., Regional, Growing)",
            large: "Large (e.g., National, Established)",
            enterprise: "Enterprise (e.g., Global, Fortune 500)"
          },
          geographyLabel: "Target Geography",
          geographyPlaceholder: "Select geography",
          geographies: {
            northAmerica: "North America",
            europe: "Europe",
            asiaPacific: "Asia-Pacific",
            latinAmerica: "Latin America",
            global: "Global"
          },
          competitiveAnalysisLabel: "Competitive Analysis",
          primaryCompetitorLabel: "Primary Competitor",
          secondaryCompetitorLabel: "Secondary Competitor",
          competitorPlaceholder: "Enter competitor name",
          analysisOptionsLabel: "Analysis Options",
          deepScanLabel: "Enable Deep Scan",
          deepScanDescription: "Provides a more comprehensive analysis, may take longer.",
          aiRecommendationsLabel: "AI-Powered Recommendations",
          aiRecommendationsDescription: "Generate actionable insights and suggestions using AI.",
          generateLetterLabel: "Generate Sales Letter",
          generateLetterDescription: "Automatically create a personalized sales letter based on the analysis."
        },
        buttons: {
          saveDraft: "Save Draft",
          runAnalysis: "Run Analysis",
          completeAnalysis: "Complete Analysis"
        },
        questionCategories: {
          business_performance: "Business Performance",
          technology: "Technology",
          operations: "Operations",
          marketing: "Marketing",
          customer_experience: "Customer Experience"
        },
        questions: {
          subtitle: "Please answer the following questions to the best of your ability.",
          numberPlaceholder: "Enter a number",
          textPlaceholder: "Enter your response",
          scale: {
            poor: "Poor",
            excellent: "Excellent"
          },
          current_revenue: {
            text: "What is your current annual revenue?",
            options: {
              under_100k: "Under $100K",
              "100k_500k": "$100K-$500K",
              "500k_1m": "$500K-$1M",
              "1m_5m": "$1M-$5M",
              over_5m: "Over $5M"
            }
          },
          growth_rate: {
            text: "What has been your average growth rate over the past 2 years?",
            helpText: "Rate from 1 (declining) to 5 (rapid growth)"
          },
          technology_stack: {
            text: "How would you rate your current technology infrastructure?",
            helpText: "1 = Outdated, 5 = Cutting-edge"
          },
          automation_level: {
            text: "What percentage of your processes are automated?",
            options: {
              "0_20": "0-20%",
              "21_40": "21-40%",
              "41_60": "41-60%",
              "61_80": "61-80%",
              "81_100": "81-100%"
            }
          },
          team_size: {
            text: "How many full-time employees do you have?"
          },
          biggest_challenge: {
            text: "What is your biggest operational challenge?",
            options: {
              lead_generation: "Lead generation",
              sales_conversion: "Sales conversion",
              customer_retention: "Customer retention",
              process_efficiency: "Process efficiency",
              technology_limitations: "Technology limitations",
              team_productivity: "Team productivity"
            }
          },
          marketing_channels: {
            text: "Which marketing channels do you currently use?",
            options: {
              social_media: "Social media",
              email_marketing: "Email marketing",
              content_marketing: "Content marketing",
              paid_advertising: "Paid advertising",
              seo: "SEO",
              referrals: "Referrals",
              events_networking: "Events/Networking"
            }
          },
          customer_satisfaction: {
            text: "How would you rate your customer satisfaction?",
            helpText: "1 = Poor, 5 = Excellent"
          }
        }
      },
      results: { // Results view within the form page
        backToDashboard: "Back to Gap Analysis Dashboard",
        title: "Assessment Complete!",
        subtitle: "Review your gap analysis results and generated sales letter.",
        overallScore: "Overall Readiness Score",
        priorityAreas: "Key Priority Areas",
        improvementPotential: {
          title: "Improvement Potential",
          status: "Significant",
          description: "Targeted actions in key areas can yield substantial improvements."
        },
        categoryBreakdown: {
          title: "Category Breakdown",
          description: "Detailed scores for each assessment category."
        },
        salesLetter: {
          title: "AI-Generated Sales Letter",
          description: "A personalized sales letter crafted from your analysis.",
          buttons: {
            regenerate: "Regenerate Letter",
            generate: "Generate Sales Letter"
          },
          generatedAt: "Generated on",
          justNow: "Just now",
          regenerations: "{count} regenerations" ,
          readyTitle: "Your Sales Letter is Ready!",
          readyDescription: "Our AI has crafted a personalized sales letter based on your gap analysis. Click below to generate and view it."
        },
        recommendations: {
          title: "Strategic Recommendations",
          description: "Actionable advice based on your identified gaps.",
          focusText: "Focus on improving {area} to enhance overall performance."
        },
        startNewAssessment: "Start New Assessment",
        exportResultsSuffix: "Results"
      },
      page: { // For /gap-analysis page
        description: "Monitor and manage all your gap analyses."
      },
      buttons: { // General buttons for gap analysis section
        newAnalysis: "New Analysis",
        backToList: "Back to Analyses List"
      },
      searchPlaceholder: "Search by contact or company...",
      tabs: { // For main page tabs
        generated: "Generated",
        responded: "Responded"
      },
      card: { // For cards on the main page
        unknownContact: "Unknown Contact/Company",
        scorePrefix: "Score:",
        scoreSuffix: "/5",
        buttons: {
          send: "Send Letter"
        },
        generatedLetter: {
          title: "Generated Letter Snippet"
        }
      },
      emptyState: { // For main page empty state
        title: "No Gap Analyses Yet",
        description: "Get started by creating a new gap analysis to identify opportunities and generate personalized sales letters.",
        createFirstButton: "Create First Analysis"
      },
      lettersPage: { 
        title: "Sales Letters", 
        subtitle: "Browse, manage, and track your generated sales and outreach letters.",
        createNew: "Create New Letter",
        preview: "Preview",
        tryAgain: "Try Again",
        subjectLabel: "Subject",
        recipientLabel: "To",
        companyLabel: "Company",
        idLabel: "ID",
        createdLabel: "Created",
        statusLabel: "Status",
        noLettersTitle: "No Letters Found",
        noLettersDescription: "Get started by creating a new gap analysis letter.",
        errorTitle: "Error Fetching Letters",
        dialogTitle: "Letter Preview",
        dialogSubjectPrefix: "Subject",
        dialogClose: "Close",
        status: { 
          draft: "Draft",
          sent: "Sent",
          archived: "Archived"
        }
      },
      resultsPage: { // For dedicated /gap-analysis/results page
        mainTitle: "Gap Analysis Results", // Differentiated from the form's result view title
        subtitle: "Review and analyze the findings from your gap analysis.",
        exportButton: "Export Results",
        summary: {
          totalGaps: "Total Gaps Identified",
          avgSeverity: "Average Severity",
          readinessScore: "Overall Readiness Score",
          keyAreas: "Key Areas for Improvement"
        },
        charts: {
          severityDistribution: "Severity Distribution",
          areaDistribution: "Area Distribution",
          noData: "No data available for chart.",
          areaPlaceholder: "Area distribution chart will be displayed here."
        },
        detailedResults: {
          title: "Detailed Gap Analysis",
          description: "A comprehensive list of identified gaps and recommendations.",
          area: "Area",
          gapDescription: "Gap Description",
          severity: "Severity",
          recommendations: "Recommendations",
          responsibleTeam: "Responsible Team",
          noDetailedResults: "No detailed results to display."
        },
        severity: {
          high: "High",
          medium: "Medium",
          low: "Low"
        },
        error: {
          title: "Error Fetching Results",
          fetchFailed: "Failed to fetch results: {{status}}",
          unknown: "An unknown error occurred while fetching results."
        },
        noResults: {
          title: "No Results Available",
          description: "Gap analysis results are not yet available or could not be found."
        },
        tryAgain: "Try Again"
      },
      trackingPage: {
        subtitle: "Analyze views, engagement, and conversions for your VSLs.",
        filter: {
          vslLabel: "VSL Page",
          selectVSLPlaceholder: "Select VSL Page",
          allVSLs: "All VSL Pages",
          periodLabel: "Period",
          selectPeriodPlaceholder: "Select Period",
          periods: {
            last7days: "Last 7 Days",
            last30days: "Last 30 Days",
            last3months: "Last 3 Months",
            alltime: "All Time"
          }
        },
        summary: {
          totalViews: "Total Views",
          totalLeads: "Total Leads",
          conversionRate: "Conversion Rate",
          avgWatchTime: "Avg. Watch Time",
          totalVSLs: "Total VSLs Tracked"
        },
        charts: {
          viewsOverTime: "Views Over Time",
          leadsOverTime: "Leads Over Time",
          conversionRateOverTime: "Conversion Rate Over Time",
          views: "Views",
          leads: "Leads",
          conversionRate: "Conv. Rate"
        },
        table: {
          title: "Performance by VSL Page",
          header: {
            vslTitle: "VSL Title",
            views: "Views",
            leads: "Leads",
            conversionRate: "Conv. Rate (%)",
            avgWatchTime: "Avg. Watch Time (s)"
          }
        },
        error: {
          title: "Error Loading Tracking Data",
          fetchVSLListFailed: "Failed to fetch list of VSL pages.",
          fetchTrackingFailed: "Failed to fetch VSL tracking data: {{statusText}}",
          unknown: "An unknown error occurred."
        },
        noData: {
            title: "No Tracking Data",
            description: "No tracking data available for the selected VSL page(s) and period."
        },
        tryAgain: "Try Again"
      },
      templatesPage: {
        subtitle: "Browse, manage, and create new Video Sales Letter templates.",
        createNew: "Create New Template",
        useTemplate: "Use Template",
        preview: "Preview",
        category: "Category",
        created: "Created",
        descriptionLabel: "Description",
        contentPreviewLabel: "Content Structure Preview",
        tagsLabel: "Tags",
        status: {
          active: "Active",
          archived: "Archived"
        },
        error: {
          title: "Error Loading Templates",
          fetchFailed: "Failed to fetch VSL templates: {{statusText}}",
          unknown: "An unknown error occurred."
        },
        noTemplates: {
          title: "No VSL Templates Found",
          description: "Get started by creating your first VSL template."
        },
        tryAgain: "Try Again"
      }
    },
    vsl: {
      templates: "Templates",
      pages: "VSL Pages",
      tracking: "Tracking",
      pagesPage: {
        subtitle: "Manage your created Video Sales Letter pages.",
        createNew: "Create New VSL Page",
        template: "Template",
        views: "Views",
        conversionRate: "Conv. Rate",
        lastUpdated: "Last Updated",
        manageSubpages: "Manage Content",
        previewLive: "Preview Live Page",
        edit: "Edit",
        delete: "Delete",
        status: {
          draft: "Draft",
          published: "Published",
          archived: "Archived"
        },
        error: {
          title: "Error Loading VSL Pages",
          fetchFailed: "Failed to fetch VSL pages: {{statusText}}",
          unknown: "An unknown error occurred while fetching VSL pages."
        },
        noVSLPages: {
          title: "No VSL Pages Found",
          description: "Get started by creating a new VSL page from a template."
        },
        tryAgain: "Try Again"
      }
    },
    leadResponse: {
      rules: "Rules",
      queue: "Queue",
      analytics: "Analytics",
      mainPage: {
        title: "Lead Response Management",
        subtitle: "Configure rules, monitor the queue, and analyze lead processing performance.",
        stats: {
          rules: "Active Rules",
          inQueue: "Leads in Queue",
          processedToday: "Processed Today"
        },
        recentActivity: {
          title: "Recent Activity"
        },
        error: {
          title: "Error Loading Overview",
          fetchFailed: "Failed to fetch lead response overview: {{statusText}}",
          unknown: "An unknown error occurred."
        },
        tryAgain: "Try Again"
      },
      example: {
        title: "Usage Example: Instant Lead Follow-up",
        description: "Illustrates how lead response rules can automate initial contact.",
        scenarioTitle: "Scenario",
        scenario: "A new lead submits a 'Request Demo' form on your website.",
        triggerTitle: "Trigger",
        trigger: "Lead source is 'Website Demo Request' AND lead score is > 70.",
        actionTitle: "Automated Action",
        action: "1. Assign lead to 'Tier 1 Sales Reps'. 2. Send 'Welcome & Demo Scheduling' email template. 3. Create a follow-up task in CRM for 2 days.",
        outcomeTitle: "Outcome",
        outcome: "Lead receives an email within seconds, and the sales team is notified for prompt follow-up, improving conversion speed."
      },
      rulesDescription: "Define and manage automated rules for lead processing and routing.",
      queueDescription: "Monitor and manage leads currently being processed or awaiting action.",
      analyticsDescription: "Track performance metrics for your lead response system.",
      rulesPage: {
        title: "Lead Response Rules",
        subtitle: "Define, manage, and monitor your automated lead processing rules.",
        createNewRule: "Create New Rule",
        tableTitle: "Configured Rules",
        tableDescription: "List of all lead response rules with their status and actions.",
        tableHeaders: {
          name: "Rule Name",
          trigger: "Trigger Condition",
          actions: "Automated Actions",
          status: "Status",
          lastModified: "Last Modified"
        },
        status: {
          active: "Active",
          inactive: "Inactive"
        },
        confirmDelete: "Are you sure you want to delete this rule?",
        noRules: "No rules configured yet. Get started by creating one.",
        createRuleTitle: "Create New Lead Response Rule",
        createRuleDescription: "Define the trigger and actions for your new automated rule.",
        editRuleTitle: "Edit Lead Response Rule",
        editRuleDescription: "Modify the trigger, actions, or status of this rule.",
        form: {
          nameLabel: "Rule Name",
          namePlaceholder: "e.g., High-Intent Website Lead",
          triggerLabel: "Trigger Condition",
          triggerPlaceholder: "Describe when this rule should activate (e.g., 'New contact from website form AND country is USA')",
          actionsLabel: "Actions",
          actionPlaceholder: "Describe an action",
          addAction: "Add Action",
          statusLabel: "Status",
          statusPlaceholder: "Select rule status",
          priorityLabel: "Priority",
          priorityPlaceholder: "Enter a number (e.g., 1 for highest)"
        },
        error: {
          fetchFailed: "Failed to load lead response rules.",
          formSubmitFailed: "Failed to save the rule. Please check your input.",
          deleteFailed: "Failed to delete the rule.",
          statusUpdateFailed: "Failed to update rule status.",
          unknown: "An unexpected error occurred."
        }
      },
      queuePage: {
        title: "Lead Response Queue",
        subtitle: "Monitor and manage leads currently being processed by automated rules.",
        tableTitle: "Current Queue",
        tableDescription: "Leads awaiting action or currently in process.",
        tableHeaders: {
          leadId: "Lead",
          ruleTriggered: "Rule Triggered",
          status: "Status",
          queuedAt: "Queued At",
          lastAttempt: "Last Attempt",
          errorMessage: "Error Message"
        },
        status: {
          pending: "Pending",
          processing: "Processing",
          failed: "Failed",
          completed: "Completed",
          retrying: "Retrying",
          cancelled: "Cancelled"
        },
        actions: {
          retry: "Retry",
          cancel: "Cancel"
        },
        noItems: "The lead response queue is currently empty.",
        error: {
          fetchFailed: "Failed to load queue items.",
          actionFailed: "Failed to perform action on queue item.",
          unknown: "An unexpected error occurred."
        }
      },
      analyticsPage: {
        title: "Lead Response Analytics",
        subtitle: "Gain insights into the performance and efficiency of your lead response system.",
        summary: {
          totalProcessed: "Total Leads Processed",
          avgResponseTime: "Average Response Time",
          successRate: "Success Rate",
          failureRate: "Failure Rate"
        },
        charts: {
          leadsProcessedTitle: "Leads Processed Over Time",
          leadsProcessedLabel: "Leads Processed",
          responseTimeTitle: "Response Time Trends",
          avgResponseTimeLabel: "Avg. Response Time"
        },
        table: {
          title: "Rule Performance",
          description: "Effectiveness and efficiency of individual lead response rules.",
          headers: {
            ruleName: "Rule Name",
            processed: "Processed",
            successRate: "Success Rate",
            avgTime: "Avg. Time"
          }
        },
        error: {
          title: "Error Loading Analytics",
          fetchFailed: "Failed to load lead response analytics data.",
          unknown: "An unknown error occurred."
        },
        noData: {
            title: "No Analytics Data",
            description: "Analytics data for lead response is not yet available."
        }
      }
    },
    analytics: {
      performance: "Performance",
      conversion: "Conversion",
      revenue: "Revenue",
      navigation: {
        performance: {
          title: "Performance Analytics",
          description: "Dive into traffic, engagement, and user behavior metrics."
        },
        conversion: {
          title: "Conversion Analytics",
          description: "Track funnel performance and identify drop-off points."
        },
        revenue: {
          title: "Revenue Analytics",
          description: "Analyze sales trends, LTV, and revenue by source."
        }
      },
      conversionPage: {
        loadingSubtitle: "Analyzing conversion funnels...",
        errorSubtitle: "Error",
        errorCardTitle: "Could not load conversion data",
        noDataSubtitle: "No data available",
        noDataText: "No conversion data available for the selected filters.",
        mainSubtitle: "Understand how users convert through key funnels."
      },
      filters: {
        timePeriodLabel: "Time Period:",
        periods: {
          last7days: "Last 7 Days",
          last30days: "Last 30 Days",
          last3months: "Last 3 Months",
          last12months: "Last 12 Months"
        },
        funnelLabel: "Funnel:",
        funnels: {
          all: "All Funnels (Overall)",
          onboarding: "Onboarding Funnel",
          salesQ4: "Sales Funnel Q4"
        },
        breakdownByLabel: "Breakdown By:",
        breakdownOptions: {
          product: "Product/Service",
          segment: "Customer Segment",
          region: "Region"
        }
      },
      conversionStats: {
        overallRate: "Overall Conv. Rate",
        totalConversions: "Total Conversions",
        topFunnel: "Top Converting Funnel",
        avgCostPerConversion: "Avg. Cost / Conversion"
      },
      conversionFunnelBreakdown: {
        title: "Funnel Breakdown ({funnelName})",
        overall: "Overall"
      },
      conversionFunnelStage: {
        visitors: "Visitors: {count}",
        convFromPrev: "Conv. from prev: {rate}%",
        entryPoint: "Entry Point",
        dropOff: "Drop-off: {rate}%"
      },
      conversionSourceTable: {
        title: "Conversions by Source",
        header: {
          source: "Source",
          conversions: "Conversions",
          conversionRate: "Conversion Rate (%)"
        }
      },
      performancePage: {
        loadingSubtitle: "Crunching the numbers...",
        errorCardTitle: "Could not load performance data",
        noDataSubtitle: "No data",
        noDataText: "No performance data available.",
        mainSubtitle: "Track user engagement and website traffic metrics."
      },
      performanceStats: {
        totalVisits: "Total Visits",
        uniqueVisitors: "Unique Visitors",
        avgSession: "Avg. Session",
        bounceRate: "Bounce Rate",
        pagesPerVisit: "Pages / Visit",
        topReferrer: "Top Referrer"
      },
      performanceActivityOverTime: {
        title: "User Activity Over Time"
      },
      performanceTopPages: {
        title: "Top Performing Pages",
        header: {
          pagePath: "Page Path",
          views: "Views"
        }
      },
      revenuePage: {
        loadingSubtitle: "Calculating revenue streams...",
        errorCardTitle: "Could not load revenue data",
        noDataText: "No revenue data available for the selected filters.",
        mainSubtitle: "Gain insights into your revenue streams and financial performance."
      },
      revenueStats: {
        totalRevenue: "Total Revenue",
        arpu: "ARPU",
        mrr: "MRR",
        ltv: "LTV"
      },
      revenueTrends: {
        title: "Revenue Trends Over Time",
        tooltip: "Date: {date}, Revenue: ${amount}",
        noData: "No revenue trend data for this period."
      },
      revenueBreakdown: {
        title: "Revenue Breakdown by {breakdownType}",
        header: {
          name: "{breakdownType} Name",
          revenue: "Revenue",
          percentOfTotal: "% of Total"
        },
        noData: "No breakdown data available."
      }
    },
    admin: {
      title: "Administration",
      description: "Manage system settings, users, and compliance",
      teamManagement: "Team Management",
      billing: "Billing & Usage",
      antiSpam: "Anti-Spam Settings",
      compliance: "Compliance",
      systemHealth: "System Health",
      recentActivity: "Recent Activity",
      users: "Users",
      roles: "Roles",
      permissions: "Permissions",
      security: {
        title: "Security Settings",
        activeSessions: "Active Sessions",
        manageActiveSessions: "Manage your active sessions",
        recentEvents: "Recent Events",
        securityEventLog: "Security Event Log"
      },
      page: {
        description: "Central hub for managing your organization's settings, users, and security.",
        buttons: {
          globalSettings: "Global Settings",
          manageDetailedSections: "Manage Detailed Sections",
          viewAuditLog: "View Full Audit Log"
        },
        tabs: {
          users: "Users",
          security: "Security",
          billing: "Billing"
        },
        userManagement: {
          title: "User Management",
          description: "The user management interface, including tables, invites, and role assignments, will be displayed here."
        },
        securityConfig: {
          title: "Security Configuration",
          description: "Settings for Single Sign-On (SSO), 2-Factor Authentication (2FA), and API key management will be displayed here."
        },
        billingSubscriptions: {
          title: "Billing & Subscriptions",
          description: "Your current plan, usage metrics, payment history, and invoices will be displayed here."
        },
        stats: {
          totalUsers: "Total Users",
          usersThisMonth: "+{count} this month",
          monthlyUsage: "Monthly Usage",
          budgetUtilized: "{percent}% of budget utilized",
          complianceScore: "Compliance Score",
          complianceStatus: "Fully GDPR & CCPA compliant",
          systemHealth: "System Health",
          uptime: "Uptime last 30 days"
        },
        controlPanel: {
          title: "Admin Control Panel",
          description: "Select a category to configure its settings."
        },
        recentActivity: {
          title: "Recent Activity",
          systemUser: "System",
          actions: {
            updatedPermissions: "updated permissions for '{userName}'.",
            securityScanCompleted: "completed its daily security scan.",
            updatedBillingAddress: "updated the company billing address.",
            highRiskLogin: "detected a high-risk login attempt."
          }
        },
        time: {
          minutesAgo: "{count}m ago",
          hourAgo: "{count}h ago",
          yesterday: "Yesterday"
        },
        systemStatus: {
          title: "System Status",
          description: "Real-time system health and performance metrics."
        },
        metrics: {
          apiResponse: "API Response",
          cpuUsage: "CPU Usage",
          memoryUsage: "Memory Usage",
          errorRate: "Error Rate"
        }
      },
      sections: {
        teamManagement: {
          description: "Manage users, roles, and permissions."
        },
        billing: {
          description: "Monitor usage and manage billing."
        },
        security: {
          description: "Configure 2FA, SSO, and policies."
        },
        compliance: {
          description: "GDPR, data retention, and privacy."
        }
      },
      antiSpamPage: {
        description: "Configure spam protection and compliance settings",
        statusCard: {
          title: "Spam Protection Status",
          description: "Real-time spam detection and filtering metrics"
        },
        metrics: {
          detectionRate: "Spam Detection Rate",
          falsePositives: "False Positives",
          blockedMessages: "Blocked Messages",
          quarantined: "Quarantined"
        },
        filterConfig: {
          title: "Spam Filter Configuration",
          description: "Adjust spam detection sensitivity and rules",
          enableDetection: {
            label: "Enable Spam Detection",
            description: "Automatically detect and filter spam messages"
          },
          autoQuarantine: {
            label: "Auto-Quarantine Suspicious Messages",
            description: "Automatically quarantine messages with high spam scores"
          },
          senderReputation: {
            label: "Sender Reputation Checking",
            description: "Check sender reputation against known spam databases"
          },
          spamScoreThreshold: {
            label: "Spam Score Threshold",
            description: "Messages with scores above this threshold will be marked as spam (1-10 scale)"
          }
        },
        whitelist: {
          title: "Whitelist",
          description: "Trusted senders and domains",
          placeholder: "Enter email addresses or domains (one per line)\nexample@company.com\n@trusteddomain.com",
          button: "Update Whitelist"
        },
        blacklist: {
          title: "Blacklist",
          description: "Blocked senders and domains",
          placeholder: "Enter email addresses or domains to block (one per line)\nspam@example.com\n@spammydomain.com",
          button: "Update Blacklist"
        },
        compliance: {
          title: "Compliance Settings",
          description: "Configure compliance and regulatory requirements",
          gdpr: {
            label: "GDPR Compliance Mode",
            description: "Enable additional privacy protections for EU recipients"
          },
          canSpam: {
            label: "CAN-SPAM Act Compliance",
            description: "Ensure all messages comply with CAN-SPAM requirements"
          },
          unsubscribeLinks: {
            label: "Automatic Unsubscribe Links",
            description: "Automatically add unsubscribe links to all marketing emails"
          }
        }
      },
      billingPage: {
        description: "Manage your billing information and subscription.",
        buttons: {
          updatePayment: "Update Payment Method"
        },
        overview: {
          stats: {
            currentPlan: "Current Plan",
            nextInvoice: "Next Invoice",
            invoiceDue: "Due in {days} days",
            usage: "Usage",
            usageOfQuota: "Of monthly quota"
          },
          title: "Billing Overview",
          description: "Your current billing status and recent transactions"
        },
        invoices: {
          title: "Invoices",
          description: "View and manage your billing history"
        },
        usage: {
          title: "Usage Analytics",
          description: "Detailed breakdown of your service usage"
        },
        plans: {
          title: "Available Plans",
          description: "Compare and switch between different subscription plans"
        }
      },
      securityPage: {
        stats: {
          activeThreats: "Active Threats",
          requiresImmediateAttention: "Requires immediate attention",
          twoFactorStatus: "2FA Status",
          users2FAEnabled: "Users with 2FA enabled",
          securityScore: "Security Score",
          overallRating: "Overall security rating"
        }
      },
      teamPage: {
        buttons: {
          inviteMember: "Invite Member"
        },
        overview: {
          stats: {
            totalMembers: "Total Members",
            activeTeamMembers: "Active team members",
            pendingInvites: "Pending Invites",
            awaitingResponse: "Awaiting response",
            activeRoles: "Active Roles",
            customRolesDefined: "Custom roles defined"
          },
          title: "Team Overview",
          description: "Manage your team members and their roles"
        },
        members: {
          title: "Team Members",
          description: "View and manage team members"
        },
        roles: {
          title: "Team Roles",
          description: "Manage team roles and responsibilities"
        },
        permissions: {
          title: "Permissions",
          description: "Configure access permissions for roles"
        }
      },
      usersPage: {
        description: "Manage your team members and their roles.",
        buttons: {
          inviteUser: "Invite User"
        },
        overview: {
          stats: {
            activeMembers: "Active members",
            newUsers: "New Users",
            thisMonth: "This month"
          },
          title: "Users Overview",
          description: "Manage your team members and their roles"
        },
        usersList: {
          description: "View and manage all users"
        },
        invites: {
          title: "Pending Invites",
          description: "Manage user invitations"
        }
      }
    },
    form: {
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      reset: "Reset",
      required: "Required",
      optional: "Optional",
      loading: "Loading...",
      saving: "Saving...",
      saved: "Saved successfully",
      error: "An error occurred"
    },
    pagination: {
      showing: "Showing",
      to: "to",
      of: "of",
      results: "results",
      rowsPerPage: "Rows per page:",
      page: "Page",
      goToPage: "Go to page"
    },
    common: {
      previous: "Previous",
      next: "Next",
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      actions: "Actions",
      yes: "Yes",
      no: "No",
      confirm: "Confirm",
      close: "Close",
      open: "Open",
      new: "New",
      create: "Create",
      update: "Update",
      refresh: "Refresh",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      export: "Export",
      import: "Import",
      all: "All",
      description: "Description",
      date: "Date",
      minutesShort: "min",
      minutesAbbr: "min",
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      insertTag: "Insert Personalization Tag",
      insertLink: "Insert Link",
      bulletList: "Bulleted List",
      tryAgain: "Try Again",
      notAvailableShort: "N/A",
      none: "None", // Added
      notAssigned: "Not Assigned" // Added
    },
    status: {
      active: "Active",
      inactive: "Inactive",
      pending: "Pending",
      completed: "Completed",
      failed: "Failed",
      running: "Running",
      scheduled: "Scheduled",
      draft: "Draft",
      sent: "Sent",
      delivered: "Delivered",
      opened: "Opened",
      clicked: "Clicked",
      bounced: "Bounced",
      generated: "Generated",
      responded: "Responded"
    },
    error: {
      general: "An error occurred",
      notFound: "Not found",
      unauthorized: "Unauthorized",
      forbidden: "Forbidden",
      serverError: "Server error",
      networkError: "Network error",
      contactSupport: "Contact support if the problem persists"
    },
    success: {
      saved: "Saved successfully",
      created: "Created successfully",
      updated: "Updated successfully",
      deleted: "Deleted successfully",
      sent: "Sent successfully",
      imported: "Imported successfully",
      exported: "Exported successfully"
    },
    ai: {
      title: "AI Assistant",
      welcome: "Hi! I'm your AI assistant. I can help you find companies, create scrapers, or analyze market data. What would you like to do?",
      openAssistant: "Open AI Assistant",
      close: "Close",
      placeholder: "Ask me anything...",
      quickSuggestions: "Quick suggestions",
      response: "I understand you want to {{query}}. Let me help you with that...",
      suggestions: {
        findCompanies: "Find tech companies in Switzerland",
        createScraper: "Create a LinkedIn scraper",
        analyzeMarket: "Analyze market trends",
        leadStrategy: "Suggest lead generation strategy"
      }
    },
    statisticsPages: {
      collectionTrends: {
        pageTitle: "Data Collection Trends",
        pageSubtitle: "Analyze trends in data acquisition over time.",
        newRecordsThisPeriod: "New Records This Period"
      },
      geographicDistribution: {
        pageTitle: "Geographic Distribution",
        pageSubtitle: "View the geographic spread of your data collection."
      },
      sectorDistribution: {
        pageTitle: "Sector Distribution",
        pageSubtitle: "Analyze the distribution of data across different sectors."
      },
      sourceComparison: {
        pageTitle: "Data Source Comparison",
        pageSubtitle: "Evaluate and compare the performance of your different data sources.",
        totalDataSources: "Total Data Sources",
        highestVolumeSource: "Highest Volume Source",
        bestQualitySource: "Best Quality Source",
        compareBy: "Compare by:",
        allMetrics: "All Metrics",
        dataVolume: "Data Volume",
        qualityScore: "Quality Score",
        coveragePercentage: "Coverage Percentage",
        sourcePerformanceMetrics: "Source Performance Metrics",
        detailedSourceMetrics: "Detailed Source Metrics",
        sourceName: "Source Name",
        updateFrequency: "Update Frequency"
      },
      commonFilters: {
        apply: "Apply"
      }
    },
    analyticsPages: {
      overview: {
        pageTitle: "Analytics Overview",
        pageSubtitle: "Explore key metrics and insights across your application.",
        overallKeyMetric: "Overall Key Metric"
      }
    }
  },
  fr: {
    nav: {
      dashboard: "Tableau de bord",
      search: "Recherche",
      companies: "Entreprises",
      communications: "Communications",
      marketIntel: "Intelligence marché",
      scrapers: "Scrapeurs",
      statistics: "Statistiques",
      statisticsOverview: "Vue d'ensemble des statistiques",
      statisticsCollectionTrends: "Tendances de collecte",
      statisticsGeographicDistribution: "Distribution géographique",
      statisticsSectorDistribution: "Distribution par secteur",
      statisticsSourceComparison: "Comparaison des sources",
      scrapersOverview: "Vue d'ensemble des scrapeurs",
      newScraper: "Nouveau scrapeur",
      runScraper: "Exécuter le scrapeur",
      scheduleJob: "Planifier une tâche",
      settings: "Paramètres",
      admin: "Administration",
      financial: "Financier",
      reengagement: "Réengagement",
      referrals: "Parrainages",
      reviews: "Avis",
      funnels: "Entonnoirs",
      gapAnalysis: "Analyse des écarts",
      vsl: "Pages VSL",
      leadResponse: "Réponse aux leads",
      analytics: "Analytique",
      overview: "Vue d'ensemble",
      secondary: {
        addCompany: "Ajouter une entreprise",
        importCompanies: "Importer des entreprises",
        exportData: "Exporter les données",
        newMessage: "Nouveau message",
        newCampaign: "Nouvelle campagne",
        templates: "Modèles",
        newScraper: "Nouveau scrapeur",
        runScraper: "Exécuter le scrapeur",
        scheduleJob: "Planifier une tâche"
      }
    },
    comms: {
      title: "Communications",
      campaigns: "Campagnes",
      templates: "Modèles",
      bulkSender: "Envoi en masse",
      newMessage: "Nouveau message",
      newCampaign: "Nouvelle campagne",
      channel: "Canal",
      subject: "Sujet",
      content: "Contenu",
      recipient: "Destinataire",
      status: "Statut",
      sentAt: "Envoyé le",
      deliveredAt: "Livré le",
      openedAt: "Ouvert le",
      clickedAt: "Cliqué le",
      pageDescription: "Gérez vos communications et suivez l'engagement.",
      buttons: {
        newCommunication: "Nouvelle Communication"
      },
      stats: {
        total: "Total",
        replied: "Répondu"
      },
      tabs: {
        allCommunications: "Toutes les Communications"
      },
      loading: "Chargement des communications...",
      campaignsPageDescription: "Gérez vos campagnes de communication et suivez leurs performances.",
      campaignsTabs: {
        allCampaigns: "Toutes les Campagnes"
      },
      templatesPageDescription: "Gérez vos modèles de communication pour différents canaux.",
      templatesButtons: {
        newTemplate: "Nouveau Modèle"
      },
      templatesModifiedDatePrefix: "Modifié le",
      bulkSenderPageTitle: "Centre de Messagerie en Masse",
      bulkSenderPageDescription: "Envoyez des communications personnalisées à grande échelle avec une délivrabilité de niveau entreprise",
      bulkSenderMonthlyLimit: "Limite Mensuelle",
      bulkSenderStats: {
        emailCampaigns: "Campagnes E-mail",
        messagesSent: "Messages Envoyés",
        avgOpenRate: "Taux d'Ouverture Moyen",
        avgClickRate: "Taux de Clic Moyen"
      },
      bulkSenderTabs: {
        email: "Campagne E-mail",
        linkedin: "Prospection LinkedIn",
        sms: "Campagne SMS"
      },
      bulkSenderEmail: {
        content: {
          title: "Contenu du Message",
          description: "Rédigez votre message ou sélectionnez parmi les modèles"
        },
        subject: {
          label: "Ligne d'Objet",
          placeholder: "Entrez l'objet de votre e-mail"
        },
        template: {
          label: "Modèle",
          placeholder: "Sélectionnez un modèle"
        },
        templateOptions: {
          none: "Aucun modèle",
          intro: "Séquence d'Introduction",
          followUp: "Série de Suivi",
          newsletter: "Newsletter Mensuelle",
          event: "Invitation à un Événement",
          promo: "Promotion de Produit"
        },
        messageContent: {
          label: "Contenu du Message",
          saveAsTemplate: "Enregistrer comme Modèle",
          placeholder: "Rédigez votre message ici..."
        },
        personalizationInfo: "Tags de personnalisation détectés : {tags}. Assurez-vous que le CSV contienne ces colonnes.",
        enablePersonalization: "Activer la personnalisation du destinataire",
        delivery: {
          title: "Stratégie de Livraison",
          description: "Optimisez votre stratégie d'envoi pour une délivrabilité maximale",
          timingLabel: "Calendrier de Livraison",
          timingPlaceholder: "Sélectionnez la stratégie d'envoi",
          options: {
            now: "Envoyer immédiatement",
            schedule: "Planifier pour plus tard",
            optimal: "Heure optimale par destinataire",
            drip: "Campagne goutte-à-goutte"
          },
          rateLabel: "Vitesse d'Envoi",
          ratePlaceholder: "Messages par heure",
          rateOptions: {
            10: "10 messages/heure",
            25: "25 messages/heure",
            50: "50 messages/heure (recommandé)",
            100: "100 messages/heure",
            250: "250 messages/heure"
          }
        },
        tracking: {
          opens: "Suivre les ouvertures de message",
          clicks: "Suivre les clics sur les liens",
          unsubscribe: "Inclure le lien de désinscription",
          retry: "Réessayer automatiquement les envois échoués"
        }
      },
      bulkSenderAudience: {
        title: "Sélection de l'Audience",
        description: "Définissez qui recevra cette campagne",
        importLabel: "Importer les Destinataires",
        buttons: {
          upload: "Télécharger CSV/Excel",
          fromCRM: "Sélectionner depuis le CRM",
          pasteList: "Coller la Liste d'E-mails"
        },
        summary: {
          title: "Résumé des Destinataires",
          validEmails: "E-mails valides",
          invalidEmails: "E-mails invalides",
          unsubscribed: "Désinscrits",
          duplicates: "Doublons",
          noRecipients: "Aucun destinataire sélectionné pour le moment"
        }
      },
      bulkSenderDeliverability: {
        title: "Assurance de Délivrabilité",
        description: "Assurer la conformité avec les réglementations",
        spamScoreLabel: "Score de Risque de Spam",
        spamScore: {
          low: "Faible ({score}/10)"
        },
        complianceLabel: "Conformité Réglementaire",
        complianceStatus: {
          passed: "Conforme"
        },
        checks: {
          unsubscribe: "Mécanisme de désinscription détecté",
          address: "Adresse physique incluse",
          canSpam: "Exigences CAN-SPAM satisfaites",
          gdpr: "Langage conforme au RGPD détecté"
        },
        senderInfoLabel: "Informations de l'Expéditeur"
      },
      bulkSenderLinkedin: {
        content: {
          title: "Message de Prospection LinkedIn",
          description: "Rédigez votre demande de connexion et message de suivi pour LinkedIn."
        },
        connectionRequest: {
          label: "Message de Demande de Connexion (Optionnel)",
          placeholder: "ex: Bonjour {{firstName}}, j'ai découvert votre profil et j'ai été impressionné par votre travail chez {{companyName}}...",
          charCount: "{count} / 300 caractères",
          helpText: "Soyez bref et personnalisé. Max 300 caractères pour les demandes de connexion."
        },
        mainMessage: {
          label: "Message LinkedIn Principal",
          placeholder: "ex: Merci pour la connexion, {{firstName}}! J'aimerais discuter de la manière dont nos solutions pourraient aider {{companyName}} avec...",
          charCount: "{count} / 2000 caractères"
        },
        availableTags: {
          title: "Tags LinkedIn disponibles :"
        },
        preview: {
          title: "Zone d'Aperçu du Message LinkedIn",
          placeholder: "L'aperçu apparaîtra ici."
        }
      },
      bulkSenderSms: {
        content: {
          title: "Contenu de la Campagne SMS",
          description: "Rédigez votre message SMS. Soyez concis et engageant."
        },
        message: {
          label: "Message SMS",
          placeholder: "Salut {{firstName}}, petite mise à jour de SIKRY...",
          charCountLabel: "Caractères :",
          segmentInfo: "({count} segment SMS)"
        },
        availableTags: {
          title: "Tags SMS disponibles :"
        },
        optOutTip: "Astuce : Incluez des informations de désinscription comme 'Répondre STOP pour arrêter' si légalement requis.",
        preview: {
          title: "Aperçu SMS",
          stopMessage: "STOP"
        }
      },
      bulkSenderFooter: {
        readyToSend: "Prêt à envoyer à",
        recipientsSuffix: "destinataires",
        buttons: {
          saveDraft: "Enregistrer Brouillon",
          sendCampaign: "Envoyer Campagne"
        }
      }
    },
    companies: {
      title: "Entreprises",
      addNew: "Ajouter une nouvelle entreprise",
      import: "Importer des entreprises",
      export: "Exporter des entreprises",
      name: "Nom de l'entreprise",
      domain: "Domaine",
      industry: "Industrie",
      location: "Localisation",
      size: "Taille de l'entreprise",
      confidence: "Confiance",
      lastContacted: "Dernier contact",
      status: "Statut",
      verified: "Vérifié",
      description: "Description",
      website: "Site web",
      phone: "Téléphone",
      email: "Email",
      employees: "Employés",
      card: {
        employees: "employés",
        extractedData: "Données extraites",
        lastUpdated: "Dernière mise à jour",
        viewDetails: "Voir les détails",
        more: "plus",
        confidence: {
          high: "Confiance élevée",
          medium: "Confiance moyenne",
          low: "Confiance faible"
        }
      },
      details: {
        loading: "Chargement des détails de l'entreprise...",
        notFound: {
          title: "Entreprise Non Trouvée",
          description: "L'entreprise que vous recherchez n'existe pas."
        },
        tabs: {
          overview: "Aperçu",
          engagement: "Engagement",
          insights: "Statistiques",
          configuration: "Configuration"
        },
        overview: {
          extractedData: {
            title: "Données Extraites",
            description: "Informations détectées automatiquement avec scores de confiance"
          },
          emailAddresses: {
            title: "Adresses E-mail"
          },
          phoneNumbers: {
            title: "Numéros de Téléphone"
          },
          technologies: {
            title: "Technologies"
          },
          dataQualityMetrics: {
            title: "Métrique de Qualité des Données",
            description: "Performance historique de l'extraction de données"
          },
          metrics: {
            overallConfidence: "Confiance Globale",
            dataCompleteness: "Complétude des Données",
            sourceReliability: "Fiabilité des Sources"
          },
          scrapingHistory: {
            title: "Historique de Scraping",
            fieldsFound: "{{count}} champs"
          }
        },
        insights: {
          title: "Statistiques Générées par IA",
          description: "Analyse intelligente des données de l'entreprise et de sa position sur le marché",
          comingSoon: {
            title: "Statistiques IA Bientôt Disponibles",
            description: "L'intelligence de marché avancée et l'analyse concurrentielle seront disponibles dans la prochaine mise à jour."
          }
        },
        config: {
          title: "Configuration du Scraping",
          description: "Personnaliser les paramètres d'extraction de données et la détection des champs",
          autoDetection: {
            title: "Paramètres de Détection Automatique",
            email: "Détection d'E-mail",
            phone: "Détection de Téléphone",
            techStack: "Détection de Pile Technologique",
            socialMedia: "Détection de Médias Sociaux"
          },
          status: {
            enabled: "Activé",
            disabled: "Désactivé"
          },
          confidenceThresholds: {
            title: "Seuils de Confiance",
            minScore: "Score de Confiance Minimum"
          },
          buttons: {
            save: "Enregistrer la Configuration",
            reset: "Réinitialiser aux Valeurs par Défaut"
          }
        }
      },
      actions: {
        backToList: "Retour à la liste des entreprises"
      }
    },
    search: {
      title: "Rechercher des entreprises",
      placeholder: "Rechercher des entreprises, contacts, ou données marché...",
      recentSearches: "Recherches récentes",
      suggestions: {
        title: "Suggestions",
        quick: "Suggestions rapides",
        recent: "Recherches récentes",
        examples: {
          marketing: "Agences de marketing à Genève utilisant HubSpot",
          compare: "Comparer les entreprises SaaS avec un financement de série A",
          analyze: "Analyser les startups tech utilisant React avec >50 employés",
          filter: "Filtrer les entreprises Fintech en Suisse par revenu"
        }
      },
      refine: "Affinez votre recherche...",
      searching: "Recherche en cours...",
      searchingMultiple: "Recherche dans plusieurs sources...",
      results: "{{count}} résultats trouvés pour '{{query}}'",
      all: "toutes les entreprises",
      export: "Exporter les résultats",
      noResults: "Aucun résultat trouvé",
      tryAdjusting: "Essayez d'ajuster vos filtres ou termes de recherche",
      confidence: "Confiance",
      card: {
        employeesLabel: "{{count}} Employés",
        extractedDataTitle: "DONNÉES EXTRAITES",
        emailCount: "{{count}} Email(s)",
        phoneCount: "{{count}} Téléphone(s)"
      },
      mainTitle: "Recherche d'Entreprises",
      status: {
        searchingCompanies: "Recherche d'entreprises en cours...",
        resultsFound: "{{count}} résultats trouvés.",
        errorMessage: "Erreur : {{error}}",
        searchingWeb: "Recherche sur le Web en Cours...",
        searchingWebSubtitle: "Veuillez patienter pendant que nous collectons et enrichissons les résultats.",
        noResultsTitle: "Aucun Résultat Trouvé",
        noResultsSubtitle: "Essayez d'ajuster vos filtres ou termes de recherche pour une meilleure correspondance."
      },
      buttons: {
        exportResults: "Exporter les Résultats"
      },
      filters: {
        label: "Filtres",
        dataSources: "Sources de données",
        industry: "Industrie",
        allIndustries: "Toutes les industries",
        softwareDev: "Développement logiciel",
        marketing: "Marketing & Publicité",
        fintech: "Technologie financière",
        location: "Localisation",
        enterLocation: "Entrer la localisation...",
        companySize: "Taille de l'entreprise",
        allSizes: "Toutes les tailles",
        employees: "Employés",
        minConfidence: "Confiance minimum",
        anyScore: "Tous les scores",
        clear: "Effacer les Filtres",
        searchPlaceholder: "Rechercher par nom d'entreprise, domaine, ou industrie...",
        sourcesLabel: "Sources :",
        advancedFiltersTitle: "Filtres Avancés",
        industryLabel: "Industrie",
        locationLabel: "Localisation",
        locationPlaceholder: "ex: Genève, Suisse",
        minConfidenceLabel: "Confiance Minimum"
      },
      sorting: {
        relevance: "Trier par Pertinence",
        confidence: "Trier par Confiance",
        newest: "Trier par Plus Récent"
      },
      dataSources: {
        title: "Sources de données",
        internal: "Base de données interne",
        wikidata: "Wikidata",
        opencorporates: "OpenCorporates",
        businessRegistries: "Registres du commerce"
      },
      viewModes: {
        grid: "Vue grille",
        list: "Vue liste",
        map: "Vue carte",
        mapPlaceholder: "Espace Réservé Vue Carte"
      },
      smartBar: {
        placeholder: "Rechercher des entreprises ou des sujets...",
        searchButton: "Rechercher",
        sourceGoogle: "Google",
        sourceLinkedIn: "LinkedIn",
        sourceCrunchbase: "Crunchbase"
      },
      queryExamples: {
        title: "Exemples de Requêtes",
        categories: {
          industrySpecific: "Spécifique à l'Industrie",
          technologyStack: "Pile Technologique",
          businessCriteria: "Critères Commerciaux"
        },
        queries: {
          industrySpecific: [
            "Agences de marketing à Genève avec 10-50 employés",
            "Entreprises SaaS avec financement de série A en Europe",
            "Startups Fintech en Suisse fondées après 2020",
            "Plateformes e-commerce utilisant Shopify avec 100+ employés"
          ],
          technologyStack: [
            "Entreprises utilisant React et TypeScript dans leur pile technologique",
            "Startups construites sur AWS avec backend Node.js",
            "Entreprises utilisant Salesforce CRM et HubSpot",
            "Entreprises avec des capacités Python et machine learning"
          ],
          businessCriteria: [
            "Entreprises B2B avec culture remote-first",
            "Cabinets de conseil avec clients internationaux",
            "Entreprises recrutant des ingénieurs logiciels à Zurich",
            "Entreprises axées sur la durabilité et reporting ESG"
          ]
        }
      }
    },
    scrapers: {
      title: "Scrapeurs",
      run: "Lancer Scraper"
    },
    dashboard: {
      title: "Tableau de bord",
      welcome: "Bon retour",
      overview: "Aperçu",
      totalCompanies: "Total entreprises",
      totalCommunications: "Total communications",
      activeScrapers: "Scrapeurs actifs",
      recentActivity: "Activité récente",
      quickActions: "Actions rapides",
      insights: "Statistiques",
      performance: "Performance",
      insightsText: {
        verifiedCompanies: "Entreprises Vérifiées",
        deliveryRate: "Taux de Livraison",
        activeScrapersLabel: "Scrapeurs Actifs"
      }
    },
    marketIntel: {
      title: "Intelligence Marché"
    },
    financial: {
      dashboard: "Tableau de bord financier",
      dashboardDescription: "Aperçu de vos données financières",
      addRecord: "Ajouter un enregistrement",
      records: "Enregistrements",
      summary: "Résumé",
      campaignRoi: "ROI de la campagne",
      campaignROI: "ROI de la campagne",
      campaign: "Campagne",
      revenue: "Revenu",
      cost: "Coût",
      costs: "Coûts",
      expense: "Dépense",
      refund: "Remboursement",
      currency: "Devise",
      type: "Type",
      source: "Source",
      amount: "Montant",
      category: "Catégorie",
      netProfit: "Bénéfice Net",
      roi: "ROI",
      searchPlaceholder: "Rechercher des transactions financières...",
      sourceType: "Type de Source",
      sourceTypes: {
        campaign: "Campagne",
        contact: "Contact",
        scraper: "Scraper",
        subscription: "Abonnement",
        manual: "Manuel"
      },
      types: {
        income: "Revenu",
        expense: "Dépense"
      },
      campaignRoiPage: {
        title: "Analyse du ROI des Campagnes",
        description: "Évaluez la performance de vos campagnes marketing."
      },
      campaignRoiStats: {
        overallRoi: "ROI Global des Campagnes",
        vsLastPeriod: "{change} vs période précédente",
        topCampaign: "Meilleure Campagne",
        roiPrefix: "ROI :",
        totalCampaignsTracked: "Total Campagnes Suivies"
      },
      campaignRoiFilters: {
        title: "Filtres",
        startDatePlaceholder: "Date de Début",
        endDatePlaceholder: "Date de Fin",
        allStatuses: "Tous les Statuts",
        applyButton: "Appliquer les Filtres"
      },
      campaignRoiTable: {
        title: "Détails de Performance des Campagnes",
        header: {
          campaignName: "Nom de la Campagne",
          spend: "Dépenses",
          netProfit: "Bénéfice Net",
          roiPercentage: "ROI (%)",
          status: "Statut"
        },
        noData: "Aucune donnée de campagne trouvée."
      },
      recordsPage: {
        title: "Transactions Financières",
        description: "Visualisez et gérez vos transactions financières."
      },
      recordsStats: {
        totalRevenue: "Revenu Total",
        totalExpenses: "Dépenses Totales",
        netProfit: "Bénéfice Net",
        thisMonthSuffix: "{val} ce mois-ci",
        unitUSD: "USD"
      },
      recordsTable: {
        title: "Liste des Transactions",
        noData: "Aucune transaction financière trouvée."
      },
      summaryPage: {
        title: "Résumé Financier",
        description: "Un aperçu de la santé financière de votre entreprise."
      },
      summaryStats: {
        totalRevenueYTD: "Revenu Total (Annuel à ce jour)",
        totalExpensesYTD: "Dépenses Totales (Annuel à ce jour)",
        netProfitYTD: "Bénéfice Net (Annuel à ce jour)",
        avgTransactionValue: "Valeur Moyenne par Transaction",
        monthlyBurnRate: "Taux de Consommation Mensuel",
        revenueGrowth: "Croissance des Revenus",
        vsLastYear: "{change} vs l'année dernière",
        vsLastMonth: "{change} vs le mois dernier",
        ytdChange: "{change} Cumul Annuel"
      },
      summaryCharts: {
        monthlyPerformance: {
          title: "Performance Mensuelle",
          legendExpenses: "Dépenses"
        },
        expenseCategories: {
          title: "Catégories de Dépenses",
          salaries: "Salaires",
          marketing: "Marketing",
          operations: "Opérations",
          software: "Logiciels"
        },
        tooltipRevenue: "Revenu : {amount}",
        tooltipExpenses: "Dépenses : {amount}"
      }
    },
    reengagement: {
      title: "Réengagement",
      tasks: "Tâches",
      classification: "Classification",
      automation: "Automatisation"
    },
    referrals: {
      dashboard: "Tableau de bord",
      tracking: "Suivi",
      rewards: "Récompenses"
    },
    reviews: {
      requests: "Demandes",
      booster: "Booster",
      monitoring: "Surveillance"
    },
    funnels: {
      page: {
        title: "Entonnoirs",
        description: "Gérez et analysez vos entonnoirs de vente et de marketing."
      },
      stats: {
        activeFunnels: "Entonnoirs Actifs",
        totalLeadsInFunnels: "Total de Leads dans les Entonnoirs",
        thisWeekSuffix: "+{count} cette semaine",
        overallConversionRate: "Taux de Conversion Global",
        revenueFromFunnelsUSD: "Revenus des Entonnoirs (USD)",
        lastMonthSuffix: "{amount} le mois dernier"
      },
      builder: {
        title: "Constructeur",
        description: "Construisez, visualisez et optimisez vos entonnoirs de conversion."
      },
      progress: {
        title: "Progrès",
        description: "Suivez la progression des leads et identifiez les goulots d'étranglement."
      },
      automation: {
        title: "Automatisation",
        description: "Configurez des actions et déclencheurs automatisés dans vos entonnoirs."
      },
      topPerforming: {
        title: "Entonnoirs les Plus Performants",
        conversionRateSuffix: "Taux de Conv.",
        revenuePrefix: "Revenu :",
        noData: "Aucune donnée d'entonnoir disponible pour le moment. Créez votre premier entonnoir pour voir ses performances ici."
      }
    },
    gapAnalysis: {
      form: {
        title: "Créer une Nouvelle Analyse d'Écarts",
        description: "Remplissez les détails ci-dessous pour démarrer une nouvelle analyse d'écarts.",
        header: {
          backButton: "Retour aux Analyses",
          title: "Nouvelle Évaluation d'Analyse d'Écarts",
          subtitle: "Étape {currentStep} sur {totalSteps} : Remplissez les détails de votre analyse.",
          progressComplete: "Terminé"
        },
        marketParams: {
          title: "Paramètres de l'Analyse de Marché",
          description: "Définissez la portée et l'orientation de votre analyse d'écarts.",
          analysisTitleLabel: "Titre de l'analyse",
          analysisTitlePlaceholder: "ex: Analyse du Marché SaaS Global",
          industryPlaceholder: "Sélectionnez un secteur d'activité",
          industries: {
            technology: "Technologie",
            finance: "Finance",
            healthcare: "Santé",
            retail: "Commerce de détail",
            manufacturing: "Industrie manufacturière"
          },
          analysisDescriptionLabel: "Description de l'analyse",
          analysisDescriptionPlaceholder: "Décrivez brièvement les objectifs et l'orientation de cette analyse.",
          marketSizeLabel: "Taille du Marché Cible",
          marketSizePlaceholder: "Sélectionnez la taille du marché",
          marketSizes: {
            small: "Petit (ex: Niche, Local)",
            medium: "Moyen (ex: Régional, En croissance)",
            large: "Grand (ex: National, Établi)",
            enterprise: "Entreprise (ex: Mondial, Fortune 500)"
          },
          geographyLabel: "Zone Géographique Cible",
          geographyPlaceholder: "Sélectionnez une zone géographique",
          geographies: {
            northAmerica: "Amérique du Nord",
            europe: "Europe",
            asiaPacific: "Asie-Pacifique",
            latinAmerica: "Amérique Latine",
            global: "Monde entier"
          },
          competitiveAnalysisLabel: "Analyse Concurrentielle",
          primaryCompetitorLabel: "Concurrent Principal",
          secondaryCompetitorLabel: "Concurrent Secondaire",
          competitorPlaceholder: "Nom du concurrent",
          analysisOptionsLabel: "Options d'Analyse",
          deepScanLabel: "Activer l'Analyse Approfondie",
          deepScanDescription: "Fournit une analyse plus complète, peut prendre plus de temps.",
          aiRecommendationsLabel: "Recommandations par IA",
          aiRecommendationsDescription: "Générez des informations et suggestions exploitables grâce à l'IA.",
          generateLetterLabel: "Générer une Lettre de Vente",
          generateLetterDescription: "Créez automatiquement une lettre de vente personnalisée basée sur l'analyse."
        },
        buttons: {
          saveDraft: "Enregistrer le Brouillon",
          runAnalysis: "Lancer l'Analyse",
          completeAnalysis: "Terminer l'Analyse"
        },
        questionCategories: {
          business_performance: "Performance de l'Entreprise",
          technology: "Technologie",
          operations: "Opérations",
          marketing: "Marketing",
          customer_experience: "Expérience Client"
        },
        questions: {
          subtitle: "Veuillez répondre aux questions suivantes au mieux de vos capacités.",
          numberPlaceholder: "Entrez un nombre",
          textPlaceholder: "Entrez votre réponse",
          scale: {
            poor: "Faible",
            excellent: "Excellent"
          },
          current_revenue: {
            text: "Quel est votre revenu annuel actuel ?",
            options: {
              under_100k: "Moins de 100K $",
              "100k_500k": "100K $ - 500K $",
              "500k_1m": "500K $ - 1M $",
              "1m_5m": "1M $ - 5M $",
              over_5m: "Plus de 5M $"
            }
          },
          growth_rate: {
            text: "Quel a été votre taux de croissance moyen au cours des 2 dernières années ?",
            helpText: "Notez de 1 (en baisse) à 5 (croissance rapide)"
          },
          technology_stack: {
            text: "Comment évaluez-vous votre infrastructure technologique actuelle ?",
            helpText: "1 = Obsolète, 5 = De pointe"
          },
          automation_level: {
            text: "Quel pourcentage de vos processus sont automatisés ?",
            options: {
              "0_20": "0-20%",
              "21_40": "21-40%",
              "41_60": "41-60%",
              "61_80": "61-80%",
              "81_100": "81-100%"
            }
          },
          team_size: {
            text: "Combien d'employés à temps plein avez-vous ?"
          },
          biggest_challenge: {
            text: "Quel est votre plus grand défi opérationnel ?",
            options: {
              lead_generation: "Génération de leads",
              sales_conversion: "Conversion des ventes",
              customer_retention: "Fidélisation client",
              process_efficiency: "Efficacité des processus",
              technology_limitations: "Limitations technologiques",
              team_productivity: "Productivité de l'équipe"
            }
          },
          marketing_channels: {
            text: "Quels canaux marketing utilisez-vous actuellement ?",
            options: {
              social_media: "Médias sociaux",
              email_marketing: "Marketing par e-mail",
              content_marketing: "Marketing de contenu",
              paid_advertising: "Publicité payante",
              seo: "SEO",
              referrals: "Parrainages",
              events_networking: "Événements/Réseautage"
            }
          },
          customer_satisfaction: {
            text: "Comment évaluez-vous la satisfaction de vos clients ?",
            helpText: "1 = Faible, 5 = Excellente"
          }
        }
      },
      results: { // Results view within the form page
        backToDashboard: "Retour au Tableau de Bord des Analyses d'Écarts",
        title: "Évaluation Terminée !",
        subtitle: "Examinez les résultats de votre analyse d'écarts et la lettre de vente générée.",
        overallScore: "Score Global de Préparation",
        priorityAreas: "Domaines Prioritaires Clés",
        improvementPotential: {
          title: "Potentiel d'Amélioration",
          status: "Significatif",
          description: "Des actions ciblées dans les domaines clés peuvent apporter des améliorations substantielles."
        },
        categoryBreakdown: {
          title: "Répartition par Catégorie",
          description: "Scores détaillés pour chaque catégorie d'évaluation."
        },
        salesLetter: {
          title: "Lettre de Vente Générée par IA",
          description: "Une lettre de vente personnalisée élaborée à partir de votre analyse.",
          buttons: {
            regenerate: "Régénérer la Lettre",
            generate: "Générer la Lettre de Vente"
          },
          generatedAt: "Générée le",
          justNow: "À l'instant",
          regenerations: "{count} régénérations",
          readyTitle: "Votre Lettre de Vente est Prête !",
          readyDescription: "Notre IA a rédigé une lettre de vente personnalisée basée sur votre analyse d'écarts. Cliquez ci-dessous pour la générer et la visualiser."
        },
        recommendations: {
          title: "Recommandations Stratégiques",
          description: "Conseils pratiques basés sur les écarts identifiés.",
          focusText: "Concentrez-vous sur l'amélioration de {area} pour optimiser la performance globale."
        },
        startNewAssessment: "Commencer une Nouvelle Évaluation",
        exportResultsSuffix: "les Résultats"
      },
      page: { // For /gap-analysis page
        description: "Suivez et gérez toutes vos analyses d'écarts."
      },
      buttons: { // General buttons for gap analysis section
        newAnalysis: "Nouvelle Analyse",
        backToList: "Retour à la liste des analyses"
      },
      searchPlaceholder: "Rechercher par contact ou entreprise...",
      tabs: { // For main page tabs
        generated: "Généré",
        responded: "Répondu"
      },
      card: { // For cards on the main page
        unknownContact: "Contact/Entreprise inconnu(e)",
        scorePrefix: "Score :",
        scoreSuffix: "/5",
        buttons: {
          send: "Envoyer la Lettre"
        },
        generatedLetter: {
          title: "Extrait de la Lettre Générée"
        }
      },
      emptyState: { // For main page empty state
        title: "Aucune Analyse d'Écarts pour le Moment",
        description: "Commencez par créer une nouvelle analyse d'écarts pour identifier des opportunités et générer des lettres de vente personnalisées.",
        createFirstButton: "Créer la Première Analyse"
      },
      lettersPage: { 
        title: "Lettres de Vente", 
        subtitle: "Parcourez, gérez et suivez vos lettres de vente et de prospection générées.",
        createNew: "Créer une nouvelle lettre",
        preview: "Aperçu",
        tryAgain: "Réessayer",
        subjectLabel: "Sujet",
        recipientLabel: "Destinataire",
        companyLabel: "Entreprise",
        idLabel: "ID",
        createdLabel: "Créé le",
        statusLabel: "Statut",
        noLettersTitle: "Aucune lettre trouvée",
        noLettersDescription: "Commencez par créer une nouvelle lettre d'analyse des écarts.",
        errorTitle: "Erreur lors de la récupération des lettres",
        dialogTitle: "Aperçu de la lettre",
        dialogSubjectPrefix: "Sujet",
        dialogClose: "Fermer",
        status: { 
          draft: "Brouillon",
          sent: "Envoyé",
          archived: "Archivé"
        }
      },
      resultsPage: { // For dedicated /gap-analysis/results page
        mainTitle: "Résultats de l'Analyse d'Écarts",
        subtitle: "Examinez et analysez les résultats de votre analyse des écarts.",
        exportButton: "Exporter les résultats",
        summary: {
          totalGaps: "Total des écarts identifiés",
          avgSeverity: "Sévérité moyenne",
          readinessScore: "Score de préparation global",
          keyAreas: "Domaines clés à améliorer"
        },
        charts: {
          severityDistribution: "Répartition par sévérité",
          areaDistribution: "Répartition par domaine",
          noData: "Aucune donnée disponible pour le graphique.",
          areaPlaceholder: "Le graphique de répartition par domaine sera affiché ici."
        },
        detailedResults: {
          title: "Analyse détaillée des écarts",
          description: "Une liste complète des écarts identifiés et des recommandations.",
          area: "Domaine",
          gapDescription: "Description de l'écart",
          severity: "Sévérité",
          recommendations: "Recommandations",
          responsibleTeam: "Équipe responsable",
          noDetailedResults: "Aucun résultat détaillé à afficher."
        },
        severity: {
          high: "Élevée",
          medium: "Moyenne",
          low: "Faible"
        },
        error: {
          title: "Erreur lors de la récupération des résultats",
          fetchFailed: "Échec de la récupération des résultats : {{status}}",
          unknown: "Une erreur inconnue s'est produite lors de la récupération des résultats."
        },
        noResults: {
          title: "Aucun résultat disponible",
          description: "Les résultats de l'analyse des écarts ne sont pas encore disponibles ou n'ont pas pu être trouvés."
        },
        tryAgain: "Réessayer"
      },
      trackingPage: {
        subtitle: "Analysez les vues, l'engagement et les conversions de vos VSL.",
        filter: {
          vslLabel: "Page VSL",
          selectVSLPlaceholder: "Sélectionner une page VSL",
          allVSLs: "Toutes les pages VSL",
          periodLabel: "Période",
          selectPeriodPlaceholder: "Sélectionner une période",
          periods: {
            last7days: "7 derniers jours",
            last30days: "30 derniers jours",
            last3months: "3 derniers mois",
            alltime: "Depuis toujours"
          }
        },
        summary: {
          totalViews: "Vues totales",
          totalLeads: "Leads totaux",
          conversionRate: "Taux de conversion",
          avgWatchTime: "Temps de visionnage moyen",
          totalVSLs: "Total VSL suivis"
        },
        charts: {
          viewsOverTime: "Vues sur la période",
          leadsOverTime: "Leads sur la période",
          conversionRateOverTime: "Taux de conversion sur la période",
          views: "Vues",
          leads: "Leads",
          conversionRate: "Taux de conv."
        },
        table: {
          title: "Performance par page VSL",
          header: {
            vslTitle: "Titre VSL",
            views: "Vues",
            leads: "Leads",
            conversionRate: "Taux de conv. (%)",
            avgWatchTime: "Visionnage moyen (s)"
          }
        },
        error: {
          title: "Erreur de chargement des données de suivi",
          fetchVSLListFailed: "Échec du chargement de la liste des pages VSL.",
          fetchTrackingFailed: "Échec du chargement des données de suivi VSL : {{statusText}}",
          unknown: "Une erreur inconnue s'est produite."
        },
        noData: {
            title: "Aucune donnée de suivi",
            description: "Aucune donnée de suivi disponible pour la page VSL et la période sélectionnées."
        },
        tryAgain: "Réessayer"
      },
      templatesPage: {
        subtitle: "Parcourez, gérez et créez de nouveaux modèles de lettres de vente vidéo.",
        createNew: "Créer un nouveau modèle",
        useTemplate: "Utiliser ce modèle",
        preview: "Aperçu",
        category: "Catégorie",
        created: "Créé le",
        descriptionLabel: "Description",
        contentPreviewLabel: "Aperçu de la structure du contenu",
        tagsLabel: "Étiquettes",
        status: {
          active: "Actif",
          archived: "Archivé"
        },
        error: {
          title: "Erreur de chargement des modèles",
          fetchFailed: "Échec du chargement des modèles VSL : {{statusText}}",
          unknown: "Une erreur inconnue s'est produite."
        },
        noTemplates: {
          title: "Aucun modèle VSL trouvé",
          description: "Commencez par créer votre premier modèle VSL."
        },
        tryAgain: "Réessayer"
      }
    },
    vsl: {
      templates: "Modèles",
      pages: "Pages VSL",
      tracking: "Suivi",
      pagesPage: {
        subtitle: "Gérez vos pages de lettres de vente vidéo créées.",
        createNew: "Créer une nouvelle page VSL",
        template: "Modèle",
        views: "Vues",
        conversionRate: "Taux de conv.",
        lastUpdated: "Dernière MàJ",
        manageSubpages: "Gérer Contenu",
        previewLive: "Aperçu en direct",
        edit: "Modifier",
        delete: "Supprimer",
        status: {
          draft: "Brouillon",
          published: "Publiée",
          archived: "Archivée"
        },
        error: {
          title: "Erreur de chargement des pages VSL",
          fetchFailed: "Échec du chargement des pages VSL : {{statusText}}",
          unknown: "Une erreur inconnue s'est produite lors du chargement des pages VSL."
        },
        noVSLPages: {
          title: "Aucune page VSL trouvée",
          description: "Commencez par créer une nouvelle page VSL à partir d'un modèle."
        },
        tryAgain: "Réessayer"
      }
    },
    leadResponse: {
      rules: "Règles",
      queue: "File d'attente",
      analytics: "Analytique",
      mainPage: {
        title: "Gestion des Réponses aux Leads",
        subtitle: "Configurez les règles, surveillez la file d'attente et analysez la performance du traitement des leads.",
        stats: {
          rules: "Règles Actives",
          inQueue: "Leads en File d'Attente",
          processedToday: "Traités Aujourd'hui"
        },
        recentActivity: {
          title: "Activité Récente"
        },
        error: {
          title: "Erreur de Chargement de l'Aperçu",
          fetchFailed: "Échec du chargement de l'aperçu des réponses aux leads : {{statusText}}",
          unknown: "Une erreur inconnue s'est produite."
        },
        tryAgain: "Réessayer"
      },
      example: {
        title: "Exemple d'Utilisation : Suivi Instantané des Leads",
        description: "Illustre comment les règles de réponse aux leads peuvent automatiser le contact initial.",
        scenarioTitle: "Scénario",
        scenario: "Un nouveau lead soumet un formulaire 'Demander une Démo' sur votre site web.",
        triggerTitle: "Déclencheur",
        trigger: "Source du lead est 'Demande Démo Site Web' ET score du lead > 70.",
        actionTitle: "Action Automatisée",
        action: "1. Assigner le lead aux 'Commerciaux Tier 1'. 2. Envoyer le modèle d'email 'Bienvenue & Planification Démo'. 3. Créer une tâche de suivi dans le CRM pour dans 2 jours.",
        outcomeTitle: "Résultat",
        outcome: "Le lead reçoit un email en quelques secondes, et l'équipe commerciale est notifiée pour un suivi rapide, améliorant la vitesse de conversion."
      },
      rulesDescription: "Définissez et gérez les règles automatisées pour le traitement et le routage des leads.",
      queueDescription: "Surveillez et gérez les leads en cours de traitement ou en attente d'action.",
      analyticsDescription: "Suivez les métriques de performance de votre système de réponse aux leads.",
      rulesPage: {
        title: "Règles de Réponse aux Leads",
        subtitle: "Définissez, gérez et surveillez vos règles automatisées de traitement des leads.",
        createNewRule: "Créer une nouvelle règle",
        tableTitle: "Règles configurées",
        tableDescription: "Liste de toutes les règles de réponse aux leads avec leur statut et actions.",
        tableHeaders: {
          name: "Nom de la règle",
          trigger: "Condition de déclenchement",
          actions: "Actions automatisées",
          status: "Statut",
          lastModified: "Dernière modification"
        },
        status: {
          active: "Actif",
          inactive: "Inactif"
        },
        confirmDelete: "Êtes-vous sûr de vouloir supprimer cette règle ?",
        noRules: "Aucune règle configurée pour le moment. Commencez par en créer une.",
        createRuleTitle: "Créer une nouvelle règle de réponse aux leads",
        createRuleDescription: "Définissez le déclencheur et les actions pour votre nouvelle règle automatisée.",
        editRuleTitle: "Modifier la règle de réponse aux leads",
        editRuleDescription: "Modifiez le déclencheur, les actions ou le statut de cette règle.",
        form: {
          nameLabel: "Nom de la règle",
          namePlaceholder: "Ex: Lead site web haute intention",
          triggerLabel: "Condition de déclenchement",
          triggerPlaceholder: "Décrivez quand cette règle doit s'activer (Ex: 'Nouveau contact du formulaire ET pays est USA')",
          actionsLabel: "Actions",
          actionPlaceholder: "Décrire une action",
          addAction: "Ajouter une action",
          statusLabel: "Statut",
          statusPlaceholder: "Sélectionner le statut de la règle",
          priorityLabel: "Priorité",
          priorityPlaceholder: "Entrez un nombre (Ex: 1 pour la plus haute)"
        },
        error: {
          fetchFailed: "Échec du chargement des règles de réponse aux leads.",
          formSubmitFailed: "Échec de l'enregistrement de la règle. Veuillez vérifier votre saisie.",
          deleteFailed: "Échec de la suppression de la règle.",
          statusUpdateFailed: "Échec de la mise à jour du statut de la règle.",
          unknown: "Une erreur inattendue s'est produite."
        }
      },
      queuePage: {
        title: "File d'Attente de Réponse aux Leads",
        subtitle: "Surveillez et gérez les leads en cours de traitement par les règles automatisées.",
        tableTitle: "File d'attente actuelle",
        tableDescription: "Leads en attente d'action ou en cours de traitement.",
        tableHeaders: {
          leadId: "Lead",
          ruleTriggered: "Règle Déclenchée",
          status: "Statut",
          queuedAt: "En File à",
          lastAttempt: "Dernière Tentative",
          errorMessage: "Message d'Erreur"
        },
        status: {
          pending: "En attente",
          processing: "En traitement",
          failed: "Échoué",
          completed: "Terminé",
          retrying: "Nouvelle tentative",
          cancelled: "Annulé"
        },
        actions: {
          retry: "Réessayer",
          cancel: "Annuler"
        },
        noItems: "La file d'attente de réponse aux leads est actuellement vide.",
        error: {
          fetchFailed: "Échec du chargement des éléments de la file d'attente.",
          actionFailed: "Échec de l'action sur l'élément de la file d'attente.",
          unknown: "Une erreur inattendue s'est produite."
        }
      },
      analyticsPage: {
        title: "Analytique de Réponse aux Leads",
        subtitle: "Obtenez des informations sur la performance et l'efficacité de votre système de réponse aux leads.",
        summary: {
          totalProcessed: "Total Leads Traités",
          avgResponseTime: "Temps de Réponse Moyen",
          successRate: "Taux de Réussite",
          failureRate: "Taux d'Échec"
        },
        charts: {
          leadsProcessedTitle: "Leads Traités sur la Période",
          leadsProcessedLabel: "Leads Traités",
          responseTimeTitle: "Tendances du Temps de Réponse",
          avgResponseTimeLabel: "Temps de Rép. Moyen"
        },
        table: {
          title: "Performance des Règles",
          description: "Efficacité et efficience des règles individuelles de réponse aux leads.",
          headers: {
            ruleName: "Nom de la Règle",
            processed: "Traités",
            successRate: "Taux de Réussite",
            avgTime: "Temps Moyen"
          }
        },
        error: {
          title: "Erreur de Chargement des Analytiques",
          fetchFailed: "Échec du chargement des données analytiques de réponse aux leads.",
          unknown: "Une erreur inconnue s'est produite."
        },
        noData: {
            title: "Aucune Donnée Analytique",
            description: "Les données analytiques pour la réponse aux leads ne sont pas encore disponibles."
        }
      }
    },
    analytics: {
      performance: "Performance",
      conversion: "Conversion",
      revenue: "Revenu",
      navigation: {
        performance: {
          title: "Analyses de Performance",
          description: "Plongez dans les métriques de trafic, d'engagement et de comportement utilisateur."
        },
        conversion: {
          title: "Analyses de Conversion",
          description: "Suivez les performances de l'entonnoir et identifiez les points de chute."
        },
        revenue: {
          title: "Analyses des Revenus",
          description: "Analysez les tendances des ventes, la LTV et les revenus par source."
        }
      },
      conversionPage: {
        loadingSubtitle: "Analyse des entonnoirs de conversion en cours...",
        errorSubtitle: "Erreur",
        errorCardTitle: "Impossible de charger les données de conversion",
        noDataSubtitle: "Aucune donnée disponible",
        noDataText: "Aucune donnée de conversion disponible pour les filtres sélectionnés.",
        mainSubtitle: "Comprenez comment les utilisateurs convertissent à travers les entonnoirs clés."
      },
      filters: {
        timePeriodLabel: "Période :",
        periods: {
          last7days: "7 Derniers Jours",
          last30days: "30 Derniers Jours",
          last3months: "3 Derniers Mois",
          last12months: "12 Derniers Mois"
        },
        funnelLabel: "Entonnoir :",
        funnels: {
          all: "Tous les Entonnoirs (Global)",
          onboarding: "Entonnoir d'Intégration",
          salesQ4: "Entonnoir de Ventes T4"
        },
        breakdownByLabel: "Ventilation par :",
        breakdownOptions: {
          product: "Produit/Service",
          segment: "Segment de Clientèle",
          region: "Région"
        }
      },
      conversionStats: {
        overallRate: "Taux de Conv. Global",
        totalConversions: "Conversions Totales",
        topFunnel: "Meilleur Entonnoir de Conversion",
        avgCostPerConversion: "Coût Moyen / Conversion"
      },
      conversionFunnelBreakdown: {
        title: "Détail de l'Entonnoir ({funnelName})",
        overall: "Global"
      },
      conversionFunnelStage: {
        visitors: "Visiteurs : {count}",
        convFromPrev: "Conv. depuis préc. : {rate}%",
        entryPoint: "Point d'Entrée",
        dropOff: "Abandon : {rate}%"
      },
      conversionSourceTable: {
        title: "Conversions par Source",
        header: {
          source: "Source",
          conversions: "Conversions",
          conversionRate: "Taux de Conversion (%)"
        }
      },
      performancePage: {
        loadingSubtitle: "Analyse des chiffres en cours...",
        errorCardTitle: "Impossible de charger les données de performance",
        noDataSubtitle: "Aucune donnée",
        noDataText: "Aucune donnée de performance disponible.",
        mainSubtitle: "Suivez l'engagement des utilisateurs et les métriques de trafic du site Web."
      },
      performanceStats: {
        totalVisits: "Visites Totales",
        uniqueVisitors: "Visiteurs Uniques",
        avgSession: "Session Moy.",
        bounceRate: "Taux de Rebond",
        pagesPerVisit: "Pages / Visite",
        topReferrer: "Meilleur Référent"
      },
      performanceActivityOverTime: {
        title: "Activité des Utilisateurs sur la Période"
      },
      performanceTopPages: {
        title: "Pages les Plus Performantes",
        header: {
          pagePath: "Chemin de la Page",
          views: "Vues"
        }
      },
      revenuePage: {
        loadingSubtitle: "Calcul des flux de revenus en cours...",
        errorCardTitle: "Impossible de charger les données de revenus",
        noDataText: "Aucune donnée de revenus disponible pour les filtres sélectionnés.",
        mainSubtitle: "Obtenez des informations sur vos flux de revenus et vos performances financières."
      },
      revenueStats: {
        totalRevenue: "Revenu Total",
        arpu: "ARPU",
        mrr: "MRR",
        ltv: "LTV"
      },
      revenueTrends: {
        title: "Tendances des Revenus sur la Période",
        tooltip: "Date : {date}, Revenu : ${amount}",
        noData: "Aucune donnée de tendance de revenus pour cette période."
      },
      revenueBreakdown: {
        title: "Ventilation des Revenus par {breakdownType}",
        header: {
          name: "Nom de {breakdownType}",
          revenue: "Revenu",
          percentOfTotal: "% du Total"
        },
        noData: "Aucune donnée de ventilation disponible."
      }
    },
    admin: {
      title: "Administration",
      description: "Gérer les paramètres système, utilisateurs et conformité",
      teamManagement: "Gestion d'équipe",
      billing: "Facturation et utilisation",
      antiSpam: "Paramètres anti-spam",
      compliance: "Conformité",
      systemHealth: "Santé du système",
      recentActivity: "Activité récente",
      users: "Utilisateurs",
      roles: "Rôles",
      permissions: "Permissions",
      security: {
        title: "Security Settings",
        activeSessions: "Active Sessions",
        manageActiveSessions: "Manage your active sessions",
        recentEvents: "Recent Events",
        securityEventLog: "Security Event Log"
      },
      page: {
        description: "Central hub for managing your organization's settings, users, and security.",
        buttons: {
          globalSettings: "Global Settings",
          manageDetailedSections: "Manage Detailed Sections",
          viewAuditLog: "View Full Audit Log"
        },
        tabs: {
          users: "Users",
          security: "Security",
          billing: "Billing"
        },
        userManagement: {
          title: "User Management",
          description: "The user management interface, including tables, invites, and role assignments, will be displayed here."
        },
        securityConfig: {
          title: "Security Configuration",
          description: "Settings for Single Sign-On (SSO), 2-Factor Authentication (2FA), and API key management will be displayed here."
        },
        billingSubscriptions: {
          title: "Billing & Subscriptions",
          description: "Your current plan, usage metrics, payment history, and invoices will be displayed here."
        },
        stats: {
          totalUsers: "Total Users",
          usersThisMonth: "+{count} this month",
          monthlyUsage: "Monthly Usage",
          budgetUtilized: "{percent}% of budget utilized",
          complianceScore: "Compliance Score",
          complianceStatus: "Fully GDPR & CCPA compliant",
          systemHealth: "System Health",
          uptime: "Uptime last 30 days"
        },
        controlPanel: {
          title: "Admin Control Panel",
          description: "Select a category to configure its settings."
        },
        recentActivity: {
          title: "Recent Activity",
          systemUser: "System",
          actions: {
            updatedPermissions: "updated permissions for '{userName}'.",
            securityScanCompleted: "completed its daily security scan.",
            updatedBillingAddress: "updated the company billing address.",
            highRiskLogin: "detected a high-risk login attempt."
          }
        },
        time: {
          minutesAgo: "{count}m ago",
          hourAgo: "{count}h ago",
          yesterday: "Yesterday"
        },
        systemStatus: {
          title: "System Status",
          description: "Real-time system health and performance metrics."
        },
        metrics: {
          apiResponse: "API Response",
          cpuUsage: "CPU Usage",
          memoryUsage: "Memory Usage",
          errorRate: "Error Rate"
        }
      },
      sections: {
        teamManagement: {
          description: "Manage users, roles, and permissions."
        },
        billing: {
          description: "Monitor usage and manage billing."
        },
        security: {
          description: "Configure 2FA, SSO, and policies."
        },
        compliance: {
          description: "GDPR, data retention, and privacy."
        }
      },
      antiSpamPage: {
        description: "Configure spam protection and compliance settings",
        statusCard: {
          title: "Spam Protection Status",
          description: "Real-time spam detection and filtering metrics"
        },
        metrics: {
          detectionRate: "Spam Detection Rate",
          falsePositives: "False Positives",
          blockedMessages: "Blocked Messages",
          quarantined: "Quarantined"
        },
        filterConfig: {
          title: "Spam Filter Configuration",
          description: "Adjust spam detection sensitivity and rules",
          enableDetection: {
            label: "Enable Spam Detection",
            description: "Automatically detect and filter spam messages"
          },
          autoQuarantine: {
            label: "Auto-Quarantine Suspicious Messages",
            description: "Automatically quarantine messages with high spam scores"
          },
          senderReputation: {
            label: "Sender Reputation Checking",
            description: "Check sender reputation against known spam databases"
          },
          spamScoreThreshold: {
            label: "Spam Score Threshold",
            description: "Messages with scores above this threshold will be marked as spam (1-10 scale)"
          }
        },
        whitelist: {
          title: "Whitelist",
          description: "Trusted senders and domains",
          placeholder: "Enter email addresses or domains (one per line)\nexample@company.com\n@trusteddomain.com",
          button: "Update Whitelist"
        },
        blacklist: {
          title: "Blacklist",
          description: "Blocked senders and domains",
          placeholder: "Enter email addresses or domains to block (one per line)\nspam@example.com\n@spammydomain.com",
          button: "Update Blacklist"
        },
        compliance: {
          title: "Compliance Settings",
          description: "Configure compliance and regulatory requirements",
          gdpr: {
            label: "GDPR Compliance Mode",
            description: "Enable additional privacy protections for EU recipients"
          },
          canSpam: {
            label: "CAN-SPAM Act Compliance",
            description: "Ensure all messages comply with CAN-SPAM requirements"
          },
          unsubscribeLinks: {
            label: "Automatic Unsubscribe Links",
            description: "Automatically add unsubscribe links to all marketing emails"
          }
        }
      },
      billingPage: {
        description: "Manage your billing information and subscription.",
        buttons: {
          updatePayment: "Update Payment Method"
        },
        overview: {
          stats: {
            currentPlan: "Current Plan",
            nextInvoice: "Next Invoice",
            invoiceDue: "Due in {days} days",
            usage: "Usage",
            usageOfQuota: "Of monthly quota"
          },
          title: "Billing Overview",
          description: "Your current billing status and recent transactions"
        },
        invoices: {
          title: "Invoices",
          description: "View and manage your billing history"
        },
        usage: {
          title: "Usage Analytics",
          description: "Detailed breakdown of your service usage"
        },
        plans: {
          title: "Available Plans",
          description: "Compare and switch between different subscription plans"
        }
      },
      securityPage: {
        stats: {
          activeThreats: "Active Threats",
          requiresImmediateAttention: "Requires immediate attention",
          twoFactorStatus: "2FA Status",
          users2FAEnabled: "Users with 2FA enabled",
          securityScore: "Security Score",
          overallRating: "Overall security rating"
        }
      },
      teamPage: {
        buttons: {
          inviteMember: "Invite Member"
        },
        overview: {
          stats: {
            totalMembers: "Total Members",
            activeTeamMembers: "Active team members",
            pendingInvites: "Pending Invites",
            awaitingResponse: "Awaiting response",
            activeRoles: "Active Roles",
            customRolesDefined: "Custom roles defined"
          },
          title: "Team Overview",
          description: "Manage your team members and their roles"
        },
        members: {
          title: "Team Members",
          description: "View and manage team members"
        },
        roles: {
          title: "Team Roles",
          description: "Manage team roles and responsibilities"
        },
        permissions: {
          title: "Permissions",
          description: "Configure access permissions for roles"
        }
      },
      usersPage: {
        description: "Manage your team members and their roles.",
        buttons: {
          inviteUser: "Invite User"
        },
        overview: {
          stats: {
            activeMembers: "Active members",
            newUsers: "New Users",
            thisMonth: "This month"
          },
          title: "Users Overview",
          description: "Manage your team members and their roles"
        },
        usersList: {
          description: "View and manage all users"
        },
        invites: {
          title: "Pending Invites",
          description: "Manage user invitations"
        }
      }
    },
    form: {
      save: "Enregistrer",
      cancel: "Annuler",
      submit: "Soumettre",
      reset: "Réinitialiser",
      required: "Requis",
      optional: "Optionnel",
      loading: "Chargement...",
      saving: "Enregistrement...",
      saved: "Enregistré avec succès",
      error: "Une erreur s'est produite"
    },
    pagination: {
      showing: "Affichage de",
      to: "à",
      of: "sur",
      results: "résultats",
      rowsPerPage: "Lignes par page :",
      page: "Page",
      goToPage: "Aller à la page"
    },
    common: {
      previous: "Précédent",
      next: "Suivant",
      loading: "Chargement...",
      save: "Enregistrer",
      cancel: "Annuler",
      delete: "Supprimer",
      edit: "Modifier",
      view: "Voir",
      actions: "Actions",
      yes: "Oui",
      no: "Non",
      confirm: "Confirmer",
      close: "Fermer",
      open: "Ouvrir",
      new: "Nouveau",
      create: "Créer",
      update: "Mettre à jour",
      refresh: "Actualiser",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      export: "Exporter",
      import: "Importer",
      all: "Tout",
      description: "Description",
      date: "Date",
      minutesShort: "min",
      minutesAbbr: "min",
      bold: "Gras",
      italic: "Italique",
      underline: "Souligné",
      insertTag: "Insérer un Tag de Personnalisation",
      insertLink: "Insérer un Lien",
      bulletList: "Liste à Puces",
      tryAgain: "Réessayer",
      notAvailableShort: "N/A",
      none: "Aucun", // Added
      notAssigned: "Non assigné" // Added
    },
    status: {
      active: "Actif",
      inactive: "Inactif",
      pending: "En attente",
      completed: "Terminé",
      failed: "Échoué",
      running: "En cours",
      scheduled: "Planifié",
      draft: "Brouillon",
      sent: "Envoyé",
      delivered: "Livré",
      opened: "Ouvert",
      clicked: "Cliqué",
      bounced: "Rejeté",
      generated: "Généré",
      responded: "Répondu"
    },
    error: {
      general: "Une erreur s'est produite",
      notFound: "Non trouvé",
      unauthorized: "Non autorisé",
      forbidden: "Interdit",
      serverError: "Erreur serveur",
      networkError: "Erreur réseau",
      contactSupport: "Contactez le support si le problème persiste"
    },
    success: {
      saved: "Enregistré avec succès",
      created: "Créé avec succès",
      updated: "Mis à jour avec succès",
      deleted: "Supprimé avec succès",
      sent: "Envoyé avec succès",
      imported: "Importé avec succès",
      exported: "Exporté avec succès"
    },
    ai: {
      title: "Assistant IA",
      welcome: "Salut ! Je suis votre assistant IA. Je peux vous aider à trouver des entreprises, créer des extracteurs, ou analyser les données du marché. Que souhaitez-vous faire ?",
      openAssistant: "Ouvrir l'Assistant IA",
      close: "Fermer",
      placeholder: "Demandez-moi n'importe quoi...",
      quickSuggestions: "Suggestions rapides",
      response: "Je comprends que vous voulez {{query}}. Laissez-moi vous aider avec cela...",
      suggestions: {
        findCompanies: "Trouver des entreprises tech en Suisse",
        createScraper: "Créer un extracteur LinkedIn",
        analyzeMarket: "Analyser les tendances du marché",
        leadStrategy: "Suggérer une stratégie de génération de leads"
      }
    },
    statisticsPages: {
      collectionTrends: {
        pageTitle: "Tendances de la Collecte de Données",
        pageSubtitle: "Analysez les tendances d'acquisition de données au fil du temps.",
        newRecordsThisPeriod: "Nouveaux Enregistrements (Période)",
        growthRate: "Taux de Croissance",
        peakCollection: "Pic de Collecte",
        peakCollectionDetail: "le {peakDate}",
        volumeOverTime: "Volume de Collecte au Fil du Temps",
        daily: "Quotidien",
        weekly: "Hebdomadaire",
        monthly: "Mensuel",
        vsLastPeriod: "vs période précédente",
        noTrendData: "Aucune donnée de tendance disponible pour la période sélectionnée."
      },
      geographicDistribution: {
        pageTitle: "Distribution Géographique des Données",
        pageSubtitle: "Visualisez la répartition de vos données à travers différentes régions.",
        totalRegionsCovered: "Total Régions Couvertes",
        topRegion: "Région Principale",
        regionsWithGrowth: "Régions en Croissance",
        distributionMap: "Carte de Distribution",
        allDataTypes: "Tous Types de Données",
        topRegionsByVolume: "Top Régions par Volume de Données"
      },
      sectorDistribution: {
        pageTitle: "Distribution des Données par Secteur",
        pageSubtitle: "Analysez la répartition de vos données par secteurs d'activité.",
        totalSectorsTracked: "Total Secteurs Suivis",
        fastestGrowingSector: "Secteur à Croissance Rapide",
        distributionBySector: "Distribution par Secteur",
        contacts: "Contacts",
        sectorBreakdown: "Répartition par Secteur"
      },
      sourceComparison: {
        pageTitle: "Comparaison des Sources de Données",
        pageSubtitle: "Évaluez et comparez la performance de vos différentes sources de données.",
        totalDataSources: "Total Sources de Données",
        highestVolumeSource: "Source au Volume le Plus Élevé",
        bestQualitySource: "Source de Meilleure Qualité",
        compareBy: "Comparer par :",
        allMetrics: "Toutes Métriques",
        dataVolume: "Volume de Données",
        qualityScore: "Score de Qualité",
        coveragePercentage: "Pourcentage de Couverture",
        sourcePerformanceMetrics: "Métriques de Performance des Sources",
        detailedSourceMetrics: "Métriques Détaillées des Sources",
        sourceName: "Nom de la Source",
        updateFrequency: "Fréquence de Mise à Jour"
      },
      commonFilters: {
        apply: "Appliquer"
      }
    },
    analyticsPages: {
      overview: {
        pageTitle: "Aperçu Analytique",
        pageSubtitle: "Explorez les métriques clés et les informations de votre application.",
        overallKeyMetric: "Métrique Clé Globale"
      }
    }
  }
}
