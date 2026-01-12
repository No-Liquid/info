'use client'

import { monthlyData } from '@/config/tradingData'

export default function PerformanceOverview() {
  // Calculate key metrics
  const totalPnL = monthlyData.reduce((sum, item) => sum + item.pnl, 0)
  const winningMonths = monthlyData.filter(item => item.pnl > 0)
  const losingMonths = monthlyData.filter(item => item.pnl < 0)
  const winRate = (winningMonths.length / monthlyData.length) * 100
  
  const avgWin = winningMonths.reduce((sum, item) => sum + item.pnl, 0) / winningMonths.length
  const avgLoss = Math.abs(losingMonths.reduce((sum, item) => sum + item.pnl, 0) / losingMonths.length)
  
  const profitFactor = (winningMonths.reduce((sum, item) => sum + item.pnl, 0)) / 
                        Math.abs(losingMonths.reduce((sum, item) => sum + item.pnl, 0))

  // Calculate equity curve for max drawdown
  let cumulative = 0
  let peak = 0
  let maxDrawdown = 0
  
  monthlyData.forEach(item => {
    cumulative += item.pnl
    if (cumulative > peak) peak = cumulative
    const drawdown = peak - cumulative
    if (drawdown > maxDrawdown) maxDrawdown = drawdown
  })

  const maxDrawdownPct = (maxDrawdown / peak) * 100

  const stats = [
    {
      label: 'Total P&L',
      value: `$${totalPnL.toFixed(2)}`,
      change: totalPnL >= 0 ? '+' : '',
      changeType: totalPnL >= 0 ? 'positive' : 'negative',
      icon: '💰',
      description: 'Cumulative profit/loss',
    },
    {
      label: 'Win Rate',
      value: `${winRate.toFixed(1)}%`,
      change: winRate > 75 ? 'Excellent' : winRate > 60 ? 'Good' : 'Fair',
      changeType: winRate > 70 ? 'positive' : 'neutral',
      icon: '🎯',
      description: 'Winning months percentage',
    },
    {
      label: 'Profit Factor',
      value: profitFactor.toFixed(2),
      change: profitFactor > 2 ? 'Excellent' : profitFactor > 1 ? 'Good' : 'Fair',
      changeType: profitFactor > 1.5 ? 'positive' : profitFactor > 1 ? 'neutral' : 'negative',
      icon: '📈',
      description: 'Profits vs losses ratio',
    },
    {
      label: 'Max Drawdown',
      value: `${maxDrawdownPct.toFixed(2)}%`,
      change: maxDrawdownPct < 15 ? 'Low Risk' : maxDrawdownPct < 25 ? 'Medium' : 'High Risk',
      changeType: maxDrawdownPct < 15 ? 'positive' : maxDrawdownPct < 25 ? 'neutral' : 'negative',
      icon: '🛡️',
      description: 'Largest peak-to-trough decline',
    },
    {
      label: 'Avg Win',
      value: `$${avgWin.toFixed(2)}`,
      change: '+',
      changeType: 'positive',
      icon: '✨',
      description: 'Average winning trade',
    },
    {
      label: 'Avg Loss',
      value: `$${avgLoss.toFixed(2)}`,
      change: '-',
      changeType: 'negative',
      icon: '⚠️',
      description: 'Average losing trade',
    },
    {
      label: 'Trading Months',
      value: monthlyData.length.toString(),
      change: 'Active',
      changeType: 'positive',
      icon: '📅',
      description: 'Total months tracked',
    },
    {
      label: 'Win/Loss Ratio',
      value: (avgWin / avgLoss).toFixed(2),
      change: avgWin > avgLoss ? 'Strong' : 'Weak',
      changeType: avgWin > avgLoss ? 'positive' : 'negative',
      icon: '⚖️',
      description: 'Risk-reward efficiency',
    },
  ]

  return (
    <section className="py-12 -mt-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-gray-100 hover:border-blue-300 group overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{stat.icon}</div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      stat.changeType === 'positive'
                        ? 'bg-green-100 text-green-700'
                        : stat.changeType === 'negative'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-2 font-medium">{stat.label}</div>
                
                <div
                  className={`text-3xl font-bold mb-2 ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-blue-600'
                  }`}
                >
                  {stat.value}
                </div>
                
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-sm font-semibold mb-2 opacity-90">💡 Performance Status</div>
            <div className="text-2xl font-bold mb-1">
              {totalPnL > 0 ? 'Profitable' : 'In Recovery'}
            </div>
            <div className="text-sm opacity-80">
              {winningMonths.length} winning months out of {monthlyData.length}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-sm font-semibold mb-2 opacity-90">🎲 Risk Assessment</div>
            <div className="text-2xl font-bold mb-1">
              {maxDrawdownPct < 15 ? 'Low Risk' : maxDrawdownPct < 25 ? 'Moderate' : 'High Risk'}
            </div>
            <div className="text-sm opacity-80">
              Maximum drawdown: {maxDrawdownPct.toFixed(1)}%
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-sm font-semibold mb-2 opacity-90">🚀 Strategy Rating</div>
            <div className="text-2xl font-bold mb-1">
              {profitFactor > 2 ? 'Excellent' : profitFactor > 1.5 ? 'Very Good' : profitFactor > 1 ? 'Good' : 'Needs Work'}
            </div>
            <div className="text-sm opacity-80">
              Profit factor: {profitFactor.toFixed(2)}x
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
