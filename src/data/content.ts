export type ThemePreference = 'light' | 'dark' | 'system'

export const site = {
  name: 'Gamalliel Tamaca',
  title: 'Gamalliel Tamaca — IT Support Engineer & Web Developer',
  description:
    'IT Support Engineer and Web Developer building websites, dashboards, internal tools, and systems — with real-world IT operations, cloud, and automation experience.',
  url: 'https://gamalliel-tamaca.pages.dev',
  email: 'tamacagamalliel@gmail.com',
  phone: '+63 950 859 7405',
  location: 'Quezon City, Philippines',
  linkedin: 'https://www.linkedin.com/in/gamalliel-tamaca-540aba332/',
  github: '', // add when available
  cvPath: '/resume',
} as const

/** Easy to flip later without hunting through components */
export const availability = {
  open: true,
  label: 'Open to opportunities',
  detail: 'IT Support · Technical Support · Web Development · Freelance Projects',
} as const

export const hero = {
  label: 'GAMALLIEL TAMACA',
  roleLines: ['IT Support Engineer', '& Web Developer'],
  statement:
    'I build websites, systems, and digital tools that turn ideas into usable products — with an IT operations mindset behind every interface.',
} as const

export type SkillId =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'apis'
  | 'responsive'
  | 'incident'
  | 'troubleshooting'
  | 'access'
  | 'production'
  | 'user-support'
  | 'aws'
  | 'monitoring'
  | 'cloudflare'
  | 'health-checks'
  | 'automation'
  | 'webhooks'
  | 'n8n'
  | 'hubspot'
  | 'zendesk'
  | 'sql'
  | 'typescript'
  | 'javascript'
  | 'html-css'
  | 'dashboard'
  | 'uiux'

export type Skill = {
  id: SkillId
  label: string
  group: 'Development' | 'IT Support' | 'Cloud / Infrastructure' | 'Automation' | 'Tools'
  relatedProjects?: string[]
  relatedExperience?: string[]
}

export const skills: Skill[] = [
  { id: 'frontend', label: 'Frontend', group: 'Development', relatedProjects: ['trends-themes', 'ashanty', 'instag', 'netbank-dashboard'] },
  { id: 'backend', label: 'Backend', group: 'Development', relatedProjects: ['netbank-dashboard'] },
  { id: 'databases', label: 'Databases', group: 'Development', relatedProjects: ['netbank-dashboard'], relatedExperience: ['netbank'] },
  { id: 'apis', label: 'APIs', group: 'Development', relatedProjects: ['netbank-dashboard'], relatedExperience: ['netbank'] },
  { id: 'responsive', label: 'Responsive Design', group: 'Development', relatedProjects: ['trends-themes', 'ashanty', 'instag'] },
  { id: 'typescript', label: 'TypeScript', group: 'Development', relatedProjects: ['trends-themes', 'ashanty', 'instag'] },
  { id: 'javascript', label: 'JavaScript', group: 'Development', relatedProjects: ['trends-themes', 'ashanty', 'instag'] },
  { id: 'html-css', label: 'HTML / CSS', group: 'Development', relatedProjects: ['trends-themes', 'ashanty', 'instag'] },
  { id: 'uiux', label: 'UI / UX', group: 'Development', relatedProjects: ['trends-themes', 'ashanty', 'instag'] },
  { id: 'dashboard', label: 'Dashboards', group: 'Development', relatedProjects: ['netbank-dashboard'], relatedExperience: ['netbank'] },
  { id: 'sql', label: 'SQL', group: 'Development', relatedProjects: ['netbank-dashboard'], relatedExperience: ['netbank'] },
  { id: 'incident', label: 'Incident Management', group: 'IT Support', relatedExperience: ['netbank', 'stefanini', 'taskus'] },
  { id: 'troubleshooting', label: 'Troubleshooting', group: 'IT Support', relatedExperience: ['netbank', 'stefanini', 'taskus'] },
  { id: 'access', label: 'Access Management', group: 'IT Support', relatedExperience: ['netbank'] },
  { id: 'production', label: 'Production Support', group: 'IT Support', relatedExperience: ['netbank'] },
  { id: 'user-support', label: 'User Support', group: 'IT Support', relatedExperience: ['netbank', 'stefanini', 'taskus'] },
  { id: 'aws', label: 'AWS', group: 'Cloud / Infrastructure', relatedExperience: ['netbank'], relatedProjects: ['netbank-dashboard'] },
  { id: 'monitoring', label: 'Monitoring', group: 'Cloud / Infrastructure', relatedExperience: ['netbank'] },
  { id: 'cloudflare', label: 'Cloudflare', group: 'Cloud / Infrastructure', relatedProjects: ['trends-themes', 'ashanty', 'instag', 'netbank-dashboard'] },
  { id: 'health-checks', label: 'System Health Checks', group: 'Cloud / Infrastructure', relatedExperience: ['netbank'] },
  { id: 'automation', label: 'Workflow Automation', group: 'Automation', relatedExperience: ['netbank'] },
  { id: 'webhooks', label: 'Webhooks', group: 'Automation', relatedExperience: ['netbank'] },
  { id: 'n8n', label: 'n8n', group: 'Automation', relatedExperience: ['netbank'] },
  { id: 'hubspot', label: 'HubSpot', group: 'Tools', relatedExperience: ['netbank'] },
  { id: 'zendesk', label: 'Zendesk', group: 'Tools', relatedExperience: ['netbank', 'taskus'] },
]

