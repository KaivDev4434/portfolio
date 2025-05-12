import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-bold text-accent-clay mb-6">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-8">
          The blog post you are looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/#blog" 
          className="inline-flex items-center justify-center px-6 py-3 bg-accent-sage text-white rounded-lg hover:bg-accent-sage/90 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
} 