"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import { useInView } from "react-intersection-observer"
import MetaHead from "@/components/meta-head"

export default function ServicesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Service categories with their specific services
  const serviceCategories = [
    {
      id: "excavation",
      title: "Excavation Services",
      description:
        "Professional site preparation, grading, leveling, trenching, and demolition services with precision equipment and experienced operators.",
      image: "https://images.unsplash.com/photo-1630288215006-a7058b0bfd89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        {
          title: "Site Preparation",
          description: "Comprehensive site clearing and preparation for construction projects.",
          link: "/services/excavation#site-preparation",
          icon: "🏗️",
        },
        {
          title: "Grading & Leveling",
          description: "Precision grading and leveling for proper drainage and stable foundations.",
          link: "/services/excavation#grading",
          icon: "📏",
        },
        {
          title: "Trenching",
          description: "Specialized trenching for utility installation and drainage systems.",
          link: "/services/excavation#trenching",
          icon: "⛏️",
        },
        {
          title: "Demolition",
          description: "Controlled demolition services with proper debris management.",
          link: "/services/excavation#demolition",
          icon: "🔨",
        },
      ],
    },
    {
      id: "concrete",
      title: "Concrete Services",
      description:
        "Expert concrete solutions for foundations, slabs, walls, driveways, and decorative applications, built to last with premium materials.",
      image: "https://plus.unsplash.com/premium_photo-1683141598095-c573a97b74bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvbmNyZXRlfGVufDB8MHwwfHx8MA%3D%3D",
      services: [
        {
          title: "Concrete Slabs",
          description: "Precision-poured concrete slabs for patios, pool decks, and garage floors.",
          link: "/services/concrete#slabs",
          icon: "🧱",
        },
        {
          title: "Concrete Walls",
          description: "Durable cast-in-place or precast concrete walls for various applications.",
          link: "/services/concrete#walls",
          icon: "🧪",
        },
        {
          title: "Foundations",
          description: "Robust foundation systems tailored to your specific building requirements.",
          link: "/services/concrete#foundations",
          icon: "🏠",
        },
        {
          title: "Decorative Concrete",
          description: "Stamped, colored, and textured concrete for aesthetic appeal.",
          link: "/services/concrete#decorative",
          icon: "🎨",
        },
      ],
    },
    {
      id: "masonry",
      title: "Masonry Services",
      description:
        "Skilled stonework for walls, walkways, patios, and decorative features built to last generations, combining traditional craftsmanship with modern techniques.",
      image: "https://images.unsplash.com/photo-1719755143914-4378628de511?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHN0b25lJTIwc3RhaXJzfGVufDB8MHwwfHx8MA%3D%3D",
      services: [
        {
          title: "Stone Walls",
          description: "Structural and decorative stone walls that add beauty and functionality.",
          link: "/services/masonry#stone-walls",
          icon: "🧱",
        },
        {
          title: "Brick & Block",
          description: "Traditional brick and block masonry for various applications.",
          link: "/services/masonry#brick",
          icon: "🏛️",
        },
        {
          title: "Walkways & Patios",
          description: "Custom-designed stone and paver installations for outdoor living spaces.",
          link: "/services/masonry#walkways",
          icon: "🪨",
        },
        {
          title: "Fireplaces & Chimneys",
          description: "Functional and decorative masonry for heating elements.",
          link: "/services/masonry#fireplaces",
          icon: "🔥",
        },
      ],
    },
  ]

  return (
    <>
    <MetaHead
        title="Our Services"
        description="Comprehensive construction services including concrete work, excavation, masonry, and paving across Connecticut and New York."
        ogUrl="https://malciconstruction.com/services"
      />
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction, excavation, concrete, and masonry solutions for residential and commercial projects."
        backgroundImage="/placeholder.svg?key=tux07"
      />

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Expert Construction Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              At Malci Construction, we offer a comprehensive range of construction services to meet all your project
              needs. From initial site preparation and excavation to concrete work, masonry, and paving, our experienced
              team delivers exceptional quality and craftsmanship at every stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div ref={ref}>
        {serviceCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 ${index % 2 === 0 ? "bg-slate-50 dark:bg-slate-900" : "bg-white dark:bg-slate-800"}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  } ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                >
                  <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">Our Expertise</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                    {category.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{category.description}</p>
                  <Link href={`/services/${category.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More About {category.title}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ${
                      inView ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${serviceIndex * 100 + 200}ms` }}
                  >
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">{service.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      <span>Learn More</span>
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl text-blue-400 font-medium mb-2">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">The Malci Construction Process</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project is completed to the highest standards of quality,
              safety, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a thorough consultation to understand your project goals, requirements, and vision.",
              },
              {
                step: "02",
                title: "Planning & Design",
                description:
                  "Our team develops detailed plans, including timelines, material selections, and technical specifications.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We implement the project with skilled craftsmanship, quality materials, and attention to detail.",
              },
              {
                step: "04",
                title: "Quality Assurance",
                description:
                  "Every project undergoes rigorous quality checks to ensure it meets our high standards and your expectations.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-lg p-6 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl font-bold text-slate-600 dark:text-slate-500 absolute top-4 right-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-4 relative z-10">{process.title}</h4>
                <p className="text-slate-300 relative z-10">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation consultation and estimate on your construction or excavation
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-6 text-lg">
                Request Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
