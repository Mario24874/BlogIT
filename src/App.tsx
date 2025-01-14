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
        title="BlogIT - El Blog de la Industria Tecnológica"
        description="Descubra lo último en tecnología, programación, desarrollo web, inteligencia artificial, ciberseguridad y mucho más. Mantente al día de las últimas tendencias tecnológicas."
        keywords={[
          "tecnología",
          "programación",
          "informática",
          "ciberseguridad",
          "cybersecurity",
          "App",
          "desarrollo web",
          "aplicaciones",
          "Innovaciones",
          "automatizaciones",
          "domótica",
          "tech industry",
          "software development",
          "AI",
          "artificial intelligence",
          "IA"
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