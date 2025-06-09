import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-2" {...props} />, 
    a: (props) => <a className="text-highlight underline" {...props} />, 
    ...components,
  };
} 