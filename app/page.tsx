import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SolutionsSection } from "@/components/solutions-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
