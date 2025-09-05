"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  Building2,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

type TabKey = "vision" | "mission" | "values";

export default function AboutPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("vision");

  const tabContent: Record<
    TabKey,
    {
      title: string;
      content: string;
      icon: React.ElementType;
    }
  > = {
    vision: {
      title: "Our Vision",
      content: siteConfig.company.vision,
      icon: Eye,
    },
    mission: {
      title: "Our Mission",
      content: siteConfig.company.mission,
      icon: Target,
    },

    values: {
      title: "Our Values",
      content:
        "We are guided by core principles that shape every decision and interaction.",
      icon: Heart,
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Radial Pattern Background */}
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
            About Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              About <span className="text-blue-600">AJAB Tech</span>
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Empowering businesses across the Middle East with cutting-edge
            technology solutions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-sm border border-blue-50 shadow-lg rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 border border-white/50 rounded-2xl pointer-events-none"></div>

            {/* Light gradient border replacement */}
            <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-blue-100/40 via-sky-100/30 to-blue-100/40 pointer-events-none">
              <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-200 via-sky-300 to-blue-200 rounded-b-full"></div>

            {/* Subtle corner accents - lighter version */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sky-100/10 rounded-full blur-xl"></div>

            {/* Floating particles */}
            <div className="absolute top-4 left-6 w-2 h-2 bg-blue-200/40 rounded-full blur-sm"></div>
            <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-sky-300/30 rounded-full blur-sm"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-200/30 rounded-full blur-sm"></div>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light text-center relative z-10">
              <span className="font-semibold text-slate-900 bg-gradient-to-r from-blue-50 to-sky-50 px-2 py-1 rounded-lg border border-blue-100/50">
                Specialized Solutions for Communication and IT
              </span>{" "}
              is a foreign investment company registered with{" "}
              <span className="font-medium text-blue-600/90 bg-blue-50/30 px-1 py-0.5 rounded-md border border-blue-100/30">
                Ministry of Investment of Saudi Arabia (MISA)
              </span>
              , operating through two specialized divisions:{" "}
              <span className="font-medium text-slate-900 bg-slate-50/50 px-1.5 py-0.5 rounded-md border border-slate-100/50">Taqadom</span> and{" "}
              <span className="font-medium text-slate-900 bg-slate-50/50 px-1.5 py-0.5 rounded-md border border-slate-100/50">AJAB Technologies</span>.
              <br></br>
              <br></br>
              Both are part of{" "}
              <span className="font-medium text-slate-900 bg-gradient-to-r from-slate-50/50 to-blue-50/30 px-1.5 py-0.5 rounded-md border border-slate-100/50">Pansoft Technologies</span>{" "}
              headquartered in Dubai.
            </p>
          </div>
        </motion.div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white/80 backdrop-blur-sm p-1 rounded-lg border border-blue-100 shadow-sm">
              {Object.entries(tabContent).map(([key, content]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabKey)}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeTab === key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {content.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {(() => {
                  const IconComponent = tabContent[activeTab].icon;
                  return (
                    <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                  );
                })()}
                <h3 className="text-xl font-semibold text-slate-900">
                  {tabContent[activeTab].title}
                </h3>
              </div>

              {activeTab === "values" ? (
                <ul className="space-y-3">
                  {siteConfig.company.values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 font-light">{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 leading-relaxed font-light">
                  {tabContent[activeTab].content}
                </p>
              )}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-4 gap-2 sm:gap-6 mt-8"
            >
              {/* Founded */}
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-blue-100 shadow-sm">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {siteConfig.company.founded}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Founded</div>
              </div>

              {/* Team Members */}
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-blue-100 shadow-sm">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {siteConfig.company.employees}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Team Members</div>
              </div>

              {/* Happy Clients */}
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-blue-100 shadow-sm">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {siteConfig.company.clients}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Happy Clients</div>
              </div>

              {/* Countries */}
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-blue-100 shadow-sm">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {siteConfig.company.countries}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Countries</div>
              </div>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 shadow-sm"
              >
                <Link href="/about" className="inline-flex items-center">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                {/* Uncomment and replace with actual image when available */}
                <Image
                  src={
                    siteConfig.company.images.about?.main ||
                    "https://www.envacgroup.com/wp-content/uploads/2024/11/kafd-building-2-1-1920x1080-1.jpg"
                  }
                  alt="AJAB Tech Team"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1000}
                />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-2xl blur-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
