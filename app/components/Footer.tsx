import Link from 'next/link'
import Image from 'next/image'
import { services } from '../data/Services'

const team = [
  {
    name: 'Farzin Shifat',
    role: 'Fullstack Developer',
    picture: '/team/farzin.jpg',
    linkedin: 'https://www.linkedin.com/in/farzin-shifat-5b7b43207/',
    github: 'https://github.com/Farzin312',
    email: 'farzinshifat@gmail.com',
  },
  {
    name: 'Eric Fang',
    role: 'UI/UX Designer',
    picture: '/team/eric.png',
    linkedin: 'https://www.linkedin.com/in/eric-fang-b83890195/',
    github: '',
    email: 'fangeric946@gmail.com',
  },
]

export default function Footer() {
  return (
    <footer className="bg-yellow-300 text-black">
      {/* ── Top section ── */}
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* left: Get In Touch */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold flex justify-center md:justify-start items-center">
            Get In Touch! <span className="ml-2 text-2xl">→</span>
          </h2>
          <p className="mt-2">
            Don’t hesitate to send a message – I’m always just a click away!
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="bg-white text-black font-semibold px-6 py-2 rounded-full uppercase tracking-wide hover:bg-gray-100"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* right: Team (swapped with logo) */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold uppercase mb-4">Team</h3>
          <ul className="flex gap-8">
            {team.map((member) => (
              <li key={member.name} className="flex flex-col items-center">
                <Image
                  src={member.picture}
                  alt={member.name}
                  width={64}
                  height={64}
                  unoptimized
                  className="rounded-full object-cover border-2 border-white"
                />
                <p className="mt-2 font-medium">{member.name}</p>
                <p className="text-sm text-gray-700">{member.role}</p>
                <div className="mt-2 flex space-x-2">
                  <a href={`mailto:${member.email}`}>
                    <Image
                      src="team/gmail.png"
                      alt="Email"
                      width={20}
                      height={20}
                      unoptimized
                    />
                  </a>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="team/linkedin.png"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      unoptimized
                    />
                  </Link>
                  {member.github && (
                    <Link href={member.github} target="_blank" rel="noopener noreferrer">
                      <Image
                        src="team/github.png"
                        alt="GitHub"
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-black/20 w-[90%] mx-auto" />

      {/* ── Bottom section ── */}
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* left: Logo + socials (swapped with Team) */}
        <div className="flex flex-col items-center lg:items-start lg:ml-15 mt-5">
          <Image
            src="/logo.png"
            alt="Upstride Logo"
            width={120}
            height={120}
            unoptimized
            className="rounded-4xl object-contain border-2 border-white"
          />
        </div>

        {/* Services */}
        <div className="text-center">
          <h3 className="text-xl font-semibold uppercase mb-4">Services</h3>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
            {services.map((svc) => (
              <li key={svc.slug} className="hover:underline">
                <Link href={`/service?tab=${svc.slug}`}>
                  {svc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}