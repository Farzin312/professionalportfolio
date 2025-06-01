// components/Projects.tsx

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/Projects'

export default function Projects() {
  // Take only the first three projects
  const featured = projects.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-10 sm:px-10 lg:px-12">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Project Portfolio
        </h2>

        {/* Projects Grid (responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <div
              key={p.slug}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-shadow transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-48">
                <Image
                  src={p.image}
                  alt={p.name}
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Description */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-yellow-500">
                  {p.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/** “See More” Link styled as a button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-200 transition-colors duration-300"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
