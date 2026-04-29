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
        <div className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row md:items-start md:gap-14 lg:max-w-5xl">
          <div className="flex shrink-0 justify-center md:justify-start md:pt-2">
            <Image
              src="/dzidzo-icon.svg"
              alt="Dzidzo SMS"
              width={112}
              height={112}
              className="h-24 w-24 rounded-2xl md:h-28 md:w-28"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
              Afrainity Technologies · Harare Institute of Technology startup
            </p>

            <h1 className="text-balance font-bold tracking-tight text-foreground">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Dzidzo SMS
              </span>
              <span className="mt-3 block text-3xl font-semibold leading-snug text-muted-foreground sm:text-4xl md:text-5xl">
                School management software built with Zimbabwean schools
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-xl">
              Admissions, timetables, exams, staff workflows, and parent communication on WhatsApp —
              designed for low-bandwidth environments and day-to-day school operations.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
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
      </div>
    </section>
  )
}