export type Project = {
  id: string
  number: string
  title: string
  category: string
  status: 'live' | 'private' | 'archived'
  featured?: boolean
  oneLiner: string
  role: string
  focus: string
  tech: string[]
  skillIds: SkillId[]
  liveUrl?: string
  year: string
  overview: string
  context: string
  problem: string
  approach: string
  design: string
  development: string
  challenges: string
  outcome: string
  reflection: string
  demonstrates: string[]
  architecture?: { label: string; steps: string[] }
  features: string[]
  previewTone: 'warm' | 'cool' | 'ink' | 'system'
}

export const projects: Project[] = [
  {
    id: 'trends-themes',
    number: '01',
    title: 'Trends & Themes',
    category: 'Client Website · Event Organizer / Event Design',
    status: 'live',
    featured: true,
    oneLiner:
      'A real client business website for an event organizer and designer — services, work, consultation, and contact in one conversion-focused experience.',
    role: 'Web Developer · Design & Frontend',
    focus: 'Business websites, visual storytelling, conversion-focused UX',
    tech: ['TypeScript', 'HTML / CSS', 'Responsive UI', 'Cloudflare Pages'],
    skillIds: ['frontend', 'html-css', 'javascript', 'typescript', 'responsive', 'uiux', 'cloudflare'],
    liveUrl: 'https://trends-and-themes.pages.dev/',
    year: '2025',
    overview:
      'A professional website created for Trends and Themes, an event organizer and designer, to showcase services, past work, and give potential clients a direct way to inquire or book a consultation.',
    context:
      'Built for a real local business that needed more than a social-media presence — a site that could communicate taste, trust, and availability to people planning celebrations.',
    problem:
      'How do you turn a local event-design business into a credible digital presence without looking like a generic template or a placeholder brochure?',
    approach:
      'Lead with atmosphere and clarity: establish trust quickly, make services scannable, show prior work, and make inquiry feel natural. Design for mobile first, where most local inquiries start.',
    design:
      'Editorial pacing, calm typography, and a showroom feel. The UI avoids loud marketing patterns in favor of personal service cues — location, process steps, and direct contact paths.',
    development:
      'Structured content for services, process, gallery, FAQ, and consultation flows. Responsive layouts, accessible interaction patterns, and deployment on Cloudflare Pages for a fast public site.',
    challenges:
      'Balancing a premium visual tone with practical local-business needs — booking intent, clear service scope, and contactability — while keeping content editable and maintainable.',
    outcome:
      'A live business website that presents Trends & Themes as a professional event-design practice with services, work showcase, consultation booking, inquiries, FAQs, and social/contact flows.',
    reflection:
      'Client-facing sites succeed when they feel personal and operational at once. Clarity of services and contact paths matters as much as visual polish.',
    demonstrates: [
      'Client requirements gathering',
      'UI / UX for a real business',
      'Responsive development',
      'Business-focused web design',
      'Conversion-oriented thinking',
      'Lead generation / consultation flow',
    ],
    features: [
      'Service presentation',
      'Work / gallery showroom',
      'Consultation & inquiry flows',
      'FAQ',
      'Mobile-first responsive layout',
      'Social and contact channels',
    ],
    previewTone: 'warm',
  },
  {
    id: 'ashanty',
    number: '02',
    title: 'Ashanty Garcia Portfolio',
    category: 'Personal Branding · Professional Portfolio',
    status: 'live',
    oneLiner:
      'A professional personal portfolio for an Accounting Specialist — translating non-tech expertise into a clear digital identity.',
    role: 'Web Developer · Information Architecture',
    focus: 'Professional positioning outside technology',
    tech: ['TypeScript', 'Responsive Design', 'Professional UX', 'Cloudflare Pages'],
    skillIds: ['frontend', 'responsive', 'uiux', 'typescript', 'html-css', 'cloudflare'],
    liveUrl: 'https://ashanty-garcia-portfolio.pages.dev/',
    year: '2025',
    overview:
      'A personal branding website for Ashanty Kim Garcia, an Accounting Specialist. The site organizes About, Experience, Expertise, Tools, Education, and Contact into a recruiter-friendly structure.',
    context:
      'Built for a professional outside of technology who needed a digital presence that respects the language and priorities of accounting and finance roles.',
    problem:
      'How do you present dense professional information — full-cycle accounting, payroll, tools, credentials — without it reading like a wall of resume text?',
    approach:
      'Design around information hierarchy: lead with positioning, then prove practice through experience, expertise, and systems. Keep the tone precise and calm to match the profession.',
    design:
      'Clean sections with numbered structure, clear typography, and restrained color. The site should feel like a professional document system, not a developer portfolio clone.',
    development:
      'Sectioned content architecture, responsive layouts, and contact pathways for employers and recruiters. Deployed as a fast static site on Cloudflare Pages.',
    challenges:
      'Communicating domain expertise I do not practice daily — listening carefully, structuring content for the audience, and avoiding tech-portfolio visual clichés.',
    outcome:
      'A live professional portfolio that positions Ashanty as an Accounting Specialist and makes experience, tools, education, and contact easy to scan.',
    reflection:
      'Building for non-tech professionals is a product skill: the interface should speak their language, not mine.',
    demonstrates: [
      'Personal branding websites',
      'Information architecture',
      'Professional content hierarchy',
      'Responsive web design',
      'Designing for non-technical professionals',
    ],
    features: [
      'Professional positioning',
      'Experience & expertise presentation',
      'Tools / systems overview',
      'Education & credentials',
      'Recruiter-friendly contact paths',
    ],
    previewTone: 'cool',
  },
  {
    id: 'instag',
    number: '03',
    title: 'Experimental Portfolio',
    category: 'Experimental Portfolio Interface',
    status: 'live',
    oneLiner:
      'A social-inspired portfolio experiment — proving the interface itself can be part of the work, not just a container for it.',
    role: 'Designer · Frontend Experimentation',
    focus: 'Interactive UI, social-inspired UX, component-driven frontend',
    tech: ['Frontend', 'Interactive UI', 'Responsive Design', 'Cloudflare Pages'],
    skillIds: ['frontend', 'uiux', 'responsive', 'javascript', 'typescript', 'cloudflare'],
    liveUrl: 'https://gamalliel-instag.pages.dev/',
    year: '2025',
    overview:
      'An experimental personal portfolio with a social-inspired identity — profile-style structure spanning Projects, Experience, Skills, About, Certifications, Education, and Contact. Intentionally built as a product-like interface, not a template.',
    context:
      'A self-initiated experiment to test interaction patterns and personal branding beyond a linear resume layout — and to show frontend craft beyond standard portfolio templates.',
    problem:
      'Traditional portfolios can feel static. What happens if the portfolio itself behaves like a product people explore, not a document they skim?',
    approach:
      'Borrow familiar social-media interaction cues, then adapt them for professional content. Keep the experiment honest — label it as exploration, not a replacement for clarity.',
    design:
      'Profile-first framing, modular content blocks, and interaction that invites browsing. Visual identity centered on a personal brand mark.',
    development:
      'Interactive frontend patterns, responsive behavior, and content modules for career information. Deployed on Cloudflare Pages.',
    challenges:
      'Balancing novelty with usability — experimental navigation must still let recruiters find experience, skills, and contact quickly.',
    outcome:
      'A live experimental portfolio that demonstrates frontend creativity and product-like interaction design.',
    reflection:
      'Experiments teach constraints. Creativity in a portfolio only works when the visitor can still answer: who is this person, and what can they build?',
    demonstrates: [
      'Interactive UI development',
      'Social-inspired UX adaptation',
      'Component-driven frontend',
      'Interaction design',
      'Responsive experimental interfaces',
    ],
    features: [
      'Social-inspired interaction patterns',
      'Profile-style information architecture',
      'Projects, experience, skills modules',
      'Certifications & education',
      'Responsive experimental UI',
    ],
    previewTone: 'ink',
  },
  {
    id: 'netbank-dashboard',
    number: '04',
    title: 'Netbank Transaction Dashboard',
    category: 'Private Enterprise Dashboard · Internal IT Operations',
    status: 'private',
    oneLiner:
      'Confidential internal dashboard for monitoring and visualizing outgoing and incoming transaction data — built within IT Operations.',
    role: 'Full Stack Developer within IT Operations',
    focus: 'Dashboards, data visualization, internal operations tooling',
    tech: ['Dashboard UI', 'Data Processing', 'Cloudflare', 'SQL / Reporting'],
    skillIds: ['dashboard', 'frontend', 'backend', 'databases', 'sql', 'apis', 'cloudflare', 'aws', 'production'],
    year: '2025–2026',
    overview:
      'A dashboard developed within IT Operations for monitoring and visualizing outgoing and incoming transaction data. Live production access and confidential implementation details are not publicly available.',
    context:
      'Developed inside a regulated banking IT environment where production support, access control, and reporting accuracy matter as much as the interface.',
    problem:
      'Operations teams needed clearer visibility into transaction activity and reporting — without relying only on ad-hoc queries and scattered tools.',
    approach:
      'Treat the dashboard as internal product: prioritize monitoring, reporting clarity, and operational workflows over decorative UI. Align with production support realities.',
    design:
      'Functional dashboard patterns — status, tables, filters, and reporting views oriented toward operators who already know the domain.',
    development:
      'Dashboard visualization, data processing for outgoing/incoming transaction monitoring, and reporting support. Built with production-oriented constraints and internal tooling standards.',
    challenges:
      'Working within confidentiality, compliance, and production constraints. This public case study stays high-level by design — no credentials, endpoints, internal URLs, or sensitive financial detail.',
    outcome:
      'An internal dashboard used to support transaction monitoring, reporting, and IT operations workflows. Details remain private because the project contains confidential internal systems and production information.',
    reflection:
      'Internal tools reveal how software actually lives in production. Building for operators changed how I think about reliability, clarity, and escalation paths.',
    demonstrates: [
      'Transaction monitoring concepts',
      'Data visualization for operators',
      'Internal tooling / dashboard development',
      'Full-stack work within IT Operations',
      'Production-oriented systems thinking',
    ],
    architecture: {
      label: 'High-level flow (non-confidential)',
      steps: ['Operator', 'Dashboard UI', 'Internal APIs / data layer', 'Reporting views', 'Operations use'],
    },
    features: [
      'Outgoing transaction monitoring',
      'Incoming transaction monitoring',
      'Reporting & visualization',
      'Data processing for operations',
      'Operational reporting support',
    ],
    previewTone: 'system',
  },
]

