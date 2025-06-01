import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

// Define the blog posts directory
const postsDirectory = path.join(process.cwd(), 'src/content/blog-posts');

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  coverImage: string;
  date: string;
  tags: string[];
}

/**
 * Get the slugs of all blog posts
 */
export function getBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => {
      return fileName.endsWith('.md') && 
             !fileName.startsWith('.') && 
             !fileName.includes('README') &&
             fileName !== 'README.md';
    })
    .map(fileName => {
      return fileName.replace(/\.md$/, '');
    });
}

/**
 * Get blog data for a specific slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process the markdown content to HTML with GFM support for tables
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    // Validate required fields
    if (!data.title || !data.slug || !data.date) {
      console.warn(`Blog post ${slug} is missing required frontmatter`);
      return null;
    }
    
    // Create blog post object
    const blogPost: BlogPost = {
      id: slug,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || '',
      content: content,
      contentHtml: contentHtml,
      coverImage: data.coverImage || '/images/blogs/default.jpg',
      date: data.date,
      tags: data.tags || []
    };
    
    return blogPost;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts sorted by date
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const postsPromises = slugs.map(slug => getBlogBySlug(slug));
  const posts = await Promise.all(postsPromises);
  
  // Filter out any null values and sort by date
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a subset of blog posts (for pagination)
 */
export async function getBlogPosts(page = 1, limit = 10): Promise<{
  posts: BlogPost[];
  total: number;
  currentPage: number;
  totalPages: number;
}> {
  const allPosts = await getAllBlogPosts();
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const posts = allPosts.slice(startIndex, endIndex);
  const total = allPosts.length;
  const totalPages = Math.ceil(total / limit);
  
  return {
    posts,
    total,
    currentPage: page,
    totalPages
  };
} 