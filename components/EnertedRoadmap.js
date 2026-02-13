'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Target, Users, TrendingUp, CheckCircle2, Zap, Network, Scale, Database, Globe, Award, DollarSign, BarChart3, Sparkles, ChevronRight } from 'lucide-react';

const EnertedRoadmap = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [selectedWorkstream, setSelectedWorkstream] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phases = [
    {
      id: 1,
      title: "FASE 1: FUNDACIONES",
      period: "Feb - Mar 2025",
      duration: "6 semanas",
      color: "from-blue-600 to-cyan-600",
      objectives: [
        { icon: Scale, text: "Legal: Contratos tipo + certificaciones", status: "active" },
        { icon: Network, text: "Proveedores: Alianzas iniciales (2-3 proveedores clave)", status: "active" },
        { icon: Sparkles, text: "Productos: Paquetes estandarizados (3 por línea)", status: "active" },
        { icon: Globe, text: "Web: Rediseño + calculadora solar", status: "active" },
        { icon: Database, text: "BD: Primera base segmentada (500 empresas)", status: "active" }
      ]
    },
    {
      id: 2,
      title: "FASE 2: TRACCIÓN",
      period: "Abr - Jun 2025",
      duration: "12 semanas",
      color: "from-orange-600 to-amber-600",
      objectives: [
        { icon: Target, text: "Comercial: Primera campaña de mailing (3 industrias piloto)", status: "pending" },
        { icon: CheckCircle2, text: "Proyectos: 2-3 proyectos piloto ejecutados", status: "pending" },
        { icon: Globe, text: "Contenido: 12 artículos blog (SEO)", status: "pending" },
        { icon: Users, text: "Alianzas: 1-2 partners estratégicos firmados", status: "pending" }
      ]
    },
    {
      id: 3,
      title: "FASE 3: ESCALA",
      period: "Jul - Dic 2025",
      duration: "6 meses",
      color: "from-emerald-600 to-green-600",
      objectives: [
        { icon: TrendingUp, text: "Expansión territorial (otras ciudades)", status: "pending" },
        { icon: Users, text: "Equipo: Incorporar comercial dedicado", status: "pending" },
        { icon: Sparkles, text: "Diversificación: Nuevos productos/servicios", status: "pending" }
      ]
    }
  ];

  const workstreams = [
    {
      id: 1,
      title: "Estructuración de Portafolio",
      icon: Sparkles,
      color: "bg-gradient-to-br from-violet-600 to-purple-700",
      description: "Definición de productos estandarizados para automatización industrial y fotovoltaica",
      deliverables: [
        "Paquetes FV: Residencial (2-10kW), Comercial (10-100kW), Industrial (>100kW)",
        "Soluciones IoT: Telemetría, SCADA, monitoreo energético",
        "Servicios: Auditoría energética, cumplimiento RETIE"
      ]
    },
    {
      id: 2,
      title: "Legal y Regulatorio",
      icon: Scale,
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
      description: "Marco legal y certificaciones para operación comercial",
      deliverables: [
        "Certificaciones UPME para sistemas fotovoltaicos",
        "Contratos tipo por segmento (residencial/comercial/industrial)",
        "Pólizas y garantías estándar"
      ]
    },
    {
      id: 3,
      title: "Sourcing y Proveedores",
      icon: Network,
      color: "bg-gradient-to-br from-cyan-600 to-blue-700",
      description: "Alianzas estratégicas con fabricantes China y distribuidores locales",
      deliverables: [
        "Proveedores FV: Longi, JA Solar, Trina Solar",
        "Inversores: Huawei, Growatt, Sungrow",
        "Estrategia de inventario y pricing"
      ]
    },
    {
      id: 4,
      title: "Base de Datos Comercial",
      icon: Database,
      color: "bg-gradient-to-br from-orange-600 to-red-700",
      description: "Construcción de BD segmentada y estrategia de email marketing",
      deliverables: [
        "BD segmentada: 500+ empresas industrias clave",
        "CRM configurado con pipelines por servicio",
        "Secuencias automatizadas de mailing"
      ]
    },
    {
      id: 5,
      title: "Rediseño Web y SEO",
      icon: Globe,
      color: "bg-gradient-to-br from-emerald-600 to-teal-700",
      description: "Reestructuración del sitio web con foco en conversión y posicionamiento",
      deliverables: [
        "Nueva arquitectura: Automatización + FV separados",
        "Calculadora solar (lead magnet)",
        "Content strategy SEO: 12 artículos Q1"
      ]
    },
    {
      id: 6,
      title: "Alianzas Estratégicas",
      icon: Users,
      color: "bg-gradient-to-br from-pink-600 to-rose-700",
      description: "Partners financieros, técnicos y comerciales",
      deliverables: [
        "Financieros: Bancolombia Leasing, Findeter",
        "Técnicos: Distribuidores nacionales",
        "Comerciales: Constructoras, gremios ANDI"
      ]
    },
    {
      id: 7,
      title: "Modelo Financiero",
      icon: DollarSign,
      color: "bg-gradient-to-br from-amber-600 to-yellow-700",
      description: "Estructura de ingresos, costos y márgenes objetivo",
      deliverables: [
        "Pricing por servicio y segmento",
        "Proyección revenue 2025",
        "CAPEX inicial y OPEX mensual"
      ]
    },
    {
      id: 8,
      title: "KPIs y Gestión",
      icon: BarChart3,
      color: "bg-gradient-to-br from-slate-600 to-gray-700",
      description: "Indicadores de gestión comercial, operacional y financiero",
      deliverables: [
        "Dashboard comercial: leads, conversión, pipeline",
        "Métricas operacionales: tiempo de respuesta, NPS",
        "Financiero: revenue, margen, CAC"
      ]
    }
  ];

  const keyQuestions = [
    { category: "Estratégicas", questions: [
      "¿Cuál es la visión a 3 años para estas líneas? (revenue target, market share)",
      "¿Qué tan agresivos quieren ser en pricing? (penetración vs premium)",
      "¿Apetito de riesgo para inversión inicial?"
    ]},
    { category: "Tácticas", questions: [
      "¿Quién toma decisiones de inversión >$X millones COP?",
      "¿Hay proyectos en pipeline que podamos cerrar rápido? (quick wins)",
      "¿Limitaciones que deba conocer? (competencia, exclusividades)"
    ]}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      {/* Animated gradient orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />

      {/* Header */}
      <header className={`relative border-b border-white/5 backdrop-blur-xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                  ENERTED <span className="text-orange-500">Innovación</span>
                </h1>
              </div>
              <p className="text-slate-400 text-lg font-light tracking-wide">Plan Estratégico 2025</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Reunión de Alineación</p>
              <p className="text-2xl font-bold text-white">13 Febrero 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Mission Statement */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Objetivo del Contrato
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg font-light">
              Dirección estratégica y liderazgo conceptual para la <span className="text-orange-400 font-medium">estructuración, desarrollo y comercialización</span> de servicios de automatización industrial y productos fotovoltaicos, orientado al <span className="text-blue-400 font-medium">crecimiento comercial</span>, posicionamiento estratégico y <span className="text-purple-400 font-medium">fortalecimiento competitivo</span> en el mercado colombiano.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-orange-500" />
            Roadmap Estratégico
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, idx) => (
              <div 
                key={phase.id}
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  activePhase === idx ? 'scale-105' : ''
                }`}
                onClick={() => setActivePhase(idx)}
                style={{transitionDelay: `${idx * 100}ms`}}
              >
                <div className={`bg-gradient-to-br ${phase.color} p-[2px] rounded-2xl`}>
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {phase.period}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
                        <p className="text-sm text-slate-400">{phase.duration}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-2xl font-bold`}>
                        {phase.id}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      {phase.objectives.map((obj, i) => {
                        const Icon = obj.icon;
                        return (
                          <div 
                            key={i} 
                            className="flex items-start gap-3 text-sm group/item"
                            style={{transitionDelay: `${i * 50}ms`}}
                          >
                            <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              obj.status === 'active' 
                                ? 'text-emerald-400' 
                                : 'text-slate-500'
                            } group-hover/item:scale-110 transition-transform`} />
                            <span className={`${
                              obj.status === 'active' 
                                ? 'text-slate-200' 
                                : 'text-slate-400'
                            } leading-tight`}>{obj.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workstreams */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-orange-500" />
            Workstreams Estratégicos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workstreams.map((ws, idx) => {
              const Icon = ws.icon;
              const isSelected = selectedWorkstream === ws.id;
              
              return (
                <div
                  key={ws.id}
                  onClick={() => setSelectedWorkstream(isSelected ? null : ws.id)}
                  className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
                    isSelected ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                  style={{transitionDelay: `${idx * 50}ms`}}
                >
                  <div className={`${ws.color} p-[2px] rounded-xl h-full`}>
                    <div className="bg-slate-900/95 backdrop-blur-sm rounded-xl p-5 h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`${ws.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm leading-tight mb-1">{ws.title}</h3>
                          <p className="text-xs text-slate-400 leading-tight">{ws.description}</p>
                        </div>
                      </div>
                      
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-in fade-in slide-in-from-top-2 duration-500">
                          <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Entregables:</p>
                          {ws.deliverables.map((del, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs">
                              <ChevronRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300">{del}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Questions */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-orange-500" />
            Preguntas Clave para Alineación
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyQuestions.map((section, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-orange-400">{section.category}</h3>
                <div className="space-y-3">
                  {section.questions.map((q, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <p className="text-slate-300 leading-relaxed">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 p-[2px] rounded-2xl">
            <div className="bg-slate-900 rounded-2xl px-8 py-6">
              <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                ¿Listos para transformar ENERTED?
              </p>
              <p className="text-slate-400 font-light">
                Innovación • Automatización • Energía Solar • Crecimiento
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EnertedRoadmap;
