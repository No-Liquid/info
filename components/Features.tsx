export default function Features() {
  const features = [
    {
      title: 'No Liquidation Risk',
      description: 'Trade with confidence knowing your positions are protected from sudden liquidations.',
    },
    {
      title: 'High Performance',
      description: 'Execute trades quickly with optimized infrastructure and smart routing.',
    },
    {
      title: 'Secure & Decentralized',
      description: 'Maintain custody of your assets and trade securely from your wallet.',
    },
    {
      title: 'Low Fees',
      description: 'Competitive trading fees with transparent pricing and no hidden charges.',
    },
    {
      title: 'Advanced Tools',
      description: 'Professional-grade charting and analytics to support informed decisions.',
    },
    {
      title: 'Multi-Chain Access',
      description: 'Connect to multiple blockchain networks through a single interface.',
    },
  ]

  return (
    <section id="features" className="py-24 border-b-2 border-border-color">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">Why NoLiquid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 border-2 border-border-color hover:bg-hover-bg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
