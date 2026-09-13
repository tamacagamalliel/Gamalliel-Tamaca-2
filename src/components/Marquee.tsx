const ITEMS = [
  'IT Support Engineer',
  'Web Developer',
  'Dashboards',
  'Cloudflare Pages',
  'AWS',
  'Production Support',
  'Responsive Design',
  'Automation',
  'SQL Reporting',
  'Access Management',
  'Frontend Engineering',
  'Systems Thinking',
  'Trends & Themes',
  'Experimental Portfolio',
  'Netbank Dashboard',
]

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="site-marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            <em aria-hidden="true">◆</em>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
