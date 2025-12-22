# Core Aviator Training Website

A professional, aviation-themed website for Core Aviator Training, featuring modern design, smooth animations, and dark/light mode functionality.

## 🎨 Brand Colors
- Primary Blue: `#0FABD7`
- Dark Blue: `#037CC0`
- Accent Blue: `#0891B2`

## 📋 Website Structure

### Pages Included:
1. **index.html** - Homepage with hero section, services overview, and CTA
2. **PPL.html** - Private Pilot License training information
3. **contact.html** - Contact form with Google Script integration
4. **discovery-flight.html** - Discovery flight information (conversion-focused)
5. **privacy-policy.html** - Standard aviation training privacy policy
6. **blog.html** - Blog listing page
7. **roadmap_private_pilot_license.html** - Blog post: 4-Step Roadmap to Private Pilot License Success
8. **weather-decision-making.html** - Blog post: Weather Decision-Making Framework
9. **instrument-scan-basics.html** - Blog post: Instrument Scan Basics

### Key Files:
- **css/main.css** - Complete stylesheet with animations, responsive design, and dark mode
- **js/main.js** - JavaScript for navigation, dark mode toggle, form handling, and animations

---

## 🖼️ Required Image Assets

### Logo
**Filename:** `assets/logo.png`
- **Recommended Size:** 200px × 200px (or maintain aspect ratio)
- **Format:** PNG with transparent background
- **Usage:** Header navigation logo
- **Notes:** Should be clear and readable at small sizes

---

### Favicon Files
**Location:** `assets/` folder

1. **favicon-32x32.png**
   - Size: 32px × 32px
   - Format: PNG
   - Usage: Standard browser favicon

2. **favicon-16x16.png**
   - Size: 16px × 16px
   - Format: PNG
   - Usage: Small browser favicon

3. **apple-touch-icon.png**
   - Size: 180px × 180px
   - Format: PNG
   - Usage: iOS home screen icon

**Design Notes:** 
- Use your Core Aviator Training logo
- Ensure good contrast for both light and dark backgrounds
- Keep design simple for smaller sizes

---

### Contact Information Images
**Location:** `assets/` folder

These images replace text-based email and phone numbers in the footer for spam prevention.

#### 1. Email Contact Image
**Filename:** `assets/email-contact.png`
- **Recommended Size:** 250px width × 40-50px height
- **Content:** "cfi@coreaviatortraining.com"
- **Format:** PNG with transparent background
- **Font Style:** 
  - Font: Arial, Helvetica, or similar clean sans-serif
  - Size: 16-18px equivalent
  - Color: Should match website text color (adjustable for dark mode)
  - Consider creating two versions: one for light mode, one for dark mode
- **Alternative:** Create with white text on transparent background for better compatibility with both themes

#### 2. Phone Contact Image
**Filename:** `assets/phone-contact.png`
- **Recommended Size:** 250px width × 40-50px height
- **Content:** "(239) 350-7124"
- **Format:** PNG with transparent background
- **Font Style:** Same as email contact image for consistency
- **Alternative:** Include phone icon (☎) before number for visual interest

**How to Create These Images:**
1. Use any image editing software (Photoshop, GIMP, Canva, etc.)
2. Create a canvas with transparent background
3. Add text with specified font and size
4. Export as PNG with transparency
5. Test on both light and dark backgrounds

---

## 🎯 Features Implemented

