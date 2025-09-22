import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Blog from '@/components/sections/Blog';
import { getAllBlogPosts } from '@/lib/blog';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog blogPosts={blogPosts} />
      <Contact />
    </div>
  );
}
