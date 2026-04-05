"use client"

import {
  ShieldCheck,
  DeviceMobile,
  UserPlus,
  ChalkboardTeacher,
  UsersThree,
  Exam,
  WhatsappLogo,
  CurrencyCircleDollar,
} from "phosphor-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: ShieldCheck,
      title: "Role-Based Access (RBAC)",
      description: "Administrators, teachers, technicians, and parents each see a tailored experience.",
      bullets: ["Secure roles", "Right data to the right people"],
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-900/30 to-teal-900/30",
      glow: "from-white/25 to-emerald-300/15",
      accent: "bg-emerald-400/20",
      delay: "0s",
    },
    {
      icon: DeviceMobile,
      title: "Multi-Platform Access",
      description: "Web dashboard for staff; WhatsApp for parents — seamless across devices.",
      bullets: ["Works on phones & computers", "Low-bandwidth friendly"],
      gradient: "from-teal-400 to-emerald-500",
      bgGradient: "from-teal-900/30 to-emerald-900/30",
      glow: "from-white/25 to-teal-300/15",
      accent: "bg-teal-400/20",
      delay: "0.05s",
    },
    {
      icon: UserPlus,
      title: "Admissions Management",
      description: "Digitize enrollment from application through approval.",
      bullets: ["Streamlined intake", "Less paperwork"],
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-900/25 to-emerald-900/30",
      glow: "from-white/25 to-green-300/15",
      accent: "bg-green-400/15",
      delay: "0.1s",
    },
    {
      icon: ChalkboardTeacher,
      title: "Class Management",
      description: "Class creation, timetabling, and allocation for smooth daily operations.",
      bullets: ["Clear structure", "Day-to-day clarity"],
      gradient: "from-emerald-400 to-green-500",
      bgGradient: "from-emerald-900/30 to-green-900/25",
      glow: "from-white/25 to-emerald-200/15",
      accent: "bg-emerald-300/20",
      delay: "0.15s",
    },
    {
      icon: UsersThree,
      title: "Teacher Management",
      description: "Staff records, roles, and responsibilities in one place.",
      bullets: ["Single source of truth", "Easier HR admin"],
      gradient: "from-teal-500 to-green-400",
      bgGradient: "from-teal-900/30 to-green-900/25",
      glow: "from-white/25 to-teal-200/15",
      accent: "bg-teal-300/15",
      delay: "0.2s",
    },
    {
      icon: Exam,
      title: "Exam Management",
      description: "Automated grading support, digital reports, and analytics that turn data into insight.",
      bullets: ["Save teacher time", "Clear performance views"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-900/30 to-teal-900/30",
      glow: "from-white/25 to-emerald-300/15",
      accent: "bg-emerald-400/20",
      delay: "0.25s",
    },
    {
      icon: WhatsappLogo,
      title: "WhatsApp for Parents",
      description: "Notices, reports, and updates — where families already are.",
      bullets: ["Always-on channel", "No app store friction"],
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-900/25 to-emerald-900/30",
      glow: "from-white/25 to-green-200/15",
      accent: "bg-green-300/20",
      delay: "0.3s",
    },
    {
      icon: CurrencyCircleDollar,
      title: "Finance Management",
      description: "Coming soon: fee tracking and payments from home — as easy as a WhatsApp message.",
      bullets: ["Roadmap feature", "Simpler fee workflows"],
      gradient: "from-teal-400 to-emerald-600",
      bgGradient: "from-teal-900/30 to-emerald-900/35",
      glow: "from-white/20 to-teal-200/12",
      accent: "bg-teal-300/15",
      delay: "0.35s",
      badge: "Coming soon",
    },
  ]

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" aria-hidden>
          <line x1="0" y1="150" x2="800" y2="150" stroke="url(#circuit-gradient-dz)" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="url(#circuit-gradient-dz)" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="450" x2="800" y2="450" stroke="url(#circuit-gradient-dz)" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="0" x2="200" y2="600" stroke="url(#circuit-gradient-dz)" strokeWidth="1" opacity="0.3" />
          <line x1="400" y1="0" x2="400" y2="600" stroke="url(#circuit-gradient-dz)" strokeWidth="1" opacity="0.3" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="url(#circuit-gradient-dz)" strokeWidth="1" opacity="0.3" />
          <circle cx="200" cy="150" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="400" cy="150" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="600" cy="150" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="200" cy="300" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="400" cy="300" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="600" cy="300" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="200" cy="450" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="400" cy="450" r="3" fill="url(#node-gradient-dz)" />
          <circle cx="600" cy="450" r="3" fill="url(#node-gradient-dz)" />
          <defs>
            <linearGradient id="circuit-gradient-dz" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="node-gradient-dz" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="electron electron-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-3">
            <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-4">
            <div className="w-2 h-2 bg-emerald-300 rounded-full shadow-lg shadow-emerald-300/50">
              <div className="w-full h-full bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-5">
            <div className="w-1.5 h-1.5 bg-teal-300 rounded-full shadow-md shadow-teal-300/50">
              <div className="w-full h-full bg-white/40 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="electron electron-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-md shadow-emerald-500/50">
              <div className="w-full h-full bg-white/40 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Key features</span>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-snug animate-fade-in-up mb-2 inline-block">
              Everything your school
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              needs in one system
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Full support for ZIMSEC, Cambridge, and HEXCO — with an intuitive interface so teachers
            and admins focus on what matters.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {features.map((item, index) => (
            <Card
              key={index}
              className={`group relative bg-slate-800/30 border-slate-700/50 hover:border-emerald-400/55 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: item.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardHeader className="pb-4 relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-emerald-300/25 ${item.accent}`}
                >
                  <item.icon size={28} weight="duotone" className="text-white" />
                </div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <CardTitle className="text-white text-xl group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </CardTitle>
                  {"badge" in item && item.badge ? (
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-300/90 border border-emerald-500/40 rounded-full px-2 py-0.5 shrink-0">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <CardDescription className="text-gray-300 group-hover:text-white transition-colors">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-emerald-200/90 text-sm flex items-center group-hover:text-white transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-white/70 rounded-full mr-3 group-hover:bg-emerald-300 transition-colors border border-emerald-400/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping border border-emerald-300/40"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="card-electron card-electron-1">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full shadow-sm shadow-emerald-400/50" />
                  </div>
                  <div className="card-electron card-electron-2">
                    <div className="w-1 h-1 bg-teal-400 rounded-full shadow-sm shadow-teal-400/50" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .electron {
          position: absolute;
          z-index: 5;
        }
        .electron-1 {
          animation: circuit-flow-1 8s linear infinite;
        }
        .electron-2 {
          animation: circuit-flow-2 10s linear infinite;
          animation-delay: -2s;
        }
        .electron-3 {
          animation: circuit-flow-3 12s linear infinite;
          animation-delay: -4s;
        }
        .electron-4 {
          animation: circuit-flow-4 9s linear infinite;
          animation-delay: -1s;
        }
        .electron-5 {
          animation: circuit-flow-5 7s linear infinite;
          animation-delay: -3s;
        }
        .electron-6 {
          animation: circuit-flow-6 11s linear infinite;
          animation-delay: -5s;
        }
        .card-electron {
          position: absolute;
        }
        .card-electron-1 {
          animation: card-circuit-1 3s linear infinite;
        }
        .card-electron-2 {
          animation: card-circuit-2 4s linear infinite;
          animation-delay: -1s;
        }
        @keyframes circuit-flow-1 {
          0% {
            left: 0%;
            top: 25%;
          }
          25% {
            left: 25%;
            top: 25%;
          }
          50% {
            left: 25%;
            top: 50%;
          }
          75% {
            left: 75%;
            top: 50%;
          }
          100% {
            left: 100%;
            top: 50%;
          }
        }
        @keyframes circuit-flow-2 {
          0% {
            left: 100%;
            top: 75%;
          }
          25% {
            left: 75%;
            top: 75%;
          }
          50% {
            left: 75%;
            top: 25%;
          }
          75% {
            left: 25%;
            top: 25%;
          }
          100% {
            left: 0%;
            top: 25%;
          }
        }
        @keyframes circuit-flow-3 {
          0% {
            left: 50%;
            top: 0%;
          }
          25% {
            left: 50%;
            top: 25%;
          }
          50% {
            left: 75%;
            top: 25%;
          }
          75% {
            left: 75%;
            top: 75%;
          }
          100% {
            left: 50%;
            top: 100%;
          }
        }
        @keyframes circuit-flow-4 {
          0% {
            left: 0%;
            top: 50%;
          }
          33% {
            left: 33%;
            top: 50%;
          }
          66% {
            left: 66%;
            top: 75%;
          }
          100% {
            left: 100%;
            top: 75%;
          }
        }
        @keyframes circuit-flow-5 {
          0% {
            left: 25%;
            top: 100%;
          }
          50% {
            left: 25%;
            top: 50%;
          }
          100% {
            left: 75%;
            top: 0%;
          }
        }
        @keyframes circuit-flow-6 {
          0% {
            left: 100%;
            top: 25%;
          }
          25% {
            left: 50%;
            top: 25%;
          }
          50% {
            left: 50%;
            top: 75%;
          }
          75% {
            left: 0%;
            top: 75%;
          }
          100% {
            left: 0%;
            top: 0%;
          }
        }
        @keyframes card-circuit-1 {
          0% {
            left: 10%;
            top: 10%;
          }
          25% {
            left: 90%;
            top: 10%;
          }
          50% {
            left: 90%;
            top: 90%;
          }
          75% {
            left: 10%;
            top: 90%;
          }
          100% {
            left: 10%;
            top: 10%;
          }
        }
        @keyframes card-circuit-2 {
          0% {
            left: 50%;
            top: 0%;
          }
          25% {
            left: 100%;
            top: 50%;
          }
          50% {
            left: 50%;
            top: 100%;
          }
          75% {
            left: 0%;
            top: 50%;
          }
          100% {
            left: 50%;
            top: 0%;
          }
        }
      `}</style>
    </section>
  )
}
