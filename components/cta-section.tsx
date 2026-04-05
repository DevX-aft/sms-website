"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-slate-900 to-blue-900">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120,119,198,0.2), transparent 50%)`
          }}
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-float 15s linear infinite'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-slow ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="w-4 h-4 text-purple-400" />
            ) : i % 3 === 1 ? (
              <Zap className="w-3 h-3 text-blue-400" />
            ) : (
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Ready to Transform?</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Empower Your
              </span>
              <span className="block bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Future with AI
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the AI revolution in Africa. Transform your business with our cutting-edge solutions and unlock
              unprecedented growth opportunities across the continent.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              size="lg"
              className="group bg-white text-purple-900 hover:bg-gray-100 px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3">Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/50 text-white hover:bg-white/10 px-12 py-6 text-lg bg-transparent rounded-full backdrop-blur-sm hover:border-white transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Successful Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-300 text-sm">African Countries</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}