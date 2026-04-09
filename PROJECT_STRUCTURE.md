# AI Portal - Project Structure & Documentation

## ✅ Project Complete

Your AI Portal project has been set up with a professional component-based architecture following design specifications from your images.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          → Navigation component with KALSOFT branding
│   ├── Hero.jsx            → Hero section with CTA buttons
│   ├── Footer.jsx          → Footer with security info & uptime metrics
│   └── index.js            → Component exports
├── pages/
│   └── Home.jsx            → Main landing page (combines Header, Hero, Footer)
├── theme.css               → 🎨 GLOBAL THEME SOURCE OF TRUTH
├── index.css               → Base styles + Tailwind imports
├── App.jsx                 → React Router setup
└── main.jsx                → Entry point
```

---

## 🎨 Theme System (theme.css)

A centralized CSS file containing all design tokens:

### Colors
- **Primary Red**: `#DC1F26` (buttons, accents)
- **Primary Dark**: `#B81B20` (hover states)
- **Secondary Pink**: `#F5DCDC` (light backgrounds)
- **Secondary Border**: `#E8A5A5` (border colors)
- **Dark Text**: `#1A1A1A` (main text)

### CSS Variables
All colors, spacing, typography, and utilities are defined as CSS variables:

```css
--color-primary: #DC1F26;
--spacing-lg: 1.5rem;
--font-size-xl: 1.25rem;
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

### Utility Classes
Pre-built classes for consistent styling:
```css
.btn-primary        → Red filled button
.btn-outline        → Red outlined button
.container-rounded  → Pink-bordered container
.heading-xl         → Large heading (5xl)
.text-primary       → Primary color text
```

---

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS
- **PostCSS** - CSS processing
- **Vite** - Build tool

---

## 🎯 Components

### Header.jsx
- Sticky navigation bar
- KALSOFT logo
- Navigation links (Home, Agent1-4)
- Responsive design

### Hero.jsx
- Large headline: "Intelligent Agents for Every Department"
- Subtitle text
- Two CTA buttons:
  - "Explore AI Agents" (filled red)
  - "How it Works" (outlined)
- Rounded pink-bordered container
- Arrow icons on buttons

### Footer.jsx
- **Security Card** (dark background)
  - "Enterprise-grade security" messaging
  - AGILITY CLOUD branding
- **Uptime Card** (red background)
  - "99.9% EXECUTION UPTIME"
  - High-concurrency architecture info
- **Bottom Footer**
  - KALSOFT branding
  - Tech stack display
  - Partner logos (FastAPI, MongoDB, Groq, Google Cloud)
  - Copyright text

### Home.jsx (Page)
Combines all components into a full landing page with proper flex layout

### App.jsx
- BrowserRouter setup
- Routes for "/" (Home) and "/agents/:id"
- Theme CSS imported globally

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm preview
```

The app runs on `http://localhost:5174/`

---

## 📱 Responsive Design

All components include responsive utilities:
- Mobile-first approach
- Breakpoints for tablets/desktop
- Flexible grid (`grid-responsive`)
- Responsive typography

---

## 🎨 Using the Theme

### In Components (CSS Classes)
```jsx
<div className="btn-primary">Click Me</div>
<div className="text-primary heading-xl">Title</div>
<div className="container-rounded bg-secondary-light">Content</div>
```

### CSS Variables
```css
.custom-element {
  background-color: var(--color-primary);
  padding: var(--spacing-lg);
  font-size: var(--font-size-xl);
  transition: all var(--transition-base);
}
```

### Tailwind Classes
```jsx
<div className="text-5xl font-bold text-red-600">
  Using Tailwind with theme values
</div>
```

---

## 📝 Adding New Pages/Routes

1. Create a new file in `src/pages/`
2. Import Header and Footer if needed
3. Add the route in `App.jsx`:

```jsx
<Route path="/your-page" element={<YourPage />} />
```

---

## 🔄 Customizing Theme

Edit `src/theme.css`:
- Change colors in `:root` section
- Modify spacing/font sizes
- Add new utility classes
- All components automatically use updated values

---

## 📦 Installed Dependencies

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-router-dom": "^latest",
  "tailwindcss": "^4.2.2",
  "postcss": "^latest",
  "autoprefixer": "^latest",
  "vite": "^8.0.4"
}
```

---

## ✨ Features

✅ Global theme system (single source of truth)
✅ Component-based architecture
✅ React Router integration
✅ Tailwind CSS with custom theme values
✅ Responsive design
✅ Consistent button styles
✅ Professional footer with metrics
✅ Accessible navigation

---

## 🎯 Next Steps

1. Customize theme colors in `theme.css` as needed
2. Create Agent detail pages in `src/pages/`
3. Add more components (Cards, Sections, etc.)
4. Deploy to production

---

**Happy coding! 🚀**
