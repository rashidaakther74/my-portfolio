# Rashida Akther - Portfolio

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **DaisyUI**.

## Features

- ⚡ **Next.js 14 App Router** - Modern React framework with Server Components
- 🎨 **Tailwind CSS + DaisyUI** - Utility-first styling with beautiful components
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🌙 **Dark Theme** - Elegant dark mode with orange accents
- ♿ **Accessible** - Semantic HTML and proper ARIA attributes
- 🖼️ **Optimized Images** - Next.js Image component for performance
- 🔍 **SEO Ready** - Meta tags, Open Graph, and structured data

## Pages

- **Home** (`/`) - Hero section with intro and profile image
- **About** (`/about`) - Brief about section with "Read More" link
- **About Read** (`/about-read`) - Detailed education, skills, and career goals
- **Services** (`/service`) - Three service offerings with icons
- **Skills** (`/skills`) - Technical skills with animated progress bars
- **Experience** (`/experience`) - Timeline of work experience
- **Contact** (`/contact`) - Contact form and info cards

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── about-read/        # Detailed about page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── service/           # Services page
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   └── page.tsx           # Home page
├── components/
│   ├── about/             # About components
│   ├── contact/           # Contact components
│   ├── global/            # Shared components (Container)
│   ├── home/              # Home page components
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── services/          # Services components
public/
├── assets/                # Static images
└── ...
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 + DaisyUI 5
- **Icons**: React Icons + Lucide React
- **Images**: Next.js Image Optimization
- **Font**: Inter (via next/font)

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

- **Email**: rashida@gmail.com
- **LinkedIn**: [Rashida Akther](https://www.linkedin.com/in/rashida-akther-2014503a2)
- **GitHub**: [rashidaakther74](https://github.com/rashidaakther74)