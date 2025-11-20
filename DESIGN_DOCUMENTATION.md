# Dekhnix Technologies - Design System Documentation

## Overview
Complete redesign of the Dekhnix Technologies website with a world-class, modern, premium tech-education aesthetic.

---

## 🎨 Color Palette

### Primary Gradient Colors
- **Electric Indigo**: `#4C6FFF` - Primary brand color
- **Violet Blue**: `#8A6DFF` - Secondary gradient color
- **Cyan Neon**: `#00E0FF` - Accent and highlight color

### Background Colors
- **Dark Background**: `#0A0F1F` - Main page background
- **Card Base Light**: `#111729` - Card backgrounds (light)
- **Card Base Dark**: `#1a1f35` - Card backgrounds (dark)
- **Text Primary**: `#C7D4E0` - Body text color
- **Text Muted**: `#C7D4E0` - Secondary text

---

## 📐 Typography System

### Font Weights
- **Light**: 300 - Subtitles, descriptions
- **Regular**: 400 - Body text
- **Semibold**: 600 - Labels, tags
- **Bold**: 700 - Subheadings
- **Black**: 900 - Main titles

### Font Sizes
- **H1 (Hero)**: 7xl - 8xl (56px - 96px)
- **H2 (Section)**: 5xl (48px)
- **H3 (Card)**: 2xl (24px)
- **Body**: xl (20px)
- **Small**: sm (14px)

---

## 🧱 Component System

### 1. Hero Cards (Large)
- Full-width cards with 12-16px padding
- Rounded corners: 3xl (24px)
- Borders: `border-[#4C6FFF]/30` with hover states
- Background: `from-[#111729]/90 to-[#1a1f35]/50` with backdrop blur
- Hover effects: `-translate-y-2` and opacity overlays
- Glowing gradient orbs in background

### 2. Compact Cards (Small)
- Medium-sized cards with 6px padding
- Rounded corners: 2xl (16px)
- Borders: `border-[#4C6FFF]/20` with hover states
- Background: `from-[#111729]/80 to-[#1a1f35]/40`
- Hover effects: `-translate-y-1` and icon scale

### 3. Icon Containers
- **Large Icons**: 16px (64px) - Hero sections
- **Medium Icons**: 12px (48px) - Card headers
- **Small Icons**: 12px (48px) - List items
- Gradient backgrounds: `from-[#4C6FFF] to-[#8A6DFF]` (default)
- Hover scale: 1.1x with smooth transition

### 4. Badge Tags
- Padding: px-4 py-2
- Rounded: full (9999px)
- Background: `from-[#4C6FFF]/10 to-[#00E0FF]/10`
- Border: `border-[#4C6FFF]/30`
- Icon + text alignment

### 5. CTA Buttons

**Primary (Gradient)**
```
bg-gradient-to-r from-[#4C6FFF] to-[#8A6DFF]
text-white
hover:scale-105 hover:shadow-lg
```

**Secondary (Glassmorphic)**
```
glass-morphism border border-[#4C6FFF]/30
text-white
hover:border-[#4C6FFF]/50
```

**Tertiary (Ghost)**
```
bg-gradient-to-r from-[#4C6FFF]/10 to-[#00E0FF]/10
border border-[#4C6FFF]/30
hover:from-[#4C6FFF]/20 hover:to-[#00E0FF]/20
```

---

## ✨ Animation System

### Entrance Animations
- **fadeInUp**: 0.8s ease-out with 30px translateY
- Staggered delays: 0.2s, 0.4s, 0.6s increments

### Hover Animations
- **Card Lift**: -translate-y-1 or -translate-y-2
- **Icon Scale**: scale-110
- **Border Glow**: opacity increase on hover
- **Background Fill**: subtle gradient overlay appears

### Continuous Animations
- **float**: 3s ease-in-out infinite on scroll indicators
- **pulse**: 2s ease-in-out infinite on secondary elements
- **shimmer**: Subtle light pass animation

### Transition Timings
- **smooth-transition**: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- **hover-lift**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

---

## 📱 Responsive Breakpoints

