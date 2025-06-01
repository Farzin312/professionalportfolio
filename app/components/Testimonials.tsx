import Image from 'next/image'
import { testimonials } from '../data/Testimonials'

export default function Testimonials() {
  return (
    <section className="bg-gray-200 relative overflow-hidden pt-5">
      {/* Optional Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-10 py-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-black">
          What Clients Are Saying
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ quote, name, title, logo }) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-yellow-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-gray-700 font-medium flex-grow mb-6 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    unoptimized
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black">{name}</p>
                  <p className="text-sm text-gray-600">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
