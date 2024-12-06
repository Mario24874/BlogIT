import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import Articles from './pages/Articles';

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
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<div className="h-[60vh] bg-gray-200 animate-pulse" />}>
            <Header />
          </Suspense>
          <main className="container mx-auto px-4 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2024 BlogIT. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;