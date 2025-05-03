import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function SitemapPage() {
  // Define site structure
  const siteStructure = [
    {
      section: "Main Pages",
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Gallery", url: "/gallery" },
        { title: "Reviews", url: "/reviews" },
        { title: "Contact", url: "/contact" },
      ],
    },
    {
      section: "Services",
      links: [
        { title: "Paving Services", url: "/services/paving" },
        { title: "Masonry Services", url: "/services/masonry" },
        { title: "Driveways", url: "/services/driveways" },
        { title: "Walkways & Patios", url: "/services/walkways" },
        { title: "Commercial Services", url: "/services/commercial" },
      ],
    },
    {
      section: "Legal",
      links: [
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Terms of Service", url: "/terms" },
        { title: "Sitemap", url: "/sitemap" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader
        title="Sitemap"
        subtitle="Find your way around our website"
        backgroundImage="/placeholder.svg?key=sitemap-header"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteStructure.map((section, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                    {section.section}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.url}
                          className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 animate-fade-in-up delay-300">
              <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                Full Site Structure
              </h2>
              <div className="pl-4 border-l-2 border-slate-200">
                <div className="mb-4">
                  <Link href="/" className="text-teal-600 font-medium hover:text-teal-800 hover:underline">
                    Home
                  </Link>
                </div>

                <div className="mb-4">
                  <Link href="/about" className="text-teal-600 font-medium hover:text-teal-800 hover:underline">
                    About
                  </Link>
                </div>

                <div className="mb-4">
                  <span className="text-slate-800 font-medium">Services</span>
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <Link
                        href="/services/paving"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Paving Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/masonry"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Masonry Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/driveways"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Driveways
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/walkways"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Walkways & Patios
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/commercial"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Commercial Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <Link href="/gallery" className="text-teal-600 font-medium hover:text-teal-800 hover:underline">
                    Gallery
                  </Link>
                </div>

                <div className="mb-4">
                  <Link href="/reviews" className="text-teal-600 font-medium hover:text-teal-800 hover:underline">
                    Reviews
                  </Link>
                </div>

                <div className="mb-4">
                  <Link href="/contact" className="text-teal-600 font-medium hover:text-teal-800 hover:underline">
                    Contact
                  </Link>
                </div>

                <div className="mb-4">
                  <span className="text-slate-800 font-medium">Legal</span>
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sitemap"
                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                      >
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
