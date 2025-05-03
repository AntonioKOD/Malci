"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Phone, Mail, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

import { motion, AnimatePresence } from "framer-motion"
import  {Logo}  from "./logo"

export default function UnifiedNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
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
      {/* Top Bar - Only visible when not scrolled */}
      <div
        className={`bg-blue-700 dark:bg-slate-800 text-white py-2 px-4 flex justify-center md:justify-end items-center space-x-6 transition-all duration-300 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <a
          href="tel:+12038884200"
          className="flex items-center space-x-2 text-sm hover:text-blue-200 transition-colors"
        >
          <Phone size={16} />
          <span>+1 (929) 536-4063</span>
        </a>
        <a
          href="mailto:info@stonecraftpaving.com"
          className="flex items-center space-x-2 text-sm hover:text-blue-200 transition-colors"
        >
          <Mail size={16} />
          <span>malciconstruction@gmail.com</span>
        </a>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg rounded-lg"
            : "sticky top-0 z-50 w-full bg-white dark:bg-slate-900 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          
            <Logo size="xl" className="hover:scale-105 transition-transform duration-300" />
        

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              ABOUT
            </Link>
            <div className="relative group">
              <button className="nav-item flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                <span>SERVICES</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top">
                <Link
                  href="/services/masonry"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Masonry
                </Link>
                <Link
                  href="/services/concrete"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Concrete
                </Link>
                <Link
                  href="/services/excavation"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Excavation
                </Link>
              </div>
            </div>
            <Link
              href="/gallery"
              className="nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              GALLERY
            </Link>
            <Link
              href="/reviews"
              className="nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              REVIEWS
            </Link>
            <Link
              href="/contact"
              className="nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              CONTACT
            </Link>
            <Button className="nav-item bg-amber-500 hover:bg-amber-600 text-white">Free Estimate</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-4 px-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="mobile-nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="mobile-nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <div className="mobile-nav-item">
                  <details className="group">
                    <summary className="flex justify-between items-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2 cursor-pointer">
                      <span>SERVICES</span>
                      <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 mt-2 flex flex-col space-y-2">
                      <Link
                        href="/services/paving"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Paving
                      </Link>
                      <Link
                        href="/services/masonry"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Masonry
                      </Link>
                      <Link
                        href="/services/driveways"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Driveways
                      </Link>
                      <Link
                        href="/services/walkways"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Walkways
                      </Link>
                      <Link
                        href="/services/commercial"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Commercial
                      </Link>
                    </div>
                  </details>
                </div>
                <Link
                  href="/gallery"
                  className="mobile-nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GALLERY
                </Link>
                <Link
                  href="/reviews"
                  className="mobile-nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  REVIEWS
                </Link>
                <Link
                  href="/contact"
                  className="mobile-nav-item text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to top button - only visible when scrolled */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}
