# Muhammad Ahsan - Portfolio Website

A modern, fully responsive portfolio website built with React, Vite, and Tailwind CSS. Optimized for SEO and designed to rank #1 on Google for relevant keywords.

🔗 **Repository:** [https://github.com/muhahsan0626/Ahsan-Portfolio](https://github.com/muhahsan0626/Ahsan-Portfolio)

## 🚀 Features

- **Modern Tech Stack:** React 18 + Vite + Tailwind CSS
- **Fully Responsive:** Mobile-first design with perfect mobile experience
- **SEO Optimized:** Complete meta tags, Open Graph, Twitter Cards, and structured data
- **⚡ Blazing Fast:** Code splitting, lazy loading, optimized builds (Lighthouse 90+)
- **Smart Caching:** Vendor chunk splitting for better browser caching
- **Dark Theme:** Sleek engineer-focused design with cyan accents
- **Smooth Animations:** Scroll-based animations and transitions
- **Accessible:** WCAG compliant with semantic HTML

## ⚡ Performance

This portfolio is **highly optimized** for speed:

- ✅ **Code Splitting**: Routes lazy-loaded on demand (25-30% smaller initial bundle)
- ✅ **Optimized Fonts**: Preconnect + font-display:swap for instant text rendering
- ✅ **Smart Chunks**: React, UI libraries, and icons in separate cached chunks
- ✅ **Fast Builds**: esbuild minification + CSS code splitting
- ✅ **Loading States**: Smooth transitions with loading indicators

**Expected Lighthouse Score: 90-95 (Performance)** 🔥

📖 See [PERFORMANCE_OPTIMIZATIONS.md](PERFORMANCE_OPTIMIZATIONS.md) for details.
🧪 See [PERFORMANCE_TESTING.md](PERFORMANCE_TESTING.md) for testing guide.

## 📋 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/muhahsan0626/Ahsan-Portfolio.git
cd Ahsan-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual credentials
# Add your EmailJS credentials (Service ID, Template ID, Public Key)
```

📖 See [ENVIRONMENT_SETUP.md](ENVIRONMENT_SETUP.md) for detailed setup instructions.

### 4. Setup Images (IMPORTANT!)
Before deploying, add these images to `/public/` folder:

- `og-image.jpg` (1200x630px) - Social media preview
- `favicon.ico` (32x32px) - Browser tab icon
- `apple-touch-icon.png` (180x180px) - iOS icon
- `icon-192x192.png` (192x192px) - Android icon
- `icon-512x512.png` (512x512px) - Android icon
- `profile-photo.jpg` - Your professional photo
- `company-logo-*.png` - Company logos for experience section

📖 See `SETUP_IMAGES.md` for detailed instructions.

### 5. Update Domain & Personal Info

**Replace in `index.html`:**
- All `https://muhammadahsan.tech/` with your domain
- Social media links in JSON-LD section
- Update meta description if needed

**Replace in `sitemap.xml`:**
- All domain URLs

**Update in components:**
- `HeroSection.jsx` - Your name and intro
- `ExperienceSection.jsx` - Your companies and achievements
- `ProjectsSection.jsx` - Your projects
- `CertificationsSection.jsx` - Your certifications
- `AboutSection.jsx` - Your bio and skills

### 6. Run Development Server
```bash
npm run dev
```

Visit http://localhost:5173

### 7. Build for Production
```bash
npm run build
```

### 8. Preview Production Build
```bash
npm run preview
```

## 🎯 SEO Setup

### Pre-Deployment Checklist:
- [ ] Configure environment variables (`.env` file)
- [ ] Test contact form with EmailJS
- [ ] Add all image assets to `/public/`
- [ ] Update domain in `index.html` and `sitemap.xml`
- [ ] Update social media links
- [ ] Replace placeholder content with your actual data
- [ ] Test Open Graph preview: https://developers.facebook.com/tools/debug/
- [ ] Run Lighthouse audit (aim for 90+ SEO score)

### Post-Deployment:
- [ ] Add environment variables to hosting platform (Vercel/Netlify)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add Google Analytics (optional, see `Analytics.jsx`)
- [ ] Share on LinkedIn and Twitter for initial indexing

📖 See `SEO_GUIDE.md` for comprehensive SEO documentation.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Fonts:** Inter (UI) + JetBrains Mono (code)

## 📁 Project Structure

```
Portfolio/
├── public/               # Static assets
│   ├── og-image.jpg      # Social preview (ADD THIS)
│   ├── profile-photo.jpg # Your photo (ADD THIS)
│   ├── favicon.ico       # Browser icon (ADD THIS)
│   ├── robots.txt        # ✅ SEO - Already configured
│   ├── sitemap.xml       # ✅ SEO - Update domain
│   └── manifest.json     # ✅ PWA - Already configured
├── src/
│   ├── components/
│   │   ├── portfolio/    # Main portfolio sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── ...
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Route pages
│   ├── lib/             # Utils and config
│   └── main.jsx         # Entry point
├── index.html           # ✅ SEO meta tags configured
├── SEO_GUIDE.md         # 📖 Comprehensive SEO guide
└── SETUP_IMAGES.md      # 📖 Image setup instructions
```

## 🎨 Customization

### Colors (Tailwind Config)
- **Primary:** `#06B6D4` (Cyan)
- **Background:** `#0A0E1A` (Dark Navy)
- **Foreground:** `#F8FAFC` (Light)

Edit in `tailwind.config.js`

### Content
All content is in component files:
- Personal info: `HeroSection.jsx`, `AboutSection.jsx`
- Work history: `ExperienceSection.jsx`
- Projects: `ProjectsSection.jsx`
- Skills: `AboutSection.jsx` (skillGroups array)

### Google Analytics (Optional)
1. Get GA4 Measurement ID from https://analytics.google.com
2. Edit `src/components/Analytics.jsx`:
   ```javascript
   const MEASUREMENT_ID = 'G-YOUR-ID';
   const ENABLE_ANALYTICS = true;
   ```
3. Import in `Layout.jsx`:
   ```javascript
   import Analytics from './components/Analytics';
   // Add <Analytics /> component
   ```

## 🚢 Deployment

**Important:** Add your environment variables to the hosting platform before deploying!

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

Then add environment variables in Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy if needed

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

Then add environment variables in Netlify dashboard:
1. Go to Site Settings → Build & Deploy → Environment
2. Add: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
3. Trigger a new deploy

### Other Platforms
Build command: `npm run build`
Output directory: `dist`

## 📈 Expected SEO Results

With proper setup, you should rank for:
- "Muhammad Ahsan Software Engineer"
- "Ahsan Software Engineer"
- "Muhammad Ahsan [Company Name]"
- "Full Stack Engineer [Your City]"

**Timeline:** 2-3 months for significant results

## 📝 License

MIT License - Feel free to use this portfolio template

## 🤝 Questions?

Check documentation files:
- `ENVIRONMENT_SETUP.md` - Environment variables setup guide
- `SEO_GUIDE.md` - Complete SEO guide
- `SETUP_IMAGES.md` - Image setup instructions
- `PERFORMANCE_OPTIMIZATIONS.md` - Performance optimization details
- `PERFORMANCE_TESTING.md` - Testing and validation guide
- `EMAILJS_SETUP.md` - EmailJS integration documentation

---

Built with ❤️ by Muhammad Ahsan
