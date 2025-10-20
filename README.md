# Game Development Portfolio

A professional online portfolio showcasing game development projects, with a focus on Unity development, animation, and community projects.

## 🎮 About

This portfolio website showcases my work as a game developer, featuring:
- Unity game development projects
- Character animations and animation controllers
- Community-driven game projects
- Technical skills and expertise

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Filtering**: Filter projects by category (Unity, Animation, Community)
- **Interactive Modals**: Click on any project to view detailed information and image galleries
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Easy Maintenance**: Simple data structure for adding and updating projects

## 📁 Project Structure

```
My-page/
├── index.html          # Main HTML file with portfolio structure
├── styles.css          # Complete styling with modern design
├── portfolio.js        # JavaScript for functionality and project data
├── README.md          # This file
└── Portfolio/         # All portfolio assets and images
    ├── Unity loverboy animation.gif
    ├── Unity loverboy animationController.gif
    └── Community project ninja time/
        ├── Community project ninja time.gif
        └── Ninja Cat GDC/
            └── [Game assets and sprites]
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks needed - pure JS for performance
- **Responsive Design**: Mobile-first approach with media queries

## 📝 How to Add New Projects

Edit the `projects` array in `portfolio.js`:

```javascript
{
    id: 4, // Unique ID
    title: "Your Project Title",
    category: ["unity", "animation"], // Categories for filtering
    thumbnail: "Portfolio/your-thumbnail.gif",
    images: [
        "Portfolio/image1.png",
        "Portfolio/image2.png"
    ],
    description: "Detailed project description...",
    technologies: ["Unity", "C#", "Animation"],
    featured: true
}
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Updating Personal Information
- Edit `index.html` to update name, subtitle, and contact links
- Modify the skills section to match your expertise
- Update the footer copyright year and information

## 🌐 Deployment

This is a static website that can be deployed to:
- **GitHub Pages**: Perfect for personal portfolios
- **Netlify**: Drag and drop deployment
- **Vercel**: Quick deployment with Git integration
- **Any static hosting service**

### GitHub Pages Setup
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as the source
4. Your site will be live at `https://yourusername.github.io/repository-name`

## 📧 Contact

Update the contact section in `index.html` with your information:
- Email
- GitHub profile
- LinkedIn profile
- Portfolio website

## 📄 License

This project is open source and available for personal use.

## 🎯 Future Enhancements

Potential improvements:
- Add blog section for dev logs
- Implement project search functionality
- Add video player support for game trailers
- Include downloadable resume/CV
- Add analytics to track portfolio views

---

**Created by Oskar Larsen** | Game Development hobbyist
