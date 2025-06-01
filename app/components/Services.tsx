import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '../data/Services'

export default function Services() {
  return (
    <section id="services" className="py-14 px-6 sm:px-4 md:px-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-2 text-lg text-gray-600">Maximize business potential</p>
        </div>

        {/* Service Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
          {services.map((svc) => (
            <a
              key={svc.slug}
              href={`#${svc.slug}`}
              className="px-3 py-1.5 border border-black text-sm md:text-base font-medium hover:bg-gray-100 rounded"
            >
              {svc.title}
            </a>
          ))}
        </div>

        {/* Slides */}
        <div className="mt-12 space-y-12">
          {services.map((svc) => (
            <div
              id={svc.slug}
              key={svc.slug}
              className="flex flex-col md:flex-row items-center md:justify-between md:space-x-8"
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-lg overflow-hidden shadow">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 text-left">
                <h3 className="text-2xl font-semibold text-gray-900">{svc.title}</h3>
                <p className="mt-4 text-gray-700">{svc.desc}</p>
                <Link
                  href={`/service#${svc.slug}`}
                  className="mt-6 inline-block text-black font-medium hover:underline"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
