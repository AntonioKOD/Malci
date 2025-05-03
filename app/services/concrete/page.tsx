"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"

export default function ConcreteServicesPage() {
  const [activeTab, setActiveTab] = useState("slabs")

  const services = [
    {
      id: "slabs",
      title: "Concrete Slabs",
      description:
        "Precision-poured concrete slabs ideal for patios, pool decks, garage floors, and more—engineered for strength and a perfectly level finish.",
      features: [
        "Uniform thickness & smooth finish",
        "Reinforced with rebar or mesh",
        "Customizable edge profiles",
        "Engineered drainage slopes",
      ],
      imageKey: "concrete-slabs",
    },
    {
      id: "walls",
      title: "Concrete Walls",
      description:
        "Durable cast-in-place or precast concrete walls for retaining walls, garden beds, and structural features—built to last and resist lateral loads.",
      features: [
        "High compressive strength",
        "Moisture & erosion resistant",
        "Textured or smooth finishes available",
        "Designed to withstand soil pressure",
      ],
      imageKey: "concrete-walls",
    },
    {
      id: "foundations",
      title: "Concrete Foundations",
      description:
        "Robust foundation systems tailored to your build—spread footings, slab-on-grade, or full basement foundations, all meeting local code requirements.",
      features: [
        "Engineered for site conditions",
        "Proper reinforcement & curing",
        "Moisture barrier installation",
        "Precision excavation & grading",
      ],
      imageKey: "concrete-foundations",
    },
    {
      id: "sidewalks",
      title: "Sidewalks & Curbs",
      description:
        "Smooth, ADA-compliant concrete sidewalks and ADA-ramped curbs—crafted for safety, accessibility, and curb appeal.",
      features: [
        "Controlled slope for drainage",
        "Non-slip broom finish",
        "Detectable warning strips available",
        "Seamless transitions to driveways",
      ],
      imageKey: "concrete-sidewalks",
    },
    {
      id: "driveways",
      title: "Concrete Driveways",
      description:
        "High-performance concrete driveways with optional stamping, coloring, or exposed aggregate—combining durability with custom design.",
      features: [
        "High load-bearing capacity",
        "Low-maintenance surface",
        "Decorative stamping & staining",
        "Engineered joint spacing",
      ],
      imageKey: "concrete-driveways",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Site Assessment",
      description:
        "We analyze soil stability, drainage patterns, and existing structures to determine the optimal concrete system for your needs.",
      imageKey: "site-assessment",
    },
    {
      step: "2",
      title: "Design & Engineering",
      description:
        "Our team creates detailed plans, selects appropriate mix designs, and specifies reinforcement to meet load and environmental requirements.",
      imageKey: "design-planning",
    },
    {
      step: "3",
      title: "Excavation & Preparation",
      description:
        "We excavate to the required depth, install base materials, grade for proper drainage, and place moisture barriers as needed.",
      imageKey: "excavation-prep",
    },
    {
      step: "4",
      title: "Forming & Reinforcement",
      description:
        "Custom forms are set in place and reinforcement (rebar or wire mesh) is installed according to engineering specs.",
      imageKey: "forming-rebar",
    },
    {
      step: "5",
      title: "Pouring & Finishing",
      description:
        "Concrete is poured, screeded, and finished—whether broom-textured, smooth, stamped, or colored—followed by proper curing methods.",
      imageKey: "pouring-finishing",
    },
    {
      step: "6",
      title: "Quality Inspection",
      description:
        "Final checks ensure proper depth, finish quality, and joint spacing; we verify that your new concrete installation meets our high standards.",
      imageKey: "final-inspection",
    },
  ]

  const faqs = [
    {
      question: "How long does concrete need to cure before use?",
      answer:
        "Standard concrete reaches sufficient strength for light foot traffic after 24–48 hours, but full curing takes 28 days. Heavy loads should wait at least 7 days.",
    },
    {
      question: "Can concrete be colored or stamped?",
      answer:
        "Yes—integral color, stain, or stamped patterns can be applied to slabs, driveways, and sidewalks for a decorative finish.",
    },
    {
      question: "What maintenance does concrete require?",
      answer: "Minimal—periodic cleaning and resealing every 3–5 years help protect against stains and surface wear.",
    },
    {
      question: "Do I need permits for concrete work?",
      answer:
        "Permit requirements vary by municipality. We handle permit applications for foundations, curbs, and large slab installations.",
    },
  ]

  const activeService = services.find((service) => service.id === activeTab) || services[0]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Concrete Services"
        subtitle="Expert installation of slabs, walls, foundations, sidewalks, curbs, and driveways."
        backgroundImage="/placeholder.svg?key=concrete-header"
      />

      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                Comprehensive Concrete Solutions
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                From structural foundations to decorative driveways, our concrete services cover every aspect of
                residential and commercial construction. We combine industry-leading techniques with premium materials
                to deliver results that stand the test of time.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    In-house expertise with certified concrete professionals
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Premium materials tailored to your specific project
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Meticulous attention to detail with every pour and finish
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?key=concrete-overview"
                  alt="Professional concrete installation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Our Concrete Services
          </h2>

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === service.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/generic-placeholder-graphic.png?key=${activeService.imageKey}`}
                alt={activeService.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">
                {activeService.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{activeService.description}</p>

              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {activeService.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Our Installation Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-40">
                  <Image
                    src={`/generic-placeholder-graphic.png?key=${step.imageKey}`}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-left font-medium text-slate-800 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Benefits of Professional Concrete Installation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Durability",
                description: "Concrete structures can last 50+ years with minimal maintenance.",
                icon: "🏗️",
              },
              {
                title: "Versatility",
                description: "From plain gray to decorative patterns, concrete adapts to any design aesthetic.",
                icon: "🎨",
              },
              {
                title: "Energy Efficiency",
                description: "Concrete's thermal mass helps regulate temperature in buildings.",
                icon: "🌡️",
              },
              {
                title: "Fire Resistance",
                description: "Non-combustible concrete provides superior fire protection.",
                icon: "🔥",
              },
              {
                title: "Low Maintenance",
                description: "Unlike wood or asphalt, concrete requires minimal upkeep.",
                icon: "🧹",
              },
              {
                title: "Environmentally Friendly",
                description: "Modern concrete mixes can incorporate recycled materials.",
                icon: "♻️",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