### Mobile First
- **Base**: Mobile (0px and up)
- **md**: Tablet & Desktop (768px and up)
- **lg**: Large Desktop (1024px and up)

### Grid Systems
- **Desktop**: 3-4 column grids
- **Tablet**: 2 column grids
- **Mobile**: 1 column (full width cards)

### Spacing System (8px base)
- **Section Gap**: 120-160px (30-40 * 8px)
- **Card Padding**: 24-64px (3-8 * 8px)
- **Element Spacing**: 8-24px (1-3 * 8px)

---

## 🌟 Visual Effects

### Glassmorphism
- `backdrop-filter: blur(10px)` - Standard
- `backdrop-filter: blur(20px)` - Dark variant
- Semi-transparent backgrounds with borders

### Gradient Overlays
- Decorative gradient orbs (blurred, positioned absolutely)
- Gradient borders on cards
- Gradient text using `bg-clip-text`

### Shadow System
- **Soft Shadow**: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3)`
- **Glow Shadow**: `hover:shadow-[#4C6FFF]/50`
- **Depth**: Multiple shadow layers on hero sections

---

## 📋 Page Structure

### Homepage
1. Hero Section (Full-screen)
   - Large headline with gradient text
   - Subheading and CTAs
   - Metrics cards grid
   - Decorative gradient orbs

2. What We Do Section
   - 3-column card grid
   - Service descriptions
   - Feature lists with icons

3. Why Choose Us Section
   - Zig-zag alternating layout
   - Left/Right positioned items
   - Icon + content cards

4. How It Works Section
   - 4-step timeline with circles
   - Connecting lines
   - Hover effects

5. Programs Section
   - Program cards with gradient accents
   - Feature lists
   - CTA buttons

6. Final CTA Section
   - Hero card style
   - Strong headline
   - Dual CTAs

### Programs Page
1. Header Section
   - Large title with gradient
   - Short subtitle

2. Campus Recruitment Training
   - Hero card with details
   - Duration/mode info
   - Feature checklist
   - CTA button

3. Technical Workshops
   - 3-column grid
   - Compact workshop cards
   - Icon + duration + description
   - Collective CTA

4. On-Campus Hackathons
   - Hero card
   - 4-column feature grid
   - Single CTA

5. Final CTA Section
   - Centered positioning
   - Dual actions

---

## 🎯 Design Principles

1. **Minimalism**: Reduced text, increased visual hierarchy
2. **Premium Feel**: Glassmorphism, smooth gradients, soft shadows
3. **Accessibility**: High contrast ratios, readable fonts
4. **Performance**: Smooth animations, optimized transitions
5. **Consistency**: Unified color palette, repeated components
6. **Modularity**: Reusable card systems, scalable layouts

---

## 🚀 Implementation Notes

### CSS Classes
- `.gradient-text` - Apply gradient text color
- `.glass-morphism` - Apply glassmorphic effect
- `.smooth-transition` - Apply standard transition
- `.hover-lift` - Apply lift on hover

### Tailwind Utilities Used
- Gradient utilities: `from-`, `to-`, `via-`
- Opacity: `/10`, `/20`, `/30`, `/50`, `/80`, `/90`
- Transforms: `translate`, `scale`, `-translate-y`
- Backdrop: `backdrop-blur`
- Borders: `border-[color]/opacity`

### Performance Optimizations
- Lazy loading animations (Intersection Observer)
- CSS-based animations (no JavaScript)
- Efficient gradient calculations
- Minimal re-renders

---

## 📦 File Structure

```
src/
├── pages/
│   ├── HomePage.tsx (redesigned)
│   ├── ProgramsPage.tsx (redesigned)
│   └── ...
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ...
├── styles/
│   └── animations.css (updated with new palette)
└── ...
```

---

## 🎨 Future Enhancements

1. Add SVG illustrations for each program section
2. Implement parallax scrolling for hero sections
3. Add video backgrounds for hero
4. Create interactive workshop selector
5. Add testimonials/case studies section
6. Implement dark mode toggle (theme switch)
7. Add more micro-interactions
8. Create PDF brochure generation

---

*Design System v1.0 - Dekhnix Technologies*
*Last Updated: 2024*
