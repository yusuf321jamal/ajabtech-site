"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import dynamic from "next/dynamic";

const ReactCountryFlag = dynamic(() => import("react-country-flag"), {
  ssr: false,
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Thank you for your email. Our team will reach out to you shortly.\n\nBest Regards,\nAJAB Technologies.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send message. Try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(
        () => setStatus({ type: "", message: "" }),
        15000
      );
      return () => clearTimeout(timer);
    }
  }, [status]);

  // WhatsApp message handler
  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in your services. Could you please provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.contact[0].whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-16 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's Talk
          </motion.h1>
          <p className="text-lg md:text-xl text-blue-100">
            We're here to help. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and your message will be sent directly
                  to us.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Status message */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className={`rounded-lg p-5 text-center shadow-md border ${status.type === "success"
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800"
                        }`}
                    >
                      {status.type === "success" ? (
                        <>
                          <h4 className="font-semibold text-lg mb-2">
                            🎉 Message Sent!
                          </h4>
                          <p className="text-sm whitespace-pre-line leading-relaxed">
                            {status.message}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm">{status.message}</p>
                      )}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  >
                    {loading ? "Sending..." : "Send"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Details & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-1 relative inline-block">
                Contact Details
                <span className="block h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-2 mx-auto lg:mx-0"></span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Connect with any of our offices around the world. Our teams are
                ready to assist you wherever you are.
              </p>
            </div>

            <div className="space-y-10">
              {siteConfig.contact.map((office, index) => (
                <div
                  key={index}
                  className="space-y-3 border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    {/* ReactCountryFlag replaces emoji */}
                    <ReactCountryFlag
                      countryCode={office.code}
                      svg
                      style={{ fontSize: "2em", lineHeight: "1.5em" }}
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {office.country}
                    </h3>
                  </div>

                  <div className="space-y-3 pl-1">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="text-blue-600 w-5 h-5" />
                      <a
                        href={`tel:${office.phone}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="text-blue-600 w-5 h-5" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="text-blue-600 w-5 h-5" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-4 flex flex-col gap-2 border border-green-100 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">Reach out to us instantly.</p>
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="mt-2 bg-green-600 hover:bg-green-700"
                  >
                    Chat Now
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
