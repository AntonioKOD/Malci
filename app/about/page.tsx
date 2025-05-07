import Image from "next/image"
import { CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactCTA from "@/components/contact-cta"
import working from "@/public/working.jpeg"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Malci Construction's history, values, and commitment to quality construction services in Connecticut and New York.",
  openGraph: {
    title: "About Us | Malci Construction",
    description:
      "Learn about Malci Construction's history, values, and commitment to quality construction services in Connecticut and New York.",
    url: "https://malciconstruction.com/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader
        title="About Stonecraft"
        subtitle="Learn about our company, our values, and our commitment to quality."
        backgroundImage="/placeholder.svg?key=about-header"
      />

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
                Founded in 2005, Malci Construction began with a simple mission: to provide exceptional paving
                and masonry services with uncompromising quality and customer satisfaction.
              </p>
              <p className="text-slate-600 mb-4">
                What started as a small family business has grown into one of Connecticut&apos;s most trusted paving and
                masonry contractors, serving both residential and commercial clients throughout the state.
              </p>
              <p className="text-slate-600">
                Our team of skilled craftsmen brings decades of combined experience to every project, ensuring that each
                driveway, walkway, patio, and stone feature we create stands the test of time.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg animate-fade-in-up delay-100">
              <Image
                src={working}
                alt="Stonecraft team working on a project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 animate-fade-in-up">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                description:
                  "We take pride in our work and never cut corners. Every project is completed with meticulous attention to detail and the highest standards of quality.",
                icon: "🛠️",
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Your satisfaction is our top priority. We work closely with you throughout the project to ensure the final result exceeds your expectations.",
                icon: "👍",
              },
              {
                title: "Integrity & Transparency",
                description:
                  "We believe in honest communication, fair pricing, and delivering on our promises. No hidden fees, no surprises.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 shadow-sm border border-slate-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team 
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4 animate-fade-in-up">Our Team</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
            Meet the skilled professionals who make Stonecraft the premier paving and masonry contractor in Connecticut.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?key=team-1",
                bio: "With over 25 years of experience in the industry, Michael founded Stonecraft with a vision of quality and excellence.",
              },
              {
                name: "Sarah Williams",
                role: "Project Manager",
                image: "/placeholder.svg?key=team-2",
                bio: "Sarah ensures that every project runs smoothly from start to finish, coordinating our team and communicating with clients.",
              },
              {
                name: "David Chen",
                role: "Master Mason",
                image: "/placeholder.svg?key=team-3",
                bio: "David's craftsmanship and attention to detail have made him one of the most respected masons in the region.",
              },
              {
                name: "Lisa Rodriguez",
                role: "Design Consultant",
                image: "/placeholder.svg?key=team-4",
                bio: "Lisa helps clients bring their vision to life, offering creative solutions and expert design advice.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-64 bg-slate-200">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 */}

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Why Choose Stonecraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Licensed and insured professionals",
              "Premium materials and superior craftsmanship",
              "Transparent pricing with no hidden fees",
              "Customized solutions for your specific needs",
              "Timely project completion",
              "Comprehensive warranties on all work",
              "Eco-friendly options available",
              "Exceptional customer service",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
