"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#why-choose-us", label: "Why Dzidzo" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen && mobileNavRef.current) {
      mobileNavRef.current.focus()
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.blur()
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  )

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const isScrolled = scrollY > 32
  const textOpacity = Math.max(0, 1 - scrollY / 120)
  const logoScale = Math.max(0.85, 1 - scrollY / 800)
  const headerHeight = Math.max(60, 76 - scrollY / 20)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-slate-800/90 shadow-lg"
            : "bg-black/40 backdrop-blur-sm border-b border-transparent"
        }
      `}
      style={{
        height: `${headerHeight}px`,
        minHeight: "60px",
      }}
      role="banner"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link
          href="/"
          aria-label="Dzidzo SMS Home"
          className="flex items-center gap-3 group relative"
        >
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{ transform: `scale(${logoScale})` }}
          >
            <Image
              src="/dzidzo-icon.svg"
              alt="Dzidzo SMS"
              width={40}
              height={40}
              priority
              className="h-10 w-10"
            />
          </div>

          <span
            className="text-white font-bold text-xl tracking-tight group-hover:text-emerald-400 transition-all duration-300 whitespace-nowrap overflow-hidden"
            style={{
              opacity: textOpacity,
              transform: `translateX(${Math.max(-20, -scrollY / 10)}px)`,
              maxWidth: textOpacity > 0.1 ? "280px" : "0px",
            }}
          >
            Dzidzo SMS
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded group
                ${currentHash === item.href ? "text-emerald-400 font-semibold" : ""}
              `}
            >
              {item.label}
              <span
                className={`
                  pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full
                  group-hover:w-full group-focus:w-full transition-all duration-300
                  ${currentHash === item.href ? "w-full" : ""}
                `}
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-nav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        ref={mobileNavRef}
        tabIndex={-1}
        role="navigation"
        aria-label="Mobile main navigation"
        className={`
          md:hidden fixed inset-x-0 top-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-slate-800/80
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-8 opacity-0 pointer-events-none"}
        `}
        style={{ outline: "none" }}
      >
        <div className="container mx-auto px-4 pt-20 pb-8 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-gray-200 hover:text-emerald-400 transition-colors duration-200 py-3 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