### 1. Aviation-Themed Design
- ✅ Propeller spin animations (CSS keyframes)
- ✅ Floating cloud animations
- ✅ Airflow line animations
- ✅ Smooth fade-in effects for content
- ✅ Brand colors (#0FABD7 and #037CC0) throughout
- ✅ Professional, safety-focused aesthetic

### 2. Dark/Light Mode Toggle
- ✅ Functional toggle button in header
- ✅ Smooth transitions between modes
- ✅ Persistent user preference (localStorage)
- ✅ Automatically themed components

### 3. Mobile-Responsive Navigation
- ✅ Hamburger menu for mobile devices
- ✅ Smooth slide-in menu animation
- ✅ Links to all pages
- ✅ "Leave a Review" button with Google Business link

### 4. Preserved Functionality
- ✅ Google Script contact form integration
- ✅ Form action: `https://script.google.com/macros/s/AKfycbygS62FgXMks1YpGqHxYwmPDjVTF0uBcdSOtQTWwGGHLrdz6KxIrJu6OmLerJwsjKQSpQ/exec`
- ✅ "Leave a Review" button linking to Google Business
- ✅ All existing content preserved

### 5. Enhanced Footer
- ✅ Facebook icon with link: `facebook.com/coreaviatortraining`
- ✅ Instagram icon with link: `instagram.com/coreaviatortraining`
- ✅ Placeholder images for email and phone contact
- ✅ Business hours display
- ✅ Quick navigation links
- ✅ Privacy policy link

### 6. Animations & Interactions
- ✅ Fade-in animations on scroll
- ✅ Hover effects on all buttons and cards
- ✅ Smooth page transitions
- ✅ Animated navigation underlines
- ✅ Interactive social media icons
- ✅ Back-to-top button

---

## 🚀 Deployment Instructions for GitHub Pages

### Step 1: Prepare Your Repository
1. Create a new repository on GitHub (e.g., `core-aviator-training-website`)
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/core-aviator-training-website.git
   ```

### Step 2: Add Your Images
1. Create the `assets/` folder in your repository
2. Add the required images:
   - `logo.png`
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png`
   - `email-contact.png`
   - `phone-contact.png`

### Step 3: Copy Website Files
1. Copy all HTML files to the repository root
2. Copy the `css/` folder with `main.css`
3. Copy the `js/` folder with `main.js`
4. Ensure `assets/` folder contains all required images

### Step 4: Initialize Git and Push
```bash
cd core-aviator-training-website
git add .
git commit -m "Initial commit - Core Aviator Training website"
git push origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Select **/ (root)** folder
5. Click **Save**
6. GitHub will provide your website URL (e.g., `https://username.github.io/core-aviator-training-website/`)

### Step 6: Custom Domain (Optional)
If you want to use `coreaviatortraining.com`:
1. In GitHub Pages settings, add your custom domain
2. Update your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. Wait for DNS propagation (can take 24-48 hours)

---

## 📱 Testing Checklist

### Desktop Testing
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Dark/light mode toggle functions properly
- [ ] Contact form submits successfully
- [ ] All links work (including "Leave a Review")
- [ ] Images display correctly
- [ ] Animations are smooth
- [ ] Footer displays correctly

### Mobile Testing
- [ ] Hamburger menu opens and closes
- [ ] All pages are readable on small screens
- [ ] Navigation links work
- [ ] Contact form is usable
- [ ] Images scale appropriately
- [ ] Dark mode works on mobile
- [ ] Footer is responsive

### Browser Testing
Test on:
- [ ] Google Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Microsoft Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Customization Guide

### Changing Colors
Edit `css/main.css` and update CSS variables in the `:root` section:
```css
:root {
  --primary-blue: #0FABD7;
  --dark-blue: #037CC0;
  /* Add or modify colors as needed */
}
```

### Adding New Pages
1. Create a new HTML file based on existing page structure
2. Include the header, navigation, and footer from other pages
3. Update navigation menus in all HTML files to include the new page
4. Add corresponding blog cards if it's a blog post

### Modifying Animations
Animation settings are in `css/main.css`:
- Search for `@keyframes` to find animation definitions
- Adjust `animation-duration` and `animation-timing-function` as desired
- Modify `--transition-speed` variable for global timing changes

### Updating Contact Form
If you need to change the Google Script URL:
1. Open `contact.html`
2. Find the form tag: `<form id="contact-form" action="..."`
3. Replace the action URL with your new Google Script URL

---

## 📞 Support Information

### Core Aviator Training Contact
- **Location:** Page Field Airport, Fort Myers, FL 33907
- **Email:** cfi@coreaviatortraining.com
- **Phone:** (239) 350-7124
- **Hours:** Monday-Saturday 7AM-6PM, Sunday by appointment

### Social Media
- **Facebook:** facebook.com/coreaviatortraining
- **Instagram:** instagram.com/coreaviatortraining
- **Google Business:** [Leave a Review Link]

---

## 📝 Notes

### Image Optimization Tips
- Compress images before uploading to reduce load times
- Use tools like TinyPNG or ImageOptim
- Maintain aspect ratios to avoid distortion
- Test images on both light and dark backgrounds

### Browser Compatibility
- Website is built with modern web standards
- Compatible with all major browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-first responsive design

### Performance Considerations
- CSS and JavaScript are minified for production
- Lazy loading implemented for images
- Smooth scroll behavior
- Optimized animations for performance

---

## 🎉 Launch Checklist

Before going live:
- [ ] All required images added to `assets/` folder
- [ ] Logo displays correctly in header
- [ ] Favicons show in browser tabs
- [ ] Email and phone images display in footer
- [ ] Contact form tested and working
- [ ] Dark mode tested thoroughly
- [ ] All links verified (internal and external)
- [ ] Mobile responsiveness checked
- [ ] Google Business review link works
- [ ] Social media links point to correct profiles
- [ ] Privacy policy reviewed for accuracy
- [ ] Blog posts proofread
- [ ] DNS configured (if using custom domain)
- [ ] SSL certificate active (GitHub Pages provides free SSL)

---

## 📄 License & Credits

© 2025 Core Aviator Training LLC. All rights reserved.

Website designed with aviation themes, modern animations, and user experience in mind.

**Technologies Used:**
- HTML5
- CSS3 (with animations and dark mode)
- JavaScript (ES6+)
- Google Fonts (Inter)
- SVG Icons

**Special Features:**
- Aviation-themed animations and design elements
- Dark/light mode toggle with localStorage persistence
- Responsive hamburger navigation
- Scroll-triggered animations
- Interactive cards and buttons
- Professional contact form integration

---

## 🆘 Troubleshooting

### Images Not Displaying
- Check file paths are correct (`./assets/filename.png`)
- Ensure images are in the correct folder
- Verify image file names match exactly (case-sensitive)
- Check file permissions

### Dark Mode Not Saving
- Verify JavaScript is loading (`js/main.js`)
- Check browser console for errors
- Clear browser cache and cookies
- Ensure localStorage is enabled in browser

### Contact Form Not Working
- Verify Google Script URL is correct
- Check form field names match script expectations
- Test in different browsers
- Check network tab for submission errors

### Navigation Menu Not Opening on Mobile
- Verify JavaScript is loaded
- Check browser console for errors
- Test in different mobile browsers
- Clear cache and reload

---

For questions or support, contact Core Aviator Training at cfi@coreaviatortraining.com

**Fly Safe. Train Smart. Soar Higher.** ✈️
