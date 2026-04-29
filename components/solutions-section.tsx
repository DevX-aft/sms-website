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
      delay: "0s",
    },
    {
      icon: DeviceMobile,
      title: "Multi-Platform Access",
      description: "Web dashboard for staff; WhatsApp for parents — seamless across devices.",
      bullets: ["Works on phones & computers", "Low-bandwidth friendly"],
      gradient: "from-teal-400 to-emerald-500",
      delay: "0.05s",
    },
    {
      icon: UserPlus,
      title: "Admissions Management",
      description: "Digitize enrollment from application through approval.",
      bullets: ["Streamlined intake", "Less paperwork"],
      gradient: "from-green-500 to-emerald-400",
      delay: "0.1s",
    },
    {
      icon: ChalkboardTeacher,
      title: "Class Management",
      description: "Class creation, timetabling, and allocation for smooth daily operations.",
      bullets: ["Clear structure", "Day-to-day clarity"],
      gradient: "from-emerald-400 to-green-500",
      delay: "0.15s",
    },
    {
      icon: UsersThree,
      title: "Teacher Management",
      description: "Staff records, roles, and responsibilities in one place.",
      bullets: ["Single source of truth", "Easier HR admin"],
      gradient: "from-teal-500 to-green-400",
      delay: "0.2s",
    },
    {
      icon: Exam,
      title: "Exam Management",
      description: "Automated grading support, digital reports, and analytics that turn data into insight.",
      bullets: ["Save teacher time", "Clear performance views"],
      gradient: "from-emerald-500 to-teal-500",
      delay: "0.25s",
    },
    {
      icon: WhatsappLogo,
      title: "WhatsApp for Parents",
      description: "Notices, reports, and updates — where families already are.",
      bullets: ["Always-on channel", "No app store friction"],
      gradient: "from-green-400 to-emerald-500",
      delay: "0.3s",
    },
    {
      icon: CurrencyCircleDollar,
      title: "Finance Management",
      description: "Coming soon: fee tracking and payments from home — as easy as a WhatsApp message.",
      bullets: ["Roadmap feature", "Simpler fee workflows"],
      gradient: "from-teal-400 to-emerald-600",
      delay: "0.35s",
      badge: "Coming soon",
    },
  ]

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Key features</span>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-foreground via-emerald-500 to-teal-500 bg-clip-text text-transparent leading-snug mb-2 inline-block">
              Everything your school
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              needs in one system
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
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
              className={`group relative bg-white border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: item.delay }}
            >
              <CardHeader className="pb-4 relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-sm`}
                >
                  <item.icon size={28} weight="duotone" className="text-white" />
                </div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <CardTitle className="text-foreground text-xl group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  {"badge" in item && item.badge ? (
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 border border-emerald-300 rounded-full px-2 py-0.5 shrink-0">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-emerald-700 text-sm flex items-center group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
