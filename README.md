# 🌟 Maduranga Prabhath - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS, featuring stunning animations and an interactive 3D globe.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern UI/UX**: Clean, professional design with smooth animations
- **🌍 Interactive 3D Globe**: Three.js powered globe showing global connections
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **⚡ Performance Optimized**: Built with Next.js 15 and Turbopack for blazing-fast performance
- **🎭 Smooth Animations**: Framer Motion powered animations throughout
- **🎯 Interactive Components**: Engaging hover effects and transitions
- **📧 Contact Integration**: Easy-to-use contact button with Gmail integration
- **🔗 Social Media Links**: Connected to GitHub, Twitter, and LinkedIn
- **🚀 Project Showcase**: Featured projects with live links and tech stacks

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.5.4 with App Router
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.18
- **Animations**: Framer Motion 12.23.24

### 3D Graphics

- **Three.js**: 0.180.0
- **React Three Fiber**: 9.4.0
- **React Three Drei**: 10.7.6
- **Three Globe**: 2.44.1

### Additional Libraries

- **Icons**: React Icons, Tabler Icons
- **Animations**: Lottie React
- **Theme**: Next Themes (Dark mode support)
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/madurangaPrabhath/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

4. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── BentoGrid.tsx
│   │   ├── TextGenerateEffect.tsx
│   │   ├── globe.tsx
│   │   ├── GridGlobe.tsx
│   │   └── MagicButton.tsx
│   ├── Approach.tsx      # Approach section
│   ├── Footer.tsx        # Footer component
│   ├── Grid.tsx          # Grid layout
│   ├── Hero.tsx          # Hero section
│   ├── Projects.tsx      # Projects showcase
│   └── Skills.tsx        # Skills section
├── data/                 # Data files
│   ├── index.ts         # Main data
│   ├── globe.json       # Globe geo data
│   └── confetti.json    # Lottie animation
├── lib/                  # Utility functions
│   └── utils.ts
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## 🎨 Key Sections

### 1. Hero Section

- Animated text effects with blur transitions
- Spotlight background effects
- Call-to-action button

### 2. About Section (BentoGrid)

- Interactive grid layout
- 3D Globe showing global reach
- Tech stack showcase
- Email contact with copy functionality

### 3. Projects Section

- Featured project cards with 3D pin effect
- Clickable cards linking to GitHub repositories
- Tech stack icons for each project
- Hover animations

### 4. Skills Section

- Technology icons display
- Responsive grid layout
- Visual representation of technical expertise

### 5. Approach Section

- Three-phase development process
- Canvas reveal animations
- Interactive cards with hover effects

### 6. Footer

- Social media links (GitHub, Twitter, LinkedIn)
- Gmail integration for direct contact
- Copyright information

## 🎯 Featured Projects

1. **TopRoof Solutions** - E-commerce platform (React.js, Spring Boot, MySQL)
2. **Portfolio Website** - This website (Next.js, TypeScript, Three.js)
3. **Currency Converter** - MERN stack application
4. **StudentCare Mobile App** - React Native mobile application

## 🌐 Deployment

This project can be easily deployed to:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Maduranga Prabhath**

- GitHub: [@madurangaPrabhath](https://github.com/madurangaPrabhath)

## 📞 Contact

Feel free to reach out for collaborations or just a friendly chat!

- 💼 LinkedIn: [Maduranga Prabhath](https://linkedin.com/in/madurangaPrabhath)
- 🐦 Twitter: [@madurangaPrabhath](https://twitter.com/madurangaPrabhath)
- 💻 GitHub: [@madurangaPrabhath](https://github.com/madurangaPrabhath)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

⭐ **Star this repo if you like it!** ⭐

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
