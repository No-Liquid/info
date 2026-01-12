export default function DCABot() {
  return (
    <section id="dca-bot" className="py-24 bg-hover-bg border-b-2 border-border-color">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-3">
          Automated DCA Trading Bot
        </h2>
        <p className="text-center text-base opacity-70 mb-16">
          Professional-grade algorithmic trading with proven results
        </p>

        <div className="flex flex-col gap-16">
          {/* Advanced Signal Processing */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">Advanced Signal Processing</h3>
            <p className="text-base leading-relaxed mb-5">
              Our system employs ensemble modeling with <strong>120+ signals</strong> continuously
              retrained weekly to adapt to changing market conditions. The strategy combines:
            </p>
            <ul className="list-none p-0">
              <li className="py-3 text-base leading-relaxed border-b border-border-color">
                🎯 <strong>60%</strong> Trend Following signals
              </li>
              <li className="py-3 text-base leading-relaxed border-b border-border-color">
                📊 <strong>30%</strong> Mean Reversion signals
              </li>
              <li className="py-3 text-base leading-relaxed border-b border-border-color">
                ⚡ <strong>10%</strong> Outlier & Breakout signals
              </li>
              <li className="py-3 text-base leading-relaxed border-b border-border-color">
                ⏱️ Multi-timeframe analysis (30m, 1h, 3h, 4h, 5h, 1D)
              </li>
              <li className="py-3 text-base leading-relaxed">
                🔍 RSI, ATR, DMI, EMA, TSI, Keltner Channel, VWMA
              </li>
            </ul>
          </div>

          {/* Proven Track Record */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">Proven Track Record</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white border-2 border-border-color p-8">
                <h4 className="text-lg font-semibold mb-6 text-center">Medium-term (2019-2025)</h4>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center pb-3 border-b border-border-color">
                    <span className="text-sm opacity-70">Annual Return</span>
                    <span className="text-xl font-bold">~80%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border-color">
                    <span className="text-sm opacity-70">Max Drawdown</span>
                    <span className="text-xl font-bold">12.33%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-70">Win Rate</span>
                    <span className="text-xl font-bold">92.04%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-border-color p-8">
                <h4 className="text-lg font-semibold mb-6 text-center">Long-term (2015-2025)</h4>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center pb-3 border-b border-border-color">
                    <span className="text-sm opacity-70">Annual Return</span>
                    <span className="text-xl font-bold">~60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border-color">
                    <span className="text-sm opacity-70">Max Drawdown</span>
                    <span className="text-xl font-bold">22.16%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-70">Win Rate</span>
                    <span className="text-xl font-bold">82.07%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Management */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">Risk Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div className="p-5 bg-white border-2 border-border-color text-sm leading-relaxed">
                <strong>Low Leverage:</strong> x2-x3 maximum, never exceeding x4
              </div>
              <div className="p-5 bg-white border-2 border-border-color text-sm leading-relaxed">
                <strong>Margin Control:</strong> Maintained at ≥200% to minimize liquidation risk
              </div>
              <div className="p-5 bg-white border-2 border-border-color text-sm leading-relaxed">
                <strong>DCA Strategy:</strong> Automated dollar-cost averaging with smart position sizing
              </div>
              <div className="p-5 bg-white border-2 border-border-color text-sm leading-relaxed">
                <strong>Live Performance:</strong> &lt;0.25% deviation from backtest results
              </div>
            </div>
          </div>

          {/* Live Performance Snapshot */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
            <h3 className="text-3xl font-semibold mb-6">📊 Live Performance Snapshot</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-sm opacity-80 mb-1">Last Month</div>
                <div className="text-2xl font-bold">-$2,816.23</div>
                <div className="text-xs opacity-70">Nov 2025</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-80 mb-1">Best Month</div>
                <div className="text-2xl font-bold text-green-300">+$1,082.75</div>
                <div className="text-xs opacity-70">Oct 2025</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-80 mb-1">Win Rate</div>
                <div className="text-2xl font-bold">66.7%</div>
                <div className="text-xs opacity-70">8 of 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-80 mb-1">Total P&L</div>
                <div className="text-2xl font-bold text-red-300">-$534.13</div>
                <div className="text-xs opacity-70">YTD 2025</div>
              </div>
            </div>
            <a
              href="/analysis"
              className="inline-block w-full px-6 py-3 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition-all text-center"
            >
              📈 View Full Analytics Dashboard →
            </a>
          </div>

          {/* Investment Opportunities */}
          <div className="text-center p-10 bg-white border-2 border-border-color">
            <h3 className="text-3xl font-semibold mb-8">Investment Opportunities</h3>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center py-4 border-b-2 border-border-color text-base">
                <span className="font-normal">Expected Annual Return:</span>
                <span className="font-bold text-xl">40-60%</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b-2 border-border-color text-base">
                <span className="font-normal">Maximum Drawdown:</span>
                <span className="font-bold text-xl">≤15%</span>
              </div>
              <div className="flex justify-between items-center py-4 text-base">
                <span className="font-normal">Minimum Investment:</span>
                <span className="font-bold text-xl">$1,000 USD</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/jason_00_chang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-black text-white border-2 border-black text-base font-semibold hover:bg-white hover:text-black transition-all"
              >
                Contact Us for Details
              </a>
              <a
                href="/analysis"
                className="inline-block px-12 py-5 bg-blue-600 text-white border-2 border-blue-600 text-base font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                View Live Performance →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
