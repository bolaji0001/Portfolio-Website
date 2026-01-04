# Portfolio Website

A modern, responsive portfolio website showcasing my web development projects and skills. Built with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Demo

[View Live Portfolio](https://bolaji0001.github.io/Portfolio-Website/)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects between sections
- **Interactive Elements**: 
  - Animated skill bars with progress indicators
  - Animated counter statistics
  - Smooth hover effects on project cards
  - Mobile-friendly hamburger menu
- **Dynamic Content**: Projects are dynamically rendered from JavaScript data
- **Contact Form**: Interactive contact form (ready for backend integration)
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom properties, Flexbox, CSS Grid, animations
- **JavaScript (ES6+)** - Vanilla JavaScript with modern features
  - DOM manipulation
  - Intersection Observer API for scroll animations
  - Event handling and form management

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   └── profile.jpeg    # Profile picture
└── README.md           # This file
```

## 🚀 Getting Started

Since this is a vanilla HTML/CSS/JS project, no build tools or package managers are required!

### Viewing the Portfolio

1. **Option 1: Open directly in browser**
   - Simply open `index.html` in your web browser

2. **Option 2: Use a local server (recommended)**
   - Use VS Code Live Server extension, or
   - Use Python: `python -m http.server 8000` then visit `http://localhost:8000`

### Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select the root folder (`/`)
5. Your site will be live at `https://yourusername.github.io/repository-name/`

## 📝 Customization

### Updating Projects

Edit the `projectsData` array in `script.js` to add, remove, or modify projects:

```javascript
const projectsData = [
    {
        title: "Project Name",
        description: "Project description",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://project-url.com",
        codeUrl: "https://github.com/username/repo",
        image: null // or image URL
    }
];
```

### Updating Personal Information

- **About Section**: Edit the HTML in `index.html` around line 98-112
- **Skills**: Modify skill bars in `index.html` (Skills section)
- **Contact Info**: Update contact details in `index.html` (Contact section)
- **Profile Picture**: Replace `images/profile.jpeg` with your own image

### Changing Colors

Edit CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... more variables */
}
```

## 📧 Contact

- **Email**: akinosikmobolaji@gmail.com
- **Phone**: +2347086286557
- **Location**: Lagos, Nigeria

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Akinosi Kehinde
