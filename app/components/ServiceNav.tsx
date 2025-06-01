import Link from 'next/link'
import { serviceDetails } from '../data/ServiceDetails'

type NavProps = {
  activeSlug: string
}

export default function ServiceNav({ activeSlug }: NavProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-0">
      {serviceDetails.map(svc => (
        <Link
          key={svc.slug}
          href={`/service?tab=${svc.slug}`}
          className={`px-6 py-3 rounded-lg font-semibold transition-shadow shadow-sm border ${
            activeSlug === svc.slug ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {svc.title}
        </Link>
      ))}
    </div>
  )
}