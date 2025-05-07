"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import stairsImage from '@/public/stairs.jpeg'

export default function Home() {
  const [heroRef] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632504102505-3928a7b9c4a0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Malci Construction projects"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl">
            <div className="mb-4">
              <div className="h-1 w-16 bg-blue-500 mb-4"></div>
              <h2 className="text-xl text-white font-medium">Malci Construction</h2>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Excellence,
              <br />
              <span className="text-blue-400">Foundation to Finish</span>
            </h1>

            <p className="text-xl text-slate-100 mb-8 max-w-2xl">
              Expert excavation, concrete, masonry, and paving services across Connecticut and New York.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-6 text-lg">OUR SERVICES</Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 px-8 py-6 text-lg"
                >
                  GET A FREE QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center animate-bounce">
            <ChevronDown className="text-white" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Malci Construction — Excellence in Construction and Excavation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                &quot;Malci Construction&quot; is a dedicated company specializing in comprehensive construction, excavation, and
                paving services. Headquartered in Danbury, Connecticut, with a presence in New York, we bring over a
                decade of industry expertise to every project.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our commitment to quality and customer satisfaction ensures that whether you need site preparation,
                concrete work, masonry, or paving services, your project is in capable hands. Trust Malci Construction
                to deliver outstanding results that stand the test of time.
              </p>
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src={stairsImage} alt="Malci Construction team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Comprehensive Construction Solutions
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From initial excavation to final finishing touches, Malci Construction delivers exceptional quality and
              craftsmanship across all phases of residential and commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excavation",
                description:
                  "Professional site preparation, grading, trenching, and demolition services with precision equipment.",
                link: "/services/excavation",
                image: "https://images.unsplash.com/photo-1630288215006-a7058b0bfd89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Concrete Work",
                description:
                  "Expert concrete services for foundations, slabs, walls, driveways, and decorative applications.",
                link: "/services/concrete",
                image: "https://plus.unsplash.com/premium_photo-1683141598095-c573a97b74bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvbmNyZXRlfGVufDB8MHwwfHx8MA%3D%3D",
              },
              {
                title: "Masonry",
                description:
                  "Skilled stonework for walls, walkways, patios, and decorative features built to last generations.",
                link: "/services/masonry",
                image: "https://images.unsplash.com/photo-1719755143914-4378628de511?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHN0b25lJTIwc3RhaXJzfGVufDB8MHwwfHx8MA%3D%3D",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`service-card bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg hover:-translate-y-1 duration-500 ${
                  servicesInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-700">
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">View All Services</Button>
            </Link>
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
  )
}
