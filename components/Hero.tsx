export default function Hero() {
  return (
    <section className="py-32 text-center border-b-2 border-border-color">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 tracking-tight">
          Trade Without Liquidation Risk
        </h1>
        <p className="text-lg opacity-70 mb-10 font-normal">
          The next generation of decentralized trading. Zero liquidation. Maximum control.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <button className="px-10 py-4 bg-black text-white border-2 border-black text-sm font-semibold hover:bg-white hover:text-black transition-all">
            Get Started
          </button>
          <button className="px-10 py-4 bg-white text-black border-2 border-black text-sm font-semibold hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
