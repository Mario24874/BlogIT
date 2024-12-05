import React, { Suspense } from 'react';
import { posts } from '../data/posts';

const PostCard = React.lazy(() => import('./PostCard').then(module => ({ default: module.PostCard })));

export function PostList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Suspense 
          key={index} 
          fallback={
            <div className="bg-white rounded-lg shadow-lg h-96 animate-pulse" />
          }
        >
          <PostCard {...post} />
        </Suspense>
      ))}
    </div>
  );
}