export type Experience = {
  id: string
  yearLabel: string
  company: string
  role: string
  dates: string
  environment: string
  summary: string
  responsibilities: string[]
  tools: string[]
  contributions: string[]
  skillIds: SkillId[]
  emphasis?: boolean
}

export const experience: Experience[] = [
  {
    id: 'netbank',
    yearLabel: '2026',
    company: 'Netbank',
    role: 'IT Support Engineer',
    dates: 'December 2025 – August 2026',
    environment: 'Banking / Fintech · QA & Production',
    summary:
      'L1–L2 IT support with full-stack and systems development responsibilities inside IT Operations — production support, access management, monitoring, reporting, and internal tooling.',
    responsibilities: [
      'L1–L2 IT support across Core Banking Systems in QA and Production environments',
      'Onboarding / offboarding and role-based access administration',
      'Security and compliance-aligned account administration',
      'Incident logging and ticket handling',
      'Production support with SLA awareness',
      'AWS monitoring, health checks, and operational reporting',
      'SQL queries and reporting support',
      'Webhook activation and IP configuration support',
      'Process improvement and internal systems development',
    ],
    tools: ['HubSpot', 'Zendesk', 'AWS', 'SQL', 'Microsoft / Workspace tooling', 'Internal banking systems'],
    contributions: [
      'Netbank outgoing / incoming transaction dashboard (internal)',
      'Transaction reporting support for 2025 and 1H 2026',
      'CPRF approval automation concept / workflow',
      'Full Stack development within IT Operations',
    ],
    skillIds: [
      'incident',
      'troubleshooting',
      'access',
      'production',
      'user-support',
      'aws',
      'monitoring',
      'health-checks',
      'sql',
      'webhooks',
      'automation',
      'hubspot',
      'zendesk',
      'dashboard',
      'apis',
    ],
    emphasis: true,
  },
  {
    id: 'stefanini',
    yearLabel: '2025',
    company: 'Stefanini Philippines',
    role: 'IT Helpdesk Technician',
    dates: '2025',
    environment: 'Enterprise IT Helpdesk · Tier 1',
    summary:
      'Transition from customer support into professional IT support — Tier 1 helpdesk across collaboration and endpoint platforms.',
    responsibilities: [
      'Tier 1 IT support and troubleshooting',
      'User support across productivity and remote-access tools',
      'Ticket handling in a structured service environment',
    ],
    tools: ['Microsoft 365', 'Google Workspace', 'Zoom', 'Citrix Workspace', 'Zscaler', 'ServiceNow'],
    contributions: [
      'Built foundational enterprise IT support habits: triage, escalation awareness, and clear user communication',
    ],
    skillIds: ['user-support', 'troubleshooting', 'incident'],
  },
  {
    id: 'taskus',
    yearLabel: '2023–2025',
    company: 'TaskUs',
    role: 'Customer Service / User Support',
    dates: 'November 2023 – May 2025',
    environment: 'SLA-driven customer support',
    summary:
      'Where structured problem-solving and customer-facing support started — email support, troubleshooting, and SLA-aware delivery.',
    responsibilities: [
      'Email and user support in SLA-driven environments',
      'Troubleshooting and customer-facing problem solving',
      'Working inside ticketing and internal tooling workflows',
    ],
    tools: ['Zendesk', 'Retool'],
    contributions: [
      'Developed communication and triage habits that later transferred into IT support and production environments',
    ],
    skillIds: ['user-support', 'troubleshooting', 'zendesk'],
  },
]

