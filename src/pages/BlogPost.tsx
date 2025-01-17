import { useParams } from 'react-router-dom';
import { posts } from '../data/posts/index';
import { LazyImage } from '../components/LazyImage';
import Comments from '../components/Comments';
import TextToSpeech from '../components/TextToSpeech'; // Importa el componente TextToSpeech

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Extract subtitles from the content
  const subtitles = post.content.match(/<h2 class="post-subtitle">([^<]+)<\/h2>/g);
  const subtitleLinks = subtitles ? subtitles.map((subtitle, index) => {
    const text = subtitle.replace(/<\/?h2[^>]*>/g, '');
    const anchor = text.toLowerCase().replace(/\s+/g, '-');
    return (
      <li key={index}>
        <a href={`#${anchor}`} className="text-blue-600 hover:text-blue-800 transition-colors">
          {text}
        </a>
      </li>
    );
  }) : [];

  // Add anchors to the content
  const contentWithAnchors = post.content.replace(/<h2 class="post-subtitle">([^<]+)<\/h2>/g, (_match, text) => {
    const anchor = text.toLowerCase().replace(/\s+/g, '-');
    return `<h2 id="${anchor}" class="post-subtitle">${text}</h2>`;
  });

  // Extract plain text from the content for TextToSpeech
  const plainTextContent = post.content.replace(/<[^>]+>/g, ''); // Remove HTML tags

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="relative h-48 overflow-hidden mb-4">
        <LazyImage
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <ul className="mb-4">
        {subtitleLinks}
      </ul>

      {/* Agregar el botón de TextToSpeech aquí */}
      <TextToSpeech text={plainTextContent} />

      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: contentWithAnchors }}
      />

      {/* Información del autor */}
      <div className="post-author mt-8 border-t pt-8">
        <img src={post.author.avatar} alt={post.author.name} className="author-avatar w-16 h-16 rounded-full mr-4" />
        <div className="author-info">
          <h3 className="text-lg font-bold text-gray-800">Escrito por: {post.author.name}</h3>
        </div>
      </div>

      <Comments postId={post.id} />
    </div>
  );
};

export default BlogPost;