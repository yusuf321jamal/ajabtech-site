"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ReactCountryFlag = dynamic(() => import("react-country-flag"), {
  ssr: false,
})

import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  const [currentLang, setCurrentLang] = useState("en");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 border-t border-blue-100/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.02) 0%, transparent 50%)`,
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3 group">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3 group flex-shrink-0"
              >
                <Image
                  src="./logo.png"
                  alt="AJAB Tech Logo"
                  width={192}
                  height={80}
                  className="h-12 w-auto sm:h-16 lg:h-20 lg:w-48 object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex space-x-3">
              {[
                { href: siteConfig.social.linkedin, icon: Linkedin },
                { href: siteConfig.social.twitter, icon: Twitter },
                { href: siteConfig.social.facebook, icon: Facebook },
              ].map(({ href, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="group p-2 rounded-md bg-white/60 backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/50 hover:bg-blue-50/80 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Icon className="h-4 w-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h3>
            <div className="space-y-3">
              {siteConfig.navigation.main.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium py-1"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Services</h3>
            <div className="space-y-3">
              {siteConfig.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="group flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium py-1"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
            <div className="space-y-6">
              {siteConfig.contact.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Add subtle separator between locations except for the last one */}
                  {index < siteConfig.contact.length - 1 && (
                    <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"></div>
                  )}

                  <div className="flex items-center mb-2">
                    <ReactCountryFlag
                      countryCode={location.code}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: "0.5rem",
                        borderRadius: "3px",
                      }}
                      title={location.country}
                    />
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {location.country}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="p-1.5 rounded-md bg-blue-100/80 mt-0.5">
                        <Phone className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <Link
                        href={`tel:${location.phone.replace(/[()\s-]/g, '')}`}
                        className="text-slate-600 text-sm hover:text-blue-600 transition-colors duration-200"
                      >
                        {location.phone}
                      </Link>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="p-1.5 rounded-md bg-blue-100/80 mt-0.5">
                        <Mail className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <Link
                        href={`mailto:${location.email}`}
                        className="text-slate-600 text-sm hover:text-blue-600 transition-colors duration-200"
                      >
                        {location.email}
                      </Link>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="p-1.5 rounded-md bg-blue-100/80 mt-0.5">
                        <MapPin className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <span className="text-slate-600 text-sm">
                        {location.address}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-blue-100/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}