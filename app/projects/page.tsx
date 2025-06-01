import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Portfolio | Farzin Shifat',
  description:
    'Showcase of full-stack & backend projects: AI integrations, auth modules, data pipelines, and more.',
  openGraph: {
    title: 'Project Portfolio | Farzin Shifat',
    description:
      'Dive into modular, production-ready projects built with Next.js, AI, and robust backend systems.',
    url: 'https://github.com/Farzin312/projects',
  },
}

export default function ProjectsPage() {
  return (
    <main className="py-16 px-10 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold">Project Portfolio</h1>
        <p className="mt-2 text-lg text-gray-600">Check Out Our Works</p>
      </div>

      {/* Responsive Grid */}
      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="group bg-white rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-yellow-300/50 hover:-translate-y-2 flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
              <Image
                src={p.image}
                alt={p.name}
                unoptimized
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              {/* Top section: title, desc, tech */}
              <div>
                <div className="flex items-center justify-between flex-col lg:flex-row">
                  <h2 className="text-2xl font-bold text-black">{p.name}</h2>
                  <span className="text-sm font-medium text-gray-500 uppercase">
                    {p.category}
                  </span>
                </div>

                <p className="mt-4 text-gray-700">{p.description}</p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Built with:</p>
                  <div className="flex flex-wrap gap-2">
                    {p.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-gray-200 text-black text-xs font-medium px-2 py-1 rounded-full hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom section: links aligned to bottom */}
              <div className="mt-6 flex items-center gap-4">
                {p.liveUrl && (
                  <Link
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:underline"
                  >
                    <Image
                      src="/team/web.png"
                      alt="Web Icon"
                      unoptimized
                      width={16}
                      height={16}
                    />
                    Live Demo
                  </Link>
                )}

                <Link
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:underline"
                >
                  <Image
                    src="/team/github.png"
                    alt="GitHub Icon"
                    unoptimized
                    width={16}
                    height={16}
                  />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
