export const site = {
  name: 'Sandeep Singla',
  displayName: 'CA. Sandeep Singla',
  shortName: 'SS',
  qualifications: 'B.Com, FCA, LLB',
  title: 'Managing Partner | Sandeep Singla & Associates',
  email: 'sandeep@sspartners.in',
  phone: '+91-9560181790',
  address:
    'E-127, Ground Floor, Sushant Shopping Arcade, Sushant Lok-1, Gurgaon - 122009, Haryana',
  tagline:
    'Managing Partner at Sandeep Singla & Associates — audit, taxation, corporate advisory and regulatory compliance.',
}

export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Practice Areas', href: '/#services' },
  { label: 'Handbook', href: '/#handbook' },
  { label: 'Blogs', href: '/#blogs' },
]

export const profile = {
  aboutHeading: 'About Me',
  credentialsTitle: 'Professional qualifications and affiliations',
  certificationsHeading: 'Certifications',
  membershipsHeading: 'Memberships',
  certifications: [
    {
      title: 'FEMA',
      issuer: 'ICAI Certification — Foreign Exchange Management Act',
    },
    {
      title: 'NPO',
      issuer: 'ICAI Certification — Non Profit Organizations',
    },
    {
      title: 'CCA',
      issuer: 'ICAI Certification — Concurrent Audit of Banks',
    },
    {
      title: 'AI',
      issuer: 'ICAI Certification — Artificial Intelligence (Level 1)',
    },
    {
      title: 'Peer Review',
      issuer: 'ICAI Certification — Peer Review',
    },
  ],
  memberships: [
    {
      title: 'Bombay Chartered Accountants Society',
      issuer: 'BCAS',
    },
    {
      title: 'Corporate Taxation Committee',
      issuer: 'CTC',
    },
    {
      title: 'All India Federation of Tax Practitioners',
      issuer: 'AIFTP',
    },
    {
      title: 'Chartered Accountants Social Affiliation',
      issuer: 'CASA',
    },
    {
      title: 'Xprocon Shiksha Abhiyan · Founder Member',
      issuer: 'XSA',
    },
  ],
  paragraphs: [
    'CA. Sandeep Singla is a Fellow Member of the Institute of Chartered Accountants of India (ICAI) with over 18 years of professional experience in audit, taxation, corporate advisory, and regulatory compliance.',
    'He regularly advises businesses, startups, promoters, and corporates on matters relating to financial structuring, taxation, compliance frameworks, and risk management. His professional work includes helping organizations design strong governance structures, improve financial controls, and navigate complex regulatory environments.',
    'Mr. Singla has significant experience in direct and indirect tax advisory, litigation support, business restructuring, mergers & acquisitions, due diligence, and cross-border transactions. He has also worked extensively with charitable trusts and non-profit organizations, assisting them with regulatory registrations, compliance monitoring, and FCRA-related matters.',
    'In addition to his advisory work, he actively contributes to the professional community and has been associated with various initiatives of the Institute of Chartered Accountants of India. He currently serves as a Special Invitee Member of the Committee on Auditing and Assurance Standards of NIRC of the ICAI for the year 2025–26 and is also a Peer Reviewer under ICAI.',
  ],
}

export const servicesSection = {
  title: 'Practice Areas',
  description:
    'Audit, taxation, compliance, and advisory for businesses and families.',
}

/** Replace `url` with the matching page on your firm website. */
export const services = [
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description:
      'Independent, risk-based audit and assurance services conducted in accordance with ICAI Standards on Auditing.',
    url: 'https://sspartners.in/',
    icon: 'shield',
  },
  {
    id: 'advisory-consulting',
    title: 'Advisory & Consulting',
    description:
      'Advisory services beyond routine compliance and statutory filings — structured analysis, documentation and professional support for business, financial, tax and regulatory decisions.',
    url: 'https://sspartners.in/',
    icon: 'search',
  },
  {
    id: 'non-resident-international',
    title: 'Non-Resident & International Services',
    description:
      'Professional support for NRIs, foreign nationals and overseas entities in relation to Indian tax and regulatory matters, including FEMA, DTAA analysis and inbound investment advisory.',
    url: 'https://sspartners.in/',
    icon: 'globe',
  },
  {
    id: 'gst-indirect-tax',
    title: 'GST & Indirect Tax',
    description:
      'GST and indirect tax advisory, compliance and representation support with reference to applicable facts, supply chain structure, commercial contracts and statutory provisions.',
    url: 'https://sspartners.in/',
    icon: 'receipt',
  },
] as const

