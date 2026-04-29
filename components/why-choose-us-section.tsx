"use client"

import { GraduationCap, MapPin, Wallet, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: GraduationCap,
      title: "Backed by Harare Institute of Technology",
      description:
        "Developed by Afrainity Technologies, proudly incubated under the HIT Innovation Hub — credibility, technical excellence, and academic innovation together.",
      benefits: ["Trusted incubation", "Academic rigor", "Local R&D"],
      grad: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Built for Zimbabwean schools",
      description:
        "Every feature is designed for local institutions — ZIMSEC, Cambridge, HEXCO, and more. An autonomous WhatsApp Chatbot for parents and a clean interface for staff.",
      benefits: ["Curricula you use", "No clutter", "Parents on WhatsApp"],
      grad: "from-teal-500 to-emerald-500",
    },
    {
      icon: Wallet,
      title: "Affordable and accessible",
      description:
        "Exceptional value at a sensible price. Optimized for low-bandwidth networks and compatible with smartphones and computers — every school, big or small, can go digital.",
      benefits: ["Low-bandwidth friendly", "Any device", "Fair pricing"],
      grad: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-32 bg-white relative"
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="mb-3 block bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-xl font-semibold uppercase tracking-widest text-transparent">
            Why Dzidzo SMS
          </span>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-8 tracking-tight
            transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <span className="bg-gradient-to-r from-foreground via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Credibility, fit, and value
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Local understanding meets dependable software — so administrators teach and lead, instead
            of fighting spreadsheets.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`
                relative group flex-1 min-w-0 w-full max-w-full
                rounded-3xl
                bg-white
                border border-emerald-100
                px-8 py-10 mb-8 lg:mb-0
                flex flex-col
                hover:-translate-y-1 hover:shadow-md
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                transition-all duration-500 ease-out
              `}
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <div className="relative z-20">
                <div
                  className={`w-14 h-14 bg-gradient-to-tr ${feature.grad} rounded-2xl flex items-center justify-center mb-6 drop-shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-foreground drop-shadow">{feature.title}</h3>
                <p className="mb-5 text-lg text-muted-foreground md:text-xl">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((b, j) => (
                    <li key={j} className="flex items-center text-base text-emerald-700 md:text-lg">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 transition-all duration-1000 delay-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { number: "3+", label: "Curricula supported" },
            { number: "Web + WA", label: "Staff & parents" },
            { number: "Low-BW", label: "Network friendly" },
            { number: "HIT", label: "Innovation Hub" },
          ].map((stat, k) => (
            <div
              key={k}
              className="text-center p-6 rounded-2xl bg-card/70 border border-border backdrop-blur-sm"
            >
              <div className="mb-2 text-4xl font-bold text-foreground md:text-5xl">{stat.number}</div>
              <div className="text-base text-muted-foreground md:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
