export const site = {
  name: 'Sandeep Singla',
  displayName: 'CA. Sandeep Singla',
  shortName: 'SS',
  qualifications: 'B.Com, FCA, LLB',
  title: 'Managing Partner | Sandeep Singla & Associates',
  email: 'info@sspartners.in',
  phone: '+91-9560181790',
  address:
    'E-127, Ground Floor, Sushant Shopping Arcade, Sushant Lok-1, Gurgaon - 122009, Haryana',
  tagline:
    'Managing Partner at Sandeep Singla & Associates — audit, taxation, corporate advisory and regulatory compliance.',
}

export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Handbook', href: '/#handbook' },
  { label: 'Blogs', href: '/#blogs' },
]

export const contactSection = {
  eyebrow: "Let's talk",
  title: 'Book a confidential consultation.',
  description:
    "Discovery calls are complimentary and run 30 minutes. Share a brief and I'll personally respond within one business day.",
  confidentialNote: '100% confidential. Replies within 1 business day.',
  submitLabel: 'Request consultation',
  submitSuccessLabel: "Thank you — I'll be in touch",
  serviceOptions: [
    'Tax Advisory',
    'Audit & Assurance',
    'Advisory & Consulting',
    'GST & Indirect Tax',
    'Non-Resident & International',
    'Compliance',
    'Corporate Advisory',
  ],
}

export const profile = {
  aboutHeading: 'About Me',
  certificationsHeading: 'Certifications',
  membershipsHeading: 'Member',
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

export const blogs = [
  {
    slug: 'budget-2026-what-founders-miss',
    category: 'Tax',
    date: '12 May 2026',
    icon: 'newspaper',
    title: 'Budget 2026: What founders still get wrong',
    excerpt:
      'A concise look at the Budget provisions that most commonly affect growing businesses — and the planning gaps we see in practice.',
    readTime: '8 min read',
    content: [
      'Every Budget brings a wave of commentary. For founders and finance heads, the real task is separating headline changes from provisions that will actually affect cash flow, compliance, and capital allocation over the next 12–24 months.',
      'In our recent client conversations, three themes keep recurring: revised expectations around withholding and reporting, the continued emphasis on traceability of transactions, and the need for documentation that stands up to scrutiny — not just at year-end, but throughout the year.',
      'Founders often focus on the rate changes but under-invest in process. A lower effective rate is of limited value if input credits are delayed, TDS positions are unclear, or related-party arrangements lack contemporaneous support.',
      'Our practical recommendation: run a post-Budget diagnostic on your entity structure, incentive utilisation, and compliance calendar. Small adjustments early are far less costly than corrections during assessment or investor diligence.',
    ],
  },
  {
    slug: 'gst-refunds-inverted-duty-2026',
    category: 'GST',
    date: '28 April 2026',
    icon: 'receipt',
    title: 'GST refunds in inverted duty structures: a 2026 playbook',
    excerpt:
      'How to approach refund claims where input GST exceeds output GST — and how to avoid the delays that stall working capital.',
    readTime: '11 min read',
    content: [
      'Inverted duty structures — where inputs attract a higher GST rate than outputs — are common in manufacturing and processing industries. Refund of accumulated input tax credit is a statutory right, but the path to timely realisation is often uneven.',
      'The most frequent causes of delay are mismatches between GSTR-1 and GSTR-3B, incomplete documentation linking inputs to outputs, and inconsistent classification positions across branches or contracts.',
      'Before filing, reconcile ledgers, contracts, and HSN mappings. Ensure the refund application tells a coherent story: what you supply, what you procure, and why credit accumulation is structural rather than an error.',
      'Where refunds are material to working capital, treat them as a recurring compliance process — not a once-a-year exercise. Regular monitoring reduces interest cost and surprises during departmental review.',
    ],
  },
  {
    slug: 'audit-committee-cadence',
    category: 'Governance',
    date: '15 March 2026',
    icon: 'landmark',
    title: 'Why your audit committee should meet more often than quarterly',
    excerpt:
      'Governance expectations are rising. A quarterly rhythm may no longer be enough for boards facing rapid regulatory change.',
    readTime: '6 min read',
    content: [
      'Audit committees are being asked to oversee more — fraud risk, IT controls, related-party transactions, and whistle-blower mechanisms — often with the same quarterly meeting calendar used a decade ago.',
      'More frequent, shorter check-ins allow the committee to review emerging issues before they become year-end findings. This is especially relevant for companies preparing for listing, fundraising, or group restructuring.',
      'A practical cadence blends formal quarterly meetings with brief monthly updates on litigation, tax demands, major contracts, and internal audit progress. Documentation of these discussions strengthens the governance trail.',
      'The goal is not more bureaucracy, but earlier visibility. Boards that see problems in real time make better decisions — and auditors can align their work with areas of genuine risk.',
    ],
  },
]

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug)
}

export function getHandbookBySlug(slug: string) {
  return handbooks.find((book) => book.slug === slug)
}
