import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import { getBlogSlugs, getBlogBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }
  
  return {
    title: `${blog.title} | Data Science Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }
  
  return (
    <div className="bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/#blog" 
          className="inline-flex items-center text-accent-sage hover:text-accent-clay transition-colors mb-8"
        >
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        {/* Hero section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-500 mb-6 gap-4">
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>{blog.date}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-accent-sage/10 text-accent-sage"
                >
                  <FiTag className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent-sage hover:prose-a:text-accent-clay prose-a:transition-colors">
          <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
        </article>
      </div>
    </div>
  );
} 