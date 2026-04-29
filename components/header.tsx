"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#why-choose-us", label: "Why Dzidzo" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
]

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL?.trim() || ""

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
  const logoScale = Math.max(0.9, 1 - scrollY / 900)
  const headerHeight = Math.max(72, 88 - scrollY / 20)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-background/80 backdrop-blur-sm border-b border-transparent"
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
          className="group relative flex items-center gap-1.5"
        >
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{ transform: `scale(${logoScale})` }}
          >
            <Image
              src="/Dzidzo SMS2.png"
              alt="Dzidzo SMS"
              width={56}
              height={56}
              priority
              className="h-14 w-14"
            />
          </div>

          <span
            className="overflow-hidden whitespace-nowrap text-2xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:text-emerald-500"
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
          className="hidden md:flex items-center gap-6 lg:gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded py-2 text-lg text-muted-foreground transition-colors duration-200 group hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                ${item.href.endsWith(currentHash) ? "text-emerald-600 font-semibold" : ""}
              `}
            >
              {item.label}
              <span
                className={`
                  pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full
                  group-hover:w-full group-focus:w-full transition-all duration-300
                  ${item.href.endsWith(currentHash) ? "w-full" : ""}
                `}
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          {LOGIN_URL ? (
            <Button variant="ghost" size="sm" className="text-base text-muted-foreground hover:text-foreground" asChild>
              <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="text-base text-muted-foreground hover:text-foreground" asChild>
              <Link href="/#contact">Request access</Link>
            </Button>
          )}
          <Button variant="outline" size="sm" className="border-primary/40 bg-transparent text-base text-foreground hover:bg-accent" asChild>
            <Link href="/#contact">Get a quote</Link>
          </Button>
          <Button size="sm" className="text-base font-semibold" asChild>
            <Link href="/demo">Book a demo</Link>
          </Button>
        </div>

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
            <X size={28} className="text-foreground" />
          ) : (
            <Menu size={28} className="text-foreground" />
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
          md:hidden fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-border
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
              className="rounded px-2 py-3 text-xl text-muted-foreground transition-colors duration-200 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
            <Button className="w-full font-semibold" asChild>
              <Link href="/demo" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>
                Book a demo
              </Link>
            </Button>
            <Button variant="outline" className="w-full border-primary/40 bg-transparent text-foreground" asChild>
              <Link href="/#contact" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>
                Get a quote
              </Link>
            </Button>
            {LOGIN_URL ? (
              <Button variant="secondary" className="w-full" asChild>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </a>
              </Button>
            ) : (
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/#contact" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>
                  Request access
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