export const differentiator = {
  headline: 'I build with an operations mindset.',
  body: 'My background in IT support means I don’t only think about how an interface looks. I think about how systems behave, how users interact with them, how issues are diagnosed, and how workflows can be improved.',
  pillars: [
    {
      title: 'Build',
      text: 'Websites · Dashboards · Internal Tools · Web Applications',
    },
    {
      title: 'Support',
      text: 'IT Troubleshooting · Incident Management · User Support · Access Management',
    },
    {
      title: 'Connect',
      text: 'APIs · Webhooks · Integrations · Automation',
    },
    {
      title: 'Operate',
      text: 'Cloud Infrastructure · Monitoring · Production Support · Documentation',
    },
  ],
  points: [
    {
      title: 'Support-rooted product sense',
      text: 'I’ve sat with real user problems under SLAs — that changes how I design flows and error states.',
    },
    {
      title: 'Systems + interfaces',
      text: 'Dashboards, access, monitoring, and reporting live next to the UI in my work, not after it.',
    },
    {
      title: 'Ship and sustain',
      text: 'I care about what happens after deploy: health checks, tickets, and whether the tool still helps operators.',
    },
  ],
} as const

export const experiencePath = [
  'User / Customer Support',
  'IT Helpdesk',
  'IT Support Engineer',
  'Systems · Development',
] as const

