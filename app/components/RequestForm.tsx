'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { services } from '../data/Services';

export default function RequestForm() {
  const router = useRouter();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState<number>(0);
  const [vision, setVision] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const toggleService = (title: string) => {
    setError('');
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1) Validate required fields
    const missingFields: string[] = [];
    if (selectedServices.length === 0) missingFields.push('service selection');
    if (!name.trim()) missingFields.push('your name');
    if (!email.trim()) missingFields.push('email');
    // phone validation: 10 digits
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) missingFields.push('phone number');

    if (missingFields.length > 0) {
      setError(`Please fill out the following: ${missingFields.join(', ')}.`);
      return;
    }

    setError('');
    setStatus('sending');

    // 2) POST the data to our API route
    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServices,
          name,
          company,
          email,
          phone: phoneDigits,
          budget,
          vision,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      setStatus('success');

      // 3) Redirect to your invoice page, passing along whatever query params you need:
      const params = new URLSearchParams({
        name,
        services: selectedServices.join(','),
        phone: phoneDigits,
      });
      router.push(`/request/invoice?${params.toString()}`);
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-medium">A quick chat is all it takes</h3>

      {/* Service Type Buttons */}
      <div className="flex flex-wrap gap-2">
        {services.map((svc) => (
          <button
            key={svc.slug}
            type="button"
            onClick={() => toggleService(svc.title)}
            className={`border rounded-sm font-medium text-xs sm:text-sm transition px-2 py-1 sm:px-3 sm:py-1.5 ${
              selectedServices.includes(svc.title)
                ? 'bg-black text-white border-black'
                : 'border-black text-black'
            }`}
          >
            {svc.title}
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Selected Counter */}
      <p className="text-sm font-medium">
        {selectedServices.length} service{selectedServices.length !== 1 && 's'} selected
      </p>

      {/* Name / Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Your Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>
        <div>
          <label className="block text-sm">Company</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>
        <div>
          <label className="block text-sm">Phone</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="123-456-7890"
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>
      </div>

      {/* Budget Slider */}
      <div>
        <label className="block text-sm mb-1">What’s your budget?</label>
        <input
          type="range"
          min={0}
          max={10000}
          step={25}
          value={budget}
          onChange={(e) => setBudget(+e.target.value)}
          className="w-full"
        />
        <div className="mt-1 text-sm">${budget}</div>
      </div>

      {/* Vision */}
      <div className="relative">
        <textarea
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          rows={2}
          placeholder="Describe your vision"
          className="w-full border-b border-gray-400 focus:outline-none py-0 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full"
      >
        {status === 'sending' ? 'Sending…' : 'SUBMIT INVOICE'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
