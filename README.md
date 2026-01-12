# NoLiquid Landing Page

A Next.js 14 landing page for NoLiquid - a decentralized trading platform with zero liquidation risk.

## Features

- 🚀 Next.js 14 with App Router
- 💎 TypeScript
- 🎨 Tailwind CSS
- 📊 Trading Backtest Analysis with Recharts
- 📱 Fully Responsive Design
- ⚡ Optimized for Performance

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Home page
│   ├── analysis/
│   │   └── page.tsx        # Trading analysis page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features grid
│   ├── DCABot.tsx          # DCA Bot information
│   ├── HowItWorks.tsx      # How it works section
│   ├── Stats.tsx           # Statistics section
│   ├── CTASection.tsx      # Call-to-action section
│   ├── Footer.tsx          # Footer component
│   └── TradingBacktestAnalysis.tsx  # Trading analysis charts
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd noliquid-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deploy command:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 3: Deploy from Local Directory

```bash
vercel --prod
```

## Auto-Deploy from GitHub

Once connected to Vercel:

1. Every push to `main` branch will trigger a production deployment
2. Pull requests will create preview deployments
3. Environment variables can be configured in Vercel dashboard

## Environment Variables

No environment variables are currently required for this project.

## Pages

- `/` - Landing page with all sections including:
  - Hero section with CTA
  - Features showcase (6 cards)
  - DCA Bot details with live performance snapshot
  - How it works (3 steps)
  - Statistics display
  - Call-to-action section
  - Footer
- `/analysis` - Comprehensive trading analytics dashboard featuring:
  - Performance overview with 8 key metrics cards
  - Interactive charts (Equity Curve, Monthly P&L, Drawdown)
  - Detailed statistics with explanations
  - Quick insights panel
  - Risk assessment summary

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Font:** JetBrains Mono
- **Deployment:** Vercel

## License

All rights reserved © 2025 NoLiquid

## Contact

For inquiries, contact us on [Telegram](https://t.me/jason_00_chang)
