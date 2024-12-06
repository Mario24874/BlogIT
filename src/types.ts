import { User as FirebaseUser } from 'firebase/auth';

export type User = FirebaseUser | null;

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    keywords: string[];
    description: string;
    content: string;
  }

  export interface Comment {
    id: string;
    text: string;
    author: string;
    timestamp: {
      toDate: () => Date;
    };
  }