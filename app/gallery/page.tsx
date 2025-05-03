"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactCTA from "@/components/contact-cta"
import { useInView } from "react-intersection-observer"
import BeforeAfterSlider from "@/components/before-after-slider"

// Define project categories and projects
const categories = [
  "All",
  "Driveways",
  "Walkways",
  "Patios",
  "Retaining Walls",
  "Commercial",
  "Stone Masonry",
  "Before & After",
]

const projects = [
  {
    id: 1,
    title: "Modern Paver Driveway",
    category: "Driveways",
    location: "Fairfield, CT",
    image: "/placeholder.svg?key=gallery-1",
    description: "Custom paver driveway with decorative border and drainage system.",
  },
  {
    id: 2,
    title: "Natural Stone Walkway",
    category: "Walkways",
    location: "Greenwich, CT",
    image: "/placeholder.svg?key=gallery-2",
    description: "Winding natural stone walkway through landscaped garden.",
  },
  {
    id: 3,
    title: "Bluestone Patio with Fire Pit",
    category: "Patios",
    location: "Westport, CT",
    image: "/placeholder.svg?key=gallery-3",
    description: "Custom bluestone patio featuring a built-in fire pit and seating wall.",
  },
  {
    id: 4,
    title: "Granite Block Retaining Wall",
    category: "Retaining Walls",
    location: "Darien, CT",
    image: "/placeholder.svg?key=gallery-4",
    description: "Engineered retaining wall with granite blocks to create a level yard area.",
  },
  {
    id: 5,
    title: "Commercial Parking Lot",
    category: "Commercial",
    location: "Stamford, CT",
    image: "/placeholder.svg?key=gallery-5",
    description: "Complete parking lot installation for retail shopping center.",
  },
  {
    id: 6,
    title: "Fieldstone Garden Wall",
    category: "Stone Masonry",
    location: "New Canaan, CT",
    image: "/placeholder.svg?key=gallery-6",
    description: "Decorative fieldstone wall with integrated steps and plantings.",
  },
  {
    id: 7,
    title: "Cobblestone Driveway Apron",
    category: "Driveways",
    location: "Ridgefield, CT",
    image: "/placeholder.svg?key=gallery-7",
    description: "Elegant cobblestone apron connecting asphalt driveway to street.",
  },
  {
    id: 8,
    title: "Brick Walkway with Steps",
    category: "Walkways",
    location: "Wilton, CT",
    image: "/placeholder.svg?key=gallery-8",
    description: "Traditional brick walkway with granite steps and iron railings.",
  },
  {
    id: 9,
    title: "Outdoor Kitchen Patio",
    category: "Patios",
    location: "Norwalk, CT",
    image: "/placeholder.svg?key=gallery-9",
    description: "Expansive patio featuring built-in grill, counters, and dining area.",
  },
  {
    id: 10,
    title: "Boulder Retaining Wall",
    category: "Retaining Walls",
    location: "Weston, CT",
    image: "/placeholder.svg?key=gallery-10",
    description: "Natural boulder retaining wall with integrated plantings.",
  },
  {
    id: 11,
    title: "Office Complex Walkways",
    category: "Commercial",
    location: "Hartford, CT",
    image: "/placeholder.svg?key=gallery-11",
    description: "Network of concrete walkways connecting office buildings.",
  },
  {
    id: 12,
    title: "Stone Veneer Fireplace",
    category: "Stone Masonry",
    location: "Madison, CT",
    image: "/placeholder.svg?key=gallery-12",
    description: "Outdoor stone veneer fireplace with custom mantel and hearth.",
  },
  {
    id: 13,
    title: "Driveway Transformation",
    category: "Before & After",
    location: "Fairfield, CT",
    beforeImage: "/placeholder.svg?key=before-driveway",
    afterImage: "/placeholder.svg?key=after-driveway",
    description: "Complete transformation of a cracked asphalt driveway to a beautiful paver driveway.",
    isBeforeAfter: true,
  },
  {
    id: 14,
    title: "Patio Renovation",
    category: "Before & After",
    location: "Greenwich, CT",
    beforeImage: "/placeholder.svg?key=before-patio",
    afterImage: "/placeholder.svg?key=after-patio",
    description: "Renovation of an old concrete patio to a stunning natural stone patio with built-in features.",
    isBeforeAfter: true,
  },
  {
    id: 15,
    title: "Walkway Upgrade",
    category: "Before & After",
    location: "Westport, CT",
    beforeImage: "/placeholder.svg?key=before-walkway",
    afterImage: "/placeholder.svg?key=after-walkway",
    description: "Upgrade from a basic concrete walkway to an elegant brick pathway with landscaping.",
    isBeforeAfter: true,
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Project Gallery"
        subtitle="Browse our portfolio of completed paving and masonry projects."
        backgroundImage="/placeholder.svg?key=gallery-header"
      />

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-20 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                  inView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.isBeforeAfter ? (
                  <div className="relative h-64">
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage || "/placeholder.svg"}
                      afterImage={project.afterImage || "/placeholder.svg"}
                      height={256}
                    />
                  </div>
                ) : (
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-1">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-300">
                No projects found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            {selectedProject.isBeforeAfter ? (
              <div className="relative h-[50vh]">
                <BeforeAfterSlider
                  beforeImage={selectedProject.beforeImage || "/placeholder.svg"}
                  afterImage={selectedProject.afterImage || "/placeholder.svg"}
                  height={400}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <div className="relative h-[50vh]">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{selectedProject.title}</h3>
                </div>
                <span className="text-slate-600 dark:text-slate-300">{selectedProject.location}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{selectedProject.description}</p>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Project Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Project Type</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">{selectedProject.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Completion Date</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Materials Used</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">
                      {selectedProject.category === "Driveways" && "Pavers, Asphalt, Concrete"}
                      {selectedProject.category === "Walkways" && "Natural Stone, Brick, Concrete"}
                      {selectedProject.category === "Patios" && "Bluestone, Pavers, Granite"}
                      {selectedProject.category === "Retaining Walls" && "Stone, Concrete Block, Boulders"}
                      {selectedProject.category === "Commercial" && "Asphalt, Concrete, Pavers"}
                      {selectedProject.category === "Stone Masonry" && "Fieldstone, Granite, Limestone"}
                      {selectedProject.category === "Before & After" && "Various premium materials"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactCTA
        title="Ready to Start Your Project?"
        description="Contact us today to discuss your paving or masonry needs and get a free estimate."
      />
    </main>
  )
}
