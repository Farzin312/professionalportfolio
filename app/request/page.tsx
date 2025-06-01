import React from 'react'
import RequestForm from '../components/RequestForm'


export default function RequestPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-1/2 hidden lg:flex mt-25 justify-center bg-white px-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug">
            Let’s bring <span className="text-yellow-300">your vision</span><br />
            to life and build a business that scales with success.
          </h1>
          <p className="font-medium">Don’t hesitate to reach out — I’m always just a click away!</p>
          <p className="font-medium">upstride936@gmail.com</p>
          <p className="font-medium">Based in NYC</p>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:flex items-center">
        <div
          className="w-px bg-gray-300"
          style={{ height: '90vh' }}
        />
      </div>

      {/* Right panel (form) */}
      <div className="w-full lg:w-1/2 px-8 py-16">
        <RequestForm />
      </div>
    </main>
  )
}