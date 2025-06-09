import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      {children}
    </section>
  );
} 