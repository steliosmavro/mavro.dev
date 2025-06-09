import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMeta {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  tags?: string[];
}

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      return {
        title: data.title || file.replace(/\.mdx$/, ''),
        date: data.date || '',
        summary: data.summary || '',
        slug: file.replace(/\.mdx$/, ''),
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndexPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand/20 bg-white/90 px-10 py-16 shadow-xl">
        <span className="text-5xl">🚧</span>
        <h1 className="mb-2 text-2xl font-bold text-brand">Coming Soon</h1>
        <p className="max-w-xs text-center text-slate-600">
          The blog will launch soon with posts on AI, automation, and developer tools. Stay tuned!
        </p>
      </div>
    </main>
  );
}
