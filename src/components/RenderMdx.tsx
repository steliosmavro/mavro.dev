'use client';

import { MDXProvider } from '@mdx-js/react';
import type { ReactNode } from 'react';

export default function RenderMdx({ children }: { children: ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>;
} 