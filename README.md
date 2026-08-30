# 🛒 Verda — Online Grocery & Fresh Food Marketplace

A modern, full-stack e-commerce frontend for a fresh grocery marketplace — designed to let users browse daily-fresh produce, explore product categories, view rich product details, and authenticate securely. Skip the supermarket queue and get farm-fresh vegetables, meat, fruits, and fish & seafood delivered same-day.

The platform features secure JWT-based authentication, category-driven product browsing, dynamic product detail pages with interactive image galleries, real-time form validation with graceful API error handling (including rate-limit guard rails), and a clean, earthy, responsive UI built with Next.js and Tailwind CSS.

---

## 🚀 Live Project

🔗 **Live Site:** [View Live Site](https://verda.vercel.app)

### Source Code

- **GitHub Repository:** [View Project Repo](https://github.com/HSBHasib/Zabsys-E-Commerce)

---

# 🛠️ Technologies Used

## Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript (Strict Type Checking)
- Tailwind CSS v4
- HeroUI (UI Component Library)
- Framer Motion (Advanced Animations)
- React Hook Form (Form State & Validation)
- React Hot Toast (Notifications)
- React Icons
- cookies-next (Client-Side Cookie Management)

## Backend (API)
- Node.js
- Express.js
- MongoDB (RESTful API)

## Authentication & Security
- JWT Token-Based Authentication
- Secure Cookie Session Storage (`auth_token`)
- API Key (`x-api-key`) Protected Endpoints
- Client-Side Form Validation & Guard Rails
- Rate-Limit (429) Error Handling

## Database
- MongoDB (Collection-based product catalog)

---

# ✨ Core Features

## 🔐 Authentication & Authorization
- **Secure Register & Login:** New users can create an account, and returning users can log in with validated credentials.
- **JWT Session Management:** Auth token is persisted in a cookie (`auth_token`) with a configurable expiry, while user profile data is synced to `localStorage`.
- **Smart Auth Sync:** A custom `useAuth` hook listens to storage events so the UI (navbar user chip, logout button) stays in sync across tabs/logins without a page reload.
- **Reusable Logout:** One-call logout clears storage + cookies and redirects with a success toast.

## 🛍️ Category-Driven Product Browsing
- **Dynamic Category Pages:** Dedicated collections for **Vegetables, Meat, Fruits**, and **Fish & Seafood**, each with live item counts and responsive product grids.
- **Smart Layout Grid:** Responsive 1 → 2 → 3 → 4 column grids that adapt seamlessly from mobile to desktop.
- **Earthy Brand Identity:** A cohesive, fresh-soil inspired palette (`#1D331C`, `#EEEFE0`, `#D4DDD0`) with clean cards, tag badges, and hover-scale image effects.

## 🔎 Interactive Search & Navigation
- **Category Dropdown:** A search bar with an integrated category selector (All / Vegetables / Fruits / Meat / Fish & Seafood) that routes directly to the matching collection page.
- **Mobile-First Navigation:** A sleek slide-out mobile drawer menu, sticky responsive header, and a branded search bar built with HeroUI components.

## 🖼️ Rich Product Details Experience
- **Interactive Product Gallery:** Main image with a clickable thumbnail strip to switch between product shots, using Framer Motion entrance animations.
- **Quantity Controls:** Increment/decrement stepper with floor-guard at 1.
- **Live Stock Status:** Animated pulse indicator showing real-time availability (`In stock — N Available` / `Out of stock`).
- **Trust Feature Cards:** Same-day delivery, chilled cold-chain packed, and sourced-this-morning trust badges.

## 🛡️ Graceful Error Handling & Guard Rails
- **Rate Limit Protection:** Every API call catches `429` responses and shows a friendly "Too many attempts" message instead of crashing.
- **Robust API Layer:** A typed `serverFetch` and auth `handleResponse` wrapper centralize error parsing (404 endpoints, non-JSON responses, network errors) into clear, user-facing messages.
- **Custom Error & 404 Pages:** Dedicated error boundary and not-found pages for a polished failure experience.
- **Empty State UI:** Collections with no items render a clear "No items available" placeholder instead of a blank grid.

## 📱 Complete Page Coverage
- Landing page (Hero + all product sections), category pages, product detail pages
- Login, Sign Up, custom 404, and custom error page
- Sticky navbar with auth state and slide-out mobile menu
- Full footer with contact links, social connectors, and payment method badges

---

# 📦 Major Dependencies

### Frontend
- next
- react
- react-dom
- typescript
- tailwindcss
- @heroui/react
- @heroui/styles
- framer-motion
- react-hook-form
- react-hot-toast
- react-icons
- cookies-next

---

# 🚀 Run Locally

## 1. Clone the repository
```bash
git clone https://github.com/HSBHasib/Zabsys-E-Commerce
cd zabsys-e-commerce-frontend
```

## 2. Install dependencies
```bash
npm install
```

## 3. Set up environment variables
Create a `.env` file in the root with your API configuration:
```env
BASE_URL=your_backend_api_base_url
NEXT_PUBLIC_API_URL=your_backend_auth_url
NEXT_PUBLIC_RESTFUL_API_KEY=your_api_key
```

## 4. Run the development server
```bash
npm run dev
```

## 5. Open the application
```bash
http://localhost:3000
```

---

# 🎯 Learning Outcomes

During this project, I pushed my technical limits and gained practical experience with real world troubleshooting:

- **Next.js 16 + React 19 Upgrades:** Worked through the latest App Router conventions, dynamic route params made async, and Next 16 TypeScript plugin integration — including an `await params` pattern for server components.
- **Strict TypeScript Architecture:** Enforced `strict` mode end-to-end with dedicated type modules (`types/product.ts`, `types/auth.ts`, `types/user.ts`), keeping API payloads and UI props fully typed and bug free.
- **Centralized API Error Handling:** Learned to build reusable, typed fetch wrappers (`serverFetch`) and a shared `handleResponse` utility that normalizes rate limits (`429`), missing endpoints (`404`), non-JSON responses, and network failures into clean, user-facing toast errors.
- **Robust Form Validation with React Hook Form:** Mastered schema-free validation rules (required fields, email regex, min-length passwords) with inline field-level error messages and password visibility toggles.
- **Auth State Across Tabs & Sessions:** Used `cookies-next` for token storage plus `localStorage` + a custom `useAuth` hook with browser storage events to keep auth state consistent and reactive across multiple tabs.
- **Dynamic Routing & Detail Pages:** Built clean pattern for category → product breadcrumbs with nested dynamic routes while preserving reusable detail-page components.
- **Component-Driven UI:** Got much more comfortable splitting pages into small, reusable, self-contained components (Navbar, Hero, Footer, ProductCard, ProductGallery, ProductInfo) with consistent earthy design tokens.
- **Resilience by Design:** Added graceful empty states, custom error/404 pages, and defensive fallback data so the storefront never looks broken even when the API returns nothing.

---

## 👨‍💻 Developed By

**Hasibur Rahman**
- Mern Stack Developer & Aspiring Software Engineer
- Gazipur, Dhaka, Bangladesh
- GitHub: [@HSBHasib](https://github.com/HSBHasib)
- Portfolio: [hasib-portfolio-silk.vercel.app](https://hasib-portfolio-silk.vercel.app)
