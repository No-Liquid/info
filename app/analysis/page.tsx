import Link from 'next/link'
import TradingBacktestAnalysis from '@/components/TradingBacktestAnalysis'
import PerformanceOverview from '@/components/PerformanceOverview'

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Header with Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
        <div className="container mx-auto px-5 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
              ← NoLiquid
            </Link>
            <div className="flex gap-4">
              <Link 
                href="/#dca-bot" 
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded transition-colors"
              >
                Back to DCA Bot
              </Link>
              <a
                href="https://t.me/jason_00_chang"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white text-sm font-medium hover:opacity-80 transition-opacity rounded"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b-2 border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              DCA Bot Performance
            </h1>
            <p className="text-xl opacity-90 mb-6">
              Real-time backtest analysis and comprehensive trading metrics
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="font-semibold">Live Since</div>
                <div className="text-lg">Dec 2024</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="font-semibold">Strategy Type</div>
                <div className="text-lg">Ensemble ML</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="font-semibold">Risk Level</div>
                <div className="text-lg">Low-Medium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Overview Cards */}
      <PerformanceOverview />

      {/* Main Analytics Dashboard */}
      <section className="py-12">
        <TradingBacktestAnalysis />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white border-t-2 border-gray-800">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl opacity-80 mb-8">
            Join our automated DCA bot and experience consistent returns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/jason_00_chang"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors rounded"
            >
              Get Started Now
            </a>
            <Link
              href="/#dca-bot"
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors rounded"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
