import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { LazyImage } from './LazyImage';
import type { Post } from '../types';
import { Link } from 'react-router-dom';

interface PostCardProps extends Post {}

export function PostCard({ title, excerpt, image, date, readTime, id }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="relative h-48 overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </article>
  );
}