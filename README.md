# CherryShot Fashion Gallery 🍒

A beautiful, responsive fashion showcase gallery built with the CherryShot AI design system. Explore stunning AI-generated fashion photography in a Pinterest-style masonry layout.

![CherryShot Fashion Gallery](https://img.shields.io/badge/CherryShot-Fashion%20Gallery-dc2626?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **CherryShot Design System** - Matches the official cherryshot.ai aesthetic
- 📱 **Fully Responsive** - Beautiful on all devices (4 columns → 1 column)
- 🖼️ **Lightbox Modal** - Full-screen image viewing
- 🎯 **Filter System** - Filter by categories (All, Models, Products, Lifestyle)
- ⚡ **Performance Optimized** - Lazy loading, smooth animations
- 🎭 **Masonry Grid** - Pinterest-style column layout
- ✨ **Smooth Animations** - Fade-in effects and hover transitions

## 🚀 Quick Start

### View Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cherryshot.git

# Navigate to the fashion folder
cd cherryshot/fashion

# Open in browser
start index.html
```

Or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# Then visit: http://localhost:8000
```

## 📁 Project Structure

```
cherryshot/
├── fashion/
│   ├── index.html              # Main gallery page
│   ├── README.md              # Fashion page documentation
│   └── *.png                  # 22 AI-generated fashion images
├── .gitignore
└── README.md                  # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#dc2626` (Red-600)
- **Primary Dark**: `#b91c1c`
- **Background**: `#ffffff`
- **Foreground**: `#0f172a`

### Typography
- **Body Font**: Inter (300, 400, 500, 600)
- **Display Font**: Playfair Display (serif)

### Components
- Sticky navigation with backdrop blur
- Gradient hero section
- Stats display
- Filter buttons
- Masonry gallery grid
- Modal lightbox
- Professional footer

## 🎯 Key Features

### Responsive Masonry Layout
```css
Desktop (1200px+):  4 columns
Tablet (768-1199):  3 columns
Mobile (481-767):   2 columns
Small (<480px):     1 column
```

### Interactive Elements
- **Hover Effects**: Scale and shadow transitions
- **Click to Expand**: Full-screen modal viewer
- **Keyboard Navigation**: ESC to close modal
- **Smooth Animations**: Staggered fade-in effects

## 🛠️ Technologies

- **Pure HTML/CSS/JS** - No frameworks required
- **Modern CSS** - Flexbox, Grid, CSS Variables, Columns
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Inter & Playfair Display

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Add More Images

Edit the `images` array in `fashion/index.html`:

```javascript
const images = [
    'your-new-image.png',
    // ... existing images
];
```

### Change Grid Columns

Modify the CSS in `fashion/index.html`:

```css
.gallery {
    columns: 4; /* Change number of columns */
}
```

### Customize Colors

Update CSS variables:

```css
:root {
    --primary: #dc2626;
    --primary-dark: #b91c1c;
    /* ... other colors */
}
```

## 📸 Gallery Features

- **22 AI-Generated Images** - Professional fashion photography
- **Lazy Loading** - Images load as needed
- **Metadata Overlays** - Show details on hover
- **Full-Screen Viewing** - Click any image to expand
- **Responsive Grid** - Adapts to screen size

## 🔮 Future Enhancements

- [ ] Implement actual filter functionality
- [ ] Add infinite scroll
- [ ] User authentication
- [ ] Like/favorite system
- [ ] Social sharing buttons
- [ ] Download functionality
- [ ] Search feature
- [ ] User profiles

## 📝 License

This project showcases the CherryShot AI design system. All images are AI-generated using CherryShot AI technology.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback about CherryShot AI, visit [cherryshot.ai](https://cherryshot.ai)

---

**Built with ❤️ using the CherryShot AI Design System**

![CherryShot](https://img.shields.io/badge/Powered%20by-CherryShot%20AI-dc2626?style=flat-square)
