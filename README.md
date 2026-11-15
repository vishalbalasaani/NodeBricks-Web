# NodeBricks — Official Parent Company Website

The official corporate website for **NodeBricks**, a technology company developing digital products and software solutions that address real-world needs.

## Technology Stack

- **React 18** with **TypeScript**
- **Vite 6** for fast building and HMR
- **Tailwind CSS** with full light/dark design system
- **Lucide React** for clean, consistent iconography
- **Framer Motion** for subtle, refined animations

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be live at: `http://localhost:5173/`

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Contact Configuration

Official contact details and social media links can be updated directly in `src/components/Contact.tsx`:

```typescript
export const CONTACT_DETAILS = {
  phone1: '+91 85209 36604',
  phone1Raw: '+918520936604',
  phone2: '+91 90303 30384',
  phone2Raw: '+919030330384',
  instagramUrl: 'https://www.instagram.com/node.bricks?utm_source=qr&igsh=MWZxbXJydzBhdnB4dQ%3D%3D',
  instagramDisplay: 'instagram.com/node.bricks',
  instagramHandle: '@node.bricks',
};
```

---

## Adding New Products

To add upcoming products to the catalog, edit the `products` array in `src/components/Products.tsx`:

```typescript
const products: Product[] = [
  {
    id: 'school-platform',
    name: 'School Management & Parent Communication Platform',
    status: 'In Development',
    description: 'A digital platform designed to simplify school management and strengthen communication between schools and parents.',
    brandLabel: 'A NodeBricks Product',
  },
  // Add new products here
];
```

---

## Features

- **Glassy Navbar**: Backdrop-blur navigation with scroll-sensitive elevation, active section detection, and responsive mobile panel.
- **Brand Consistency**: Uses the official NodeBricks orange (`#FD5402`) and high-resolution antialiased logo mark across themes.
- **Intentional Light & Dark Modes**: Deep charcoal palette for dark mode, crisp clean surfaces for light mode, persistent across visits with zero flash.
- **Responsive Layout**: Engineered for desktop (1440px+), tablet (768px), and mobile (360px-430px) viewports.

