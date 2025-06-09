import mdx from '@next/mdx';

const withMDX = mdx();

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // Any custom Next.js config here
};

export default withMDX(nextConfig);
