# Adding New Blog Posts

This folder contains all blog posts for the portfolio website. Each blog post is a Markdown file with frontmatter metadata.

## File Structure

```
src/
├── content/
│   └── blog-posts/        # All blog post markdown files
│       ├── example.md
│       └── another-post.md
└── ...
public/
└── images/
    └── blogs/            # Blog post images
        ├── example.jpg
        └── another-post.jpg
```

## Creating a New Blog Post

1. Create a new `.md` file in the `src/content/blog-posts` directory.
2. Name the file using the slug you want for the URL (e.g., `my-new-blog-post.md`).
3. Add the frontmatter at the top of the file with required metadata.
4. Write your blog content in Markdown format.
5. Add your cover image to `public/images/blogs/` directory.

## Frontmatter Format

Every blog post must start with frontmatter (metadata) in YAML format:

```markdown
---
title: My Blog Post Title
slug: my-blog-post-title
excerpt: A short description of the blog post that will appear in previews.
coverImage: /images/blogs/my-cover-image.jpg
date: '2024-05-01'
tags:
  - Tag One
  - Tag Two
  - Data Science
---

# Your Content Starts Here

The rest of the file is standard Markdown.
```

### Required Fields:

- `title`: The title of your blog post
- `slug`: The URL-friendly identifier (should match the filename without .md)
- `date`: The publication date (in 'YYYY-MM-DD' format)

### Optional Fields:

- `excerpt`: A brief summary of the post (if omitted, will be blank)
- `coverImage`: Path to the cover image (if omitted, will use a default image)
- `tags`: An array of tags related to the post (if omitted, will be empty)

## Markdown Features

Your blog posts support standard Markdown syntax including:

- Headings (`# H1`, `## H2`, etc.)
- Lists (ordered and unordered)
- Links (`[text](url)`)
- Images (`![alt text](image-url)`)
- Code blocks (` ```language code here``` `)
- Emphasis (`*italic*`, `**bold**`)
- Blockquotes (`> quote text`)

## Example

```markdown
---
title: Machine Learning for Beginners
slug: machine-learning-for-beginners
excerpt: A comprehensive guide to getting started with machine learning concepts.
coverImage: /images/blogs/machine-learning.jpg
date: '2024-05-10'
tags:
  - Machine Learning
  - AI
  - Programming
---

# Machine Learning for Beginners

This is the introduction paragraph for your blog post.

## My First Subheading

Content goes here...
``` 