export default function Stats() {
  const stats = [
    { value: '$500M+', label: 'Total Trading Volume' },
    { value: '50K+', label: 'Active Traders' },
    { value: '99.9%', label: 'Uptime' },
    { value: '0', label: 'Liquidations' },
  ]

  return (
    <section className="py-24 bg-black text-white border-b-2 border-black">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
