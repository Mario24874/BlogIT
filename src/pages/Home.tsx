import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import { posts } from '../data/posts';
import SubscriptionModal from '../components/SubscriptionModal';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mostrar el modal después de 2 segundos
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Últimos artículos</h1>
      <p className="text-gray-600 mb-8">Descubra lo último en tecnología y desarrollo</p>
      <PostList posts={posts.slice(0, 3)} />
      <SubscriptionModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;