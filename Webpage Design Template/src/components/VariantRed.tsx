import { Server, Lock, Gauge, Users, Star, ArrowRight, Mail, Phone, Building2, Menu, Database, Cloud, Shield, Headphones } from 'lucide-react';

export function VariantRed() {
  const stats = [
    { number: '15+', label: 'Jahre Erfahrung', color: 'red' },
    { number: '5000+', label: 'Zufriedene Kunden', color: 'teal' },
    { number: '99.99%', label: 'SLA Garantie', color: 'red' },
    { number: '24/7', label: 'Support', color: 'teal' }
  ];

  const services = [
    {
      icon: Server,
      title: 'Managed Hosting',
      description: 'Vollständig verwaltete Hosting-Lösungen mit proaktivem Monitoring',
      features: ['Auto-Scaling', 'Load Balancing', 'DDoS-Schutz'],
      color: 'red'
    },
    {
      icon: Lock,
      title: 'Sichere Colocation',
      description: 'Hochsichere Stellplätze in unseren Tier III+ Rechenzentren',
      features: ['Biometrischer Zugang', 'Videoüberwachung', 'Brandschutz'],
      color: 'teal'
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Maximale Geschwindigkeit durch modernste Hardware und Netzwerk',
      features: ['NVMe SSD', 'AMD EPYC', '100G Backbone'],
      color: 'red'
    }
  ];

  const features = [
    {
      icon: Database,
      title: 'Redundante Systeme',
      description: 'Mehrfach abgesicherte Infrastruktur für höchste Verfügbarkeit',
      color: 'teal'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud',
      description: 'Flexible Cloud-Lösungen für moderne Anforderungen',
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'DSGVO-konform und ISO zertifiziert',
      color: 'teal'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Deutsches Support-Team mit Branchenkenntnissen',
      color: 'red'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Michael Weber',
      company: 'TechCorp GmbH',
      text: 'Seit 5 Jahren verlassen wir uns auf die erstklassige Infrastruktur. Der Support ist hervorragend!'
    },
    {
      name: 'Sarah Müller',
      company: 'E-Commerce Solutions',
      text: 'Die Verfügbarkeit und Performance sind beeindruckend. Beste Entscheidung für unser Business.'
    },
    {
      name: 'Thomas Klein',
      company: 'StartUp Innovations',
      text: 'Flexible Skalierung und faire Preise. Perfekt für unser wachsendes Unternehmen.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[rgb(233,40,39)] to-[rgb(0, 150, 153)] rounded flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-2xl">CloudZone</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="hover:text-[rgb(233,40,39)] transition-colors">Services</a>
              <a href="#why" className="hover:text-[rgb(0, 150, 153)] transition-colors">Warum wir</a>
              <a href="#testimonials" className="hover:text-[rgb(233,40,39)] transition-colors">Referenzen</a>
              <a href="#contact" className="hover:text-[rgb(0, 150, 153)] transition-colors">Kontakt</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#login" className="hover:text-[rgb(0, 150, 153)] transition-colors hidden md:block">Login</a>
              <button className="bg-gradient-to-r from-[rgb(233,40,39)] to-[rgb(0, 150, 153)] px-6 py-2 rounded hover:opacity-90 transition-opacity">
                Beratung
              </button>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full mb-6 border-[rgb(233,40,39)]">
                <Star className="w-4 h-4 text-[rgb(233,40,39)]" />
                <span className="text-sm">Ausgezeichnet mit 5 Sternen</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Premium <span className="text-[rgb(233,40,39)]">Rechenzentrum</span> für Ihr <span className="text-[rgb(0, 150, 153)]">Business</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Hochverfügbare Infrastruktur in deutschen Rechenzentren mit maximaler Sicherheit und Performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[rgb(233,40,39)] px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Kostenlos testen
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-[rgb(0, 150, 153)] text-[rgb(0, 150, 153)] px-8 py-4 rounded-lg hover:bg-[rgb(0, 150, 153)] hover:text-white transition-colors">
                  Demo vereinbaren
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[rgb(233,40,39)]/20 to-[rgb(0, 150, 153)]/20 rounded-2xl overflow-hidden border-2 border-[rgb(233,40,39)]/30">
                <img 
                  src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3NjUyNjI2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cloud Computing"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[rgb(233,40,39)] text-white p-6 rounded-xl shadow-2xl">
                <div className="text-3xl mb-1">99.99%</div>
                <div className="text-sm opacity-90">Verfügbarkeit</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[rgb(0, 150, 153)] text-white p-6 rounded-xl shadow-2xl">
                <div className="text-3xl mb-1">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl mb-2 ${
                  stat.color === 'red' ? 'text-[rgb(233,40,39)]' : 'text-[rgb(0, 150, 153)]'
                }`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Unsere Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Maßgeschneiderte Lösungen für jede Anforderung
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-t-4 hover:border-t-current" style={{ color: service.color === 'red' ? 'rgb(233,40,39)' : 'rgb(0, 150, 153)' }}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'red' 
                    ? 'bg-[rgb(233,40,39)] bg-opacity-10' 
                    : 'bg-[rgb(0, 150, 153)] bg-opacity-10'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === 'red' ? 'text-[rgb(233,40,39)]' : 'text-[rgb(0, 150, 153)]'
                  }`} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        service.color === 'red' ? 'bg-[rgb(233,40,39)]' : 'bg-[rgb(0, 150, 153)]'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 flex items-center gap-2 hover:gap-3 transition-all ${
                  service.color === 'red' ? 'text-[rgb(233,40,39)]' : 'text-[rgb(0, 150, 153)]'
                }`}>
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyNjM0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Server Raum"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(233,40,39)]/10 to-[rgb(0, 150, 153)]/10"></div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl mb-6">Warum CloudZone wählen?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Als einer der führenden Rechenzentrum-Anbieter in Deutschland bieten wir Ihnen mehr als nur Serverplatz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-start gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      feature.color === 'red' 
                        ? 'bg-[rgb(233,40,39)] bg-opacity-10' 
                        : 'bg-[rgb(0, 150, 153)] bg-opacity-10'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        feature.color === 'red' ? 'text-[rgb(233,40,39)]' : 'text-[rgb(0, 150, 153)]'
                      }`} />
                    </div>
                    <div>
                      <h3 className="mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Was unsere Kunden sagen</h2>
            <p className="text-xl text-gray-600">Vertrauen von über 5.000 Unternehmen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-sm border-l-4 ${
                index % 2 === 0 ? 'border-[rgb(233,40,39)]' : 'border-[rgb(0, 150, 153)]'
              }`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 fill-current ${
                      index % 2 === 0 ? 'text-[rgb(233,40,39)]' : 'text-[rgb(0, 150, 153)]'
                    }`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(233,40,39)] via-purple-600 to-[rgb(0, 150, 153)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Bereit durchzustarten?</h2>
          <p className="text-xl mb-8 opacity-90">
            Testen Sie unsere Premium-Infrastruktur 30 Tage kostenlos und unverbindlich
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[rgb(233,40,39)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Jetzt kostenlos starten
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-[rgb(0, 150, 153)] transition-colors">
              Termin vereinbaren
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(233,40,39)] to-[rgb(0, 150, 153)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Telefon</h3>
              <p className="text-gray-600">+49 (0) 69 9876 5432</p>
              <p className="text-sm text-gray-500 mt-1">Mo-Fr 08:00 - 20:00 Uhr</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(0, 150, 153)] to-[rgb(233,40,39)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">E-Mail</h3>
              <p className="text-gray-600">kontakt@cloudzone.de</p>
              <p className="text-sm text-gray-500 mt-1">Antwort innerhalb 2 Stunden</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(233,40,39)] to-[rgb(0, 150, 153)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Standort</h3>
              <p className="text-gray-600">Frankfurt am Main</p>
              <p className="text-sm text-gray-500 mt-1">Hauptsitz & Rechenzentrum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(233,40,39)] to-[rgb(0, 150, 153)] rounded flex items-center justify-center">
                  <Server className="w-6 h-6" />
                </div>
                <span className="text-xl">CloudZone</span>
              </div>
              <p className="text-gray-400">
                Premium Rechenzentrum-Services made in Germany. Sicherheit, Performance und Service auf höchstem Niveau.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Cloud Server</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Dedicated Server</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Colocation</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Managed Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Dokumentation</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">SLA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; 2025 CloudZone. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[rgb(0, 150, 153)] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
