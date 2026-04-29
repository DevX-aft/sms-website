"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
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
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
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

  useEffect(() => {
    if (!api) return
    const onSelect = () => setActiveIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!visible || !api) return
    const timer = window.setInterval(() => api.scrollNext(), 4200)
    return () => window.clearInterval(timer)
  }, [visible, api])

  const goTo = (nextIndex: number) => {
    api?.scrollTo(nextIndex)
  }

  const next = () => api?.scrollNext()
  const prev = () => api?.scrollPrev()

  return (
    <section
      ref={ref}
      id="testimonials"
      className="scroll-mt-24 border-t border-border/40 bg-muted/30 py-24"
    >
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by school teams
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground md:text-xl">
            Voices from the roles that use the system every day — leadership, teaching, and
            technical operations.
          </p>
        </div>

        <div className="mx-auto mt-14 w-full max-w-5xl">
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className={`transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <CarouselContent className="ml-0">
                {TESTIMONIALS.map((t) => (
                  <CarouselItem key={t.name} className="pl-0">
                    <Card className="min-h-[360px] border-border/60 bg-card/85 shadow-sm backdrop-blur-sm">
                      <CardContent className="pt-10">
                        <Quote className="mb-5 h-9 w-9 text-primary/70" aria-hidden />
                        <blockquote className="text-pretty text-xl text-foreground leading-relaxed md:text-2xl">
                          “{t.quote}”
                        </blockquote>
                        <footer className="mt-8 border-t border-border/50 pt-5">
                          <p className="text-lg font-semibold text-foreground md:text-xl">{t.name}</p>
                          <p className="text-base text-primary md:text-lg">{t.role}</p>
                          <p className="mt-1 text-base text-muted-foreground md:text-lg">{t.context}</p>
                        </footer>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-11 w-11 rounded-full border-border/70 bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeIndex ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
              className="h-11 w-11 rounded-full border-border/70 bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
