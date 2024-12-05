export interface Post {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  keywords: string[];
  description: string;
}

export const posts: Post[] = [
  {
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring the latest developments in AI and machine learning, and how they're shaping our future.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    keywords: ["artificial intelligence", "machine learning", "AI", "technology", "automation", "tech industry"],
    description: "Discover the latest advancements in artificial intelligence and machine learning technologies that are revolutionizing the tech industry."
  },
  {
    title: "Web Development Trends 2024",
    excerpt: "Discover the most important web development trends that are dominating the industry this year.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    date: "Mar 12, 2024",
    readTime: "4 min read",
    keywords: ["web development", "programming", "frontend", "backend", "full-stack", "software development"],
    description: "Stay ahead of the curve with the latest web development trends and technologies shaping the future of software development."
  },
  {
    title: "Cybersecurity Best Practices",
    excerpt: "Essential cybersecurity practices every developer should know to protect their applications.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    keywords: ["cybersecurity", "security", "hacking prevention", "IT security", "tech industry"],
    description: "Learn essential cybersecurity practices and strategies to protect your applications and systems from modern threats."
  },
  {
    title: "The Rise of Cloud Computing",
    excerpt: "How cloud computing is revolutionizing the way we build and deploy applications.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    date: "Mar 8, 2024",
    readTime: "4 min read",
    keywords: ["cloud computing", "AWS", "Azure", "DevOps", "infrastructure", "tech industry"],
    description: "Explore how cloud computing is transforming application deployment and scaling in the modern tech landscape."
  },
  {
    title: "Mobile App Development Guide",
    excerpt: "A comprehensive guide to building modern mobile applications using React Native.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    date: "Mar 5, 2024",
    readTime: "7 min read",
    keywords: ["mobile development", "React Native", "iOS", "Android", "app development", "programming"],
    description: "Master mobile app development with this comprehensive guide to building cross-platform applications with React Native."
  }
];