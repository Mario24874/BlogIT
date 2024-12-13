import React, { useState } from 'react';
import PostList from '../components/PostList';
import { posts } from '../data/posts';

const Articles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedReadTime, setSelectedReadTime] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    applyFilters(term, selectedDate, selectedReadTime);
  };

  const handleDateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    applyFilters(searchTerm, date, selectedReadTime);
  };

  const handleReadTimeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const readTime = event.target.value;
    setSelectedReadTime(readTime);
    applyFilters(searchTerm, selectedDate, readTime);
  };

  const applyFilters = (term: string, date: string, readTime: string) => {
    let filtered = posts;

    if (term) {
      filtered = filtered.filter(post => 
        post.keywords.some(keyword => keyword.includes(term))
      );
    }

    if (date) {
      filtered = filtered.filter(post => post.date === date);
    }

    if (readTime) {
      filtered = filtered.filter(post => post.readTime === readTime);
    }

    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Artículos</h1>
      <p className="text-gray-600 mb-8">Descubra las últimas novedades en tecnología y desarrollo</p>
      <input
        type="text"
        placeholder="Buscar por palabras clave"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex gap-4 mb-4">
        <select
          value={selectedDate}
          onChange={handleDateFilter}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Filtrar por fecha</option>
          {posts.map(post => (
            <option key={post.id} value={post.date}>{post.date}</option>
          ))}
        </select>
        <select
          value={selectedReadTime}
          onChange={handleReadTimeFilter}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Filtrar por tiempo de lectura</option>
          {posts.map(post => (
            <option key={post.id} value={post.readTime}>{post.readTime}</option>
          ))}
        </select>
      </div>
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default Articles;