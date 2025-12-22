# Core Aviator Training Website - Deployment Checklist

## ✅ Pre-Deployment Tasks

### 1. Create Required Images
Before deploying, you need to create the following images and place them in the `assets/` folder:

- [ ] `logo.png` (200×200px) - Your Core Aviator Training logo
- [ ] `favicon-32x32.png` (32×32px) - Standard favicon
- [ ] `favicon-16x16.png` (16×16px) - Small favicon
- [ ] `apple-touch-icon.png` (180×180px) - iOS icon
- [ ] `email-contact.png` (250×40-50px) - Image with "cfi@coreaviatortraining.com"
- [ ] `phone-contact.png` (250×40-50px) - Image with "(239) 350-7124"

**See `assets/IMAGES_NEEDED.txt` for detailed specifications.**

### 2. Test Locally (Optional but Recommended)
- [ ] Open `index.html` in a web browser
- [ ] Test dark/light mode toggle
- [ ] Check mobile responsiveness (use browser dev tools)
- [ ] Test navigation on mobile (hamburger menu)
- [ ] Verify all internal links work
- [ ] Test contact form submission (if connected to internet)

### 3. GitHub Repository Setup
- [ ] Create a new repository on GitHub
- [ ] Copy all files to the repository (maintain folder structure)
- [ ] Ensure all images are in the `assets/` folder
- [ ] Commit and push all files

### 4. GitHub Pages Configuration
- [ ] Go to repository Settings
- [ ] Navigate to "Pages" section
- [ ] Select "main" branch as source
- [ ] Select "/ (root)" folder
- [ ] Save settings
- [ ] Wait 2-5 minutes for deployment

### 5. Verify Deployment
- [ ] Visit your GitHub Pages URL (https://yourusername.github.io/repository-name/)
- [ ] Test all pages load correctly
- [ ] Verify images display properly
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode toggle
- [ ] Verify "Leave a Review" link works
- [ ] Check social media icons link correctly

## 🎨 Optional Customizations

### Custom Domain Setup (If using coreaviatortraining.com)
- [ ] Add custom domain in GitHub Pages settings
- [ ] Update DNS settings:
  - CNAME record: yourusername.github.io
  - Or A records to GitHub IPs (see README.md)
- [ ] Create `CNAME` file in root with domain name
- [ ] Enable HTTPS in GitHub Pages settings
- [ ] Test custom domain after DNS propagation (can take 24-48 hours)

### SEO Enhancements
- [ ] Add alt text to all images once uploaded
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta descriptions on all pages
- [ ] Set up Google Analytics (optional)

### Security Enhancements
- [ ] Consider adding reCAPTCHA to contact form
- [ ] Review and update privacy policy if needed
- [ ] Enable HTTPS (automatic with GitHub Pages)

## 📋 Post-Deployment Maintenance

### Weekly Tasks
- [ ] Check and respond to contact form submissions
- [ ] Monitor Google Business reviews
- [ ] Update social media

### Monthly Tasks
- [ ] Review website analytics (if set up)
- [ ] Check for broken links
- [ ] Update blog with new content
- [ ] Review and update service information

### Quarterly Tasks
- [ ] Update business hours if changed
- [ ] Review privacy policy for compliance
- [ ] Update course pricing if applicable
- [ ] Refresh testimonials or reviews

## 🚨 Troubleshooting Common Issues

### Images Not Displaying
1. Check file names match exactly (case-sensitive)
2. Verify images are in `assets/` folder
3. Clear browser cache
4. Check file paths in HTML

### Contact Form Not Working
1. Verify Google Script URL is correct in `contact.html`
2. Test in different browsers
3. Check browser console for errors
4. Ensure form field names match script

### Dark Mode Not Persisting
1. Check if localStorage is enabled
2. Clear browser cache and cookies
3. Test in incognito/private mode

### Mobile Menu Not Working
1. Verify `main.js` is loading
2. Check browser console for JavaScript errors
3. Test in different mobile browsers

## 📞 Support

For technical questions about this website:
- Review the `README.md` file for detailed documentation
- Check the browser console for error messages
- Verify all files are uploaded correctly

For Core Aviator Training business inquiries:
- Email: cfi@coreaviatortraining.com
- Phone: (239) 350-7124

---

**Once all checklist items are complete, your website will be live and fully functional! ✈️**
