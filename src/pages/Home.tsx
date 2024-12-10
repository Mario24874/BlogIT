import React from 'react';
import PostList from '../components/PostList';
import { posts } from '../data/posts';

const Home: React.FC = () => {
  // Filtrar los últimos 3 artículos
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h1>
      <p className="text-gray-600 mb-8">Discover the latest insights in technology and development</p>
      <PostList posts={latestPosts} />
    </div>
  );
};

export default Home;