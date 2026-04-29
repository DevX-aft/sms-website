import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DemoForm } from "@/components/demo-form"

export const metadata: Metadata = {
  title: "Book a demo — Dzidzo SMS",
  description:
    "Request a walkthrough of Dzidzo SMS — admissions, exams, staff workflows, and parent communication for Zimbabwean schools.",
}

export default function DemoPage() {
  return (
    <main className="readability-enforced min-h-screen bg-background">
      <Header />
      <section className="border-b border-border/40 bg-muted/20">
        <div className="container mx-auto max-w-lg px-4 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Dzidzo SMS
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Book a demo
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Short form — we will follow up by email or phone. For pricing questions, you can also{" "}
            <Link href="/#contact" className="font-medium text-primary underline-offset-4 hover:underline">
              contact sales directly
            </Link>
            .
          </p>

          <div className="mt-10 rounded-xl border border-border/60 bg-card/90 p-6 shadow-sm md:p-8">
            <DemoForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
