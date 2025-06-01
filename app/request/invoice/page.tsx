import React from 'react'
import { CheckCircle } from 'lucide-react'

type Props = {
  searchParams: Promise<{ name?: string; services?: string }>
}

export default async function InvoicePage({ searchParams }: Props) {
  const { name = 'Friend', services = '' } = await searchParams
  const selected = services.split(',').filter(Boolean)

  return (
    <main className="min-h-screen flex">
      {/* Left panel (contact info) */}
      <div className="w-1/2 hidden lg:flex justify-center mt-20 bg-white px-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug">
            Let’s bring <span className="text-yellow-300">your vision</span><br />
            to life and build a business that scales with success.
          </h1>
          <p>Don’t hesitate to reach out — I’m always just a click away!</p>
          <p className="font-medium">farzinshifat@gmail.com</p>
          <p className="font-medium">Based in NYC</p>
        </div>
      </div>

      {/* Right panel (confirmation) */}
      <div className="w-full h-screen lg:w-1/2 flex flex-col pt-20 bg-gray-200 px-12">
        <div className="space-y-6 text-center">
          <div className="inline-block bg-yellow-300 p-4 rounded-full">
            <CheckCircle size={48} color="#fff" />
          </div>
          <h2 className="text-2xl font-bold">
            You’re all set, {name}!
          </h2>
          <p className="text-gray-800">
            You requested{' '}
            <strong>
              {selected.length > 0 ? selected.join(', ') : 'no services'}
            </strong>
            .<br />
            Our team looks forward to connecting with you soon.
          </p>
        </div>
      </div>
    </main>
  )
}
