"use client"

import Image from "next/image"
import { Mail, Phone, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+263 242 741 423–36",
      href: "tel:+263242741423",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.afrainity.com",
      href: "https://www.afrainity.com",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sales@afrainity.com",
      href: "mailto:sales@afrainity.com",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2
            className={`mb-6 text-5xl font-bold text-foreground transition-all duration-700 md:text-6xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Contact us
          </h2>
          <p
            className={`mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700 delay-75 md:text-base ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Afrainity Technologies · Harare Institute of Technology startup
          </p>
          <p
            className={`mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground transition-all duration-700 delay-150 md:text-2xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Email us to request a quotation or learn more about Dzidzo SMS for your school.
          </p>
        </div>

        <div
          className={`mx-auto mb-12 grid max-w-3xl gap-6 sm:grid-cols-2 sm:items-stretch transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://www.afrainity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-0 flex-col items-center rounded-2xl border border-border bg-card/80 px-6 py-10 text-center shadow-sm transition-all hover:border-emerald-500/35 hover:bg-accent/30 hover:shadow-md"
          >
            <div className="flex w-full flex-1 flex-col items-center justify-center">
              <Image
                src="/AFT-blue-logo.png"
                alt="Afrainity Technologies"
                width={770}
                height={308}
                className="h-[12.25rem] w-auto max-w-full object-contain opacity-95 transition-opacity group-hover:opacity-100 md:h-56"
              />
            </div>
            <p className="mt-4 w-full max-w-sm shrink-0 text-sm font-medium leading-snug text-muted-foreground">
              Afrainity Technologies
            </p>
          </a>

          <div className="flex h-full min-h-0 flex-col items-center rounded-2xl border border-border bg-card/80 px-6 py-10 text-center shadow-sm">
            <div className="flex w-full flex-1 flex-col items-center justify-center">
              <Image
                src="/hitlogo.png"
                alt="Harare Institute of Technology — success through innovation"
                width={320}
                height={160}
                className="h-auto w-full max-w-[260px] object-contain md:max-w-[280px]"
              />
            </div>
            <p className="mt-4 w-full max-w-sm shrink-0 text-sm font-medium leading-snug text-muted-foreground text-balance">
              Proudly incubated by the Innovation Hub — Belvedere, Harare
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className={`grid gap-6 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="flex items-start space-x-4 p-6 rounded-lg bg-card/80 border border-border hover:border-emerald-500/35 transition-all duration-300 hover:bg-accent/40"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1 text-base font-medium uppercase tracking-wide text-muted-foreground">
                    {info.label}
                  </div>
                  <div className="text-lg font-medium leading-relaxed text-foreground break-words md:text-xl">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p
            className={`text-center text-base text-muted-foreground transition-all duration-700 delay-500 md:text-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Product by{" "}
            <span className="text-foreground">Afrainity Technologies</span> — Dzidzo SMS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
