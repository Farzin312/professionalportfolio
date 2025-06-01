import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white md:h-[600px] lg:h-[700px]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto h-full">
        {/* Left: device/mockup image */}
        <div className="relative h-[300px] md:h-[600px] lg:h-[700px] sm:h-96">
          <Image
            src="/hero/hero.jpg"
            alt="Multiple website integrations on various devices"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Right: headline, text, CTA */}
        <div className="bg-gray-200 h-full flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Power Up Your Digital Platform
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-20">
            Launch or upgrade any website with our modular services—AI-powered lead generation,
            SEO optimization, seamless payment & finance automation, rich analytics dashboards,
            and secure auth modules.
          </p>
          <Link
            href="/service"
            className="self-center md:self-start inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
