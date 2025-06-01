import ServiceTabs from '../components/ServiceTabs'

export const metadata = {
  title: 'Our Services | Upstride Tech',
  description:
    'Explore backend, AI, and integration services that scale with your business. From analytics to automation — see how Upstride Tech can help.',
  openGraph: {
    title: 'Our Services | Upstride Tech',
    description:
      'Backend systems, AI integrations, analytics pipelines — explore services tailored to your business growth.',
    url: 'https://upstride.tech/service',
    siteName: 'Upstride Tech',
    images: [
      {
        url: 'https://upstride.tech/logo.png',
        width: 1200,
        height: 630,
        alt: 'Upstride Tech Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

interface SearchParams {
  tab?: string
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const { tab } = await searchParams

  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Service Options</h1>
          <p className="text-gray-600">Add or browse individual services</p>
        </section>
        <ServiceTabs tab={tab} />
      </div>
    </main>
  )
}