export const handbookSection = {
  title: 'Handbook',
  description:
    'Publications and reference guides for practitioners and business owners.',
}

export const blogSection = {
  title: 'Blogs',
  description:
    'Analysis and commentary on tax, GST, audit, and governance.',
}

export const handbooks = [
  {
    slug: 'gst-decoded',
    title: 'GST Decoded',
    subtitle: "A practitioner's guide to India's indirect tax regime",
    year: '2023',
    icon: 'book',
    excerpt:
      'A structured reference for business owners and finance teams on GST law, compliance, and common practical issues.',
    description: [
      'GST Decoded explains key concepts under India\'s GST framework in clear, practitioner-friendly language. It covers registration, invoicing, input tax credit, returns, refunds, and departmental scrutiny.',
      'The handbook is designed for entrepreneurs, CFOs, and accounting teams who need a dependable desk reference — not just theory, but how provisions apply in day-to-day business situations.',
    ],
  },
  {
    slug: 'tax-planning-entrepreneurs',
    title: 'Tax Planning for Entrepreneurs',
    subtitle: "A founder's guide to Indian taxation",
    year: '2021',
    icon: 'file',
    excerpt:
      'Practical guidance on structuring, remuneration, and compliance for founders and closely held businesses.',
    description: [
      'This handbook addresses tax considerations at each stage of a business — from incorporation and capital structuring to profit distribution, ESOPs, and exit planning.',
      'It helps founders understand the trade-offs between salary, dividend, and reinvestment, while staying aligned with prevailing law and disclosure requirements.',
    ],
  },
  {
    slug: 'auditors-lens',
    title: "The Auditor's Lens",
    subtitle: 'Insights from three decades of practice',
    year: '2026',
    icon: 'scale',
    excerpt:
      'Reflections on audit quality, governance, and the evolving expectations of boards and regulators.',
    description: [
      "The Auditor's Lens draws on decades of audit and advisory work to discuss what boards, audit committees, and management teams should expect from a high-quality engagement.",
      'Topics include risk assessment, documentation, communication with those charged with governance, and building an audit-ready organisation.',
    ],
  },
]

export type PortfolioBlog = {
  slug: string;
  category: string;
  date: string;
  icon: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
};

