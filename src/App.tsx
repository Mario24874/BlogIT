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
import Footer from './components/Footer'; 
import WriteWithUs from './pages/WriteWithUs';
import Subscription from './pages/Subscription';

function App() {
  return (
    <HelmetProvider>
      <SEO 
        title="BlogIT - The Technology Industry Blog"
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
              <Route path="/write-with-us" element={<WriteWithUs />} />
              <Route path="/subscription" element={<Subscription />} /> 
            </Routes>
          </main>
          <Footer /> 
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;