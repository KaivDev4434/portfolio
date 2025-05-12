# Modern Portfolio Website

A professional, elegant portfolio website built with Next.js and Tailwind CSS. Showcases skills, experience, projects, and blog content with a clean, contemporary design.

![Portfolio Preview](public/preview.png)

## Features

- **Professional Design** - Elegant matte color scheme with a cohesive visual identity
- **Responsive Layout** - Fully responsive design that works on all devices
- **Animated Sections** - Smooth animations and transitions using Framer Motion
- **Modular Blog System** - Markdown-based blog with dynamic routing
- **Interactive Components** - Engaging UI elements throughout the site
- **Performance Optimized** - Fast loading times and optimized assets
- **Accessible** - WCAG compliant with semantic HTML
- **SEO Friendly** - Proper meta tags and structured data

## Color Palette

- **Primary**: Deep slate (#2D3748)
- **Primary Dark**: Darker slate variant for gradients and depth
- **Accents**: 
  - Sage green (#7D9D9C)
  - Clay/terracotta (#C17C74)
- **Background**: Soft cream (#F7F4ED)
- **Text**: Dark charcoal (#1E293B)

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Content**: Markdown with MDX support
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-website/
├── public/               # Static assets
├── src/
│   ├── app/              # App router pages
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── content/          # Blog and project content
│   │   ├── blog/         # Blog posts (markdown)
│   │   └── projects/     # Project data
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── tailwind.config.js    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Personal Information

Edit the personal information in the following files:

- **Contact Info**: Update `src/components/layout/Footer.tsx` with your email, phone, and location
- **Social Links**: Update the URLs in the Footer and Contact sections
- **Services**: Modify the services list in `src/components/layout/Footer.tsx`

### Content Sections

Each major section is modular and can be customized:

- **Hero**: Edit `src/components/sections/Hero.tsx`
- **About**: Update your bio in `src/components/sections/About.tsx`
- **Experience**: Modify your work history in `src/components/sections/Experience.tsx`
- **Projects**: Add or remove projects in the projects data file
- **Skills**: Update your skills in `src/components/sections/Skills.tsx`
- **Education**: Edit your education history in `src/components/sections/Education.tsx`
- **Contact**: Customize the contact form in `src/components/sections/Contact.tsx`

## Blog System

The blog system uses Markdown files with frontmatter for metadata.

### Adding a New Blog Post

1. Create a new markdown file in `src/content/blog/`
2. Include frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2023-06-15"
excerpt: "A brief description of the blog post"
coverImage: "/images/blog/cover-image.jpg"
tags: ["tag1", "tag2"]
---

Your blog content here...
```

3. Write your content using Markdown syntax
4. Add any images to the `public/images/blog/` directory

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy your site

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
