export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Wallet',
      description: 'Connect your preferred Web3 wallet to get started in seconds.',
    },
    {
      number: '02',
      title: 'Choose Your Asset',
      description: 'Select from a wide range of cryptocurrencies and trading pairs.',
    },
    {
      number: '03',
      title: 'Trade Safely',
      description: 'Execute trades with zero liquidation risk and full control.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white border-b-2 border-border-color">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-10">
              <div className="text-6xl font-bold opacity-20 mb-5">{step.number}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
