'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Target, Users, TrendingUp, CheckCircle2, Network, Scale, Database, Globe, Award, DollarSign, BarChart3, Sparkles, ChevronDown } from 'lucide-react';

const EnertedRoadmap = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const phases = [
    {
      id: 1,
      title: "FASE 1: FUNDACIONES",
      period: "Feb - Mar 2026",
      duration: "6 semanas",
      objectives: [
        { icon: Scale, text: "Legal: Contratos tipo + certificaciones" },
        { icon: Network, text: "Proveedores: Alianzas iniciales (2-3 proveedores clave)" },
        { icon: Sparkles, text: "Productos: Paquetes estandarizados (3 por línea)" },
        { icon: Globe, text: "Web: Rediseño + calculadora solar" },
        { icon: Database, text: "BD: Primera base segmentada (500 empresas)" }
      ]
    },
    {
      id: 2,
      title: "FASE 2: TRACCIÓN",
      period: "Abr - Jun 2026",
      duration: "12 semanas",
      objectives: [
        { icon: Target, text: "Comercial: Primera campaña de mailing (3 industrias piloto)" },
        { icon: CheckCircle2, text: "Proyectos: 2-3 proyectos piloto ejecutados" },
        { icon: Globe, text: "Contenido: 12 artículos blog (SEO)" },
        { icon: Users, text: "Alianzas: 1-2 partners estratégicos firmados" }
      ]
    },
    {
      id: 3,
      title: "FASE 3: ESCALA",
      period: "Jul - Dic 2026",
      duration: "6 meses",
      objectives: [
        { icon: TrendingUp, text: "Expansión territorial (otras ciudades)" },
        { icon: Users, text: "Equipo: Incorporar comercial dedicado" },
        { icon: Sparkles, text: "Diversificación: Nuevos productos/servicios" }
      ]
    }
  ];

  const workstreams = [
    {
      id: "ws1",
      title: "Estructuración de Portafolio",
      icon: Sparkles,
      description: "Definición de productos estandarizados para automatización industrial y fotovoltaica",
      deliverables: [
        "Paquetes FV: Residencial (2-10kW), Comercial (10-100kW), Industrial (>100kW)",
        "Soluciones IoT: Telemetría, SCADA, monitoreo energético",
        "Servicios: Auditoría energética, cumplimiento RETIE"
      ]
    },
    {
      id: "ws2",
      title: "Legal y Regulatorio",
      icon: Scale,
      description: "Marco legal y certificaciones para operación comercial",
      deliverables: [
        "Certificaciones UPME para sistemas fotovoltaicos",
        "Contratos tipo por segmento (residencial/comercial/industrial)",
        "Pólizas y garantías estándar"
      ]
    },
    {
      id: "ws3",
      title: "Sourcing y Proveedores",
      icon: Network,
      description: "Alianzas estratégicas con fabricantes China y distribuidores locales",
      deliverables: [
        "Proveedores FV: Longi, JA Solar, Trina Solar",
        "Inversores: Huawei, Growatt, Sungrow",
        "Estrategia de inventario y pricing"
      ]
    },
    {
      id: "ws4",
      title: "Base de Datos Comercial",
      icon: Database,
      description: "Construcción de BD segmentada y estrategia de email marketing",
      deliverables: [
        "BD segmentada: 500+ empresas industrias clave",
        "CRM configurado con pipelines por servicio",
        "Secuencias automatizadas de mailing"
      ]
    },
    {
      id: "ws5",
      title: "Rediseño Web y SEO",
      icon: Globe,
      description: "Reestructuración del sitio web con foco en conversión y posicionamiento",
      deliverables: [
        "Nueva arquitectura: Automatización + FV separados",
        "Calculadora solar (lead magnet)",
        "Content strategy SEO: 12 artículos Q1"
      ]
    },
    {
      id: "ws6",
      title: "Alianzas Estratégicas",
      icon: Users,
      description: "Partners financieros, técnicos y comerciales",
      deliverables: [
        "Financieros: Bancolombia Leasing, Findeter",
        "Técnicos: Distribuidores nacionales",
        "Comerciales: Constructoras, gremios ANDI"
      ]
    },
    {
      id: "ws7",
      title: "Modelo Financiero",
      icon: DollarSign,
      description: "Estructura de ingresos, costos y márgenes objetivo",
      deliverables: [
        "Pricing por servicio y segmento",
        "Proyección revenue 2026",
        "CAPEX inicial y OPEX mensual"
      ]
    },
    {
      id: "ws8",
      title: "KPIs y Gestión",
      icon: BarChart3,
      description: "Indicadores de gestión comercial, operacional y financiero",
      deliverables: [
        "Dashboard comercial: leads, conversión, pipeline",
        "Métricas operacionales: tiempo de respuesta, NPS",
        "Financiero: revenue, margen, CAC"
      ]
    }
  ];

  const keyQuestions = [
    { category: "Estratégicas", id: "q1", questions: [
      "¿Cuál es la visión a 3 años para estas líneas? (revenue target, market share)",
      "¿Qué tan agresivos quieren ser en pricing? (penetración vs premium)",
      "¿Apetito de riesgo para inversión inicial?"
    ]},
    { category: "Tácticas", id: "q2", questions: [
      "¿Quién toma decisiones de inversión >$X millones COP?",
      "¿Hay proyectos en pipeline que podamos cerrar rápido? (quick wins)",
      "¿Limitaciones que deba conocer? (competencia, exclusividades)"
    ]}
  ];

  return (
    <div className="min-h-screen text-white relative">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('https://static.atesspower.com/upload/images/20240613/dda75bc0262229d1140bcc3eec59f933.jpg')"}}
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/90" />

      {/* Hero Section with Logo */}
      <header className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo-enerted.png"
              alt="Enerted Logo"
              className="h-32 md:h-48 w-auto mb-6 brightness-0 invert"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2">INNOVACIÓN</h1>
            <div className="w-24 h-px bg-white/30 my-4"></div>
            <p className="text-gray-400 text-lg uppercase tracking-widest">Plan Estratégico 2026</p>
          </div>
        </div>
        <div className="border-b border-white/10"></div>
      </header>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">

        {/* Section: Objetivo */}
        <section className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={() => toggleSection('objetivo')}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-left hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Objetivo del Contrato</h2>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['objetivo'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['objetivo'] && (
            <div className="mt-2 bg-black/50 border border-white/10 rounded-lg p-5">
              <p className="text-gray-300 leading-relaxed">
                Dirección estratégica y liderazgo conceptual para la <span className="text-white font-medium">estructuración, desarrollo y comercialización</span> de servicios de automatización industrial y productos fotovoltaicos, orientado al crecimiento comercial, posicionamiento estratégico y fortalecimiento competitivo en el mercado colombiano.
              </p>
            </div>
          )}
        </section>

        {/* Section: Roadmap */}
        <section className={`mb-6 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={() => toggleSection('roadmap')}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-left hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-bold text-white">Roadmap Estratégico</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['roadmap'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['roadmap'] && (
            <div className="mt-2 space-y-3">
              {phases.map((phase) => (
                <div key={phase.id} className="bg-black/50 border border-white/10 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{phase.period}</p>
                      <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                      <p className="text-sm text-gray-500">{phase.duration}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl font-bold text-white">
                      {phase.id}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {phase.objectives.map((obj, i) => {
                      const Icon = obj.icon;
                      return (
                        <div key={i} className="flex items-start gap-3 text-sm">
                          <Icon className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-300">{obj.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section: Workstreams */}
        <section className={`mb-6 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={() => toggleSection('workstreams')}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-left hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-bold text-white">Workstreams Estratégicos</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['workstreams'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['workstreams'] && (
            <div className="mt-2 space-y-2">
              {workstreams.map((ws) => {
                const Icon = ws.icon;
                const isExpanded = expandedSections[ws.id];
                return (
                  <div key={ws.id} className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(ws.id)}
                      className="w-full p-4 text-left hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-sm">{ws.title}</h3>
                            <p className="text-xs text-gray-500">{ws.description}</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-2 border-t border-white/5">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Entregables:</p>
                        <div className="space-y-1">
                          {ws.deliverables.map((del, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs">
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-300">{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Section: Preguntas Clave */}
        <section className={`mb-6 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={() => toggleSection('preguntas')}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-left hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-bold text-white">Preguntas Clave para Alineación</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['preguntas'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['preguntas'] && (
            <div className="mt-2 space-y-3">
              {keyQuestions.map((section) => (
                <div key={section.id} className="bg-black/50 border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-3 text-white">{section.category}</h3>
                  <div className="space-y-2">
                    {section.questions.map((q, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs text-white">
                          {i + 1}
                        </span>
                        <p className="text-gray-300 text-sm">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className={`pt-6 border-t border-white/10 text-center transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-gray-600 text-xs">
            Diseñado por <span className="text-gray-400">Kyrbot Innovations SAS</span>
          </p>
        </footer>

      </div>
    </div>
  );
};

export default EnertedRoadmap;
