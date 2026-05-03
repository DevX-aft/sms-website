"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL?.trim() || ""

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-border/50 bg-background">
      {/* Subtle grid — calm, editorial (Notion-like structure, school-trustworthy tone) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:max-w-7xl lg:flex-row lg:items-center lg:gap-14 xl:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center lg:justify-start lg:gap-6">
              <div className="flex shrink-0 justify-center">
                <Image
                  src="/Dzidzo SMS2.png"
                  alt="Dzidzo SMS"
                  width={176}
                  height={176}
                  className="h-32 w-32 rounded-2xl md:h-40 md:w-40"
                  priority
                />
              </div>
              <h1 className="text-balance text-center font-bold tracking-tight text-foreground sm:min-w-0 sm:flex-1 sm:text-left lg:text-left">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  Dzidzo SMS
                </span>
                <span className="mt-3 block text-3xl font-semibold leading-snug text-muted-foreground sm:text-4xl md:text-5xl">
                  School management system by Afrainity Technologies
                </span>
              </h1>
            </div>

            <div className="text-center lg:text-left">
            <p className="mx-auto mt-0 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-xl">
              Admissions, timetables, exams, staff workflows, and parent communication on WhatsApp. 
              Designed for low-bandwidth environments and day-to-day school operations.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold">
                <Link href="/demo">Book a demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 border-primary/35 bg-background px-10 text-lg font-semibold hover:bg-muted/80">
                <Link href="/#contact">Get a quote</Link>
              </Button>
              {LOGIN_URL ? (
                <Button asChild size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold">
                  <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                    Log in
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold">
                  <Link href="/#contact">Request access</Link>
                </Button>
              )}
            </div>

            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Prefer email?{" "}
              <a
                href="mailto:sales@afrainity.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                sales@afrainity.com
              </a>
            </p>
            </div>
          </div>

          <div className="relative w-full shrink-0 lg:w-[min(44%,520px)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/15 bg-muted shadow-[0_32px_64px_-24px_rgb(16_24_40_/_0.35)] sm:aspect-[5/6] md:rounded-[2.25rem] lg:aspect-[3/4]">
              <Image
                src="/dzidzopic1.png"
                alt="Zimbabwean secondary students in uniform celebrating together in a classroom"
                fill
                className="object-cover object-[center_25%]"
                sizes="(min-width: 1024px) 520px, 100vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent lg:from-background/50"
                aria-hidden
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-6 top-1/4 -z-10 h-32 w-32 rounded-full bg-teal-400/15 blur-2xl"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
