import { BlogPost } from '@/types/blog';

export const JOURNAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Video Systems: Things I Learned',
    excerpt: 'Key insights from engineering a low-latency video streaming microservice architecture.',
    date: 'May 10, 2026',
    readTime: '5 min read',
    slug: 'building-scalable-video-systems',
    tags: ['Architecture', 'AWS', 'Node.js']
  },
  {
    id: '2',
    title: 'From Idea to Product: Lessons from Shipping Real Products',
    excerpt: 'How to transition from prototype to production-grade web application without overengineering.',
    date: 'Apr 28, 2026',
    readTime: '6 min read',
    slug: 'from-idea-to-product-lessons',
    tags: ['Product', 'Next.js', 'Engineering']
  }
];
