"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronUp, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Mobile Floating Nav */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-800/80 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition-all"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl overflow-hidden w-64 transition-all">
              <div className="p-4 bg-teal-600 text-white">
                <h3 className="font-bold">Stonecraft</h3>
                <p className="text-sm text-teal-100">Paving & Masonry</p>
              </div>
              <nav className="p-2">
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="flex justify-between items-center px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors cursor-pointer">
                        <span>Services</span>
                        <ChevronUp className="group-open:rotate-180 transition-transform" size={16} />
                      </summary>
                      <ul className="pl-8 mt-1 space-y-1">
                        <li>
                          <Link
                            href="/services/paving"
                            className="block px-4 py-1 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Paving
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/masonry"
                            className="block px-4 py-1 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Masonry
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/driveways"
                            className="block px-4 py-1 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Driveways
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/walkways"
                            className="block px-4 py-1 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Walkways
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/commercial"
                            className="block px-4 py-1 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Commercial
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reviews"
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="p-4 border-t border-slate-100">
                <a
                  href="tel:+12038884200"
                  className="flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Floating Nav - Only visible on scroll */}
      {showScrollTop && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg py-2 px-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                About
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors flex items-center">
                  Services <ChevronUp className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top">
                  <Link
                    href="/services/paving"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Paving
                  </Link>
                  <Link
                    href="/services/masonry"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Masonry
                  </Link>
                  <Link
                    href="/services/driveways"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Driveways
                  </Link>
                  <Link
                    href="/services/walkways"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Walkways
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    Commercial
                  </Link>
                </div>
              </div>
              <Link
                href="/gallery"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/reviews"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </Link>
              <Link href="/contact">
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white ml-2">
                  Get Estimate
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
