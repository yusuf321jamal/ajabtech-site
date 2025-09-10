"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PartnersComponent = () => {
  const partnersData = [
    {
      category: "Data, Analytics & Artificial Intelligence",
      partners: [
        {
          name: "Databricks",
          logo: "https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667650343823",
        },
        {
          name: "Snowflake",
          logo: "https://cdn.brandfetch.io/idO0Y4-7Tt/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1749142472696",
        },
        {
          name: "Azure AI",
          logo: "https://cdn.brandfetch.io/idgS27aNck/theme/dark/id3I3zPTEl.svg?c=1bxid64Mup7aczewSAYMX&t=1676866243195",
        },
        {
          name: "Informatica",
          logo: "https://cdn.brandfetch.io/idrw6ovtUj/w/250/h/91/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1667838102407",
        },
        {
          name: "Microsoft Fabric",
          logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
        {
          name: "Tableau",
          logo: "https://cdn.brandfetch.io/id9sYMA_Im/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667560960373",
        },
        {
          name: "Google BigQuery",
          logo: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
        {
          name: "Cloudera",
          logo: "https://www.cloudera.com/content/dam/www/marketing/images/logos/cloudera/cloudera-logo@2x.png",
        },
      ],
    },
    {
      category: "Digital Transformation at Scale with Cloud first Strategy",
      partners: [
        {
          name: "GCP",
          logo: "https://cdn.brandfetch.io/idraDGOvr8/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1748275789099",
        },
        {
          name: "AWS",
          logo: "https://cdn.brandfetch.io/idVoqFQ-78/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1691083841257",
        },
        {
          name: "Azure",
          logo: "https://cdn.brandfetch.io/idgS27aNck/theme/dark/id3I3zPTEl.svg?c=1bxid64Mup7aczewSAYMX&t=1676866243195",
        },
        {
          name: "Oracle OCI",
          logo: "https://7424624.fs1.hubspotusercontent-na1.net/hub/7424624/hubfs/oci_blog_feature.jpg?length=700&name=oci_blog_feature.jpg",
        },
      ],
    },
    {
      category: "Robust Cyber Defense, Compliance & Governance Services",
      partners: [
        {
          name: "Sectona",
          logo: "https://sectona.com/wp-content/uploads/2023/10/Sectona-Logo.webp",
        },
        {
          name: "Sailpoint",
          logo: "https://cdn.brandfetch.io/idmTvFU2Bh/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668013734658",
        },

        {
          name: "Fortinet",
          logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg",
        },
        {
          name: "Barracuda",
          logo: "https://cdn.brandfetch.io/idNduLDSoG/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1750786633677",
        },
        {
          name: "TrenMicro",
          logo: "https://cdn.brandfetch.io/idr-d475UT/w/382/h/382/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
        },

        {
          name: "Forcepoint",
          logo: "https://cdn.brandfetch.io/idwYIxvPsl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667665897836",
        },
        {
          name: "Kaspersky",
          logo: "https://cdn.brandfetch.io/idedmP5Q8M/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692821436989",
        },

        {
          name: "DarkTrace",
          logo: "https://cdn.prod.website-files.com/62e3de3c93a3f82e39b780db/666835a138d48796efe486d7_DT-Brandhub-logo.svg",
        },
      ],
    },
    {
      category: "Industry 4.0 Solutions",
      partners: [
        {
          name: "Honeywell",
          logo: "https://cdn.brandfetch.io/id9eVV7cJp/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1676044241884",
        },

        {
          name: "Rockwell Automation",
          logo: "https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg",
        },
        {
          name: "General Electrics",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/750px-General_Electric_logo.svg.png",
        },
        {
          name: "Siemens",
          logo: "https://cdn.brandfetch.io/idtwZZpkvB/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692871842342",
        },

      ],
    },
    {
      category: "Intelligent Process Automation",
      partners: [


        {
          name: "Uipath",
          logo: "https://cdn.brandfetch.io/idEaAShmlC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667779183199",
        },
        {
          name: "Automation Anywhere",
          logo: "https://www.automationanywhere.com/sites/default/files/images/default-images/logo-aa-new.svg",
        },
        {
          name: "MS Power Automate",
          logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_PAU_icon?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=96&hei=96&qlt=100&fit=constrain",
        },
        {
          name: "Nintex",
          logo: "https://www.nintex.com/wp-content/uploads/2024/10/nintex-logo-color.svg",
        },
      ],
    },
    {
      category: "ERP Solutions",
      partners: [
        {
          name: "SAP",
          logo: "https://cdn.brandfetch.io/idQXbkxScC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1675843845700",
        },
        {
          name: "ORACLE",
          logo: "https://cdn.brandfetch.io/idnq7H7qT0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667576597046",
        },
        {
          name: "Microsoft",
          logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
        {
          name: "INFOR",
          logo: "https://cdn.brandfetch.io/idsRd-6zJL/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562289876",
        },
      ],
    },
    {
      category: "CRM, & API Integration & Management, Business Intelligence",
      partners: [
        {
          name: "Salesforce",
          logo: "https://cdn.brandfetch.io/idVE84WdIN/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667559911541",
        },

        {
          name: "Microsoft CRM",
          logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },

        {
          name: "IBM WebMethods",
          logo: "https://store-images.s-microsoft.com/image/apps.38214.a02a684a-e90b-4292-bdd1-1b7ee9d2af8d.6dcd9984-dee8-4bb5-86c2-d6d76d33a801.89b0feaf-d2d6-4763-8de7-dbd21165420e",
        },
        {
          name: "Bizzdesign Alfabet",
          logo: "https://www.alfabet.com/_assets/52e0a99355170d286c0a11ab3c2a2394/Images/alfabet-a-bizzdesign-co-logo.svg",
        },

        {
          name: "Google APIGEE",
          logo: "https://www.gstatic.com/bricks/image/b45728f17bf88494b25d78a9fb27ae538e6eb4a06a972f6502b7410ff714532d.svg",
        },
        {
          name: "MS Power BI",
          logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_BPI_icon1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=96&hei=96&qlt=100&fmt=png-alpha&fit=constrain",
        },
        {
          name: "Qlik",
          logo: "https://assets.qlik.com/image/upload/q_auto/v1713297745/qlik/logos/logo-qlik_d49uek.svg",
        },
        {
          name: "MicroStrategy",
          logo: "https://images.contentstack.io/v3/assets/bltb564490bc5201f31/bltfca3027a7e89bc13/6787e4768c6f504919511797/strategy_logo_black.svg",
        },
      ],
    },
    {
      category: "Information Management & ITSM Solutions",
      partners: [
        {
          name: "OpenText",
          logo: "https://cdn.brandfetch.io/idSy1EvYON/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1673587852892",
        },

        {
          name: "MS Sharepoint",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/768px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png?20190925170659",
        },
        {
          name: "ServiceNow",
          logo: "https://cdn.brandfetch.io/idn6njzi5Z/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1677205843183",
        },

        {
          name: "BMC",
          logo: "https://www.bmc.com/content/dam/bmc/graphics/bmc-logo.svg",
        },

        {
          name: "ManageEngine",
          logo: "https://cdn.brandfetch.io/idHLy8nQ41/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1695289842818",
        },
        {
          name: "PEGA",
          logo: "https://www.pega.com/themes/custom/pegawww_theme/images/pega-logo.svg",
        },
        {
          name: "VMware",
          logo: "https://www.vmware.com/media/blt8c9a8aaca0ffd4ac/blt5a3e185aed7848a3/65fac63dd3267616e27e7051/vmware-logo-grey.svg",
        },
        {
          name: "RedHat",
          logo: "https://cdn.brandfetch.io/idv-kXnBLU/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
      ],
    },
    {
      category: "QHSE Digital Solutions",
      partners: [
        {
          name: "Intelex",
          logo: "https://cdn.brandfetch.io/idrPMCHGit/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750959327461",
        },

        {
          name: "IBM Maxino",
          logo: "https://store-images.s-microsoft.com/image/apps.38214.a02a684a-e90b-4292-bdd1-1b7ee9d2af8d.6dcd9984-dee8-4bb5-86c2-d6d76d33a801.89b0feaf-d2d6-4763-8de7-dbd21165420e",
        },
        {
          name: "SAP",
          logo: "https://cdn.brandfetch.io/idQXbkxScC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1675843845700",
        },
        {
          name: "Oracle",
          logo: "https://cdn.brandfetch.io/idnq7H7qT0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667576597046",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Radial Line Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-radial-gradient(
              circle,
              rgba(14, 165, 233, 0.3) 0px,
              rgba(14, 165, 233, 0.3) 1px,
              transparent 1px,
              transparent 10px
            )
          `,
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium mb-4 border border-blue-100">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
            Our Technology Partners
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              Offerings & Technologies
            </span>
            <span className="text-blue-600"> / Partners</span>
          </h2>
          <p className="text-lg bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent max-w-3xl mx-auto font-medium">
            "Love what you do, Love who you do it with and Love who you do it
            for."
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {partnersData.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[120px]">
                {/* Category Column */}
                <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 flex items-center border-r border-blue-100">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-md font-semibold text-slate-900 leading-tight">
                        {section.category}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Partners Column */}
                <div className="lg:col-span-3 p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {section.partners.map((partner, partnerIndex) => (
                      <motion.div
                        key={partnerIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                      >
                        <div className="aspect-[2/1] bg-white rounded-lg border border-gray-200 p-1 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
                          {/* Placeholder for logo */}
                          <div className="w-full h-full bg-slate-100 rounded-md flex items-center justify-center overflow-hidden">
                            <Image
                              src={partner.logo}
                              alt={partner.name || "Partner"}
                              width={100}
                              height={90}
                              className="object-contain drop-shadow-md"
                            />

                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Partner with Industry Leaders?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Leverage our extensive network of technology partners to
              accelerate your digital transformation journey.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Get Started Today
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersComponent;
