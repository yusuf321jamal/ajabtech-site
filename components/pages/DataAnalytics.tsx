"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Database,
  BarChart3,
  Brain,
  Shield,
  Rocket,
  Globe,
  Settings,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  BookOpen,
} from "lucide-react";
import ComplianceFloatingBox from "../ui/ComplianceFloatingBox";
const DataAnalyticsAIPage = () => {
  const [pageKey, setPageKey] = useState(Date.now());
  useEffect(() => {
    setPageKey(Date.now());
  }, []);
  const services = [
    {
      icon: Target,
      title: "Enterprise Data & AI Strategy, Operating Model & Data/AI Ops",
      subtitle: "",
      description:
        "We help organizations align their business goals with Data and AI capabilities by crafting holistic strategies that are both visionary and executable:",
      features: [
        "Develop enterprise-wide data and AI strategy with measurable outcomes",
        "Design modern operating models and Center of Excellence (CoE) constructs",
        "Embed DataOps and MLOps practices for streamlined AI lifecycle management",
        "Support agile transformation, tooling, and technology modernization plans",
      ],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Shield,
      title: "Full Lifecycle Data & AI Consulting with Ethics by Design",
      subtitle: "",
      description:
        "End-to-end advisory services help organizations modernize their data estates while embedding ethical safeguards into AI systems:",
      features: [
        "Evaluate and redesign the data architecture for scalability and agility",
        "Implement governance-by-design to ensure compliance and auditability",
        "Establish ethical AI principles tailored to industry-specific risks and standards",
        "Provide change management and literacy enablement for sustainable adoption",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Data Products, Analytics & AI-driven Revenue Models",
      subtitle: "",
      description:
        "Turn your data into assets and intelligence into revenue by leveraging our innovation labs and monetization accelerators:",
      features: [
        "Co-create data products that solve real-world operational and customer challenges",
        "Use predictive and prescriptive analytics to unlock new revenue streams",
        "Design intelligent systems to power personalization, demand forecasting, and autonomous decisioning",
        "Deploy executive dashboards for performance steering and KPI governance",
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: Settings,
      title: "AI Governance, Risk & Compliance Frameworks",
      subtitle: "",
      description:
        "As AI becomes embedded in operations, our governance services ensure your organization remains compliant, ethical, and auditable:",
      features: [
        "Conduct AI risk assessments covering model bias, fairness, and robustness",
        "Design board-level oversight frameworks with roles, responsibilities, and escalation paths",
        "Operationalize AI controls, model inventories, audit trails, and explainability",
        "Guide adoption of global regulatory frameworks (e.g., SDAIA, NCA standards)",
      ],
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      icon: BookOpen,
      title: "AI Enablement & Adoption Services",
      subtitle: "",
      description:
        "From ideation to scaled deployment, we equip your teams to responsibly experiment with and adopt AI:",
      features: [
        "Run immersive AI simulation labs to explore business impacts",
        "Identify and prioritize high-value use cases through collaborative design sprints",
        "Stand up an AI CoE and define reusable accelerators and delivery models",
        "Provide ongoing support through implementation, testing, training, and operations",
      ],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: "Cross-functional expertise",
      description: "Across Data, AI, Data risk, and transformation",
    },
    {
      icon: Zap,
      title: "Proprietary accelerators",
      description: "Reusable IP to shorten time-to-value",
    },
    {
      icon: Users,
      title: "Deep engineering talent",
      description: "Experience in platform integration and scaling",
    },
    {
      icon: Shield,
      title: "Commitment to ethics",
      description: "Transparency and value realization",
    },
    {
      icon: Globe,
      title: "Global best practices",
      description: "Enhanced by deep industry experience",
    },
  ];

  const clientChallenges = [
    "Lack of Data and AI skills or architecture to deploy enterprise-grade solutions",
    "Unclear ethical, legal, and compliance frameworks for responsible AI",
    "Difficulty proving business value or ROI from data and analytics",
    "Poor data quality, legacy systems, and siloed infrastructures",
    "Misalignment between business strategy and Data and AI capabilities",
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20 overflow-hidden">
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
                <Database className="w-6 h-6 text-blue-600" />
                <span className="text-slate-600 text-sm font-medium">Data</span>
                <span className="text-slate-400">•</span>
                <Brain className="w-6 h-6 text-emerald-600" />
                <span className="text-slate-600 text-sm font-medium">
                  AI Excellence
                </span>
                <span className="text-slate-400">•</span>
                <Shield className="w-6 h-6 text-purple-600" />
                <span className="text-slate-600 text-sm font-medium">
                  Ethics by Design
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
                DATA & AI Excellence Services.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                  Strategic. Responsible. Transformative.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed ">
                In today's digital economy, organizations are under immense pressure to modernize their data and AI capabilities to stay competitive, resilient, and ethical. AJAB's Data & AI Excellence Services are crafted to empower organizations in building strategic data foundations, enabling responsible AI adoption, and accelerating data-driven business value.
                <br />
                <br />
                Our offerings are grounded in global best practices and enhanced by deep industry experience, ensuring that transformation is not only technical—but also operational and cultural.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-sm font-medium rounded-sm hover:from-blue-700 hover:to-sky-700 transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Our Approach of <span className="text-blue-700">Data & AI Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                AJAB provides a full-stack service framework that integrates strategy, operations, technology, and governance across five core domains. Whether you're defining your first AI use case or looking to industrialize data value creation, we meet you where you are and elevate you to what's next.
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 flex-shrink-0 rounded-sm bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 flex flex-wrap items-baseline gap-2">
                          {/* Underlined Phase part */}
                          <span className="relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:rounded-full after:mt-1">
                            PHASE {index + 1}.
                          </span>
                          {/* Rest of the title */}
                          <span className="flex-1">{service.title}</span>
                        </h3>
                        <p className="text-sm text-slate-600 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        What we deliver:
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
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
                      className={`rounded-sm bg-gradient-to-br ${service.bgGradient} p-8 h-80 flex items-center justify-center`}
                    >
                      <img
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : index === 1
                              ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              : index === 2
                                ? "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                : index === 3
                                  ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                  : "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }
                        alt={service.title}
                        className="w-full h-full object-cover rounded-sm opacity-80"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Challenges Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Client Challenges <span className="text-blue-600">We Solve</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                We understand the complex challenges organizations face when modernizing their data and AI capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {clientChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-slate-700 font-light leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Why <span className="text-blue-600">AJAB?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                Our offerings are grounded in global best practices and enhanced by deep industry experience, ensuring transformation that's both technical and strategic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Who We <span className="text-blue-600">Serve</span> &  When to <span className="text-blue-600">Engage</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                Our services are designed for leaders seeking clarity, control, and competitive advantage through Data and AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  text: "CFOs, CIOs, CAEs, Heads of Risk, and Data Leaders looking to modernize",
                  icon: Users
                },
                {
                  text: "Divisional business heads seeking AI to drive productivity and innovation",
                  icon: TrendingUp
                },
                {
                  text: "Enterprises navigating regulatory obligations and ethical complexity",
                  icon: Shield
                },
                {
                  text: "Organizations struggling with fragmented data, skills gaps, or platform integration",
                  icon: Settings
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-slate-700 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Ready to Transform Your Data Into Intelligence?

            </h2>
            <p className="text-lg text-blue-100 mb-8 font-light">
              Let's discuss how we can help you unlock the full potential of your data and drive meaningful business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-blue-600 text-sm font-medium rounded-sm hover:bg-blue-50 transition-colors duration-300">
                  Schedule Consultation
                </button>
              </Link>
              <button className="px-8 py-3 border border-white text-white text-sm font-medium rounded-sm hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
      <ComplianceFloatingBox key={pageKey} />
    </>
  );
};

export default DataAnalyticsAIPage;