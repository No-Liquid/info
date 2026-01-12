export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t-2 border-border-color">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-base font-semibold mb-4">NoLiquid</h4>
            <p className="text-sm opacity-70">The future of decentralized trading.</p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Product</h4>
            <ul className="text-sm opacity-70 list-none">
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Community</h4>
            <ul className="text-sm opacity-70 list-none">
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="text-sm opacity-70 list-none">
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Terms
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-50 transition-opacity">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t-2 border-border-color">
          <p className="text-sm opacity-70">&copy; 2025 NoLiquid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
