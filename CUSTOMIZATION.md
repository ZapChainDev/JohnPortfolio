# 🎨 Quick Customization Guide

## Personalizing Your Portfolio

### 1. Update Personal Information

#### Hero Section (`components/Hero.tsx`)

Line 9:

```typescript
const fullText =
  "Hi, I'm John Mark — Full Stack Dev, Automation Specialist & Technical VA.";
```

Change to your name and title.

#### About Section (`components/About.tsx`)

Lines 30-42: Update your stats:

- Name
- Class/Role
- Level/Education
- Experience
- Skills array

Lines 65-81: Update personality/bio text in speech bubble

#### Contact Section (`components/Contact.tsx`)

Lines 154-156: Update contact info:

- Email
- Location
- Availability

#### Footer (`components/Footer.tsx`)

Lines 72-92: Update social links:

- GitHub URL
- LinkedIn URL
- Email address

### 2. Update Projects

Edit `components/Projects.tsx` (lines 6-36):

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Your project description",
    caption: "YOUR CAPTION HERE!",
    tech: ["Tech1", "Tech2", "Tech3"],
    link: "https://your-project-link.com",
    rotation: 2,
    sfx: "GO!",
  },
  // Add more projects...
];
```

### 3. Update Skills

Edit `components/Skills.tsx` (lines 6-19):

```typescript
const skills = [
  { name: "Skill Name", level: 90, color: "neon-purple" },
  // Add more skills...
];
```

### 4. Update Experience

Edit `components/Experience.tsx` (lines 6-32):

```typescript
const experiences = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2023 - Present",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
    color: "neon-purple",
  },
  // Add more experience...
];
```

### 5. Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  dark: '#0D0D0D',           // Background color
  'neon-purple': '#a78bfa',  // Primary accent
  'neon-teal': '#5eead4',    // Secondary accent
}
```

### 6. Adjust Animations

In `tailwind.config.ts`, modify animation timings:

```typescript
animation: {
  'shake': 'shake 0.5s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite',
}
```

### 7. Update Metadata

Edit `app/layout.tsx` (lines 5-9):

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description",
  keywords: ["Your", "Keywords", "Here"],
};
```

## 🎯 Tips for Best Results

1. **Keep Text Concise**: Manga style works best with short, impactful phrases
2. **Use High Contrast**: The dark theme requires bright text for readability
3. **Balance Animations**: Don't overdo the effects - less is more
4. **Test Responsiveness**: Always check on mobile devices
5. **Optimize Images**: If you add images, compress them first

## 🚀 Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder links with real URLs
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all animations work smoothly
- [ ] Verify contact form (add backend if needed)
- [ ] Set up analytics (optional)
- [ ] Add favicon and meta images
- [ ] Run `npm run build` to check for errors

## 📱 Adding Social Media Icons

You can enhance the footer with icon libraries like:

- `react-icons`
- `lucide-react`
- Custom SVGs

## 🎨 Adding More Sections

Follow the pattern in existing components:

1. Create new component in `components/`
2. Use `MangaPanel` for consistent styling
3. Add Framer Motion animations
4. Import and add to `app/page.tsx`

---

Need help? Check the README.md for more details!
