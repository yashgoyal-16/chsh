# CherryShot Fashion Gallery

A beautiful fashion showcase page where users can explore AI-generated fashion photography created by the CherryShot AI community.

## 🎨 Features

- **Responsive Masonry Grid** - Beautiful column-based layout that adapts to screen size
- **Lightbox Modal** - Click any image to view in full-screen modal
- **Smooth Animations** - Fade-in effects and hover transitions
- **Filter System** - Filter by categories (All, Models, Products, Lifestyle)
- **CherryShot Design System** - Matches the main site's aesthetic perfectly
- **Mobile Optimized** - Fully responsive from mobile to desktop

## 🚀 Quick Start

Simply open `index.html` in your browser:

```bash
# Navigate to the fashion folder
cd cherryshot/fashion

# Open in your default browser (Windows)
start index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 📁 Structure

```
fashion/
├── index.html              # Main gallery page
├── README.md              # This file
└── [22 fashion images]    # AI-generated fashion photos
```

## 🎯 Design System

### Colors
- **Primary**: `#dc2626` (Red-600)
- **Primary Dark**: `#b91c1c`
- **Primary Light**: `#fee2e2`
- **Background**: `#ffffff`
- **Foreground**: `#0f172a`

### Typography
- **Body**: Inter (300, 400, 500, 600)
- **Headings**: Playfair Display (serif)

### Components Used
- Navigation with sticky header
- Hero section with gradient text
- Stats display
- Filter buttons
- Masonry gallery grid
- Modal lightbox
- Footer

## 🎨 Customization

### Adding More Images
Add image filenames to the `images` array in the JavaScript section:

```javascript
const images = [
    'your-new-image.png',
    // ... existing images
];
```

### Changing Grid Columns
Modify the CSS `.gallery` columns property:

```css
.gallery {
    columns: 4; /* Desktop: 4 columns */
}
```

### Filter Categories
Add new filter buttons in the HTML and implement filter logic in JavaScript.

## 📱 Responsive Breakpoints

- **Desktop**: 4 columns (1200px+)
- **Tablet**: 3 columns (768px - 1199px)
- **Mobile**: 2 columns (481px - 767px)
- **Small Mobile**: 1 column (< 480px)

## ✨ Key Features Implemented

1. **Masonry Layout** - CSS columns for Pinterest-style grid
2. **Lazy Loading** - Images load as needed for performance
3. **Modal Viewer** - Full-screen image viewing with close button
4. **Keyboard Navigation** - Press ESC to close modal
5. **Smooth Animations** - Staggered fade-in for gallery items
6. **Hover Effects** - Scale and shadow effects on hover
7. **Gradient Overlays** - Show metadata on hover

## 🔧 Technical Details

- **Pure HTML/CSS/JS** - No frameworks required
- **Modern CSS** - Flexbox, Grid, CSS Variables
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Lazy loading, CSS animations
- **Accessibility** - Semantic HTML, keyboard navigation

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

- [ ] Add actual filter functionality
- [ ] Implement infinite scroll
- [ ] Add image metadata (creator, date, likes)
- [ ] Social sharing buttons
- [ ] Search functionality
- [ ] User profiles
- [ ] Like/favorite system
- [ ] Download buttons

## 🎉 Credits

Built with the CherryShot AI design system. All images generated using CherryShot AI technology.
