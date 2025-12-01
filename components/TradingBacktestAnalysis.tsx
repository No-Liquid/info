'use client'

import React, { useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { monthlyData } from '@/config/tradingData'

const TradingBacktestAnalysis = () => {
  const [activeTab, setActiveTab] = useState('chart')

  // Calculate equity curve (cumulative)
  let cumulative = 0
  const equityCurve = monthlyData.map(item => {
    cumulative += item.pnl
    return {
      ...item,
      cumulative: cumulative,
      drawdown: 0,
      drawdownValue: 0
    }
  })

  // Calculate drawdown
  let peak = 0
  equityCurve.forEach(item => {
    if (item.cumulative > peak) {
      peak = item.cumulative
    }
    item.drawdown = ((item.cumulative - peak) / Math.abs(peak || 1)) * 100
    item.drawdownValue = item.cumulative - peak
  })

  // Calculate backtest metrics
  const totalPnL = monthlyData.reduce((sum, item) => sum + item.pnl, 0)
  const winningMonths = monthlyData.filter(item => item.pnl > 0)
  const losingMonths = monthlyData.filter(item => item.pnl < 0)
  
  const winRate = (winningMonths.length / monthlyData.length) * 100
  const avgWin = winningMonths.reduce((sum, item) => sum + item.pnl, 0) / winningMonths.length
  const avgLoss = Math.abs(losingMonths.reduce((sum, item) => sum + item.pnl, 0) / losingMonths.length)
  const profitFactor = (winningMonths.reduce((sum, item) => sum + item.pnl, 0)) / 
                        Math.abs(losingMonths.reduce((sum, item) => sum + item.pnl, 0))
  
  const maxDrawdown = Math.min(...equityCurve.map(item => item.drawdownValue))
  const maxDrawdownPct = Math.min(...equityCurve.map(item => item.drawdown))
  
  const returns = monthlyData.map(item => item.pnl)
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length
  const stdDev = Math.sqrt(variance)
  const sharpeRatio = avgReturn / stdDev

  const largestWin = Math.max(...monthlyData.map(item => item.pnl))
  const largestLoss = Math.min(...monthlyData.map(item => item.pnl))

  const stats = [
    { label: 'Total P&L', value: `$${totalPnL.toFixed(2)}`, color: totalPnL >= 0 ? 'text-green-600' : 'text-red-600' },
    { label: 'Win Rate', value: `${winRate.toFixed(1)}%`, color: 'text-blue-600' },
    { label: 'Profit Factor', value: profitFactor.toFixed(2), color: profitFactor > 1 ? 'text-green-600' : 'text-red-600' },
    { label: 'Avg Win', value: `$${avgWin.toFixed(2)}`, color: 'text-green-600' },
    { label: 'Avg Loss', value: `$${avgLoss.toFixed(2)}`, color: 'text-red-600' },
    { label: 'Max Drawdown', value: `$${maxDrawdown.toFixed(2)}`, color: 'text-red-600' },
    { label: 'Max DD %', value: `${maxDrawdownPct.toFixed(2)}%`, color: 'text-red-600' },
    { label: 'Sharpe Ratio', value: sharpeRatio.toFixed(2), color: 'text-blue-600' },
    { label: 'Largest Win', value: `$${largestWin.toFixed(2)}`, color: 'text-green-600' },
    { label: 'Largest Loss', value: `$${largestLoss.toFixed(2)}`, color: 'text-red-600' },
    { label: 'Win Months', value: `${winningMonths.length}/${monthlyData.length}`, color: 'text-blue-600' },
    { label: 'Std Dev', value: `$${stdDev.toFixed(2)}`, color: 'text-gray-600' },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 font-mono">
      {/* Compact Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 tracking-tight">Backtest Analysis</h2>
        <p className="text-gray-600 text-sm">
          Monthly performance · Statistical insights · Risk metrics
        </p>
      </div>
      
      {/* Compact Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit mx-auto">
        <button
          onClick={() => setActiveTab('chart')}
          className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'chart' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📊 Charts
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
            activeTab === 'stats' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📈 Statistics
        </button>
      </div>

      {activeTab === 'chart' && (
        <div className="space-y-5">
          {/* Compact Equity Curve */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="text-xl">📈</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Equity Curve</h3>
                  <p className="text-xs text-gray-500">Cumulative growth</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-bold ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalPnL >= 0 ? '+' : ''}{totalPnL.toFixed(2)} USD
                </div>
                <div className="text-xs text-gray-500">Total P&L</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={equityCurve}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}
                  stroke="#6b7280"
                />
                <YAxis 
                  style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  formatter={(value: any) => [`$${Number(value).toFixed(2)}`, 'Equity']}
                  labelStyle={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}
                  contentStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="3 3" />
                <Line 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="url(#colorGradient)" 
                  strokeWidth={3} 
                  dot={false}
                  name="Equity"
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Compact Monthly P&L */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="text-xl">💰</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Monthly P&L</h3>
                  <p className="text-xs text-gray-500">Win/Loss breakdown</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-blue-600">
                  {winningMonths.length}W / {losingMonths.length}L
                </div>
                <div className="text-xs text-gray-500">{winRate.toFixed(1)}% Win Rate</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}
                  stroke="#6b7280"
                />
                <YAxis 
                  style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  formatter={(value: any) => [`$${Number(value).toFixed(2)}`, 'P&L']}
                  labelStyle={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}
                  contentStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="2 2" />
                <Bar dataKey="pnl" radius={[4, 4, 0, 0]}>
                  {monthlyData.map((entry, index) => (
                    <rect key={`bar-${index}`} fill={entry.pnl >= 0 ? '#10b981' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Compact Drawdown */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="text-xl">📉</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Drawdown Analysis</h3>
                  <p className="text-xs text-gray-500">Risk exposure</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-red-600">
                  {maxDrawdownPct.toFixed(2)}%
                </div>
                <div className="text-xs text-gray-500">Max DD</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={equityCurve}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}
                  stroke="#6b7280"
                />
                <YAxis 
                  style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  formatter={(value: any) => [`${Number(value).toFixed(2)}%`, 'Drawdown']}
                  labelStyle={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}
                  contentStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="drawdown" 
                  stroke="#ef4444" 
                  strokeWidth={3} 
                  fill="url(#drawdownGradient)"
                  dot={false}
                />
                <defs>
                  <linearGradient id="drawdownGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Details Table */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-xl">📅</div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Monthly Breakdown</h3>
                <p className="text-xs text-gray-500">Detailed performance by month</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
              {monthlyData.map((item, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                    item.pnl >= 0 
                      ? 'bg-green-50 border-green-200 hover:border-green-400' 
                      : 'bg-red-50 border-red-200 hover:border-red-400'
                  }`}
                >
                  <div className="text-xs font-semibold text-gray-600 mb-1">{item.month}</div>
                  <div className={`text-lg font-bold ${item.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.pnl >= 0 ? '+' : ''}{item.pnl.toFixed(0)}
                  </div>
                  <div className="text-xs text-gray-500">USD</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-5">
          {/* Compact Primary Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg text-white">
              <div className="text-xs opacity-80 mb-1">Total P&L</div>
              <div className="text-2xl font-bold mb-1">${totalPnL.toFixed(2)}</div>
              <div className="text-xs opacity-80">
                {totalPnL >= 0 ? '📈 Profitable' : '📉 Negative'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg text-white">
              <div className="text-xs opacity-80 mb-1">Win Rate</div>
              <div className="text-2xl font-bold mb-1">{winRate.toFixed(1)}%</div>
              <div className="text-xs opacity-80">{winningMonths.length}/{monthlyData.length} wins</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl shadow-lg text-white">
              <div className="text-xs opacity-80 mb-1">Profit Factor</div>
              <div className="text-2xl font-bold mb-1">{profitFactor.toFixed(2)}</div>
              <div className="text-xs opacity-80">
                {profitFactor > 2 ? '⭐ Excellent' : profitFactor > 1 ? '✓ Good' : '⚠ Fair'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-xl shadow-lg text-white">
              <div className="text-xs opacity-80 mb-1">Max Drawdown</div>
              <div className="text-2xl font-bold mb-1">{maxDrawdownPct.toFixed(2)}%</div>
              <div className="text-xs opacity-80">${maxDrawdown.toFixed(0)}</div>
            </div>
          </div>

          {/* Detailed Metrics Grid */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-xl">📊</div>
              <h3 className="text-lg font-bold text-gray-800">Detailed Metrics</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="text-xs font-medium text-gray-500 mb-1">
                    {stat.label}
                  </div>
                  <div className={`text-xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk & Return Analysis */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-lg">💹</div>
                <h3 className="text-base font-bold text-gray-800">Win/Loss Analysis</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Average Win</span>
                  <span className="text-sm font-bold text-green-600">${avgWin.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                  <span className="text-sm text-gray-700">Average Loss</span>
                  <span className="text-sm font-bold text-red-600">${avgLoss.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-700">Win/Loss Ratio</span>
                  <span className="text-sm font-bold text-blue-600">{(avgWin / avgLoss).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded-lg">
                  <span className="text-sm text-gray-700">Sharpe Ratio</span>
                  <span className="text-sm font-bold text-purple-600">{sharpeRatio.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-lg">🎯</div>
                <h3 className="text-base font-bold text-gray-800">Performance Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Best Month</span>
                  <span className="text-sm font-bold text-green-600">+${largestWin.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                  <span className="text-sm text-gray-700">Worst Month</span>
                  <span className="text-sm font-bold text-red-600">${largestLoss.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Std Deviation</span>
                  <span className="text-sm font-bold text-gray-600">${stdDev.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-700">Avg Return</span>
                  <span className="text-sm font-bold text-blue-600">${avgReturn.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Insights */}
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💡</span>
                <h4 className="text-sm font-bold text-blue-900">Key Insight</h4>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Win Rate {winRate.toFixed(0)}%</strong> shows {winRate > 70 ? 'excellent' : winRate > 60 ? 'good' : 'fair'} consistency. 
                Profit Factor of <strong>{profitFactor.toFixed(2)}</strong> indicates {profitFactor > 2 ? 'exceptional' : profitFactor > 1.5 ? 'strong' : profitFactor > 1 ? 'positive' : 'challenging'} returns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🎯</span>
                <h4 className="text-sm font-bold text-purple-900">Risk Profile</h4>
              </div>
              <p className="text-xs text-purple-800 leading-relaxed">
                Max drawdown of <strong>{maxDrawdownPct.toFixed(1)}%</strong> represents {maxDrawdownPct < 15 ? 'low' : maxDrawdownPct < 25 ? 'moderate' : 'high'} risk exposure. 
                Sharpe ratio <strong>{sharpeRatio.toFixed(2)}</strong> indicates {sharpeRatio > 1 ? 'favorable' : 'volatile'} risk-adjusted returns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📈</span>
                <h4 className="text-sm font-bold text-green-900">Performance</h4>
              </div>
              <p className="text-xs text-green-800 leading-relaxed">
                Win/Loss ratio of <strong>{(avgWin / avgLoss).toFixed(2)}</strong> with avg win <strong>${avgWin.toFixed(0)}</strong> vs avg loss <strong>${avgLoss.toFixed(0)}</strong>. 
                {totalPnL > 0 ? 'Positive' : 'Negative'} total P&L of <strong>${totalPnL.toFixed(0)}</strong>.
              </p>
            </div>
          </div>

          {/* Performance Rating */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-lg">⭐</div>
              <h3 className="text-base font-bold text-gray-800">Performance Rating</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className={`p-3 rounded-lg text-center ${winRate > 70 ? 'bg-green-100 border-2 border-green-500' : winRate > 60 ? 'bg-yellow-100 border-2 border-yellow-500' : 'bg-red-100 border-2 border-red-500'}`}>
                <div className="text-xs font-semibold text-gray-600 mb-1">Win Rate</div>
                <div className="text-2xl font-bold">{winRate > 70 ? '⭐⭐⭐' : winRate > 60 ? '⭐⭐' : '⭐'}</div>
                <div className="text-xs text-gray-700 mt-1">{winRate > 70 ? 'Excellent' : winRate > 60 ? 'Good' : 'Fair'}</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${profitFactor > 2 ? 'bg-green-100 border-2 border-green-500' : profitFactor > 1.5 ? 'bg-yellow-100 border-2 border-yellow-500' : profitFactor > 1 ? 'bg-orange-100 border-2 border-orange-500' : 'bg-red-100 border-2 border-red-500'}`}>
                <div className="text-xs font-semibold text-gray-600 mb-1">Profit Factor</div>
                <div className="text-2xl font-bold">{profitFactor > 2 ? '⭐⭐⭐' : profitFactor > 1.5 ? '⭐⭐' : profitFactor > 1 ? '⭐' : '❌'}</div>
                <div className="text-xs text-gray-700 mt-1">{profitFactor > 2 ? 'Excellent' : profitFactor > 1.5 ? 'Good' : profitFactor > 1 ? 'Fair' : 'Poor'}</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${maxDrawdownPct < 15 ? 'bg-green-100 border-2 border-green-500' : maxDrawdownPct < 25 ? 'bg-yellow-100 border-2 border-yellow-500' : 'bg-red-100 border-2 border-red-500'}`}>
                <div className="text-xs font-semibold text-gray-600 mb-1">Risk Control</div>
                <div className="text-2xl font-bold">{maxDrawdownPct < 15 ? '⭐⭐⭐' : maxDrawdownPct < 25 ? '⭐⭐' : '⭐'}</div>
                <div className="text-xs text-gray-700 mt-1">{maxDrawdownPct < 15 ? 'Low Risk' : maxDrawdownPct < 25 ? 'Moderate' : 'High Risk'}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TradingBacktestAnalysis