export const contactCopy = {
  headline: "Let's build something.",
  lede: "Have a project, an opportunity, or an idea you'd like to turn into a website or system? Let's talk — no fake “message sent” forms, just real channels.",
} as const

export const about = {
  headline: 'From support queues to systems I help build.',
  body: [
    'I started in customer and user support at TaskUs, learning how to diagnose problems under pressure and communicate clearly when something breaks.',
    'That path moved into professional IT at Stefanini Philippines as an IT Helpdesk Technician, then into Netbank as an IT Support Engineer — where production support, access management, monitoring, and reporting met full-stack development inside IT Operations.',
    'Alongside that progression, I build websites, portfolios, and internal tools — practical products for real businesses and professionals, not just demos.',
  ],
} as const

export const education = {
  school: 'National Teachers College',
  degree: 'Bachelor of Science in Information Technology',
  years: '2021–2026',
} as const

export const certifications = [
  {
    id: 'aws-foundations',
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    id: 'aws-architecting',
    name: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
  },
] as const

export const resumeSnapshot = {
  primaryRole: 'IT Support Engineer · Web Developer',
  experienceFocus: 'IT Operations + Full Stack within IT Ops',
  education: 'BS Information Technology · National Teachers College',
  coreTech: ['TypeScript', 'Frontend', 'SQL', 'Cloudflare', 'AWS', 'Dashboards'],
  certifications: ['AWS Academy Cloud Foundations', 'AWS Academy Cloud Architecting'],
} as const

export const portfolioStack = [
  'React',
  'TypeScript',
  'Vite',
  'CSS',
  'Cloudflare Pages',
] as const

export const contactIntents = [
  { id: 'job', label: 'Job opportunity' },
  { id: 'freelance', label: 'Freelance project' },
  { id: 'website', label: 'Website' },
  { id: 'collab', label: 'Technical collaboration' },
  { id: 'other', label: 'Other' },
] as const
