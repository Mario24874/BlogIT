import PostList from '../components/PostList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h1>
      <p className="text-gray-600 mb-8">Discover the latest insights in technology and development</p>
      <PostList />
    </div>
  );
};

export default Home;