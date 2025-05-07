"use client"

import Image from "next/image"
import { CheckCircle } from 'lucide-react'
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"
import masonry from '@/public/masonry.jpeg'

export default function MasonryPage() {
  const [activeTab, setActiveTab] = useState("walkways")

  const services = [
    {
      id: "walkways",
      title: "Walkway Designs",
      description:
        "Custom-designed stone and paver walkways that guide visitors with elegance and durability.",
      features: [
        "Tailored patterns & layouts",
        "Slip-resistant surfaces",
        "Integrated lighting options",
        "Complementary to existing landscaping",
      ],
      imageKey: masonry,
      applications: ["Front Entrances", "Garden Paths", "Side Yards", "Pool Surrounds"],
      materials: ["Natural Stone", "Concrete Pavers", "Brick", "Bluestone"],
    },
    {
      id: "patios",
      title: "Patio Installations",
      description:
        "High-quality masonry patios built for entertaining and relaxation, using a variety of stone, brick, or paver materials.",
      features: [
        "Seamless indoor-outdoor flow",
        "Durable, weather-resistant materials",
        "Custom seating walls & fire pits",
        "Precision grading & drainage",
      ],
      imageKey: "https://images.unsplash.com/photo-1739397089006-727cc5e98565?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhdGlvJTIwbWFzb25yeXxlbnwwfDB8MHx8fDA%3D",
      applications: ["Outdoor Living Areas", "Dining Spaces", "Fire Pit Surrounds", "Pool Decks"],
      materials: ["Flagstone", "Travertine", "Brick", "Concrete Pavers"],
    },
    {
      id: "stone-walls",
      title: "Stone Walls",
      description:
        "Structural and decorative stone walls that add privacy, retain soil, or create striking landscape features.",
      features: [
        "Hand-laid natural stone",
        "Retaining & boundary walls",
        "Textured or smooth finish",
        "Engineered for soil pressure",
      ],
      imageKey: "https://images.unsplash.com/photo-1694432759476-8db2bef4b334?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b25lJTIwd2FsbHN8ZW58MHwwfDB8fHww",
      applications: ["Retaining Walls", "Garden Borders", "Property Boundaries", "Decorative Features"],
      materials: ["Fieldstone", "Granite", "Limestone", "Manufactured Stone"],
    },
    {
      id: "belgium-block",
      title: "Belgium Block",
      description:
        "Classic cobblestone-style Belgium block installations ideal for driveways, edging, and decorative accents.",
      features: [
        "Historic charm & character",
        "High load-bearing capacity",
        "Easy to maintain",
        "Custom patterns & colors",
      ],
      imageKey: "https://plus.unsplash.com/premium_photo-1673469103365-b0089a7a81b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVsZ2l1bSUyMGJsb2NrfGVufDB8MHwwfHx8MA%3D%3D",
      applications: ["Driveway Borders", "Garden Edging", "Decorative Accents", "Curbing"],
      materials: ["Granite", "Basalt", "Reclaimed Cobblestone", "Engineered Block"],
    },
  ]

  const materials = [
    {
      name: "Natural Stone",
      description: "Quarried stone including granite, limestone, and bluestone offering unique colors and textures.",
      bestFor: "Walkways, patios, walls, steps",
      imageKey: "https://i.pinimg.com/736x/6d/d8/82/6dd8820ee8df50936a1e124dca184f69.jpg",
    },
    {
      name: "Brick",
      description: "Classic clay brick in various colors and sizes, providing traditional appeal and exceptional durability.",
      bestFor: "Walkways, patios, walls, edging",
      imageKey: "https://i.pinimg.com/736x/1b/d1/a7/1bd1a7f977c6ba87d136a562c74023a8.jpg",
    },
    {
      name: "Concrete Pavers",
      description: "Manufactured pavers in countless shapes, colors, and textures for versatile design options.",
      bestFor: "Driveways, walkways, patios",
      imageKey: "https://unilock.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-23-at-9.08.16-PM.png",
    },
    {
      name: "Bluestone",
      description: "Premium natural bluestone with distinctive blue-gray coloring, ideal for elegant installations.",
      bestFor: "Patios, walkways, pool surrounds",
      imageKey: "https://i.pinimg.com/736x/7f/c2/b1/7fc2b16d9a4b6a5c545421d66771041c.jpg",
    },
    {
      name: "Flagstone",
      description: "Irregular shaped stone slabs creating a natural, organic appearance for outdoor spaces.",
      bestFor: "Patios, stepping stones, garden paths",
      imageKey: "https://cdn.prod.website-files.com/611e33de5446a74e18a9324c/671b9c28353c25c5033924dc_671b979e83459d31d7e2ad23_stepping-stone-patterns.webp",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Site Evaluation",
      description: "We assess your property's layout, soil conditions, drainage patterns, and existing features to develop the optimal masonry plan.",
      imageKey: "site-evaluation",
    },
    {
      step: "2",
      title: "Design & Material Selection",
      description: "Our team works with you to create a design that matches your vision and helps you select the perfect materials for your project.",
      imageKey: "design-materials",
    },
    {
      step: "3",
      title: "Site Preparation",
      description: "We properly excavate, grade, and prepare the base with appropriate materials to ensure a stable foundation for your masonry installation.",
      imageKey: "site-prep",
    },
    {
      step: "4",
      title: "Installation",
      description: "Our skilled masons carefully install each stone, paver, or brick according to the design plan with meticulous attention to detail.",
      imageKey: "installation",
    },
    {
      step: "5",
      title: "Finishing",
      description: "We complete your project with proper jointing, sealing, and cleanup to ensure a beautiful, long-lasting finished product.",
      imageKey: "finishing",
    },
    {
      step: "6",
      title: "Final Inspection",
      description: "A thorough inspection ensures every aspect of your masonry project meets our high standards for quality and craftsmanship.",
      imageKey: "inspection",
    },
  ]

  const faqs = [
    {
      question: "How long do masonry installations typically last?",
      answer: "Properly installed masonry can last 50+ years with minimal maintenance. Natural stone and brick installations often last for generations, while concrete pavers typically last 25-30 years before requiring significant maintenance.",
    },
    {
      question: "What maintenance do masonry installations require?",
      answer: "Most masonry requires periodic cleaning and occasional resealing (every 3-5 years). Joints may need repair or re-sanding over time. Winter maintenance includes avoiding harsh de-icers that can damage the surface.",
    },
    {
      question: "Can you match existing masonry on my property?",
      answer: "Yes, we can often match existing masonry through careful material selection and aging techniques. For historic properties, we can source reclaimed materials or find modern alternatives that closely match the original appearance.",
    },
    {
      question: "How do you handle drainage for patios and walkways?",
      answer: "We design all masonry installations with proper slope (typically 1/8\" to 1/4\" per foot) away from structures. For patios, we may incorporate drainage systems like French drains or permeable paver sections to manage water effectively.",
    },
  ]

  const activeService = services.find((service) => service.id === activeTab) || services[0]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Masonry Services"
        subtitle="Expert craftsmanship for walkways, patios, stone walls, and Belgium block."
        backgroundImage="/placeholder.svg?key=masonry-header"
      />

      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                Crafted Stonework Excellence
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our masonry team blends time-honored techniques with modern precision to build
                stunning walkways, patios, retaining walls, and Belgium block accents that endure year after year.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We handle every step from design and material selection through installation and finishing,
                ensuring impeccable results that enhance both form and function.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Master masons with decades of combined experience
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Premium materials sourced from trusted suppliers
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Proper installation techniques for lasting durability
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={masonry}
                  alt="Professional masonry work"
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
            Our Masonry Services
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
                src={activeService.imageKey}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {activeService.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Common Applications:</h4>
                  <ul className="space-y-2">
                    {activeService.applications.map((app, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-slate-700 dark:text-slate-200">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Recommended Materials:</h4>
              <div className="flex flex-wrap gap-2">
                {activeService.materials.map((material, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-md text-sm"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Materials We Work With
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            We source the highest quality materials to ensure the beauty and longevity of your masonry project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
                <div className="h-40 bg-slate-200 dark:bg-slate-700">
                  <Image
                    src={material.imageKey}
                    alt={material.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{material.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{material.description}</p>
                  <p className="text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">Best for: </span>
                    <span className="text-slate-600 dark:text-slate-300">{material.bestFor}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Our Masonry Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-10">
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
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
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
    </main>
  )
}
