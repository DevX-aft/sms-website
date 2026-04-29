"use client"

import { School, UsersRound, FileCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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

  const features = [
    {
      icon: School,
      title: "Built with our schools",
      description:
        "Developed alongside local high schools by young Zimbabwean innovators who understand everyday realities in the classroom and the office.",
      color: "from-emerald-500 to-teal-400",
      delay: "0s",
    },
    {
      icon: UsersRound,
      title: "Order across school life",
      description:
        "From admissions and class management to exams and staff administration — everything administrators need in one connected place.",
      color: "from-teal-500 to-emerald-500",
      delay: "0.2s",
    },
    {
      icon: FileCheck,
      title: "Parents informed, compliance clear",
      description:
        "The Dzidzo WhatsApp Chatbot keeps families updated with notices and reports. Instant, accurate reporting for the SDC, Responsible Authority, or DSI.",
      color: "from-green-500 to-emerald-600",
      delay: "0.4s",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] top-0 left-0 animate-pulse" />
        <div className="absolute w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] bottom-0 right-0 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-emerald-400 text-base font-semibold tracking-wider uppercase md:text-lg">
            What is Dzidzo SMS?
          </span>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-8 leading-[1.15] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="mb-2 inline-block leading-snug text-foreground">
              Built for our schools,
            </span>
            <br />
            <span className="text-foreground">
              by those who know them best
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Dzidzo School Management System brings order, efficiency, and connection to every part
            of school life. With the upcoming Finance module, paying fees will be as simple as sending
            a WhatsApp message.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: feature.delay }}
            >
              <div className="h-full rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="mb-4 text-3xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-12 rounded-3xl bg-gradient-to-r from-emerald-100/70 to-teal-100/70 border border-emerald-300/40 backdrop-blur-md shadow-xl">
            <h3 className="mb-6 text-4xl font-bold text-foreground">Our promise</h3>
            <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Dzidzo SMS — built for our schools, by our own, to make education management simpler,
              smarter, and truly Zimbabwean.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
