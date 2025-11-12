# 🌟 Personal Portfolio Website

A modern, responsive, and visually stunning portfolio website built with React and Next.js, featuring smooth animations, interactive elements, and a beautiful gradient design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=for-the-badge&logo=next.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📸 Preview

![Portfolio Screenshot](your-screenshot-url-here)

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful frosted glass effect cards with backdrop blur
- **Gradient Backgrounds** - Dynamic purple-pink-blue gradient theme
- **Smooth Animations** - Fade-in, slide-up, and bounce animations for engaging user experience
- **Interactive Cursor** - Custom glow effect that follows mouse movement
- **Floating Orbs** - Animated gradient orbs in the background

### 🚀 Functionality
- **Responsive Navigation** - Fixed navbar with scroll effects and mobile hamburger menu
- **Resume Dropdown** - Easy access to both Full Stack and ML resumes from navbar
- **Smooth Scrolling** - Section navigation with smooth scroll behavior
- **Active Section Tracking** - Navbar highlights current section while scrolling
- **Social Links** - Quick access to GitHub, LinkedIn, and Email
- **Project Showcase** - Featured projects with tech stack icons and GitHub links
- **Achievements Section** - Display of accomplishments and recognitions

### 📱 Fully Responsive
- Mobile-first design approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interface for mobile devices
- Collapsible mobile menu

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.x
- **Framework:** Next.js 14.x
- **Styling:** CSS-in-JS (JSX Styles)
- **Icons:** Lucide React
- **Fonts:** System Font Stack (Apple/SF Pro, Segoe UI, Roboto)
- **Tech Icons:** DevIcon CDN

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/PVK-Nandan/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Add your assets**
- Place your profile image as `/public/myimage.jpg`
- Add your resumes as:
  - `/public/Nandan fullstack CV.pdf`
  - `/public/PVKNandanCVFinal.pdf`

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization

### Personal Information

Edit the following in the `Portfolio` component:
```javascript
// Update your name
<div className="logo">Your Name</div>

// Update your details
<h1 className="hero-title">
  Hi, I'm <span className="gradient-text">Your Full Name</span>
</h1>

// Update social links
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>
```

### Projects

Add or modify projects in the `projects` array:
```javascript
const projects = [
  {
    title: "Your Project Name",
    tech: ["React", "Node.js", "MongoDB"],
    icons: [techLogos.react, techLogos.nodejs, techLogos.mongodb],
    description: "Project description here",
    link: "https://github.com/yourusername/project",
    date: "Month Year"
  }
];
```

### Skills

Update the `skills` object with your technologies:
```javascript
const skills = {
  languages: [
    { name: "JavaScript", icon: techLogos.javascript },
    // Add more languages
  ],
  frameworks: [
    { name: "React.js", icon: techLogos.react },
    // Add more frameworks
  ],
  tools: [
    { name: "Git", icon: techLogos.git },
    // Add more tools
  ]
};
```

### Achievements

Modify the `achievements` array:
```javascript
const achievements = [
  {
    title: "Your Achievement",
    description: "Description of the achievement",
    date: "Month Year"
  }
];
```

### Color Scheme

The portfolio uses a purple-pink-blue gradient theme. To customize colors, update these CSS variables:
```css
/* Primary gradient */
background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);

/* Background gradient */
background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
```

## 📁 Project Structure
```
portfolio/
├── public/
│   ├── myimage.jpg                    # Profile photo
│   ├── Nandan fullstack CV.pdf        # Full Stack Resume
│   └── PVKNandanCVFinal.pdf          # ML Resume
├── components/
│   └── Portfolio.jsx                  # Main portfolio component
├── pages/
│   └── index.js                       # Home page
├── styles/
│   └── globals.css                    # Global styles
├── package.json
└── README.md
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy!

### Deploy on Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Deploy on GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Sections Overview

### 🏠 Home
- Eye-catching hero section with profile image
- Animated gradient text
- Social media links
- Smooth scroll indicator

### 👤 About
- Education details
- Contact information
- Technical skills organized by category

### 💼 Projects
- Featured projects with descriptions
- Technology stack visualization
- Direct links to GitHub repositories
- Project dates

### 🏆 Achievements
- Competition rankings
- Academic recognitions
- Certifications
- Hackathon wins

### 📧 Contact
- Direct email link
- LinkedIn connection
- Clear call-to-action

## 🔧 Performance Optimizations

- **Lazy Loading** - Images and components load on demand
- **CSS-in-JS** - Scoped styles prevent conflicts
- **Optimized Animations** - GPU-accelerated transforms
- **Minimal Dependencies** - Fast load times
- **Responsive Images** - Properly sized for all devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/PVK-Nandan/portfolio/issues).

## 👨‍💻 Author

**Pakki Venkata Kesari Nandan**

- GitHub: [@PVK-Nandan](https://github.com/PVK-Nandan)
- LinkedIn: [Nandan Pakki V K](https://www.linkedin.com/in/nandan-pakki-v-k-01639b253/)
- Email: pakkinandan09@gmail.com

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- Tech icons from [DevIcon](https://devicon.dev/)
- Inspiration from modern portfolio designs
- React and Next.js communities

## 📊 Stats

![GitHub Stars](https://img.shields.io/github/stars/PVK-Nandan/portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/PVK-Nandan/portfolio?style=social)

---

<p align="center">Made with ❤️ by Nandan</p>
<p align="center">⭐ Star this repo if you like it!</p>
