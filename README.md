# Portfolio Website

A modern, responsive portfolio website showcasing my web development projects and skills. Built with React and Vite.

## Live Demo

[View Live Portfolio](https://bolaji0001.github.io/Portfolio-Website/)

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll between sections
- **Interactive Elements**:
  - Animated skill bars with progress indicators
  - Animated counter statistics
  - Smooth hover effects on project cards
  - Mobile-friendly hamburger menu
- **Component-based**: Sections and data live in React components
- **Contact Form**: Interactive contact form (ready for backend integration)
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## Technologies Used

- **React 18** - Component-based UI
- **Vite** - Dev server and production build
- **CSS3** - Custom properties, Flexbox, CSS Grid, animations

## Project Structure

```
portfolio/
├── public/
│   └── images/
│       └── profile.jpeg
├── src/
│   ├── components/     # Page sections and UI pieces
│   ├── data/           # Projects and site content
│   ├── hooks/          # Shared React hooks
│   ├── utils/          # Helpers (smooth scroll)
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173/Portfolio-Website/`).

### Production build

```bash
npm run build
npm run preview
```

The build output is in `dist/`.

## Customization

### Updating Projects

Edit `src/data/projects.js`:

```javascript
{
  title: "Project Name",
  description: "Project description",
  tags: ["HTML5", "CSS3", "JavaScript"],
  liveUrl: "https://project-url.com",
  codeUrl: "https://github.com/username/repo",
  image: null // or image URL
}
```

### Updating Personal Information

Edit `src/data/site.js` for name, contact details, skills, and stats. Replace `public/images/profile.jpeg` with your own photo.

### Changing Colors

Edit CSS variables at the top of `src/styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
}
```

## Deploying to GitHub Pages

`vite.config.js` sets `base` to `/Portfolio-Website/` so assets resolve at
[https://bolaji0001.github.io/Portfolio-Website/](https://bolaji0001.github.io/Portfolio-Website/).

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and deploys `dist/`.

If this is the first deploy, set the Pages source once:

1. Open the repo **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**

You can also run the workflow by hand from the **Actions** tab (**Deploy to GitHub Pages** → **Run workflow**).

## Contact

- **Email**: akinosikmobolaji@gmail.com
- **Phone**: +2347086286557
- **Location**: Lagos, Nigeria

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with React by Akinosi Kehinde
