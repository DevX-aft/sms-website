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
              <span className="text-foreground font-bold text-xl block group-hover:text-emerald-600 transition-colors">
                Dzidzo SMS
              </span>
              <span className="text-muted-foreground text-sm">School management — by Afrainity Technologies</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">© {new Date().getFullYear()} Afrainity Technologies. All rights reserved.</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group border-emerald-500/40 text-emerald-700 hover:bg-emerald-100 rounded-full backdrop-blur-sm hover:border-emerald-500 transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
