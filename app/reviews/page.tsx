"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactCTA from "@/components/contact-cta"
import TestimonialCard from "@/components/testimonial-card"
import TestimonialSlider from "@/components/testimonial-slider"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

// Define review sources and testimonials
const sources = ["All", "Google", "Facebook", "Houzz", "Yelp", "HomeAdvisor"]

const testimonials = [
    {
      id: 1,
      content:
        "Malci Construction did an amazing job on our driveway. The team was professional, on time, and the quality of work exceeded our expectations. We've received so many compliments from neighbors.",
      author: "John D.",
      source: "Google",
      sourceIcon: "/placeholder.svg?key=ovvss",
      rating: 5,
    },
    {
      id: 2,
      content:
        "The stonework they did on our patio is beautiful. They were attentive to detail and helped us choose the perfect materials for our home. The project was completed on schedule and on budget.",
      author: "Sarah M.",
      source: "Facebook",
      sourceIcon: "/placeholder.svg?key=w38tu",
      rating: 5,
    },
    {
      id: 3,
      content:
        "From start to finish, the experience with Malci Construction was excellent. Fair pricing, quality materials, and expert installation. Our new walkway has transformed the front of our house.",
      author: "Michael T.",
      source: "HomeAdvisor",
      sourceIcon: "/placeholder.svg?key=7688i",
      rating: 5,
    },
    {
      id: 4,
      content:
        "We hired Malci Construction to build a retaining wall and steps in our sloped backyard. The result is not only functional but also beautiful. The crew was skilled and courteous throughout the project.",
      author: "Jennifer L.",
      source: "Houzz",
      sourceIcon: "/placeholder.svg?key=xmnp7",
      rating: 5,
    },
    {
      id: 5,
      content:
        "I can't say enough good things about Malci Construction. They installed a paver patio with a built-in fire pit that has become our favorite place to relax and entertain. Highly recommended!",
      author: "Robert K.",
      source: "Google",
      sourceIcon: "/placeholder.svg?key=fho50",
      rating: 5,
    },
    {
      id: 6,
      content:
        "Malci Construction repaved our commercial parking lot with minimal disruption to our business. The project manager kept us informed throughout the process, and the result is excellent.",
      author: "David W.",
      source: "Yelp",
      sourceIcon: "/placeholder.svg?key=kngz3",
      rating: 4,
    },
    {
      id: 7,
      content:
        "We had Malci Construction install a bluestone walkway and front steps. The craftsmanship is outstanding, and they were able to match the stone perfectly with our home's exterior.",
      author: "Elizabeth P.",
      source: "HomeAdvisor",
      sourceIcon: "/placeholder.svg?key=pm4ig",
      rating: 5,
    },
    {
      id: 8,
      content:
        "After getting multiple quotes, we chose Malci Construction for our driveway project. They weren't the cheapest, but their attention to detail and quality materials were worth every penny.",
      author: "Thomas G.",
      source: "Google",
      sourceIcon: "/placeholder.svg?key=kg2vi",
      rating: 5,
    },
    {
      id: 9,
      content:
        "The team at Malci Construction built a beautiful stone veneer on our fireplace. The transformation is stunning, and they completed the work cleanly and efficiently.",
      author: "Patricia H.",
      source: "Houzz",
      sourceIcon: "/placeholder.svg?key=7h78w",
      rating: 5,
    },
    {
      id: 10,
      content:
        "We've used Malci Construction for multiple projects over the years, and they consistently deliver excellent results. Their latest work was a paver patio and outdoor kitchen that we absolutely love.",
      author: "Richard M.",
      source: "Facebook",
      sourceIcon: "/placeholder.svg?key=rcoet",
      rating: 5,
    },
    {
      id: 11,
      content:
        "Malci Construction installed a granite block retaining wall that solved our erosion issues while adding beauty to our landscape. The wall is solid and perfectly constructed.",
      author: "Karen B.",
      source: "Yelp",
      sourceIcon: "/placeholder.svg?key=9dues",
      rating: 4,
    },
    {
      id: 12,
      content:
        "I was impressed with how Malci Construction handled our complex driveway project. They addressed drainage issues that other contractors couldn't solve, and the finished product is beautiful.",
      author: "William S.",
      source: "Google",
      sourceIcon: "/placeholder.svg?key=gzyyq",
      rating: 5,
    },
  ];

export default function ReviewsPage() {
  const [activeSource, setActiveSource] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Filter testimonials based on source and search term
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesSource = activeSource === "All" || testimonial.source === activeSource
    const matchesSearch =
      searchTerm === "" ||
      testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.author.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSource && matchesSearch
  })

  // Featured testimonials for the slider
  const featuredTestimonials = testimonials.filter((_, index) => index < 5)

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Customer Reviews"
        subtitle="See what our satisfied customers have to say about our work."
        backgroundImage="/placeholder.svg?key=reviews-header"
      />

      {/* Featured Testimonials Slider */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-8">Featured Testimonials</h2>
          <div className="max-w-3xl mx-auto">
            <TestimonialSlider testimonials={featuredTestimonials} />
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-20 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              {sources.map((source, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSource(source)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeSource === source
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {source}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                content={testimonial.content}
                author={testimonial.author}
                source={testimonial.source}
                sourceIcon={testimonial.sourceIcon}
                rating={testimonial.rating}
                index={index}
                inView={inView}
              />
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-300 mb-4">No reviews found matching your criteria.</p>
              <Button
                onClick={() => {
                  setActiveSource("All")
                  setSearchTerm("")
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Share Your Experience</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            We appreciate your feedback! If you&apos;ve worked with us, please consider leaving a review on one of these
            platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Google", icon: "G", url: "#" },
              { name: "Facebook", icon: "f", url: "#" },
              { name: "Houzz", icon: "H", url: "#" },
              { name: "Yelp", icon: "Y", url: "#" },
              { name: "HomeAdvisor", icon: "HA", url: "#" },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center font-bold text-slate-700 dark:text-white">
                  {platform.icon}
                </div>
                <span className="mt-2 text-slate-700 dark:text-slate-200">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Ready to Experience Our Quality Service?"
        description="Contact us today to discuss your project and join our list of satisfied customers."
      />
    </main>
  )
}
