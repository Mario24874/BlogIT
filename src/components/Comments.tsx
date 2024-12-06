import React, { useEffect, useState } from 'react';
import { db, auth } from '../services/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import Auth from '../services/auth';
import { Comment } from '../types'; 

const Comments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const q = query(collection(db, `posts/${postId}/comments`), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Comment));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [postId]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    await addDoc(collection(db, `posts/${postId}/comments`), {
      text: newComment,
      author: auth.currentUser.displayName,
      timestamp: Timestamp.now(), // Usar Timestamp de Firebase
    });

    setNewComment('');
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      <Auth />
      {auth.currentUser && (
        <form onSubmit={handleAddComment} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Add a comment..."
          />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
            Post Comment
          </button>
        </form>
      )}
      <div>
        {comments.map(comment => (
          <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded">
            <p className="text-gray-800">{comment.text}</p>
            <p className="text-sm text-gray-500">{comment.author}</p>
            <p className="text-xs text-gray-400">{comment.timestamp.toDate().toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;