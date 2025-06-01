// app/service/page.tsx

import ServiceTabs from '../components/ServiceTabs'

interface SearchParams {
  tab?: string
}

export default async function ServicesPage({
  searchParams,
}: {
  // tell TS it's a promise
  searchParams: Promise<SearchParams>
}) {
  // await before using
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
