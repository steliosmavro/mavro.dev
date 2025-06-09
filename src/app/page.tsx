'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { StarIcon, CheckIcon, Github, ExternalLink } from 'lucide-react';
import AnimatedChip from '@/components/AnimatedChip';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="grid gap-y-48 pt-24">
        {/* Hero Section */}
        <section>
          <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-1 flex-col gap-8 text-left lg:items-start lg:text-left">
              <div className="relative inline-block w-fit">
                <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
                  Stelios Mavro
                </h1>
                <br />
                <motion.div
                  className="absolute bottom-0 left-0 block h-1 w-16 rounded-full bg-gradient-to-r from-brand to-accent"
                  animate={{ left: ['0%', '82%', '0%'] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <h2 className="flex flex-wrap gap-1 font-mono text-sm uppercase tracking-wider text-accent">
                {['Full-Stack Engineer', '-', 'AI Integrations', '-', 'Developer Tooling'].map(
                  (word, idx) =>
                    word === '-' ? (
                      <span key={idx} className="mx-1 text-accent">
                        -
                      </span>
                    ) : (
                      <span
                        key={idx}
                        className="inline-block cursor-default decoration-accent decoration-2 underline-offset-4 transition-all duration-100 hover:underline"
                      >
                        {word}
                      </span>
                    ),
                )}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                Full-Stack Engineer since 2020, focused on AI-powered applications, automation, and
                developer tools.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                {['TypeScript', 'Full-Stack Development', 'AI Integration', 'Dev Tools'].map(
                  (skill) => (
                    <AnimatedChip key={skill} label={skill} />
                  ),
                )}
              </ul>

              <nav className="mt-12 flex flex-wrap gap-3 sm:gap-4">
                <Link href="/projects" className="btn">
                  Projects
                </Link>
                <Link href="/blog" className="btn-outline">
                  Blog
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center"
                >
                  Resume
                </a>
              </nav>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="relative w-full max-w-xs">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 right-0 top-24 rounded-xl bg-black/15 blur-xl"
                />
                <motion.img
                  src="/business-cropped-resized.svg"
                  alt="Stelios"
                  className="relative z-10 h-auto w-full rotate-2 rounded-xl object-contain"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, rotate: 3, filter: 'brightness(1.1)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand to-accent text-white">
              <StarIcon className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: 'EzPump - Telegram Trading Bot (Acquired)',
                desc: 'Built a Telegram-based trading bot for Solana meme coins, enabling volume simulation, analytics, and role-based pricing. Reached 1.2K users and was acquired by MicroPump. Included a secondary bot that generated hype by auto-commenting on new tokens in real time.',
                tags: ['Solana', 'Telegram Bot', 'Blockchain Automation', 'TypeScript'],
                repo: 'https://github.com/steliosmavro/pump-fun-telegram-bot',
                redirectTo: 'https://www.ezpump.fun',
                visit: 'https://www.ezpump.fun',
              },

              {
                title: 'Contributions to Nango (Open Source - Developer Tool)',
                desc: "Implemented integrations with external providers, including sync/action endpoints with pagination, retries, and testing. Contributed across Nango's Dashboard, Connect UI, Server, Docs, and developer experience.",
                tags: [
                  'Open Source',
                  'Developer Tooling',
                  'API Integrations',
                  'Developer Experience',
                ],
                repo: 'https://github.com/pulls?q=is%3Apr+author%3Asteliosmavro+org%3ANangoHQ',
                redirectTo: 'https://www.nango.dev',
                visit: 'https://www.nango.dev',
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                className={`flex h-full flex-col justify-between rounded-2xl border border-accent/10 bg-white/90 p-6 shadow-lg transition ease-out hover:shadow-2xl ${
                  project.redirectTo
                    ? 'cursor-pointer ring-brand/30 hover:ring-1'
                    : 'cursor-default'
                }`}
                onClick={() => project.redirectTo && window.open(project.redirectTo, '_blank')}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">{project.desc}</p>
                  <ul className="mb-3 flex list-none flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <AnimatedChip key={tag} label={tag} onClick={(e) => e.stopPropagation()} />
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex gap-3">
                  <div className="flex gap-6 text-sm">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-brand decoration-2 underline-offset-4 hover:underline hover:decoration-brand"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>

                    {project.visit && (
                      <a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-brand decoration-2 underline-offset-4 hover:underline hover:decoration-brand"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand to-accent text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">What People Say</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {[
              {
                quote:
                  'We appreciated how you stepped in with ownership and initiative. You adapted quickly, understood the product, and brought practical solutions.',
                name: 'David Kamien',
                title: 'CEO, Mind-Alliance Systems',
                avatar: '/david-kamien.jpeg',
              },
              {
                quote:
                  'Thanks a lot for all the help, Stelios! We really noticed your contributions and your proactive attitude. It meant a lot to the team.',
                name: 'Bastien Beurier',
                title: 'Co-Founder, Nango · ex-Uber',
                avatar: '/bastien-beurier.jpg',
              },
              {
                quote:
                  'Stelios has that rare mix of professionalism, consistency, and quiet confidence. A pleasure to work with.',
                name: 'George Tzinos',
                title: 'Senior Director of Engineering, InstaShop',
                avatar: '/george-tzinos.jpg',
              },
            ].map((t, i) => (
              <motion.figure
                key={i}
                className="rounded-2xl border border-accent/10 bg-white/90 p-10 shadow-lg backdrop-blur-md ease-out hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <figcaption className="mb-6 flex items-center gap-4">
                  <motion.img
                    src={t.avatar}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-gray-900">{t.name}</span>
                    {t.title && <span className="text-sm text-gray-500">{t.title}</span>}
                  </div>
                </figcaption>
                <blockquote className="text-[17px] italic leading-relaxed text-gray-700">
                  “{t.quote}”
                </blockquote>
              </motion.figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
