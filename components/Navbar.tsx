'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-border-color">
      <div className="container mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">NoLiquid</div>
          
          <ul className="hidden md:flex gap-10 list-none">
            <li>
              <a href="#features" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                Features
              </a>
            </li>
            <li>
              <a href="#dca-bot" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                DCA Bot
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                How It Works
              </a>
            </li>
            <li>
              <Link href="/analysis" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                Analysis
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="https://t.me/jason_00_chang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}
