"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { HeroLogo } from "@/components/hero-logo"

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [reviewsRef, reviewsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[650px] md:h-[700px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?key=34sww"
            alt="Malci Construction projects"
            width={1920}
            height={1200}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className={`hero-content max-w-3xl ${heroInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center mb-6">
              <HeroLogo size="default" animated={true} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-blue-400">EXPERT</span> CONSTRUCTION & EXCAVATION
            </h1>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl">
              Connecticut&apos;s premier contractor for comprehensive construction, excavation, paving, and masonry services. 
              Building excellence from the ground up since 1995.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Free Estimate</Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Comprehensive Construction Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From initial excavation to final finishing touches, Malci Construction delivers exceptional quality and 
              craftsmanship across all phases of residential and commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excavation",
                description: "Professional site preparation, grading, trenching, and demolition services with precision equipment.",
                link: "/services/excavation",
                image: "/placeholder.svg?key=294qh",
              },
              {
                title: "Concrete Work",
                description: "Expert concrete services for foundations, slabs, walls, driveways, and decorative applications.",
                link: "/services/concrete",
                image: "/placeholder.svg?key=siah9",
              },
              {
                title: "Masonry",
                description: "Skilled stonework for walls, walkways, patios, and decorative features built to last generations.",
                link: "/services/masonry",
                image: "/placeholder.svg?key=1rxkk",
              },
              {
                title: "Paving",
                description: "Premium paving solutions for driveways, parking lots, walkways, and commercial applications.",
                link: "/services/paving",
                image: "/placeholder.svg?key=g9srn",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`service-card bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md border border-slate-100 dark:border-slate-600 transition-all hover:shadow-lg hover:-translate-y-1 duration-500 ${
                  servicesInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-600">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore our portfolio of completed projects showcasing our expertise in excavation, concrete work, 
              masonry, and paving across residential and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Commercial Plaza Development",
                category: "Commercial",
                description: "Complete site development including excavation, utilities, concrete work, and paving.",
                image: "/placeholder.svg?height=400&width=600&query=commercial plaza construction",
              },
              {
                title: "Luxury Home Foundation",
                category: "Residential",
                description: "Precision excavation and concrete foundation for a 6,000 sq ft custom home.",
                image: "/placeholder.svg?height=400&width=600&query=home foundation construction",
              },
              {
                title: "Municipal Park Renovation",
                category: "Public Works",
                description: "Comprehensive walkway system with decorative masonry features and drainage solutions.",
                image: "/placeholder.svg?height=400&width=600&query=park walkway construction",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative h-80 rounded-lg overflow-hidden shadow-lg ${
                  projectsInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-blue-300 mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-200">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We take pride in exceeding client expectations on every project, from residential to commercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                content: "Malci Construction handled our commercial site development with exceptional professionalism. From initial excavation to final paving, their attention to detail and quality workmanship was evident at every stage.",
                author: "Robert Keller",
                role: "Property Developer",
                company: "Keller Commercial Properties",
              },
              {
                content: "We hired Malci for our home's foundation and concrete work. Their team was knowledgeable, efficient, and delivered exactly what was promised. The precision of their excavation work was particularly impressive.",
                author: "Jennifer Lawson",
                role: "Homeowner",
                company: "Residential Client",
              },
              {
                content: "As a general contractor, I've worked with many subcontractors over the years. Malci Construction consistently ranks among the best for excavation and site work. Their equipment operators are skilled and their project management is top-notch.",
                author: "Michael Torres",
                role: "General Contractor",
                company: "Torres Building Group",
              },
            ].map((review, index) => (
              <div
                key={index}
                className={`review-card bg-slate-50 dark:bg-slate-700 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-600 transition-all duration-500 ${
                  reviewsInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="text-blue-500 fill-blue-500"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-200 mb-6">{review.content}</p>
                <div>
                  <p className="font-medium text-slate-800 dark:text-white">{review.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{review.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/reviews" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center">
              <span>Read More Client Testimonials</span>
              <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Malci Construction</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              With decades of experience and a commitment to excellence, we deliver superior results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Our skilled professionals bring decades of combined experience to every project.",
                icon: "👷‍♂️",
              },
              {
                title: "Modern Equipment",
                description: "We invest in state-of-the-art machinery for precision, efficiency, and safety.",
                icon: "🚜",
              },
              {
                title: "Quality Materials",
                description: "We use only premium materials that meet or exceed industry standards.",
                icon: "🏗️",
              },
              {
                title: "Comprehensive Services",
                description: "From excavation to finishing touches, we handle all aspects of your project.",
                icon: "🔨",
              },
              {
                title: "Timely Completion",
                description: "We adhere to project timelines and communicate proactively about progress.",
                icon: "⏱️",
              },
              {
                title: "Budget Adherence",
                description: "Transparent pricing and careful planning help avoid unexpected costs.",
                icon: "💰",
              },
              {
                title: "Safety Focus",
                description: "Rigorous safety protocols protect our team, clients, and the public.",
                icon: "🛡️",
              },
              {
                title: "Environmental Responsibility",
                description: "We implement sustainable practices and proper waste management on all projects.",
                icon: "🌱",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-lg p-6 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
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
            Contact us today for a free, no-obligation consultation and estimate on your construction or excavation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-6 text-lg">
                Request Free Estimate
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-blue-600 px-8 py-6 text-lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
