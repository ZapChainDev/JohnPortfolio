# Manga x Code Hybrid Portfolio

A unique Next.js 14 portfolio website that blends manga aesthetics with modern web development, featuring dark theme, neon accents, and dynamic animations.

## 🎨 Features

- **Dark Theme**: Deep black (#0D0D0D) background with white manga-style borders
- **Neon Accents**: Purple (#a78bfa) and teal (#5eead4) highlights
- **Manga Aesthetics**: Speech bubbles, halftone backgrounds, speed lines, and panel layouts
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-friendly and optimized for all devices
- **Terminal-Style UI**: Code aesthetics mixed with manga visual language

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React** - UI library

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with typing effect
│   ├── About.tsx         # About section (manga character card)
│   ├── Skills.tsx        # Skills grid (power-up tags)
│   ├── Projects.tsx      # Project showcase (manga panels)
│   ├── Experience.tsx    # Work experience (split panels)
│   ├── Contact.tsx       # Contact form (speech bubbles)
│   ├── Footer.tsx        # Terminal-style footer
│   └── MangaPanel.tsx    # Reusable manga panel component
└── public/               # Static assets
```

## 🎯 Sections

1. **Hero**: Full-screen introduction with typing animation
2. **About**: Character stats and personality in manga style
3. **Skills**: Interactive skill cards with hover effects
4. **Projects**: Showcase of 3 major projects with tech stacks
5. **Experience**: Professional history in split-panel layout
6. **Contact**: Form with manga sound effect buttons
7. **Footer**: Terminal-style information display

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change color scheme:

```typescript
colors: {
  dark: '#0D0D0D',
  'neon-purple': '#a78bfa',
  'neon-teal': '#5eead4',
}
```

### Content

Update personal information in respective component files:

- `components/Hero.tsx` - Name and title
- `components/About.tsx` - Background and skills
- `components/Projects.tsx` - Project details
- `components/Experience.tsx` - Work history
- `components/Contact.tsx` - Contact information

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**John Mark**

- Full Stack Developer
- Automation Specialist
- Technical Virtual Assistant

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
