import { notFound } from 'next/navigation';
import { getPostMeta } from '@/lib/getBlogPosts';
import type { Metadata } from 'next';
import Link from 'next/link';
import SampleBlogPost from '@/content/blog/sample-blog-post.mdx';
import RenderMdx from '@/components/RenderMdx';

const POST_COMPONENTS: Record<string, React.ComponentType> = {
  'sample-blog-post': SampleBlogPost,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: 'article',
      url: `https://mavro.dev/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.summary,
    },
    alternates: {
      canonical: `https://mavro.dev/blog/${slug}`,
    },
  };
}

export default function BlogPostPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand/20 bg-white/90 px-10 py-16 shadow-xl">
        <span className="text-5xl">🚧</span>
        <h1 className="mb-2 text-2xl font-bold text-brand">Coming Soon</h1>
        <p className="max-w-xs text-center text-slate-600">
          Blog posts will be available soon. Check back for updates!
        </p>
      </div>
    </main>
  );
}
