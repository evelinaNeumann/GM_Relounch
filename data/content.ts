export type Solution = {
  id: string
  title: string
  text: string
  points: string[]
}

export type ServiceMeta = {
  label: string
  value: string
}

export type Service = {
  id: string
  icon: string
  title: string
  text: string
  meta: ServiceMeta[]
}

export type Industry = {
  id: string
  title: string
  text: string
  chips: string[]
}

export type Job = {
  id: string
  title: string
  text: string
  location: string
  type: string
}

export const solutions: Solution[] = [
  {
    id: 'security',
    title: 'Datensicherheit erhöhen',
    text: 'Reduzieren Sie Risiken durch Auslagerung von Systemen in ein zertifiziertes Rechenzentrum.',
    points: [
      'Physische & logische Security',
      'Georedundante Backups',
      'Monitoring & Alarmierung',
    ],
  },
  {
    id: 'outsourcing',
    title: 'IT-Betrieb auslagern',
    text: 'Übergeben Sie Betrieb, Monitoring und Patching an ein spezialisiertes Team.',
    points: [
      'Managed-Services-Verträge',
      'Transparente SLAs',
      'Dedizierte Ansprechpartner:innen',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud modernisieren',
    text: 'Hybride Szenarien mit Private Cloud, Public Cloud und On-Prem in einer Architektur.',
    points: [
      'Private Cloud im Rechenzentrum',
      'Anbindung an Hyperscaler',
      'Compliance-konforme Datenhaltung',
    ],
  },
]

export const services: Service[] = [
  {
    id: 'colocation',
    icon: '🗄️',
    title: 'Colocation & Housing',
    text: 'Rack-, Cage- und Raumlösungen für Ihre eigene Hardware in einem hochsicheren Datacenter.',
    meta: [
      { label: 'Strom', value: 'N+1, Messung pro Rack' },
      { label: 'Anbindung', value: 'Carrier-neutral, Peering' },
      { label: 'Sicherheit', value: 'Zutrittskontrolle, Video, 24/7' },
    ],
  },
  {
    id: 'cloud-hosting',
    icon: '☁️',
    title: 'Cloud & Hosting',
    text: 'Virtuelle Server, Managed Kubernetes und skalierbare Speicherlösungen.',
    meta: [
      { label: 'Virtualisierung', value: 'VMware / KVM' },
      { label: 'Storage', value: 'S3 kompatibel, Block & Object' },
      { label: 'Backup', value: 'Versioniert & verschlüsselt' },
    ],
  },
  {
    id: 'managed',
    icon: '🛠️',
    title: 'Managed Services',
    text: 'Betrieb von Betriebssystem, Middleware und ausgewählten Applikationen.',
    meta: [
      { label: 'Monitoring', value: '24/7 NOC' },
      { label: 'Patch-Management', value: 'Regelmäßige Zyklen' },
      { label: 'Support', value: 'Response-Zeiten nach SLA' },
    ],
  },
  {
    id: 'consulting',
    icon: '💡',
    title: 'Consulting & Strategie',
    text:
      'Strategie-, Technologie- und Complianceberatung für planbare IT-Investitionen.',
    meta: [
      { label: 'Schwerpunkte', value: 'Strategie & Prozesse' },
      { label: 'Technologie', value: 'Innovation & Umsetzung' },
      { label: 'Security', value: 'Compliance & Risk Management' },
    ],
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Security Services',
    text: 'Schutzschichten von Perimeter bis Workload – abgestimmt auf Risiko und Compliance.',
    meta: [
      { label: 'Perimeter', value: 'Firewall, WAF, VPN' },
      { label: 'Detection', value: 'Monitoring & Alarmierung' },
      { label: 'Compliance', value: 'ISO 27001, Prozesse & Doku' },
    ],
  },
  {
    id: 'network',
    icon: '🌐',
    title: 'Network & Connectivity',
    text: 'Redundante Anbindungen, Segmentierung und sichere Verbindungen zu Standorten & Clouds.',
    meta: [
      { label: 'Anbindung', value: 'Carrier-neutral, BGP' },
      { label: 'Segmente', value: 'VLAN, VRF, Firewall-Zonen' },
      { label: 'Optionen', value: 'DDoS-Protection, SD-WAN' },
    ],
  },
]

export const industries: Industry[] = [
  {
    id: 'sme',
    title: 'Mittelstand',
    text: 'Stabile IT-Grundlagen für wachsende Unternehmen.',
    chips: ['ERP & Warenwirtschaft', 'Remote Work', 'File Services'],
  },
  {
    id: 'public',
    title: 'Öffentliche Verwaltung',
    text: 'Datensouveränität und Compliance konstant im Fokus.',
    chips: ['Bürgerportale', 'Fachanwendungen', 'Archivierung'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Plattformen',
    text: 'Verfügbarkeit und Performance für digitale Geschäftsmodelle.',
    chips: ['Shopsysteme', 'APIs', 'Zahlungsabwicklung'],
  },
]

export const jobs: Job[] = [
  {
    id: 'admin',
    title: 'Systemadministrator:in Datacenter',
    text: 'Du betreust physische und virtuelle Infrastruktur im Rechenzentrum.',
    location: 'Hannover',
    type: 'Vollzeit',
  },
  {
    id: 'network',
    title: 'Network Engineer (m/w/d)',
    text: 'Planung, Aufbau und Betrieb redundanter Netzwerkinfrastruktur.',
    location: 'Hannover / Remote',
    type: 'Vollzeit / Teilzeit',
  },
]
