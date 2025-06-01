export interface Testimonial {
  quote: string
  name: string
  title: string
  logo: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Farzin’s AI-powered lead-gen integration slashed our cold outreach time by 60% and delivered a 3× boost in qualified leads within the first month. His real-time analytics dashboard gave us the insights we needed to pivot instantly—truly transformative for our growth strategy.",
    name: "SouthLink",
    title: "Owner, SouthLink Gas Station",
    logo: "/testimonials/southlink.jpeg",
  },
  {
    quote:
      "Working with Farzin on our analytics integration was a revelation. His microservices pipeline handles millions of events per day with sub-second latency, and his clear documentation meant our team was up and running in hours. A rock-solid partner for any data-driven project.",
    name: "Ujjwala Pothula",
    title: "Software Lead, University of Delaware",
    logo: "/testimonials/delaware.svg",
  },
  {
    quote:
      "Farzin built our standalone JWT auth/security module from scratch—secure, compliant, and lightning-fast. We passed our external audit with zero findings, and onboarding new developers is seamless thanks to his thorough docs. Can’t imagine tackling auth without him.",
    name: "Mir Shahiduzzaman",
    title: "Intern & Developer, Fordham University",
    logo: "/testimonials/fordam.svg",
  },
  {
    quote:
      "Farzin’s FastAPI data-pipeline and analytics integration unlocked visibility into our user funnel like never before. He’s proactive, communicative, and delivers production-ready code that just works. If you need turnkey backend services, he’s your go-to engineer.",
    name: "Muhammad Amir",
    title: "Data Engineer, Brooklyn College",
    logo: "/testimonials/brooklyn.svg",
  },
]
