<?php

function grassmerkur_get_solutions() {
    return [
        [
            'id' => 'security',
            'title' => 'Datensicherheit erhöhen',
            'text' => 'Reduzieren Sie Risiken durch Auslagerung von Systemen in ein zertifiziertes Rechenzentrum.',
            'points' => [
                'Physische & logische Security',
                'Georedundante Backups',
                'Monitoring & Alarmierung',
            ],
        ],
        [
            'id' => 'outsourcing',
            'title' => 'IT-Betrieb auslagern',
            'text' => 'Übergeben Sie Betrieb, Monitoring und Patching an ein spezialisiertes Team.',
            'points' => [
                'Managed-Services-Verträge',
                'Transparente SLAs',
                'Dedizierte Ansprechpartner:innen',
            ],
        ],
        [
            'id' => 'cloud',
            'title' => 'Cloud modernisieren',
            'text' => 'Hybride Szenarien mit Private Cloud, Public Cloud und On-Prem in einer Architektur.',
            'points' => [
                'Private Cloud im Rechenzentrum',
                'Anbindung an Hyperscaler',
                'Compliance-konforme Datenhaltung',
            ],
        ],
    ];
}

function grassmerkur_get_services() {
    return [
        [
            'id' => 'colocation',
            'icon' => '🗄️',
            'title' => 'Colocation & Housing',
            'text' => 'Rack-, Cage- und Raumlösungen für Ihre eigene Hardware in einem hochsicheren Datacenter.',
            'meta' => [
                ['label' => 'Strom', 'value' => 'N+1, Messung pro Rack'],
                ['label' => 'Anbindung', 'value' => 'Carrier-neutral, Peering'],
                ['label' => 'Sicherheit', 'value' => 'Zutrittskontrolle, Video, 24/7'],
            ],
        ],
        [
            'id' => 'cloud-hosting',
            'icon' => '☁️',
            'title' => 'Cloud & Hosting',
            'text' => 'Virtuelle Server, Managed Kubernetes und skalierbare Speicherlösungen.',
            'meta' => [
                ['label' => 'Virtualisierung', 'value' => 'VMware / KVM'],
                ['label' => 'Storage', 'value' => 'S3 kompatibel, Block & Object'],
                ['label' => 'Backup', 'value' => 'Versioniert & verschlüsselt'],
            ],
        ],
        [
            'id' => 'managed',
            'icon' => '🛠️',
            'title' => 'Managed Services',
            'text' => 'Betrieb von Betriebssystem, Middleware und ausgewählten Applikationen.',
            'meta' => [
                ['label' => 'Monitoring', 'value' => '24/7 NOC'],
                ['label' => 'Patch-Management', 'value' => 'Regelmäßige Zyklen'],
                ['label' => 'Support', 'value' => 'Response-Zeiten nach SLA'],
            ],
        ],
    ];
}

function grassmerkur_get_industries() {
    return [
        [
            'id' => 'sme',
            'title' => 'Mittelstand',
            'text' => 'Stabile IT-Grundlagen für wachsende Unternehmen.',
            'chips' => ['ERP & Warenwirtschaft', 'Remote Work', 'File Services'],
        ],
        [
            'id' => 'public',
            'title' => 'Öffentliche Verwaltung',
            'text' => 'Datensouveränität und Compliance konstant im Fokus.',
            'chips' => ['Bürgerportale', 'Fachanwendungen', 'Archivierung'],
        ],
        [
            'id' => 'ecommerce',
            'title' => 'E-Commerce & Plattformen',
            'text' => 'Verfügbarkeit und Performance für digitale Geschäftsmodelle.',
            'chips' => ['Shopsysteme', 'APIs', 'Zahlungsabwicklung'],
        ],
    ];
}

function grassmerkur_get_jobs() {
    return [
        [
            'id' => 'admin',
            'title' => 'Systemadministrator:in Datacenter',
            'text' => 'Du betreust physische und virtuelle Infrastruktur im Rechenzentrum.',
            'location' => 'Hannover',
            'type' => 'Vollzeit',
        ],
        [
            'id' => 'network',
            'title' => 'Network Engineer (m/w/d)',
            'text' => 'Planung, Aufbau und Betrieb redundanter Netzwerkinfrastruktur.',
            'location' => 'Hannover / Remote',
            'type' => 'Vollzeit / Teilzeit',
        ],
    ];
}
