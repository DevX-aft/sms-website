"use client"

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
      className="py-20 bg-background min-h-screen flex items-center"
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
            className={`mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground transition-all duration-700 delay-150 md:text-2xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Email us to request a quotation or learn more about Dzidzo SMS for your school.
          </p>
        </div>

        <div
          className={`flex items-center justify-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center space-x-4 bg-card/80 border border-border rounded-lg p-4 max-w-lg">
            <div
              className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shrink-0"
              aria-hidden
            >
              HIT
            </div>
            <div className="text-foreground text-left">
              <p className="text-base font-medium text-muted-foreground">Proudly incubated by</p>
              <p className="text-xl font-bold md:text-2xl">Harare Institute of Technology</p>
              <p className="mt-1 text-base text-muted-foreground md:text-lg">Innovation Hub — Belvedere, Harare</p>
            </div>
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
