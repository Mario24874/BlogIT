import PostList from '../components/PostList';

const Articles = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Articles</h1>
      <p className="text-gray-600 mb-8">Discover the latest insights in technology and development</p>
      <PostList />
    </div>
  );
};

export default Articles;