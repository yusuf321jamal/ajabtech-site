export const siteConfig = {
  name: "AJAB Tech",
  domain: "www.ajabtech.com",
  tagline: "Your Gateway to the Middle East",
  description:
    "Empowering Your Business Through Technology - Leading IT consulting and services company in Saudi Arabia",


  // Contact Locations and info
  contact: [
    {
      country: "Saudi Arabia",
      code: "SA",
      phone: "(+966) 53 204 2226",
      whatsapp: "966532042226",
      email: "sales@ajabtech.com",
      address: "Abi Tahir Al Dhahabi St, Al Mutamarat, Riyadh 12711",
    },
    {
      country: "India",
      code: "IN",
      phone: "(+91) 705 766 4666",
      email: "sales@ajabtech.com",
      address: "Kondhwa, Pune 411048, Maharashtra, India",
    },
    {
      country: "Egypt",
      code: "EG",
      phone: "(+20) 11 0204 7222",
      email: "sales@ajabtech.com",
      address: "Nasr City, Cairo, Egypt",
    },
  ],
  // Social Media
  social: {
    linkedin: "https://www.linkedin.com/groups/3374066/",
    twitter: "https://twitter.com/ajabtech",
    facebook: "https://facebook.com/ajabtech",
  },
  heroSlides: [
    {
      id: 1,
      image: "/slide1.webp",
      tagline:
        "Frontiers of Next-Gen Technologies.",
      subtitle: "Powering Possibilities, Creating Wonders & Empowering businesses through innovative IT solutions",
      cta: "Explore Services",
      link: "/contact",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/887882750/photo/his-presentations-are-always-informative.webp?a=1&b=1&s=612x612&w=0&k=20&c=4wexIp3QnfD6LNT2tMeYdsAWkhkrwiUxUzuXzy2T-eg=",
      tagline: "CxO-as-a-Service",
      subtitle: "Strategic Leadership Services for Data-Driven Growth",
      cta: "Explore Services",
      link: "/services/cxo-as-service",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      tagline: "Digital Transformation at Scale",
      subtitle: "Modernize. Transform. Lead with Confidence",
      cta: "Get Started",
      link: "/services/digital-transformation",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      tagline: "Cloud first Strategy, Solutions & Services ",
      subtitle: "Empowering businesses with AWS, Azure & GCP for digital transformation at scale.",
      cta: "Start Your Cloud Journey",
      link: "/services/cloud-first",
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tagline: "AI • ML • Data • Analytics",
      subtitle: "Transform Data Into Intelligence. Turn Intelligence Into Growth",
      cta: "Learn More",
      link: "/services/data-analytics-ai",
    },

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tagline: "Cybersecurity",
      subtitle: "Secure. Compliant. Future-Ready Infrastructure",
      cta: "Discover More",
      link: "/services/cyber-security",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1578866867823-0ec57f73542a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tagline: "Industry 4.0",
      subtitle: "Digital Factories. Smart Operations. Intelligent Decisions",
      cta: "Explore Solutions",
      link: "/services/industry-4-0",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tagline: "Saudization of Workforce",
      subtitle: "Upskill. Empower. Deliver Saudization in IT Functions",
      cta: "Get Started",
      link: "/services/it-talent",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      tagline: "ERP Solutions",
      subtitle: "That Power Your Business Forward",
      cta: "Get Started",
      link: "/services/erp-solutions",
    },

    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tagline: "CRM • API Integration & Management • Business Intelligence",
      subtitle: "Connecting Your Business. Empowering Your Data",
      cta: "Learn More",
      link: "/services/crm-api-bi",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tagline: "ITSM",
      subtitle: "Organize Information. Optimize IT. Drive National Impact",
      cta: "Discover More",
      link: "/services/information-management",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tagline: "QHSE",
      subtitle:
        "Enhancing Safety. Ensuring Quality. Empowering Sustainability",
      cta: "Explore Solutions",
      link: "/services/qhse-solutions",
    },

  ],


  // Services
  services: [
    {
      id: "cxo-as-a-service",
      title: "CxO-as-a-Service",
      subtitle:
        "Turnkey CxO Services for Growth, Governance, and AI-Readiness",
      icon: "Briefcase",
      description:
        "In today’s data-driven world, AJAB’s CxO-as-a-Service model helps organizations rapidly operationalize their Digital (Data and AI) ambitions—through Governance, Regulation, Risk, Security, and Growth lenses—driving both business growth and cost optimization.",
      image:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "Designing CxO office goals, operating model, and governance framework",
        "Driving change management and stakeholder engagement",
        "Standing up the data organization (hiring, org design, operations)",
        "Executing strategic data initiatives (AI, automation, efficiency, compliance)",
        "Conducting regular data governance, ethics, and compliance audits"
      ],
      benefits: [
        "Become AI-ready and insights-led with confidence",
        "Scale data-driven decision-making across the enterprise",
        "Mitigate risks around governance, regulation, and compliance",
        "Treat data as a true business asset, not just a tech function",
        "Accelerate growth and optimize costs with trusted frameworks"
      ],
      technologies: [
        {
          name: "GCP",
          logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
        },
        {
          name: "AWS",
          logo: "https://cdn.brandfetch.io/idVoqFQ-78/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1691083841257"
        },
        {
          name: "Azure",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Oracle OCI",
          logo: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg"
        }
      ],

    },
    {
      id: "digital-transformation-scale",
      title: "Digital Transformation at Scale",
      subtitle:
        "Modernize. Transform. Lead. Build future-ready organizations with scalable digital & business transformation.",
      icon: "Workflow",
      description:
        "Our Digital Transformation service provides a structured, phased approach to assess, strategize, implement, and sustain enterprise-wide transformation initiatives—ensuring a strong foundation for growth, compliance, and innovation.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "Digital maturity, business process & organizational readiness assessments",
        "Transformation strategy & roadmap design (business, digital, data, AI/ML)",
        "Solution architecture design & enterprise system implementations (ERP, CRM, HRMS, cloud migration, cybersecurity)",
        "Process redesign, workflow automation & customer experience enhancements",
        "Change management, upskilling, agile enablement & digital culture adoption",
        "Sustainability programs: CoEs, GCC setup (BOT model), continuous innovation & KPI tracking"
      ],
      benefits: [
        "Step-by-step phased approach tailored to enterprise needs",
        "Alignment with SDAIA, NDMO, DGA’s NORA 2.0, SIRI frameworks for compliance",
        "Integrated people–process–technology–governance model",
        "Faster time-to-value with quick wins and measurable KPIs",
        "Future-ready organization resilient to disruption and innovation-driven"
      ],
      technologies: [
        {
          name: "Oracle",
          logo: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg"
        },
        {
          name: "Salesforce",
          logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
        },
        {
          name: "Azure",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "AWS",
          logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
        }
      ],

    }

    ,
    {
      id: "cloud-transformation",
      title: "Cloud first Strategy • Solutions & Services",
      subtitle: "Cloud-First Strategy, Solutions & Services",
      icon: "Cloud",
      description:
        "End-to-end cloud services built on world's leading platforms—Google Cloud Platform (GCP), Amazon Web Services (AWS), Microsoft Azure, and multi-cloud architectures. Transform, innovate, and lead with confidence.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      keyCapabilities: [
        "Cloud Strategy & Consulting",
        "Seamless Cloud Migration Services",
        "Cloud Security & Governance",
        "Cloud Optimization & FinOps",
        "DevOps & Automation (Kubernetes, Docker, IaC)",
      ],
      benefits: [
        "Certified Cloud Experts across AWS, Azure, and GCP",
        "Vendor-Neutral Approach for best-fit solutions",
        "24/7 support and managed services",
        "Scalable & Secure infrastructure",
      ],
      technologies: [
        {
          name: "AWS",
          logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
        },
        {
          name: "Microsoft Azure",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Google Cloud",
          logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
        },
        {
          name: "Kubernetes",
          logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
        },
        {
          name: "Docker",
          logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
        },
        {
          name: "Terraform",
          logo: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"
        }
      ],

    },
    {
      id: "data-analytics-ai",
      title: "AI • ML • Data • Analytics",
      subtitle:
        "Transform Data Into Intelligence. Turn Intelligence Into Growth",
      icon: "BarChart3",
      description:
        "Unlock the true potential of your data through advanced analytics, intelligent automation, and enterprise-ready AI solutions. From raw data to predictive insights—we power decisions that move your business forward.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "Data strategy and architecture consulting",
        "Data warehousing & data lake setup (Azure, Snowflake, Databricks)",
        "Interactive dashboards and reports (Power BI, Tableau)",
        "AI/ML model development and deployment",
        "GenAI use cases (chatbots, content generation, summarization)",
      ],
      benefits: [
        "Future-ready solutions tailored to your business model",
        "Domain expertise in cloud data platforms & AI frameworks",
        "Localized implementation for KSA/GCC compliance",
        "Tools you trust: Azure AI, Databricks, Microsoft Fabric",
      ],
      technologies: [
        {
          name: "Azure AI",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Databricks",
          logo: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg"
        },
        {
          name: "Power BI",
          logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg"
        },
        {
          name: "Snowflake",
          logo: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg"
        },
        {
          name: "Python",
          logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
        },
        {
          name: "TensorFlow",
          logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
        }
      ],

    },

    {
      id: "cybersecurity-compliance",
      title: "Cybersecurity",
      subtitle: "Secure. Compliant. Future-Ready Infrastructure",
      icon: "Shield",
      description:
        "End-to-end cybersecurity services that protect digital assets, ensure regulatory compliance, and build cyber resilience. Aligned with Saudi Vision 2030's digital transformation agenda.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "NCA compliance (Essential Cybersecurity Controls)",
        "24/7 Security Operations Center (SOC-as-a-Service)",
        "Network & Endpoint Security",
        "Identity & Access Management (IAM)",
        "Cyber Resilience & Awareness Training",
      ],
      benefits: [
        "Specialized in KSA cybersecurity frameworks (NCA, PDPL)",
        "Certified experts in Microsoft, Fortinet, Sailpoint",
        "24/7 monitoring, threat detection, and incident response",
        "Committed to Saudi Arabia's secure digital future",
      ],
      technologies: [
        {
          name: "Azure Sentinel",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Fortinet",
          logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg"
        },
        {
          name: "Splunk",
          logo: "https://www.splunk.com/content/dam/splunk2/en_us/images/icon-library/footer/logo-splunk-corp-rgb-k-web.svg"
        },
        {
          name: "Okta",
          logo: "https://www.vectorlogo.zone/logos/okta/okta-icon.svg"
        },
        {
          name: "CrowdStrike",
          logo: "https://assets.crowdstrike.com/is/content/crowdstrikeinc/black-primary-crowdstrike-logo-1-addedPadding-3?ts=1756311905040&dpr=off"
        },
        {
          name: "Palo Alto",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhdZ-6njdySOSt4oU34jbT0awichiLS__0w&s"
        }
      ],

    },
    {
      id: "industry-4-0",
      title: "Industry 4.0",
      subtitle: "Digital Factories. Smart Operations. Intelligent Decisions",
      icon: "Factory",
      description:
        "Empower manufacturers and industrial enterprises with Industry 4.0 solutions that integrate operational technology (OT) with information technology (IT), driving automation and intelligence.",
      image:
        "https://images.unsplash.com/photo-1578866867823-0ec57f73542a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      keyCapabilities: [
        "Smart Factory Integration & IIoT implementation",
        "Industrial Data & Analytics",
        "AI & Automation for Manufacturing",
        "Connected Supply Chain",
        "Digital Twin Design and Simulation",
      ],
      benefits: [
        "End-to-end Industry 4.0 expertise: from factory floor to cloud",
        "Integration-ready: connects ERP, MES, CRM, and IoT systems",
        "Innovation-led: powered by AI, machine learning, and automation",
        "Scalable: from pilot projects to full enterprise rollout",
      ],
      technologies: [
        {
          name: "Azure IoT",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "AWS Greengrass",
          logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
        },

        {
          name: "Modbus",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Logo_of_Modbus.svg/2560px-Logo_of_Modbus.svg.png"
        },
        {
          name: "Power BI",
          logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg"
        },
        {
          name: "Databricks",
          logo: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg"
        }
      ],

    },
    {
      id: "it-talent-training",
      title: "Saudization of Workforce",
      subtitle: "Upskill. Empower. Deliver Saudization in IT Functions",
      icon: "GraduationCap",
      description:
        "Build and scale a future-ready digital workforce through specialized training programs and IT staffing services. Support Saudization and align with Vision 2030 goals.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "Cloud Administration Training (Azure, AWS, GCP)",
        "Cybersecurity & Governance Training",
        "Technical Staffing & Outsourcing",
        "Saudi national placement support (Saudization)",
        "Custom corporate bootcamps",
      ],
      benefits: [
        "Experienced in upskilling public & private sector IT teams",
        "Access to pool of Saudi and international tech talent",
        "Vendor-certified trainers and deployment-ready consultants",
        "Bilingual (Arabic/English) training content and support",
      ],
      technologies: [
        {
          name: "Microsoft Learn",
          logo: "https://learn.microsoft.com/favicon.ico"
        },
        {
          name: "AWS Training",
          logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
        },
        {
          name: "Google Cloud Skills",
          logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
        },
        {
          name: "Coursera",
          logo: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg"
        },
        {
          name: "Udemy",
          logo: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg"
        }
      ],

    },
    {
      id: "erp-solutions",
      title: "ERP Solutions",
      subtitle: "That Power Your Business Forward",
      icon: "Settings",
      description:
        "Unlock efficiency, visibility, and control through end-to-end ERP solutions tailored to your industry and growth stage. Streamline operations, automate processes, and enable data-driven decisions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      keyCapabilities: [
        "ERP Consulting & Strategy",
        "Implementation & Customization",
        "ZATCA e-invoicing & VAT compliance",
        "Integration & Automation",
        "Support & Optimization",
      ],
      benefits: [
        "Experienced ERP consultants & functional experts",
        "Region-specific compliance (KSA, GCC, Africa)",
        "Rapid deployment options for SMBs",
        "Strong partner ecosystem for integrations",
      ],
      technologies: [
        {
          name: "Microsoft Dynamics 365",
          logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg"
        },
        {
          name: "SAP S/4HANA",
          logo: "https://www.vectorlogo.zone/logos/sap/sap-icon.svg"
        },
        {
          name: "Oracle",
          logo: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg"
        },
        {
          name: "Odoo",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaz4RjOBiXxvwPRbwOiIJ885zCEfjQtJU-Q&s"
        },
        {
          name: "Power Platform",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpHQRP1Bc7mWFvoMpXsirpO7tx8GlgVswxA&s"
        }
      ],

    },
    {
      id: "crm-integration-bi",
      title: "CRM • API Integration & Management • Business Intelligence",
      subtitle: "Connecting Your Business. Empowering Your Data",
      icon: "Users",
      description:
        "Smart, scalable solutions across Customer Relationship Management, API Integration & Management, and Business Intelligence—helping organizations unify experiences and harness data power.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "CRM Implementation (Dynamics 365, Salesforce, Zoho)",
        "REST & SOAP API development and integration",
        "Dashboard and report development (Power BI, Tableau)",
        "API management platforms setup",
        "Real-time data synchronization",
      ],
      benefits: [
        "Business-first approach with deep technical expertise",
        "Certified in top CRM, API, and BI platforms",
        "Focused on KSA, GCC, and regional localization",
        "Security, scalability, and compliance built-in",
      ],
      technologies: [
        {
          name: "Dynamics 365",
          logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg"
        },
        {
          name: "Salesforce",
          logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
        },
        {
          name: "Power BI",
          logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg"
        },
        {
          name: "Azure API Management",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Tableau",
          logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png"
        }
      ],

    },
    {
      id: "information-management-itsm",
      title: "ITSM",
      subtitle: "Organize Information. Optimize IT. Drive National Impact",
      icon: "Database",
      description:
        "Enable organizations to digitally manage information assets and deliver seamless IT services—aligned with Saudi Vision 2030's digital transformation goals.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "Document & content management (DMS/ECM solutions)",
        "ITSM platform deployment (ServiceNow, ManageEngine)",
        "Records management & digital archiving",
        "Service desk setup & automation",
        "Compliance with Saudi data laws (NCA, PDPL)",
      ],
      benefits: [
        "Experts in global platforms + local regulatory compliance",
        "eamless integration with Microsoft 365, Dynamics, Azure",
        "Data security-first mindset with NCA & PDPL alignment",
        "Scalable for small teams or enterprise-level operations",
      ],
      technologies: [
        {
          name: "ServiceNow",
          logo: "https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg"
        },
        {
          name: "SharePoint",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Q0oYsmLeZPUFUn6PHpEopKSa4_gUM5xA_g&s"
        },
        {
          name: "M-Files",
          logo: "https://www.m-files.com/wp-content/uploads/2025/07/M-Files-Logo.svg"

        },
        {
          name: "ManageEngine",
          logo: "https://www.manageengine.com/images/logo/manageengine-logo.svg"
        },
        {
          name: "Azure",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Office 365",
          logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg"
        }
      ],

    },
    {
      id: "qhse-digital",
      title: "QHSE",
      subtitle: "Enhancing Safety. Ensuring Quality. Empowering Sustainability",
      icon: "CheckCircle",
      description:
        "Technology-driven QHSE solutions that help organizations build a culture of safety, environmental responsibility, and operational excellence aligned with Vision 2030.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      keyCapabilities: [
        "QHSE Management Platforms",
        "Incident & Risk Management",
        "Quality Management & ISO compliance",
        "Environmental Monitoring & Sustainability",
        "HSE Training & Awareness (Digital)",
      ],
      benefits: [
        "Experience in digital QHSE systems tailored for KSA/GCC",
        "Mobile-first, multilingual platforms",
        "Vision 2030 and sustainability frameworks compliance",
        "Sector-specific expertise: oil & gas, construction, logistics",
      ],
      technologies: [
        {
          name: "Power Apps",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAjqpPigcdWEZ2JitcVUKJ1gq6Wm8X4BHdg&s"
        },
        {
          name: "SharePoint",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Q0oYsmLeZPUFUn6PHpEopKSa4_gUM5xA_g&s"
        },
        {
          name: "Azure IoT",
          logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
        },
        {
          name: "Power BI",
          logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg"
        },
        {
          name: "Teams",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png"
        },
        {
          name: "Forms",
          logo: "https://img.icons8.com/color/512/microsoft-forms.png"
        }
      ],

    },

  ],

  // Industries
  industries: [
    {
      id: "financial",
      title: "Banking, Financial Services and Insurance (BFSI)",
      icon: "Building2",
      description:
        "Secure, compliant IT solutions for banks, insurance companies, and financial institutions.",
    },
    {
      id: "oilandgas",
      title: "Oil and Gas, Telecom, Energy, and Utilities ",
      icon: "Droplets",
      description:
        "Digital transformation and operational efficiency solutions for resource-intensive industries.",
    },
    {
      id: "manufacturing",
      title: "Manufacturing and Logistics",
      icon: "Factory",
      description:
        "Industrial IoT, automation, and ERP solutions for manufacturing companies.",
    },
    {
      id: "engineering",
      title: "Engineering, Construction, Contracting, and Real Estate ",
      icon: "Construction",
      description:
        "Project management and digital twin solutions for built environment professionals.",
    },
    {
      id: "retail",
      title: "Retail, FMCG and Automobiles ",
      icon: "ShoppingCart",
      description:
        "Digital transformation solutions for retail businesses and e-commerce platforms.",
    },
    {
      id: "healthcare",
      title: "Healthcare & Pharmaceutical",
      icon: "Heart",
      description:
        "HIPAA-compliant technology solutions for hospitals, clinics, and healthcare providers.",
    },

    {
      id: "education",
      title: "Education",
      icon: "GraduationCap",
      description:
        "Educational technology solutions for schools, universities, and training institutions.",
    },
    {
      id: "legal",
      title: "Government and Public Sector",
      icon: "Landmark",
      description:
        "Secure digital citizen services and infrastructure modernization for public institutions.",
    },

  ],

  // Partners
  partners: {
    cloud: [
      {
        name: "AWS",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://aws.amazon.com",
      },
      {
        name: "Microsoft Azure",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://azure.microsoft.com",
      },
      {
        name: "Google Cloud",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://cloud.google.com",
      },
    ],
    enterprise: [
      {
        name: "SAP",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://sap.com",
      },
      {
        name: "Oracle",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://oracle.com",
      },
      {
        name: "ServiceNow",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://servicenow.com",
      },
    ],
    security: [
      {
        name: "Broadbits",
        logo: "/placeholder.svg?height=80&width=120",
        url: "#",
      },
      {
        name: "SAMCOFMS",
        logo: "/placeholder.svg?height=80&width=120",
        url: "#",
      },
    ],
  },

  // Why Choose AJAB
  whyChooseUs: [
    {
      icon: "Award",
      title: "Proven Expertise",
      description:
        "Years of experience delivering successful IT solutions across various industries.",
    },
    {
      icon: "Shield",
      title: "Security-First",
      description:
        "We prioritize security in every solution we design and implement.",
    },
    {
      icon: "Users",
      title: "Tailored Engagements",
      description:
        "Customized solutions that fit your specific business needs and requirements.",
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solutions",
      description:
        "Future-proof technology solutions that grow with your business.",
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description:
        "Round-the-clock support to ensure your systems are always running optimally.",
    },
  ],

  // Company Information
  company: {
    mission:
      "To deliver reliable, customized IT solutions that drive growth, enhance productivity, and reduce operational risks.",
    vision:
      "Realise Saudi 2030 vision: To unlock endless possibilities, Provide Innovative Solutions, empower every organization and every person to achieve more, help Organizations see data in meaningful ways, discover insights,",
    values: [
      "Client Focus – With a customer-first strategy, we treat your business as if it’s our own",
      "Innovation – We stay ahead of the curve with emerging technologies and creative solutions",
      "We act with transparency and honesty in all our engagements.",
      " We don’t just meet expectations—we exceed them",

    ],
    founded: "2020",
    employees: "120+",
    clients: "25+",
    countries: "3",

    // New image configurations
    images: {
      about: {
        main: "https://www.envacgroup.com/wp-content/uploads/2024/11/kafd-building-2-1-1920x1080-1.jpg",
        alt: "AJAB Tech professional team working on innovative solutions",
        fallback: "/images/about/office-building.jpg", // Fallback image
      },
      office: {
        exterior: "/images/office/building-exterior.jpg",
        interior: "/images/office/modern-workspace.jpg",
        meeting: "/images/office/team-meeting.jpg",
        alt: "AJAB Tech modern office space",
      },
      team: {
        leadership: "/images/team/leadership-team.jpg",
        developers: "/images/team/development-team.jpg",
        consultants: "/images/team/consulting-team.jpg",
        alt: "Professional team members at AJAB Tech",
      },
    },

    // Enhanced company stats
    achievements: [
      {
        metric: "99.9%",
        label: "Uptime Guarantee",
        description: "Reliable service delivery",
      },
      {
        metric: "24/7",
        label: "Support Available",
        description: "Round-the-clock assistance",
      },
      {
        metric: "15+",
        label: "Industries Served",
        description: "Diverse sector expertise",
      },
    ],

    // Company highlights for about section
    highlights: [
      {
        title: "Industry Expertise",
        description:
          "Deep knowledge across multiple sectors in the Middle East market",
        icon: "Building2",
      },
      {
        title: "Proven Track Record",
        description:
          "Successfully delivered 500+ projects with measurable business impact",
        icon: "Award",
      },
      {
        title: "Innovation Focus",
        description:
          "Cutting-edge solutions using latest technologies and methodologies",
        icon: "Lightbulb",
      },
    ],
  },

  // Team Members
  team: [
    {
      name: "Ahmed Al-Rashid",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in IT consulting and digital transformation.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      bio: "Technology expert specializing in cloud architecture and cybersecurity.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mohammed Al-Fahad",
      position: "VP of Operations",
      bio: "Operations specialist ensuring seamless service delivery and client satisfaction.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],

  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Industries", href: "/industries" },
      { name: "Why AJAB", href: "/why-ajab" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" },
    ],
  },

  // Multilingual Support
  languages: {
    en: {
      name: "English",
      code: "en",
      dir: "ltr",
    },
    ar: {
      name: "العربية",
      code: "ar",
      dir: "rtl",
    },
  },
};

export type SiteConfig = typeof siteConfig;
