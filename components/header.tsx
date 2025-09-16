"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo-onca-contabilidade.png"
              alt="Onça Contabilidade"
              width={220}
              height={66}
              className="h-10 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="#servicos"
              className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Serviços
            </Link>
            <Link
              href="#sobre"
              className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Sobre Nós
            </Link>
            <Link
              href="#contato"
              className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="tel:+556784547416">(67) 8454-7416</Link>
            </Button>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link href="https://wa.me/556784547416?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Onça%20Contabilidade">
                Falar com especialista
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            <Link
              href="#servicos"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg font-medium transition-all duration-300"
            >
              Serviços
            </Link>
            <Link
              href="#sobre"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg font-medium transition-all duration-300"
            >
              Sobre Nós
            </Link>
            <Link
              href="#contato"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg font-medium transition-all duration-300"
            >
              Contato
            </Link>

            {/* Mobile Contact Buttons */}
            <div className="px-4 pt-4 space-y-3 border-t border-gray-100">
              <Button
                variant="outline"
                className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent transition-all duration-300"
                asChild
              >
                <Link href="tel:+556784547416" onClick={closeMenu}>
                  📞 (67) 8454-7416
                </Link>
              </Button>
              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 transition-all duration-300"
                asChild
              >
                <Link
                  href="https://wa.me/556784547416?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Onça%20Contabilidade"
                  onClick={closeMenu}
                >
                  💬 Falar com especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
