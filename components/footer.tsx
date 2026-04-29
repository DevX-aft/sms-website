"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-emerald-300/30 py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
            <div className="relative w-10 h-10">
              <Image
                src="/dzidzo-icon.svg"
                alt="Dzidzo SMS"
                width={40}
                height={40}
                className="rounded-xl group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-foreground transition-colors group-hover:text-emerald-600">
                Dzidzo SMS
              </span>
              <span className="text-base text-muted-foreground md:text-lg">School management — by Afrainity Technologies</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-2 text-base text-muted-foreground md:text-lg">© {new Date().getFullYear()} Afrainity Technologies. All rights reserved.</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group rounded-full border-emerald-500/40 text-base text-emerald-700 transition-all duration-300 hover:scale-105 hover:border-emerald-500 hover:bg-emerald-100 backdrop-blur-sm"
          >
            <ArrowUp className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
