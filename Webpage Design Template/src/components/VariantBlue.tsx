import { Server, Shield, Database, BarChart3, CheckCircle, ArrowRight, Mail, Phone, MapPin, Calendar, User, Search, ChevronRight } from 'lucide-react';

export function VariantBlue() {
  const services = [
    {
      icon: Server,
      title: 'Cloud Server',
      excerpt: 'Flexible und skalierbare Cloud-Infrastruktur für Ihre Anwendungen',
      features: ['99.9% Uptime', 'Automatische Backups', 'DDoS-Schutz']
    },
    {
      icon: Database,
      title: 'Managed Hosting',
      excerpt: 'Vollständig verwaltetes Hosting mit proaktivem Monitoring',
      features: ['24/7 Support', 'Automatische Updates', 'Performance-Optimierung']
    },
    {
      icon: Shield,
      title: 'Security Services',
      excerpt: 'Umfassende Sicherheitslösungen für Ihre Infrastruktur',
      features: ['Firewall', 'SSL-Zertifikate', 'Sicherheits-Audits']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      excerpt: 'Echtzeit-Überwachung und detaillierte Analysen',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alert System']
    }
  ];

  const blogPosts = [
    {
      title: 'Die Zukunft der Cloud-Technologie',
      excerpt: 'Erfahren Sie mehr über die neuesten Trends und Entwicklungen im Cloud Computing...',
      date: '10. Dezember 2025',
      author: 'Thomas Weber',
      category: 'Cloud Computing'
    },
    {
      title: 'Best Practices für Datensicherheit',
      excerpt: 'Wichtige Tipps und Strategien zum Schutz Ihrer sensiblen Daten im Rechenzentrum...',
      date: '5. Dezember 2025',
      author: 'Sarah Klein',
      category: 'Sicherheit'
    },
    {
      title: 'Skalierung leicht gemacht',
      excerpt: 'Wie Sie Ihre Infrastruktur effizient skalieren und Kosten optimieren können...',
      date: '1. Dezember 2025',
      author: 'Michael Bauer',
      category: 'Performance'
    }
  ];

  const features = [
    'ISO 27001 zertifiziert',
    '24/7 Deutscher Support',
    '99.99% SLA Garantie',
    'Redundante Systeme',
    'Tier III+ Rechenzentrum',
    'Green Energy'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[rgb(0, 150, 153)] rounded flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg">DataHost Pro</div>
                <div className="text-xs text-gray-500">Rechenzentrum Solutions</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-gray-700 hover:text-[rgb(0, 150, 153)] transition-colors">Start</a>
              <a href="#services" className="text-gray-700 hover:text-[rgb(0, 150, 153)] transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[rgb(0, 150, 153)] transition-colors">Über uns</a>
              <a href="#blog" className="text-gray-700 hover:text-[rgb(0, 150, 153)] transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-[rgb(0, 150, 153)] transition-colors">Kontakt</a>
            </nav>
            <button className="bg-[rgb(0, 150, 153)] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-[rgb(0, 150, 153)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl mb-4">
              Professionelle Rechenzentrum-Lösungen
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Zuverlässige, sichere und hochperformante Hosting-Services für Ihr Business. Made in Germany.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[rgb(0, 150, 153)] px-6 py-3 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
                Jetzt starten
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded hover:bg-white/10 transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-[rgb(0, 150, 153)]">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services Section */}
            <section id="services">
              <div className="bg-white rounded shadow-sm p-6 mb-6">
                <h2 className="text-3xl mb-2 pb-4 border-b-2 border-[rgb(0, 150, 153)]">
                  Unsere Services
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-[rgb(0, 150, 153)] bg-opacity-10 rounded flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-[rgb(0, 150, 153)]" />
                      </div>
                      <h3 className="text-xl mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.excerpt}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[rgb(0, 150, 153)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="inline-flex items-center gap-1 text-[rgb(0, 150, 153)] hover:underline">
                        Weiterlesen
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="mt-12">
              <div className="bg-white rounded shadow-sm p-6 mb-6">
                <h2 className="text-3xl mb-2 pb-4 border-b-2 border-[rgb(0, 150, 153)]">
                  Aktuelles & Blog
                </h2>
              </div>

              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="bg-[rgb(0, 150, 153)] bg-opacity-10 text-[rgb(0, 150, 153)] px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-2xl mb-3 hover:text-[rgb(0, 150, 153)] transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <a href="#" className="inline-flex items-center gap-1 text-[rgb(0, 150, 153)] hover:underline">
                        Artikel lesen
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="border-2 border-[rgb(0, 150, 153)] text-[rgb(0, 150, 153)] px-6 py-2 rounded hover:bg-[rgb(0, 150, 153)] hover:text-white transition-colors">
                  Alle Beiträge anzeigen
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Widget */}
            <div className="bg-white rounded shadow-sm p-6">
              <h3 className="mb-4 pb-3 border-b">Suche</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Suchen..." 
                  className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:border-[rgb(0, 150, 153)]"
                />
                <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
              </div>
            </div>

            {/* Quick Contact Widget */}
            <div className="bg-[rgb(0, 150, 153)] text-white rounded shadow-sm p-6">
              <h3 className="mb-4">Schnellkontakt</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="text-sm opacity-90">Telefon</div>
                    <div>+49 (0) 30 1234 5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="text-sm opacity-90">E-Mail</div>
                    <div>info@datahost-pro.de</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white text-[rgb(0, 150, 153)] px-4 py-2 rounded mt-4 hover:bg-gray-100 transition-colors">
                Nachricht senden
              </button>
            </div>

            {/* Features Widget */}
            <div className="bg-white rounded shadow-sm p-6">
              <h3 className="mb-4 pb-3 border-b">Unsere Vorteile</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[rgb(0, 150, 153)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded shadow-sm p-6">
              <h3 className="text-xl mb-3">Kostenlose Beratung</h3>
              <p className="text-sm text-gray-300 mb-4">
                Unsere Experten beraten Sie gerne zu Ihrer individuellen Lösung.
              </p>
              <button className="w-full bg-[rgb(0, 150, 153)] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity">
                Termin vereinbaren
              </button>
            </div>

            {/* Stats Widget */}
            <div className="bg-white rounded shadow-sm p-6">
              <h3 className="mb-4 pb-3 border-b">In Zahlen</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl text-[rgb(0, 150, 153)] mb-1">15+</div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-3xl text-[rgb(0, 150, 153)] mb-1">8.500+</div>
                  <div className="text-sm text-gray-600">Zufriedene Kunden</div>
                </div>
                <div>
                  <div className="text-3xl text-[rgb(0, 150, 153)] mb-1">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Bereit loszulegen?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit unseren professionellen Hosting-Lösungen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[rgb(0, 150, 153)] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity">
              Jetzt anfragen
            </button>
            <button className="border-2 border-[rgb(0, 150, 153)] text-[rgb(0, 150, 153)] px-8 py-3 rounded hover:bg-[rgb(0, 150, 153)] hover:text-white transition-colors">
              Preise ansehen
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[rgb(0, 150, 153)] rounded flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span>DataHost Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professionelle Rechenzentrum-Lösungen seit 2010. Zuverlässig, sicher und leistungsstark.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Cloud Hosting</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Dedicated Server</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Managed Services</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Colocation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Cookie-Richtlinie</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 DataHost Pro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
