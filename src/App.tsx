import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';

const Header = React.lazy(() => import('./components/Header').then(module => ({ default: module.Header })));
const PostList = React.lazy(() => import('./components/PostList').then(module => ({ default: module.PostList })));

function App() {
  return (
    <HelmetProvider>
      <SEO 
        title="Tech Blog - Latest in Programming & Technology"
        description="Discover the latest insights in technology, programming, web development, AI, cybersecurity, and more. Stay updated with cutting-edge tech trends."
        keywords={[
          "tecnología",
          "programación",
          "informática",
          "desarrollo web",
          "aplicaciones",
          "automatizaciones",
          "domótica",
          "tech industry",
          "software development",
          "artificial intelligence"
        ]}
      />
      <div className="min-h-screen bg-gray-50">
        <Suspense fallback={<div className="h-[60vh] bg-gray-200 animate-pulse" />}>
          <Header />
        </Suspense>
        <main className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Discover the latest insights in technology and development</p>
          </div>
          <Suspense fallback={<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg h-96 animate-pulse" />
            ))}
          </div>}>
            <PostList />
          </Suspense>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 BlogIT. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;