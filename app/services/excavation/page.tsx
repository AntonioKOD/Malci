"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"
import MetaHead from "@/components/meta-head"

export default function ExcavationPage() {
  const [activeTab, setActiveTab] = useState("site-preparation")

  const services = [
    {
      id: "site-preparation",
      title: "Site Preparation",
      description:
        "Comprehensive site clearing and preparation services to establish a clean foundation for construction projects.",
      features: [
        "Vegetation and debris removal",
        "Topsoil stripping and preservation",
        "Access road creation",
        "Erosion control implementation",
      ],
      imageKey: "https://images.unsplash.com/photo-1630288214117-5ebf6c9de343?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      applications: ["New Construction", "Additions", "Landscaping Projects", "Infrastructure Development"],
      equipment: ["Bulldozers", "Excavators", "Skid Steers", "Dump Trucks"],
    },
    {
      id: "grading",
      title: "Grading",
      description:
        "Precision grading services to establish proper elevations and slopes for drainage, foundations, and landscaping.",
      features: [
        "Rough and finish grading",
        "Slope establishment for drainage",
        "Compaction to specifications",
        "Laser-guided precision",
      ],
      imageKey: "https://images.unsplash.com/photo-1669170936278-010c9c8eb680?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhjYXZhdGlvbiUyMGdyYWRpbmd8ZW58MHx8MHx8fDA%3D",
      applications: ["Building Pads", "Driveways", "Yards and Landscapes", "Athletic Fields"],
      equipment: ["Motor Graders", "Bulldozers", "Compactors", "Laser Levels"],
    },
    {
      id: "leveling",
      title: "Leveling",
      description:
        "Expert ground leveling to create flat, stable surfaces for construction, hardscaping, and landscape features.",
      features: ["Precision elevation control", "Subgrade preparation", "Surface stabilization", "Compaction testing"],
      imageKey: "https://images.unsplash.com/photo-1715681025091-335a3913b262?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGV4Y2F2YXRpb24lMjBsZXZlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      applications: ["Building Foundations", "Concrete Slabs", "Patios and Walkways", "Pool Installations"],
      equipment: ["Laser Levels", "Plate Compactors", "Vibratory Rollers", "Skid Steers"],
    },
    {
      id: "trenching",
      title: "Trenching",
      description:
        "Specialized trenching services for utility installation, drainage systems, and foundation footings.",
      features: [
        "Precise depth and width control",
        "Utility marking coordination",
        "Shoring for safety compliance",
        "Backfilling and compaction",
      ],
      imageKey: "https://images.unsplash.com/photo-1742544689243-a0ed5454bddc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGV4Y2F2YXRpb24lMjB0cmVuY2hpbmd8ZW58MHx8MHx8fDA%3D",
      applications: ["Utility Lines", "Drainage Systems", "Irrigation", "Foundation Footings"],
      equipment: ["Trenchers", "Mini Excavators", "Backhoes", "Compactors"],
    },
    {
      id: "demolition",
      title: "Demolition",
      description:
        "Controlled demolition services for structures, hardscapes, and obstacles with proper debris management.",
      features: [
        "Selective or complete demolition",
        "Structural dismantling",
        "Concrete removal",
        "Debris sorting and recycling",
      ],
      imageKey: "https://images.unsplash.com/photo-1695047672086-8e89b95aa06f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhjYXZhdGlvbiUyMGRlbW9saXRpb258ZW58MHx8MHx8fDA%3D",
      applications: ["Building Removal", "Driveway Replacement", "Interior Renovations", "Site Clearing"],
      equipment: ["Excavators with Attachments", "Skid Steers", "Breakers", "Crushing Equipment"],
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Site Assessment",
      description:
        "We conduct a thorough evaluation of your site, identifying utilities, soil conditions, access points, and potential challenges.",
      imageKey: "site-assessment",
    },
    {
      step: "2",
      title: "Project Planning",
      description:
        "Our team develops a detailed excavation plan, including equipment selection, soil management, and scheduling to minimize disruption.",
      imageKey: "project-planning",
    },
    {
      step: "3",
      title: "Utility Marking",
      description:
        "We coordinate with utility companies to mark all underground services and implement protection measures for existing infrastructure.",
      imageKey: "utility-marking",
    },
    {
      step: "4",
      title: "Erosion Control",
      description:
        "Proper erosion and sediment control measures are installed to protect the environment and comply with regulations.",
      imageKey: "erosion-control",
    },
    {
      step: "5",
      title: "Excavation Execution",
      description:
        "Our skilled operators use appropriate equipment to efficiently complete the excavation according to specifications.",
      imageKey: "excavation-execution",
    },
    {
      step: "6",
      title: "Final Grading & Inspection",
      description:
        "We perform precise final grading and conduct a thorough inspection to ensure all specifications and requirements are met.",
      imageKey: "final-inspection",
    },
  ]

  const equipment = [
    {
      name: "Excavators",
      description:
        "Versatile digging machines with various bucket sizes for trenching, grading, and material handling.",
      bestFor: "Trenching, foundations, site clearing",
      imageKey: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhjYXZhdG9yfGVufDB8fDB8fHww",
    },
    {
      name: "Bulldozers",
      description:
        "Powerful tracked vehicles with front blades for pushing large quantities of soil, debris, and materials.",
      bestFor: "Clearing, grading, material spreading",
      imageKey: "https://images.unsplash.com/photo-1630288214032-2c4cc2c080ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVsbGRvemVyfGVufDB8fDB8fHww",
    },
    {
      name: "Backhoes",
      description:
        "Combination machines with a loader bucket on the front and a digging arm on the back for versatile operations.",
      bestFor: "Utility work, small excavations, loading",
      imageKey: "https://images.unsplash.com/photo-1669867996628-4e31d96bc98f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tob2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Skid Steers",
      description: "Compact, maneuverable machines with interchangeable attachments for various tasks in tight spaces.",
      bestFor: "Confined areas, finish grading, material handling",
      imageKey: "https://images.unsplash.com/photo-1683372101272-6a144c795e2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpZCUyMHN0ZWVyfGVufDB8fDB8fHww",
    },
    {
      name: "Dump Trucks",
      description:
        "Heavy-duty vehicles for transporting excavated materials, debris, and aggregate to and from the site.",
      bestFor: "Material transport, debris removal",
      imageKey: "https://images.unsplash.com/photo-1671022406737-c51dfa332edf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1bXAlMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  const faqs = [
    {
      question: "How do you protect existing utilities during excavation?",
      answer:
        "We begin with a comprehensive utility marking process, coordinating with local utility companies and using ground-penetrating radar when necessary. Our operators employ careful hand-digging techniques around marked utilities and maintain safe clearances. We also use specialized equipment and techniques when working near sensitive infrastructure.",
    },
    {
      question: "What permits are required for excavation work?",
      answer:
        "Permit requirements vary by location and project scope. Typically, excavation work requires building permits, grading permits, and sometimes environmental permits. We handle the permit application process for you, ensuring all local regulations are met before work begins.",
    },
    {
      question: "How do you manage stormwater and prevent erosion during excavation?",
      answer:
        "We implement comprehensive erosion and sediment control plans that include silt fences, sediment traps, temporary seeding, erosion control blankets, and proper drainage channels. These measures are installed before excavation begins and maintained throughout the project to protect the environment and comply with regulations.",
    },
    {
      question: "What happens to the excavated soil from my project?",
      answer:
        "Depending on the project and soil quality, we may: 1) Stockpile and reuse suitable soil on-site for backfilling or grading, 2) Remove excess soil to an approved disposal facility, 3) Implement soil remediation if contamination is present, or 4) Coordinate with other projects that need fill material when possible.",
    },
    {
      question: "How do you ensure accurate grading and leveling?",
      answer:
        "We use advanced laser and GPS-guided equipment to achieve precise elevations and slopes. Our operators are trained in reading and implementing site plans, and we conduct regular surveys during the work to verify accuracy. Final grades are checked against engineering specifications before project completion.",
    },
  ]

  const activeService = services.find((service) => service.id === activeTab) || services[0]

  return (
    <>
    <MetaHead
        title="Excavation Services"
        description="Professional excavation services from Malci Construction for residential and commercial projects, including site preparation and grading in CT and NY."
        ogUrl="https://malciconstruction.com/services/excavation"
      />
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Excavation Services"
        subtitle="Professional site preparation, grading, leveling, trenching, and demolition."
        backgroundImage="/placeholder.svg?key=excavation-header"
      />

      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                Expert Excavation Solutions
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our excavation services provide the critical groundwork for successful construction and landscaping
                projects. With precision equipment and experienced operators, we transform your site from its existing
                state to a properly prepared canvas for building.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                From initial site clearing and preparation to final grading and leveling, our comprehensive excavation
                capabilities ensure your project starts with a solid foundation. We also offer specialized trenching for
                utilities and controlled demolition services.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Modern equipment fleet with GPS and laser guidance
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">Licensed operators with extensive experience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Strict adherence to safety and environmental regulations
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1494778924281-cce023ab1acb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXhjYXZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Professional excavation equipment"
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
            Our Excavation Services
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

              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Equipment Used:</h4>
              <div className="flex flex-wrap gap-2">
                {activeService.equipment.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-md text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Our Excavation Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
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

      {/* Equipment */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Our Equipment Fleet
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            We maintain a modern fleet of excavation equipment to handle projects of any size efficiently and precisely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md">
                <div className="h-40 bg-slate-200 dark:bg-slate-600">
                  <Image
                    src={item.imageKey}
                    alt={item.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{item.description}</p>
                  <p className="text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">Best for: </span>
                    <span className="text-slate-600 dark:text-slate-300">{item.bestFor}</span>
                  </p>
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

      {/* Benefits */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Benefits of Professional Excavation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Precision & Accuracy",
                description: "GPS and laser-guided equipment ensures exact grading and excavation to specifications.",
                icon: "📏",
              },
              {
                title: "Time Efficiency",
                description:
                  "Professional equipment and experienced operators complete work faster than DIY approaches.",
                icon: "⏱️",
              },
              {
                title: "Regulatory Compliance",
                description: "We handle permits, inspections, and ensure all work meets local codes and regulations.",
                icon: "📋",
              },
              {
                title: "Safety Assurance",
                description: "Trained professionals follow strict safety protocols to prevent accidents and injuries.",
                icon: "🛡️",
              },
              {
                title: "Environmental Protection",
                description: "Proper erosion control and soil management practices minimize environmental impact.",
                icon: "🌱",
              },
              {
                title: "Long-Term Stability",
                description: "Properly executed excavation provides a solid foundation for construction longevity.",
                icon: "🏗️",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 shadow-sm">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
