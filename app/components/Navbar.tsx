import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-yellow-300 relative">
      {/* Hidden checkbox toggle for mobile menu */}
      <input
        id="nav-toggle"
        type="checkbox"
        className="hidden peer"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="logo.png"
            width={45}
            height={45}
            unoptimized
            alt="logo"
            className="rounded-2xl border-2 border-white"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-black font-medium hover:text-gray-700">
            Home
          </Link>
          <Link href="/projects" className="text-black font-medium hover:text-gray-700">
            Work
          </Link>
          <Link href="/service" className="text-black font-medium hover:text-gray-700">
            Service
          </Link>
          <Link href="/request" className="text-black font-medium hover:text-gray-700">
            Contact
          </Link>
        </div>

        {/* Hamburger button (mobile only) */}
        <label
          htmlFor="nav-toggle"
          className="md:hidden flex items-center cursor-pointer p-2"
        >
          {/* Menu icon */}
          <svg
            className="h-6 w-6 text-black peer-checked:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* Close icon */}
          <svg
            className="h-6 w-6 text-black hidden peer-checked:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>

      {/* Mobile menu */}
      <div className="peer-checked:block hidden md:hidden bg-yellow-300 px-2 pt-2 pb-3 space-y-1">
        <Link
          href="/"
          className="block px-3 py-2 rounded-md text-black hover:bg-yellow-200"
        >
          Home
        </Link>
        <Link
          href="/service"
          className="block px-3 py-2 rounded-md text-black hover:bg-yellow-200"
        >
          Service
        </Link>
        <Link
          href="/projects"
          className="block px-3 py-2 rounded-md text-black hover:bg-yellow-200"
        >
          Work
        </Link>
        <Link
          href="/request"
          className="block px-3 py-2 rounded-md text-black hover:bg-yellow-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
