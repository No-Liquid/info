import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DCABot from '@/components/DCABot'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <DCABot />
      <HowItWorks />
      <Stats />
      <CTASection />
      <Footer />
    </main>
  )
}
