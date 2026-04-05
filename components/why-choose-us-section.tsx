"use client"

import { GraduationCap, MapPin, Wallet, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
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
      grad: "from-emerald-500 via-teal-400 to-cyan-300",
      marble: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-200 shadow-emerald-200/25",
    },
    {
      icon: MapPin,
      title: "Built for Zimbabwean schools",
      description:
        "Every feature is designed for local institutions — ZIMSEC, Cambridge, HEXCO, and more. An autonomous WhatsApp Chatbot for parents and a clean interface for staff.",
      benefits: ["Curricula you use", "No clutter", "Parents on WhatsApp"],
      grad: "from-teal-400 via-emerald-500 to-green-300",
      marble: "bg-gradient-to-tr from-teal-300 via-emerald-400 to-green-100 shadow-teal-200/30",
    },
    {
      icon: Wallet,
      title: "Affordable and accessible",
      description:
        "Exceptional value at a sensible price. Optimized for low-bandwidth networks and compatible with smartphones and computers — every school, big or small, can go digital.",
      benefits: ["Low-bandwidth friendly", "Any device", "Fair pricing"],
      grad: "from-green-500 via-emerald-400 to-teal-300",
      marble: "bg-gradient-to-br from-green-300 via-emerald-300 to-teal-100 shadow-green-200/25",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-6rem] left-1/4 w-72 h-72 md:w-[24vw] md:h-[24vw] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-300 opacity-25 blur-3xl animate-blob-move1" />
        <div className="absolute bottom-[4rem] right-[12%] w-64 h-64 md:w-[20vw] md:h-[20vw] bg-gradient-to-br from-teal-400 via-emerald-300 to-green-300 opacity-22 blur-2xl animate-blob-move2" />
        <div className="absolute bottom-0 left-[7vw] w-40 h-40 bg-gradient-to-br from-green-400 via-emerald-300 to-teal-200 opacity-18 blur-2xl animate-blob-move3" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white opacity-40 animate-twinkle"
            style={{
              left: `${10 + ((i * 17) % 70)}%`,
              top: `${5 + ((i * 23) % 80)}%`,
              animationDelay: `${i * 0.5 + 0.2}s`,
            }}
          />
        ))}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 60%,rgba(255,255,255,0.1) 0%,rgba(0,0,0,0.18) 70%)",
          }}
        />
      </div>
      <style>
        {`
        @keyframes twinkle {
          0%,100%{ opacity:0.4; transform:scale(1);}
          47% { opacity:1; transform:scale(1.5);}
          53% { opacity:0.8;}
        }
        @keyframes blob-move1 {
          0%,100% { transform: translate(0,0) scale(1);}
          50% { transform: translate(14px,32px) scale(1.09);}
        }
        @keyframes blob-move2 {
          0%,100% { transform: translate(0,0) scale(1);}
          50% { transform: translate(22px,-18px) scale(1.07);}
        }
        @keyframes blob-move3 {
          0%,100% { transform: translate(0,0) scale(1);}
          50% { transform: translate(-15px,20px) scale(1.09);}
        }
        .animate-blob-move1 { animation: blob-move1 13s ease-in-out infinite;}
        .animate-blob-move2 { animation: blob-move2 18s ease-in-out infinite;}
        .animate-blob-move3 { animation: blob-move3 14s ease-in-out infinite;}
        .animate-twinkle { animation: twinkle 6s infinite;}
        `}
      </style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="block text-transparent bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-lg font-semibold uppercase tracking-widest mb-3">
            Why Dzidzo SMS
          </span>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-8 tracking-tight
            transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Credibility, fit, and value
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300
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
              tabIndex={0}
              className={`
                relative group flex-1 min-w-0 w-full max-w-full
                rounded-3xl
                bg-slate-900/85
                backdrop-blur-md
                border border-white/15
                px-8 py-10 mb-8 lg:mb-0
                flex flex-col
                ${
                  hovered === i
                    ? "scale-[1.06] border-2 border-white/25 shadow-2xl shadow-white/10 z-20"
                    : "hover:scale-[1.025] hover:z-10"
                }
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-500 ease-out
              `}
              style={{ transitionDelay: `${i * 0.14}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              <div
                className={`
                absolute top-[-2.5rem] right-[-1.2rem] w-14 h-14 rounded-full blur-md
                z-0 transition-all
                ${feature.marble}
                ${hovered === i ? "opacity-70 scale-125 shadow-2xl" : "opacity-40 scale-100"}
                group-hover:opacity-70 group-hover:scale-110
              `}
              />

              <div
                className={`
                pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] overflow-hidden
                before:content-[''] before:absolute before:-left-24 before:top-0 before:h-full before:w-20
                  before:bg-gradient-to-tr before:from-white/30 before:to-transparent before:blur-xl
                  before:rotate-12 before:transition-transform
                before:duration-900
                ${hovered === i ? "before:translate-x-[400%]" : "before:-translate-x-6"}
              `}
              />

              <div className="relative z-20">
                <div
                  className={`w-14 h-14 bg-gradient-to-tr ${feature.grad} rounded-2xl flex items-center justify-center mb-6 drop-shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{feature.title}</h3>
                <p className="text-gray-200 mb-5">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((b, j) => (
                    <li key={j} className="flex items-center text-emerald-200/95 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {hovered === i && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, s) => (
                    <div
                      key={s}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white/60 blur-[1.5px] animate-twinkle"
                      style={{
                        left: `${22 + ((s * 19) % 50)}%`,
                        top: `${20 + ((s * 27) % 55)}%`,
                        animationDelay: `${0.3 + s * 0.7}s`,
                      }}
                    />
                  ))}
                </div>
              )}
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
              className="text-center p-6 rounded-2xl bg-white/10 border border-white/6 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
