import { blogPosts } from '../../data/mockData';
import BlogPostContent from '../../components/blog/BlogPostContent';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
