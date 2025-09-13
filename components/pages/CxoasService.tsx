import React from "react";
import Link from "next/link";
import {
    BarChart3,
    Users,
    Shield,
    TrendingUp,
    Brain,
    Rocket,
    Globe,
    Settings,
    CheckCircle,
    ArrowRight,
    Play,
    Award,
    Layers,
    Lock,
    Target,
    HeartPulse,
    Briefcase,
    Lightbulb,
    Cpu, HelpCircle, ShieldAlert, Database
} from "lucide-react";

const CXOServicesPage = () => {
    const services = [
        {
            icon: Target,
            title: "CxO Strategy and Health Check",
            subtitle: "Strategic Alignment",
            description:
                "Providing new or existing CxOs with support to get business and stakeholders alignment and buy-in.",
            features: [
                "Current state assessment and future vision",
                "CxO execution roadmap aligned to priorities",
                "Periodic Health Checks supported by audits",
                "Compliance validation with data strategy",
                "Stakeholder engagement framework",
            ],
            gradient: "from-blue-600 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
        },
        {
            icon: Users,
            title: "Organization Talent Define and Run",
            subtitle: "Talent Optimization",
            description:
                "Designing your CxO function and assisting you in standing up and running it based on your organization's specific ecosystem.",
            features: [
                "Jump start the office with talent needs identification",
                "Operating model fit assessment",
                "Temporary staffing of roles including CxO",
                "Execution of priorities and initiatives",
                "Capability building and organizational design",
            ],
            gradient: "from-sky-600 to-pink-600",
            bgGradient: "from-sky-50 to-pink-50",
        },
        {
            icon: TrendingUp,
            title: "Data Business Value Realization",
            subtitle: "Value Exploration",
            description:
                "Exploration services include CxO Labs, designed to discover areas of business value through data and insights.",
            features: [
                "Assessment of organization's business assets",
                "Stakeholder alignment and prioritization",
                "Acceleration of business value realization",
                "Identification of regulation and compliance risks",
                "Business-related initiatives development",
            ],
            gradient: "from-blue-600 to-teal-600",
            bgGradient: "from-blue-50 to-teal-50",
        },
        {
            icon: Briefcase,
            title: "CxO Transition Lab",
            subtitle: "Leadership Onboarding",
            description:
                "Supporting individual CxOs in creating a plan focused on top priorities, organization, engagement, and alignment.",
            features: [
                "Customized, research-driven immersive experience",
                "Strategic plan development for new CxOs",
                "Strengthening strategic communications",
                "Relationship building framework",
                "Ecosystem alignment strategies",
            ],
            gradient: "from-orange-600 to-red-600",
            bgGradient: "from-orange-50 to-red-50",
        },
    ];


    const whyChooseUs = [
        {
            icon: Cpu,
            title: "AI Readiness & Insights",
            description:
                "Growing pressure on organizations to become AI-ready and insights-led.",
        },
        {
            icon: BarChart3,
            title: "Scaling Data-Driven Value",
            description:
                "Executive intent to scale data-driven decision-making and value realization.",
        },
        {
            icon: HelpCircle,
            title: "CxO Mandate & Alignment",
            description:
                "Uncertainty around the CxO mandate, governance structure, or enterprise alignment.",
        },
        {
            icon: ShieldAlert,
            title: "Data Quality & Security",
            description:
                "Concerns with data quality, security, and lineage impacting cloud, ERP, or Industry 4.0 transformations.",
        },
        {
            icon: Database,
            title: "Data as a Core Asset",
            description:
                "Urgency to treat data as a core business asset, not just a technology function.",
        },
    ]
    const benefits = [
        {
            icon: Users,
            title: "Organizational Impact",
            description: "Transform your data capabilities across the organization"
        },
        {
            icon: TrendingUp,
            title: "Data Value Realization",
            description: "Unlock opportunities from your data assets"
        },
        {
            icon: Shield,
            title: "Mitigation of regulatory risks",
            description: "Proactively address compliance requirements"
        },
        {
            icon: Target,
            title: "A CxO office",
            description: "Strategic alignment with proper tools and goals"
        },
        {
            icon: Settings,
            title: "Modernized Operations",
            description: "Streamline and optimize data workflows"
        },
    ];

    type ColorKey = "blue" | "emerald" | "amber" | "violet" | "rose"

    interface Objective {
        title: string
        description: string
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
        color: ColorKey
    }

    const objectives: Objective[] = [
        {
            title: "Strategic Framework Design",
            description:
                "Designing the CxO office's goals, operating model, and governance framework, including alignment with other C-suite roles.",
            icon: Target,
            color: "blue",
        },
        {
            title: "Change Leadership",
            description:
                "Driving change management with stakeholder engagement, data maturity benchmarking, and a clear Data & AI vision aligned to business outcomes.",
            icon: TrendingUp,
            color: "emerald",
        },
        {
            title: "Organization Building",
            description:
                "Standing up the data organization—from hiring, capability building, and organizational design to managing day-to-day operations.",
            icon: Settings,
            color: "amber",
        },
        {
            title: "Value Execution",
            description:
                "Executing strategic data initiatives that unlock value through AI enablement, automation, cost efficiency, and regulatory readiness.",
            icon: Rocket,
            color: "violet",
        },
        {
            title: "Governance & Compliance",
            description:
                "Conducting regular data governance, ethics, and compliance audits to maintain momentum and trust.",
            icon: Shield,
            color: "rose",
        },
    ]

    const colorMap: Record<ColorKey, { bg: string; text: string }> = {
        blue: { bg: "bg-blue-100", text: "text-blue-600" },
        emerald: { bg: "bg-emerald-100", text: "text-emerald-600" },
        amber: { bg: "bg-amber-100", text: "text-amber-600" },
        violet: { bg: "bg-violet-100", text: "text-violet-600" },
        rose: { bg: "bg-rose-100", text: "text-rose-600" },
    }

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
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <BarChart3 className="w-8 h-8 text-blue-600" />
                                <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                                    Executive Leadership
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
                                CxO-as-a-Service
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent font-normal">
                                    Smart Services
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                                In today's data-driven world, the CxO-as-a-Service model offers a turnkey solution
                                to help organizations rapidly operationalize their Digital (Data and AI) ambitions
                                with the lenses of Governance, Regulation, Risk, Security etc. aimed at Growth and Cost optimizations.
                            </p>

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




                {/* Services Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
                                Our CxO- <span className="text-blue-700">Smart Services Offerings</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                                Comprehensive executive leadership services tailored to your organization's needs
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {services.map((service, index) => (
                                <div key={service.title} className="group">
                                    <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <service.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-medium text-slate-900 mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                                                    {service.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 mb-6 font-light leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                    <span className="text-sm text-slate-600 font-light">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
                                What You Get with <span className="text-blue-700">AJAB's</span> CxO-Smart Services
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group bg-white p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ////////////////////////////// */}
                {/* Objectives Section */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
                                Our Strategic <span className="text-blue-600">Objectives</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                                We help organizations achieve digital transformation through focused,
                                measurable objectives that drive sustainable growth and innovation.
                            </p>
                        </div>

                        {/* Icon Navigation Row */}
                        <div className="flex justify-center mb-12">
                            <div className="flex items-center justify-between w-full max-w-2xl">
                                {objectives.map((item, index) => {
                                    const colors = colorMap[item.color]
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center text-center flex-1 px-2"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${colors.bg} flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110`}
                                            >
                                                <item.icon
                                                    className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
                                                />
                                            </div>
                                            <h3 className="text-xs sm:text-sm font-medium text-slate-900 whitespace-nowrap">
                                                {item.title.split(" ")[0]}
                                            </h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Objective Cards */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {objectives.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center`}
                                        >
                                            <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                                        </div>
                                        <h3 className="text-xl font-light text-slate-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 font-light">{item.description}</p>
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
                                Why CxO-<span className="text-blue-600">Smart Services</span>?
                            </h2>
                            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                                Organizations are turning to CxO-as-a-Service to address critical challenges
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseUs.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-medium text-slate-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 font-light leading-relaxed">
                                            {item.description}
                                        </p>
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
                            Ready to Transform Your Leadership Approach?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
                            Unlock the full potential of your organization with expert CxO guidance.
                            Let's modernize your operations, innovate with data and AI, and scale your business securely.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                                    Schedule Consultation
                                </button>
                            </Link>
                            <button className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                                Download Service Overview
                            </button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default CXOServicesPage;