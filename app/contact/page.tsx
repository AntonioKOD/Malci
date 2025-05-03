"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import CostCalculator from "@/components/cost-calculator"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^[0-9()\-\s+]+$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // In a real application, you would send the form data to your server or a form handling service
      console.log("Form submitted:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, estimates, or to schedule a consultation."
        backgroundImage="/placeholder.svg?key=contact-header"
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div ref={ref} className="lg:col-span-2 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Get In Touch</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                We&apos;re here to answer any questions you may have about our services, provide estimates, or schedule a
                consultation. Reach out to us using any of the methods below, or fill out the contact form.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">+1 (929) 536-4063</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monday-Friday, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">malciconstruction@gmail.com</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300">Danbury, CT 06824</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Clock className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">Business Hours</h3>
                    <p className="text-slate-600 dark:text-slate-300">Monday-Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 dark:text-slate-300">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-slate-600 dark:text-slate-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-8 border border-slate-100 dark:border-slate-700 ${
                  inView ? "animate-fade-in-up delay-100" : "opacity-0"
                }`}
              >
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send Us a Message</h2>

                {formStatus === "success" && (
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded mb-6">
                    Thank you for your message! We&apos;ll get back to you as soon as possible.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded mb-6">
                    There was an error sending your message. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white ${
                          formErrors.name
                            ? "border-red-300 dark:border-red-700"
                            : "border-slate-300 dark:border-slate-600"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white ${
                            formErrors.email
                              ? "border-red-300 dark:border-red-700"
                              : "border-slate-300 dark:border-slate-600"
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white ${
                            formErrors.phone
                              ? "border-red-300 dark:border-red-700"
                              : "border-slate-300 dark:border-slate-600"
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="Driveway Paving">Driveway Paving</option>
                        <option value="Stone Masonry">Stone Masonry</option>
                        <option value="Walkways & Patios">Walkways & Patios</option>
                        <option value="Retaining Walls">Retaining Walls</option>
                        <option value="Commercial Paving">Commercial Paving</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-white ${
                          formErrors.message
                            ? "border-red-300 dark:border-red-700"
                            : "border-slate-300 dark:border-slate-600"
                        }`}
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className={`${inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              <CostCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-8">Our Location</h2>
          <div className="bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden h-[400px] shadow-sm">
            {/* In a real application, you would embed a Google Map or other map service here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-slate-600 dark:text-slate-300">
                Map placeholder - In a real application, an interactive map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-4">Service Areas</h2>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
            We provide construction and excavation services throughout Connecticut and New York, with a focus on the
            following areas:
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center text-slate-700 dark:text-slate-300 mb-4">Connecticut</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Danbury",
                "Fairfield",
                "Greenwich",
                "Westport",
                "Darien",
                "New Canaan",
                "Stamford",
                "Norwalk",
                "Wilton",
                "Ridgefield",
                "Weston",
                "Easton",
                "Trumbull",
                "Stratford",
                "Milford",
                "Woodbridge",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-sm border border-slate-100 dark:border-slate-700 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-slate-700 dark:text-slate-200">{area}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center text-slate-700 dark:text-slate-300 mb-4">New York</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "White Plains",
                "Yonkers",
                "New Rochelle",
                "Mount Vernon",
                "Scarsdale",
                "Rye",
                "Harrison",
                "Mamaroneck",
                "Port Chester",
                "Peekskill",
                "Ossining",
                "Tarrytown",
                "Bronxville",
                "Larchmont",
                "Dobbs Ferry",
                "Hastings-on-Hudson",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-sm border border-slate-100 dark:border-slate-700 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-slate-700 dark:text-slate-200">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
