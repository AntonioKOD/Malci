"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-700 text-white py-2 px-4 flex justify-center md:justify-end items-center space-x-6">
        <a
          href="tel:+12038884200"
          className="flex items-center space-x-2 text-sm hover:text-teal-200 transition-colors"
        >
          <Phone size={16} />
          <span>+1 (203) 888-4200</span>
        </a>
        <a
          href="mailto:info@stonecraftpaving.com"
          className="flex items-center space-x-2 text-sm hover:text-teal-200 transition-colors"
        >
          <Mail size={16} />
          <span>info@stonecraftpaving.com</span>
        </a>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-white shadow-md sticky top-4 z-50 rounded-lg mx-4 transition-all duration-300 ${
          scrolled ? "md:mx-8 lg:mx-12 mt-2" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute w-full h-full bg-teal-600 transform rotate-45"></div>
              <div className="absolute w-full h-full bg-amber-500 transform -rotate-45 opacity-80"></div>
            </div>
            <span className="text-xl font-bold text-slate-800">STONECRAFT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors">
              HOME
            </Link>
            <Link href="/about" className="nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors">
              ABOUT
            </Link>
            <div className="relative group">
              <button className="nav-item flex items-center space-x-1 text-slate-700 hover:text-teal-600 font-medium transition-colors">
                <span>SERVICES</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top">
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
            <Link href="/gallery" className="nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors">
              GALLERY
            </Link>
            <Link href="/reviews" className="nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors">
              REVIEWS
            </Link>
            <Link href="/contact" className="nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors">
              CONTACT
            </Link>
            <Button className="nav-item bg-amber-500 hover:bg-amber-600 text-white">Free Estimate</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700 hover:text-teal-600 transition-colors" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="mobile-nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="mobile-nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <div className="mobile-nav-item">
                <details className="group">
                  <summary className="flex justify-between items-center text-slate-700 hover:text-teal-600 font-medium transition-colors py-2 cursor-pointer">
                    <span>SERVICES</span>
                    <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 flex flex-col space-y-2">
                    <Link
                      href="/services/paving"
                      className="text-slate-700 hover:text-teal-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Paving
                    </Link>
                    <Link
                      href="/services/masonry"
                      className="text-slate-700 hover:text-teal-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Masonry
                    </Link>
                    <Link
                      href="/services/driveways"
                      className="text-slate-700 hover:text-teal-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Driveways
                    </Link>
                    <Link
                      href="/services/walkways"
                      className="text-slate-700 hover:text-teal-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Walkways
                    </Link>
                    <Link
                      href="/services/commercial"
                      className="text-slate-700 hover:text-teal-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Commercial
                    </Link>
                  </div>
                </details>
              </div>
              <Link
                href="/gallery"
                className="mobile-nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                href="/reviews"
                className="mobile-nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                REVIEWS
              </Link>
              <Link
                href="/contact"
                className="mobile-nav-item text-slate-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Button
                className="mobile-nav-item bg-amber-500 hover:bg-amber-600 text-white w-full justify-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Estimate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
