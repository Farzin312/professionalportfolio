import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-black">404</h1>
        <p className="text-xl font-semibold text-gray-700">
          Oops! This page doesn’t exist.
        </p>
        <p className="text-gray-600">
          The route you’re looking for can’t be found. You can return home or check out our services below.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-yellow-300 text-black font-medium rounded hover:bg-yellow-400 transition"
          >
            Go Home
          </Link>
          <Link
            href="/service"
            className="px-6 py-3 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
