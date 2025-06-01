import Link from 'next/link'
import Image from 'next/image'
import { ServiceDetail as DetailType, serviceDetails } from '../data/ServiceDetails'

type DetailProps = {
  service: DetailType
}

export default function ServiceDetail({ service }: DetailProps) {
  return (
    <div className="space-y-6">
      {/* Promotion Banner for every plan */}
      <div className="mx-auto max-w-3xl cursor-pointer rounded-lg border-2 border-yellow-300 bg-yellow-50 px-6 py-4 text-center transition-shadow hover:shadow-lg">
        <h3 className="text-xl font-bold text-black">{service.title}</h3>
        <p className="mt-1 text-gray-700">
          One low monthly fee of{' '}
          <span className="font-extrabold text-yellow-300">
            ${service.monthly}/mo
          </span>{' '}
          for this service — and no setup fee.
        </p>
        <p className="mt-2 text-sm text-gray-500">Click to learn more & subscribe</p>
      </div>

      {/* Detail Card */}
      <div className="flex flex-col lg:flex-row p-6">
        {/* Left Content */}
        <div className="flex-1 ml-15">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            {service.title}
          </h2>

          <div className="mb-6 flex flex-wrap gap-6">
            <div className="text-lg sm:text-xl">
              <p className="text-gray-500">One-time Setup</p>
              <p className="text-3xl sm:text-4xl font-extrabold text-black">
                ${service.oneTime}
              </p>
            </div>
            {service.monthly !== undefined && (
              <div className="text-lg sm:text-xl">
                <p className="text-gray-500">Subscription</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-yellow-300">
                  ${service.monthly}/mo
                </p>
              </div>
            )}
          </div>

          <p className="mb-4 text-gray-700">{service.description}</p>

          {/* What’s Included */}
          <div className="mb-4">
            <p className="font-semibold mb-2">What’s Included:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {service.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Ongoing Value */}
          {service.subscriptionBenefits && (
            <div className="mb-4">
              <p className="font-semibold mb-2">Ongoing Value:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {service.subscriptionBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommended Pairings */}
          {service.recommendedPairings.length > 0 && (
            <div className="mb-4">
              <p className="font-semibold mb-2">Recommended Pairings:</p>
              <div className="flex flex-wrap gap-2">
                {service.recommendedPairings.map((slug) => {
                  const paired = serviceDetails.find(s => s.slug === slug)!
                  return (
                    <Link
                      key={slug}
                      href={`/service?tab=${slug}`}
                      className="px-3 py-1 border rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition"
                    >
                      {paired.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          <Link
            href="/request"
            className="mt-4 inline-block px-6 py-3 bg-yellow-300 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
          </Link>
          <p className="text-sm text-gray-500 mt-2">All prices are negotiable — let’s chat!</p>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-6 lg:mt-0 lg:pl-8 flex justify-center items-center">
          <Image
            src={service.imagePath}
            alt={`${service.title} illustration`}
            unoptimized
            width={400}
            height={300}
            className="w-full max-w-md object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
)}