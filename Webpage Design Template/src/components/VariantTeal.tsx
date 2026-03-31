import { Server, Shield, Zap, Clock, CheckCircle, ArrowRight, Mail, Phone, MapPin, Award, Users, TrendingUp, Cpu, HardDrive, Network, Globe } from 'lucide-react';

export function VariantTeal() {
  const features = [
    {
      icon: Server,
      title: 'Enterprise Hardware',
      description: 'Intel Xeon & AMD EPYC Prozessoren der neuesten Generation'
    },
    {
      icon: Shield,
      title: 'Maximale Sicherheit',
      description: 'Multi-Layer Security mit Firewall, IDS/IPS und DDoS-Protection'
    },
    {
      icon: Zap,
      title: 'Blitzschnell',
      description: 'NVMe SSD Storage und 100 Gbit/s Netzwerk-Backbone'
    },
    {
      icon: Clock,
      title: 'Rund-um-die-Uhr',
      description: 'Deutschsprachiger 24/7 Premium-Support per Telefon & Chat'
    },
    {
      icon: Network,
      title: 'Redundanz',
      description: 'N+1 redundante Stromversorgung und Netzwerkanbindung'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Standorte in Frankfurt, Berlin, München und Hamburg'
    }
  ];

  const solutions = [
    {
      title: 'Cloud Hosting',
      description: 'Skalierbare Cloud-Infrastruktur für flexible Workloads',
      price: 'ab 49€',
      features: ['Auto-Scaling', 'Pay-as-you-go', 'API-Zugriff', 'Snapshots'],
      icon: Globe
    },
    {
      title: 'Dedicated Server',
      description: 'Exklusive Hardware-Ressourcen für maximale Performance',
      price: 'ab 149€',
      features: ['Root-Zugriff', 'Eigene IP-Adressen', 'RAID-Controller', 'IPMI'],
      icon: Cpu,
      featured: true
    },
    {
      title: 'Colocation',
      description: 'Sichere Stellplätze in unseren Tier III+ Rechenzentren',
      price: 'ab 299€',
      features: ['42U Racks', 'Redundante Kühlung', 'Biometrischer Zugang', 'Cross-Connects'],
      icon: HardDrive
    }
  ];

  const benefits = [
    {
      title: 'Made in Germany',
      description: 'DSGVO-konform, ISO 27001 zertifiziert',
      stat: '100%'
    },
    {
      title: 'SLA Garantie',
      description: 'Vertraglich zugesicherte Verfügbarkeit',
      stat: '99.99%'
    },
    {
      title: 'Aktive Kunden',
      description: 'Vertrauen uns weltweit',
      stat: '12.000+'
    },
    {
      title: 'Jahre Erfahrung',
      description: 'Expertise im Rechenzentrumsbetrieb',
      stat: '18+'
    }
  ];

  const testimonials = [
    {
      name: 'Anna Schmidt',
      position: 'CTO',
      company: 'FinTech Solutions AG',
      image: 'AS',
      text: 'Die Kombination aus Performance und Sicherheit ist unschlagbar. Seit dem Wechsel haben wir null Ausfälle.',
      rating: 5
    },
    {
      name: 'Markus Bauer',
      position: 'IT-Leiter',
      company: 'MediaCorp GmbH',
      image: 'MB',
      text: 'Hervorragender Support und faire Preise. Die Migration verlief reibungslos und professionell.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-[rgb(233,40,39)] rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Server className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <div className="text-xl">SecureData</div>
                <div className="text-xs text-gray-500">Rechenzentrum</div>
              </div>
            </div>
            <div className="hidden lg:flex gap-8">
              <a href="#solutions" className="text-gray-700 hover:text-[rgb(233,40,39)] transition-colors">Lösungen</a>
              <a href="#features" className="text-gray-700 hover:text-[rgb(233,40,39)] transition-colors">Features</a>
              <a href="#company" className="text-gray-700 hover:text-[rgb(233,40,39)] transition-colors">Unternehmen</a>
              <a href="#contact" className="text-gray-700 hover:text-[rgb(233,40,39)] transition-colors">Kontakt</a>
            </div>
            <div className="flex gap-3">
              <button className="hidden md:block border-2 border-[rgb(233,40,39)] text-[rgb(233,40,39)] px-6 py-2.5 rounded-lg hover:bg-[rgb(233,40,39)] hover:text-white transition-all">
                Kundenportal
              </button>
              <button className="bg-[rgb(233,40,39)] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-shadow">
                Beratung
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pt-20 pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[rgb(233,40,39)]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-[rgb(233,40,39)]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-full mb-8 shadow-sm">
                <div className="w-2 h-2 bg-[rgb(233,40,39)] rounded-full animate-pulse"></div>
                <span className="text-sm">Alle Systeme operativ - 100% Verfügbarkeit</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">
                Rechenzentrum der <span className="text-[rgb(233,40,39)]">Zukunft</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Hochverfügbare IT-Infrastruktur in deutschen Tier III+ Rechenzentren. Maximale Sicherheit, Performance und Compliance für Ihr Business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-[rgb(233,40,39)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(233,40,39)]/90 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  Kostenlos beraten lassen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[rgb(233,40,39)] text-[rgb(233,40,39)] px-8 py-4 rounded-lg hover:bg-[rgb(233,40,39)] hover:text-white transition-all">
                  Preise ansehen
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl text-[rgb(233,40,39)] mb-1">99.99%</div>
                  <div className="text-sm text-gray-600">SLA Uptime</div>
                </div>
                <div>
                  <div className="text-3xl text-[rgb(233,40,39)] mb-1">12k+</div>
                  <div className="text-sm text-gray-600">Kunden</div>
                </div>
                <div>
                  <div className="text-3xl text-[rgb(233,40,39)] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjUyNjA0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rechenzentrum"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(233,40,39)]/10 via-transparent to-[rgb(233,40,39)]/10"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[rgb(233,40,39)] max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-[rgb(233,40,39)]" />
                  <span className="text-sm">ISO 27001</span>
                </div>
                <div className="text-xs text-gray-600">Zertifizierte Sicherheit</div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[rgb(233,40,39)] max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-[rgb(233,40,39)]" />
                  <span className="text-sm">100 Gbit/s</span>
                </div>
                <div className="text-xs text-gray-600">Netzwerk-Backbone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2 text-[rgb(233,40,39)]">
                  {benefit.stat}
                </div>
                <div className="mb-1">{benefit.title}</div>
                <div className="text-sm text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Unsere Lösungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von flexiblem Cloud Hosting bis zu dedizierten Servern - wir haben die passende Infrastruktur für Ihre Anforderungen
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl p-8 transition-all ${
                  solution.featured 
                    ? 'border-2 border-[rgb(233,40,39)] shadow-2xl transform lg:scale-105' 
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {solution.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[rgb(233,40,39)] text-white px-6 py-2 rounded-full text-sm">
                    Beliebteste Wahl
                  </div>
                )}
                
                <div className="w-16 h-16 bg-[rgb(233,40,39)] bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-[rgb(233,40,39)]" />
                </div>

                <h3 className="text-2xl mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl text-[rgb(233,40,39)]">{solution.price}</span>
                  <span className="text-gray-600">/Monat</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[rgb(233,40,39)]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg transition-all ${
                  solution.featured
                    ? 'bg-[rgb(233,40,39)] text-white hover:bg-[rgb(233,40,39)]/90 shadow-lg'
                    : 'border-2 border-[rgb(233,40,39)] text-[rgb(233,40,39)] hover:bg-[rgb(233,40,39)] hover:text-white'
                }`}>
                  Mehr erfahren
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Was uns auszeichnet</h2>
            <p className="text-xl text-gray-600">Enterprise-Grade Infrastruktur für höchste Ansprüche</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="w-14 h-14 bg-[rgb(233,40,39)] bg-opacity-10 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-[rgb(233,40,39)]" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Kundenstimmen</h2>
            <p className="text-xl text-gray-600">Was unsere Kunden über uns sagen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[rgb(233,40,39)]"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[rgb(233,40,39)] rounded-full flex items-center justify-center text-white text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[rgb(233,40,39)]">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(233,40,39)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Bereit für die Cloud?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Starten Sie jetzt mit 30 Tagen kostenlosem Test. Keine Kreditkarte erforderlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[rgb(233,40,39)] px-10 py-4 rounded-lg hover:shadow-2xl transition-all">
              Jetzt starten
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-[rgb(233,40,39)] transition-all">
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Kontakt aufnehmen</h2>
            <p className="text-xl text-gray-600">Wir beraten Sie gerne persönlich</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-[rgb(233,40,39)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Telefon</h3>
              <p className="text-gray-600 mb-2">+49 (0) 69 2020 3040</p>
              <p className="text-sm text-gray-500">Mo-Fr 08:00 - 20:00</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-[rgb(233,40,39)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">E-Mail</h3>
              <p className="text-gray-600 mb-2">sales@securedata.de</p>
              <p className="text-sm text-gray-500">Antwort in &lt; 2 Stunden</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-[rgb(233,40,39)] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Standort</h3>
              <p className="text-gray-600 mb-2">Frankfurt am Main</p>
              <p className="text-sm text-gray-500">Zentrale & RZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgb(233,40,39)] rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg">SecureData</div>
                  <div className="text-xs text-gray-400">Rechenzentrum</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Premium Rechenzentren in Deutschland. Höchste Sicherheit, maximale Performance und persönlicher Service.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[rgb(233,40,39)] transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-[rgb(233,40,39)] transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-[rgb(233,40,39)] transition-colors">GitHub</a>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Lösungen</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Cloud Hosting</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Dedicated Server</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Colocation</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Managed Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Standorte</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Partnerprogramm</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Dokumentation</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[rgb(233,40,39)] transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 SecureData Rechenzentrum. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}