export const blogs: PortfolioBlog[] = [
  {
    "slug": "section-194t-tds-partner-remuneration-firm",
    "category": "Direct Taxation",
    "date": "2025–2026",
    "icon": "newspaper",
    "title": "TDS on Partners' Salary & Remuneration from a Firm: Section 194T — A Complete Compliance Analysis",
    "excerpt": "Section 40(b), the Capital Account Credit Trigger, Penalty Framework, and Worked Illustrations for Partnership Firms and LLPs",
    "readTime": "25–30 min read",
    "href": "https://www.sspartners.in/blog/tds-on-partner-s-salary-remuneration-from-a-firm-section-194t"
  },
  {
    "slug": "ita-2025-rnpo-framework-charitable-trusts",
    "category": "Direct Taxation",
    "date": "2025–2026",
    "icon": "newspaper",
    "title": "The RNPO Framework Under the Income Tax Act, 2025: What Every Charitable Trust Needs to Know Now",
    "excerpt": "Registered Non-Profit Organisations — Sections 332–355: registration under Section 332, transition from 12A/12AB/10(23C), the three-layer in…",
    "readTime": "22–26 min read",
    "href": "https://www.sspartners.in/services/taxation/ita-2025-rnpo-framework-charitable-trusts"
  },
  {
    "slug": "ita-2025-rnpo-85-percent-application-rule",
    "category": "Direct Taxation",
    "date": "2025–2026",
    "icon": "newspaper",
    "title": "The 85% Application Rule: Why Getting the Computation Right Is More Complex Than It Appears",
    "excerpt": "The central income-exemption test for every RNPO under the Income Tax Act, 2025 — and the subtle errors in applying it that generate unexpec…",
    "readTime": "16 min read",
    "href": "https://www.sspartners.in/services/taxation/ita-2025-rnpo-85-percent-application-rule"
  },
  {
    "slug": "fcra-compliance-five-obligations-2020",
    "category": "Direct Taxation",
    "date": "2025–2026",
    "icon": "newspaper",
    "title": "FCRA Compliance After the 2020 Amendments: The Five Obligations That NGOs Most Frequently Miss",
    "excerpt": "A compliance framework for charitable trusts, NGOs, Section 8 companies, and societies receiving foreign contributions under the Foreign Con…",
    "readTime": "22–26 min read",
    "href": "https://www.sspartners.in/services/taxation/fcra-compliance-five-obligations-2020"
  },
  {
    "slug": "private-limited-vs-llp-startup-2025",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Private Limited vs LLP: Choosing the Right Structure for Your Startup in 2025",
    "excerpt": "Tax treatment, compliance cadence, DPIIT recognition, Angel Tax under Section 56(2)(viib), ESOP eligibility, and investor readiness — a stru…",
    "readTime": "12–14 min read",
    "href": "https://www.sspartners.in/services/advisory/private-limited-vs-llp-startup-2025"
  },
  {
    "slug": "msme-udyam-reclassification-trap",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Udyam Re-registration and the MSME Classification Trap: What Owners Must Know",
    "excerpt": "Classification thresholds, re-registration triggers, benefit cessation timelines, and compliance alignment when turnover or investment cross…",
    "readTime": "10–12 min read",
    "href": "https://www.sspartners.in/services/advisory/msme-udyam-reclassification-trap"
  },
  {
    "slug": "msmed-act-45-day-payment-rule",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "MSMED Act & the 45-Day Payment Rule: How to Enforce Your Right to Timely Payment",
    "excerpt": "A legal, tax, and enforcement framework for MSMEs, vendors, and buyers under the MSMED Act, 2006 and the Finance Act, 2023 amendment.",
    "readTime": "10–12 min read",
    "href": "https://www.sspartners.in/services/advisory/msmed-act-45-day-payment-rule"
  },
  {
    "slug": "business-succession-plan-before-crisis",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Why Business Families Need a Succession Plan Before They Think They Do",
    "excerpt": "Proactive Will planning, family trust structuring, business continuity frameworks, and Family Constitutions — before crisis forces reactive …",
    "readTime": "11–13 min read",
    "href": "https://www.sspartners.in/services/advisory/business-succession-plan-before-crisis"
  },
  {
    "slug": "shareholder-agreements-indian-startups",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Shareholder Agreements for Indian Startups: Clauses That Protect Founders and Attract Investors",
    "excerpt": "Anti-dilution, drag-along and tag-along, ROFR, vesting, reserved matters, and dispute resolution — essential SHA provisions before your firs…",
    "readTime": "11–13 min read",
    "href": "https://www.sspartners.in/services/advisory/shareholder-agreements-indian-startups"
  },
  {
    "slug": "related-party-transactions-companies-act",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Related Party Transactions Under the Companies Act: Disclosure, Approval, and the Audit Committee's Role",
    "excerpt": "Section 188 approval thresholds, audit committee review, Schedule V disclosure, and common governance failures in RPT compliance.",
    "readTime": "10–12 min read",
    "href": "https://www.sspartners.in/services/advisory/related-party-transactions-companies-act"
  },
  {
    "slug": "huf-tax-succession-planning-2025",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "HUF: Is It Still a Relevant Tax and Succession Planning Tool in 2025?",
    "excerpt": "Income-splitting, separate PAN assessment, partition planning, Section 64 clubbing, and when HUF structures remain worth forming for Hindu f…",
    "readTime": "10–12 min read",
    "href": "https://www.sspartners.in/services/advisory/huf-tax-succession-planning-2025"
  },
  {
    "slug": "csr-section-135-utilisation-certification",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "CSR Under Section 135: Common Errors in Utilisation Certification and How to Avoid Them",
    "excerpt": "Spending thresholds, eligible activities, administrative cap, impact assessment, independent practitioner certification, and UDIN discipline…",
    "readTime": "10–12 min read",
    "href": "https://www.sspartners.in/services/advisory/csr-section-135-utilisation-certification"
  },
  {
    "slug": "four-labour-codes-implementation-status",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "India's Four Labour Codes: Implementation Status, Compliance Gaps, and What Employers Must Prepare",
    "excerpt": "Code on Wages, Industrial Relations Code, Code on Social Security, and OSH Code — state notification status, payroll impact, and employer re…",
    "readTime": "14–16 min read",
    "href": "https://www.sspartners.in/services/advisory/four-labour-codes-implementation-status"
  },
  {
    "slug": "nri-property-transactions-india-fema-tds",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "The NRI's Guide to Property Transactions in India: FEMA, TDS, and Repatriation — All in One Place",
    "excerpt": "Purchase, sale, and rental of Indian property by NRIs — Section 195 TDS, capital gains under ITA 2025, FEMA repatriation limits, DTAA relief…",
    "readTime": "22–26 min read",
    "href": "https://www.sspartners.in/services/advisory/nri-property-transactions-india-fema-tds"
  },
  {
    "slug": "india-entry-vehicle-subsidiary-liaison-branch-office",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Subsidiary, Liaison Office, or Branch Office: Choosing the Right India Entry Vehicle",
    "excerpt": "A Regulatory, Tax, and Strategic Analysis for Foreign Companies Evaluating Commercial Presence in India Under FEMA, the Companies Act, 2013,…",
    "readTime": "22–26 min read",
    "href": "https://www.sspartners.in/services/nri/india-entry-vehicle-subsidiary-liaison-branch-office"
  },
  {
    "slug": "private-family-trust-india-structure-tax",
    "category": "Advisory",
    "date": "2025–2026",
    "icon": "briefcase",
    "title": "Private Family Trusts in India: When They Work, When They Don't, and How to Structure Them Right",
    "excerpt": "A Legal, Tax, and Governance Framework for Business Families, HNIs, NRIs, and Professionals",
    "readTime": "22–26 min read",
    "href": "https://www.sspartners.in/services/advisory/private-family-trust-india-structure-tax"
  },
  {
    "slug": "nri-capital-gains-property-ita-2025",
    "category": "NRI",
    "date": "2025–2026",
    "icon": "globe",
    "title": "NRI Capital Gains on Indian Property: What Changed Under the Income Tax Act, 2025",
    "excerpt": "A comprehensive analysis of capital gains tax rates, indexation, TDS mechanics, repatriation compliance, exemption planning, and FEMA obliga…",
    "readTime": "20–24 min read",
    "href": "https://www.sspartners.in/services/nri/nri-capital-gains-property-ita-2025"
  },
  {
    "slug": "nri-property-repatriation-fema-guide",
    "category": "NRI",
    "date": "2025–2026",
    "icon": "globe",
    "title": "Repatriating Property Sale Proceeds from India: A Step-by-Step FEMA and Tax Compliance Guide for NRIs",
    "excerpt": "FEMA repatriation rules, NRO account routing, the USD 1 million annual limit, Forms 145 and 146, RBI approval, and common failure points whe…",
    "readTime": "20–24 min read",
    "href": "https://www.sspartners.in/services/nri/nri-property-repatriation-fema-guide"
  },
  {
    "slug": "dtaa-mli-india-treaty-benefits-ppt",
    "category": "NRI",
    "date": "2025–2026",
    "icon": "globe",
    "title": "DTAA Benefits After the Multilateral Instrument: Has Your Treaty Changed? A Comprehensive Analysis of the MLI's Impact on India's Tax Treaties",
    "excerpt": "Principal Purpose Test, Limitation of Benefits, Covered Tax Agreements, the notification controversy, key ITAT rulings, CBDT Circular No. 01…",
    "readTime": "22–26 min read",
    "href": "https://www.sspartners.in/services/nri/dtaa-mli-india-treaty-benefits-ppt"
  },
  {
    "slug": "nri-rental-income-india-complete-guide",
    "category": "NRI",
    "date": "2025–2026",
    "icon": "globe",
    "title": "Rental Income from Indian Property: A Complete Compliance Guide for Non-Resident Indians",
    "excerpt": "A comprehensive analysis of income-tax classification and deductions, TDS obligations, NRO account management, GST on commercial leases, FEM…",
    "readTime": "20–24 min read",
    "href": "https://www.sspartners.in/services/nri/nri-rental-income-india-complete-guide"
  },
  {
    "slug": "budget-2022-gst",
    "category": "GST & Indirect Tax",
    "date": "February 06, 2022",
    "icon": "receipt",
    "title": "Budget 2022: GST Updates You Should Know",
    "excerpt": "A summary of GST-related amendments introduced in the Finance Bill, 2022 and how they may affect registrations, returns, and day-to-day compliance.",
    "readTime": "5 min read",
    "href": "/blog-details/budget-2022-gst"
  },
  {
    "slug": "indirect-taxation-basics",
    "category": "GST & Indirect Tax",
    "date": "June 10, 2023",
    "icon": "receipt",
    "title": "Basics of Indirect Taxation",
    "excerpt": "Indirect taxes like GST and customs duties impact pricing and working capital. Learn the structure, compliance basics, and practical implications.",
    "readTime": "5 min read",
    "href": "/blog-details/indirect-taxation-basics"
  },
  {
    "slug": "audit-assurance-updates",
    "category": "Audit & Assurance",
    "date": "August 05, 2023",
    "icon": "landmark",
    "title": "Recent Updates in Audit & Assurance",
    "excerpt": "A practical view of recent audit and assurance updates and best practices to strengthen controls, reporting, and governance.",
    "readTime": "6 min read",
    "href": "/blog-details/audit-assurance-updates"
  },
  {
    "slug": "budget-2022-direct-tax",
    "category": "Direct Taxation",
    "date": "February 06, 2022",
    "icon": "newspaper",
    "title": "Budget 2022: Direct Tax Highlights",
    "excerpt": "Clarification on cess/surcharge treatment and key direct tax updates introduced in Budget 2022—what businesses should watch and how to stay compliant.",
    "readTime": "6 min read",
    "href": "/blog-details/budget-2022-direct-tax"
  },
  {
    "slug": "budget-2022-vda",
    "category": "Direct Taxation",
    "date": "February 06, 2022",
    "icon": "newspaper",
    "title": "Budget 2022: Virtual Digital Assets (VDA) Taxation",
    "excerpt": "Virtual digital assets gained massive traction—Budget 2022 introduced a specific taxation framework. Here’s what it means for transactions and reporting.",
    "readTime": "6 min read",
    "href": "/blog-details/budget-2022-vda"
  },
  {
    "slug": "direct-taxation-overview",
    "category": "Direct Taxation",
    "date": "May 15, 2023",
    "icon": "newspaper",
    "title": "Understanding Direct Taxation in India",
    "excerpt": "Direct taxes are levied directly on individuals and organizations. This overview covers key concepts, compliance requirements, and common pitfalls.",
    "readTime": "6 min read",
    "href": "/blog-details/direct-taxation-overview"
  },
  {
    "slug": "startup-structure-entity-choice",
    "category": "Advisory",
    "date": "November 18, 2024",
    "icon": "briefcase",
    "title": "Private Limited vs LLP: Choosing the Right Structure for Your Startup",
    "excerpt": "How entity selection affects compliance load, fund-raising, DPIIT recognition, and tax—what founders should align before first investment.",
    "readTime": "6 min read",
    "href": "https://www.sspartners.in/services/advisory/private-limited-vs-llp-startup-2025"
  },
  {
    "slug": "msme-udyam-reclassification",
    "category": "Advisory",
    "date": "September 04, 2024",
    "icon": "briefcase",
    "title": "Udyam Re-registration: Classification and Compliance Boundaries",
    "excerpt": "MSME thresholds and reclassification rules affect benefits and filings. A short guide for owners monitoring turnover and investment limits.",
    "readTime": "6 min read",
    "href": "/blog-details/msme-udyam-reclassification"
  },
  {
    "slug": "nri-tax-planning-basics",
    "category": "NRI",
    "date": "September 12, 2023",
    "icon": "globe",
    "title": "NRI Taxation: Key Considerations",
    "excerpt": "A brief guide to tax implications for NRIs, DTAA benefits, and compliance requirements for non-resident Indians.",
    "readTime": "6 min read",
    "href": "/blog-details/nri-tax-planning-basics"
  }
];

export const SITE_ORIGIN = 'https://www.sspartners.in'

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug)
}

export function getBlogUrl(slug: string, origin = SITE_ORIGIN) {
  const post = getBlogBySlug(slug)
  if (!post) return null

  if (/^https?:\/\//.test(post.href)) {
    return post.href
  }

  if (post.href.startsWith('/blog/')) {
    return `${origin}${post.href}`
  }

  if (post.href.startsWith('/blog-details/')) {
    return `${origin}${post.href.replace('/blog-details/', '/blog/')}`
  }

  return `${origin}/blog/${post.slug}`
}

export function getHandbookBySlug(slug: string) {
  return handbooks.find((book) => book.slug === slug)
}
