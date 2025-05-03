"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [reviewsRef, reviewsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[600px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?key=7ys65"
            alt="Paving and masonry work"
            width={1200}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className={`hero-content max-w-2xl ${heroInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-amber-400">EXPERT</span> PAVING & MASONRY CONTRACTOR
            </h1>
            <p className="text-lg text-slate-100 mb-8">
              Where exceptional craftsmanship meets innovative design in the art of paving and masonry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Free Estimate</Button>
              </Link>
              <Link href="/services/paving">
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

      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Trusted by Hundreds of Happy Customers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`review-card bg-slate-50 rounded-lg p-6 shadow-sm border border-slate-100 transition-all duration-500 ${
                  reviewsInView ? "animate-fade-in-up delay-" + (index * 150) : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="text-amber-400 fill-amber-400"
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
                <p className="text-slate-700 mb-4">
                  {index === 0 &&
                    '"Stonecraft did an amazing job on our driveway. The team was professional, on time, and the quality of work exceeded our expectations."'}
                  {index === 1 &&
                    '"The stonework they did on our patio is beautiful. They were attentive to detail and helped us choose the perfect materials for our home."'}
                  {index === 2 &&
                    '"From start to finish, the experience with Stonecraft was excellent. Fair pricing, quality materials, and expert installation."'}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">
                    {index === 0 && "John D."}
                    {index === 1 && "Sarah M."}
                    {index === 2 && "Michael T."}
                  </span>
                  <div className="flex items-center">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=24&width=24&query=${
                        index === 0 ? "google logo" : index === 1 ? "facebook logo" : "home advisor logo"
                      }`}
                      alt={index === 0 ? "Google" : index === 1 ? "Facebook" : "Home Advisor"}
                      width={24}
                      height={24}
                      className="mr-1"
                    />
                    <span className="text-sm text-slate-600">
                      {index === 0 && "Google"}
                      {index === 1 && "Facebook"}
                      {index === 2 && "Home Advisor"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/reviews" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
              <span>View All Reviews</span>
              <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Our Expert Services</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            We provide premium paving and masonry services throughout Connecticut with a focus on quality, durability,
            and customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Driveway Paving",
                description: "Custom driveway solutions with premium materials for durability and curb appeal.",
                link: "/services/driveways",
                image: "/placeholder.svg?key=esfqg",
              },
              {
                title: "Stone Masonry",
                description: "Expertly crafted stonework for walls, patios, and decorative features.",
                link: "/services/masonry",
                image: "/placeholder.svg?key=vo1fm",
              },
              {
                title: "Walkways & Patios",
                description: "Beautiful walkways and patios designed to enhance your outdoor living space.",
                link: "/services/walkways",
                image: "/placeholder.svg?key=7bt6x",
              },
              {
                title: "Commercial Paving",
                description: "Large-scale paving solutions for commercial properties and businesses.",
                link: "/services/commercial",
                image: "/placeholder.svg?key=ms4ul",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`service-card bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1 duration-500 ${
                  servicesInView ? "animate-fade-in-up delay-" + (index * 100) : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="h-48 bg-slate-200">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on your paving or masonry project.
          </p>
          <Link href="/contact">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">
              Get Your Free Estimate
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
