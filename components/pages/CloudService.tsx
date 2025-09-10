
"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Map,
  Target,
  Zap,
  Users,
  RefreshCw,
  ArrowRight,
  Play,
  Rocket,
  Shield,
  Globe,
  Server,
  Wrench,

  Cpu,
} from "lucide-react";
import ComplianceFloatingBox from "../ui/ComplianceFloatingBox";

const DigitalTransformationPage = () => {
  const [pageKey, setPageKey] = useState(Date.now());
  useEffect(() => {
    setPageKey(Date.now());
  }, []);
  const phases = [
    {
      icon: Map,
      title: "PHASE 1: Assessment & Discovery",
      subtitle: "Foundation Building",
      description: "Comprehensive analysis of current capabilities, gaps, and opportunities for digital transformation.",
      features: [
        "Digital Maturity & Business Process Assessment",
        "Analyze current digital capabilities, gaps, and opportunities.",
        "Benchmarked against industry standards (e.g., Gartner, BCG DX Matrix).",

        "Map existing processes across departments.",
        "Identify inefficiencies, bottlenecks, redundancies & automation opportunities",
        "Review of: Technology Landscape & Enterprise Architecture and adherence to SDAIA framework including NDMO, DGA's NORA 2.0 framework, SIRI (Smart Industry Readiness Index) readiness Framework for Industry 4.0.",
        "Review of legacy systems, infrastructure, data sources, integration, application security and cybersecurity",
        "Organizational Readiness & Culture Assessment",
        "Evaluate people, mindset, change appetite, digital skills.",
        "Customer Journey Mapping & AI Readiness Assessment",
        "Analyze digital touchpoints, pain points, and customer expectations.",

        "Cyber Security Compliances & Gap assessments."
      ],
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Target,
      title: "PHASE 2: Strategy & Roadmap",
      subtitle: "Strategic Planning",
      description: "Developing a comprehensive strategy and roadmap for digital transformation aligned with business goals.",
      features: [
        "Business Transformation Strategy",
        "Redefine business model, value proposition, and operating model.",
        "Digital Transformation Strategy",
        "Data Strategy & Governance",
        "Define how technology will support the new business goals.",
        "Target Operating Model (TOM) Design",
        "Blueprint for future-state organization structure, capabilities, and processes.",
        "Solution Architecture Design, including Security solution",
        "Choose core platforms (e.g., ERP, CRM, HRMS) and supporting systems.",
        "Digital Transformation Roadmap, Automation roadmap, AI/ML & Generative AI adoption roadmap targeted towards business growth and cost optimization.",
        "Phased timeline, quick wins, milestones, KPIs, and risks.",
        "Covers people, process, technology, and governance."
      ],
      gradient: "from-sky-600 to-pink-600",
      bgGradient: "from-sky-50 to-pink-50",
    },
    {
      icon: Zap,
      title: "PHASE 3: Solution Design & Implementation",
      subtitle: "Execution Excellence",
      description: "Designing and implementing tailored solutions that drive transformation and business value.",
      features: [
        "Process Redesign & Optimization",
        "Lean, Six Sigma, Design Thinking applied to workflow automation.",
        "Technology Implementation, Integration, Testing and Sandbox Solutions",
        "ERP, CRM, HRMS, custom apps, Automation, AI/ML, data platforms, cloud migration, Security Solutions including cybersecurity etc.",
        "Scalable, integrated solutions tailored to business model.",
        "Master data management, analytics dashboards, predictive insights.",
        "Automation & Innovation",
        "Customer Experience Enhancements - Chatbots, Virtual Assistants, Personalized Recommendations, Omnichannel Support, Voice of Customer (VoC) Analytics, Sentiment Analysis, Customer Journey Mapping, Loyalty Programs, Automated Feedback Systems, Self-Service Portals",
        "Digital channels, portals, mobile apps, self-service tools."
      ],
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-50 to-blue-50",
    },
    {
      icon: Users,
      title: "PHASE 4: Organization Change Management (OCM) & Enablement",
      subtitle: "People & Culture",
      description: "Ensuring successful adoption and organizational readiness for the transformed environment.",
      features: [
        "Change Management Planning",
        "Communication, stakeholder engagement, resistance management.",
        "Training & Capability Building",
        "Digital upskilling, platform-specific training, leadership coaching.",
        "Agile/Lean Enablement",
        "Setting up squads, scrums, iterative value delivery models."
      ],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: RefreshCw,
      title: "PHASE 5: Sustainability & Continuous Improvement",
      subtitle: "Long-term Success",
      description: "Establishing mechanisms for ongoing optimization, innovation, and value realization.",
      features: [
        "Post-Go-Live Support & Optimization, Testing CoE.",
        "Infrastructure Management System (IMS) & IT Service Management (ITSM)",
        "Issue resolution, enhancement, usage improvement.",
        "Innovation Lab / Center of Excellence (CoE) Setup to stay ahead of the curve and to develop new-age technology solutions and innovative approaches. We can help customer set-up Global Capability Centre (GCC) in a BOT (Build-Operate-Transfer) model.",
        "Enable continuous experimentation with new digital capabilities.",
        "Performance Monitoring & KPI Tracking",
        "Measuring ROI, productivity, adoption, and customer satisfaction.",
        "Digital Governance & Risk Management",
        "Cybersecurity, compliance, privacy, SLA governance."
      ],
      gradient: "from-green-600 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
    }
  ];

  const frameworks = [
    {
      name: "SDAIA Framework",
      description: "Including NDMO compliance",
      icon: Shield
    },
    {
      name: "DGA's NORA 2.0 Framework",
      description: "National digital governance architecture",
      icon: Globe
    },
    {
      name: "SIRI Framework",
      description: "Smart Industry Readiness Index for Industry 4.0",
      icon: Server
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24 overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
              backgroundSize: "20px 20px",
              zIndex: 0,
            }}
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <RefreshCw className="w-6 h-6 text-blue-600" />
                <span className="text-slate-600 text-sm font-medium">Transformation</span>
                <span className="text-slate-400">•</span>
                <Target className="w-6 h-6 text-sky-600" />
                <span className="text-slate-600 text-sm font-medium">
                  Strategy
                </span>
                <span className="text-slate-400">•</span>
                <Wrench className="w-6 h-6 text-emerald-600" />
                <span className="text-slate-600 text-sm font-medium">
                  Implementation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
                Digital Transformation
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent font-normal">
                  at Scale
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                In today's digital economy, organizations are under immense pressure to modernize their data and AI capabilities to stay competitive, resilient, and ethical. Our Digital Transformation service ensures a solid foundation to unlock endless possibilities.
              </p>

              {/* Framework Logos */}


              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Your Transformation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* Phases Section with Image Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Our  Approach of <span className="text-blue-700">Digital Transformation</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                A comprehensive, step-by-step methodology for successful digital and business transformation
              </p>
            </div>

            <div className="space-y-20">
              {phases.map((phase, index) => (
                <div
                  key={phase.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">

                      <div
                        className={`w-12 h-12 flex-shrink-0 rounded-sm bg-gradient-to-r ${phase.gradient} flex items-center justify-center`}
                      >
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 flex flex-wrap items-baseline gap-2">
                          {/* Underlined Phase part */}
                          <span className="relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:rounded-full after:mt-1">
                            {phase.title.split(":", 2)[0] + ":"}
                          </span>

                          {/* Rest of the title */}
                          <span className="flex-1">{phase.title.split(":", 2)[1]}</span>
                        </h3>

                        <p className="text-sm text-slate-600 font-medium">
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 font-light leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        What we deliver:
                      </p>
                      <ul className="space-y-2">
                        {phase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm text-slate-600 font-light">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                  >
                    <div
                      className={`rounded-sm bg-gradient-to-br ${phase.bgGradient} p-8 h-80 flex items-center justify-center`}
                    >
                      <img
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : index === 1
                              ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              : index === 2
                                ? "https://plus.unsplash.com/premium_photo-1661590015104-8d0d7b05f9b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                : index === 3
                                  ? "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  : "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }
                        alt={phase.title}
                        className="w-full h-full object-cover rounded-sm opacity-80"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* /// */}
        {/* Deliverables Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Deliverables <span className="text-blue-600">Typically Include</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                Comprehensive outputs that ensure successful transformation and measurable outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Business Capability Model",
                "Digital Maturity & Gap Analysis Reports",
                "Transformation Blueprint & Operating Model",
                "Data Strategy & Governance Model",
                "AI Strategy & Roadmap",
                "Cyber security Gaps & Compliances Readiness report",
                "Solution Architecture Diagrams, Enterprise Architecture Design",
                "12–24 Month Roadmap (Gantt, phases, owners)",
                "KPI Framework & Impact Measurement Plan"
              ].map((deliverable, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Rocket className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
              Unlock the full potential of digital transformation. Let's modernize your operations, innovate with AI, and scale your business securely and strategically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Download Transformation Guide
              </button>
            </div>
          </div>
        </section>
      </div>
      <ComplianceFloatingBox key={pageKey} />
    </>
  );
};

export default DigitalTransformationPage;