"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const TESTIMONIALS = [
  {
    quote:
      "The admin load on our office staff dropped noticeably once reporting and exam workflows were in one place. Parents get answers faster, and we spend less time chasing paper.",
    name: "T. Moyo",
    role: "School Head",
    context: "Government high school, Harare",
  },
  {
    quote:
      "As a teacher, I care that marks and attendance are easy to capture on a slow connection. Dzidzo feels built for how our week actually runs — not a generic overseas product.",
    name: "R. Ndlovu",
    role: "Senior Teacher · Sciences",
    context: "Urban day school",
  },
  {
    quote:
      "From a deputy perspective, consistency across departments matters. Shared calendars and exam data mean fewer clashes and fewer ‘which version is this?’ moments in meetings.",
    name: "N. Sibanda",
    role: "Deputy Head",
    context: "Combined high school",
  },
  {
    quote:
      "Our IT support role is mostly keeping labs and connectivity healthy. Integration that does not demand heavy infrastructure helps us support teaching instead of fighting the system.",
    name: "K. Chiwara",
    role: "Network & Systems Technician",
    context: "Boarding school",
  },
] as const

export function TestimonialsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.12,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="testimonials"
      className="scroll-mt-24 border-t border-border/40 bg-muted/30 py-24"
    >
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by school teams
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Voices from the roles that use the system every day — leadership, teaching, and
            technical operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Card
              key={t.name}
              className={`border-border/60 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${120 + i * 80}ms` }}
            >
              <CardContent className="pt-8">
                <Quote className="mb-4 h-8 w-8 text-primary/70" aria-hidden />
                <blockquote className="text-pretty text-foreground leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-6 border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary">{t.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.context}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
