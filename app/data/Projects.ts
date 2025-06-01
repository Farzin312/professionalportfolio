export interface Project {
  slug: string
  name: string
  category: string
  image: string
  description: string
  techStack: string[]
  liveUrl?: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    slug: 'pokecart',
    name: 'PokéCart',
    category: 'E-Commerce',
    image: '/projects/pokecart.png',
    description:
      'Your one-stop shop for exploring and buying Pokémon merchandise.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    liveUrl: 'https://pokecart.org/',
    repoUrl: 'https://github.com/Farzin312/pokecart',
  },
  {
    slug: 'flashcard-generator',
    name: 'Intel-O-Flash',
    category: 'Knowledge Tools',
    image: '/projects/flashcard.png',
    description:
      'AI-powered flashcard generator: enter any topic or upload text/PDF and get smart study decks.',
    techStack: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://ai-flashcards-amber.vercel.app/',
    repoUrl: 'https://github.com/Farzin312/AIFlashcards',
  },
  {
    slug: 'rate-my-professor',
    name: 'SageAi',
    category: 'EdTech',
    image: '/projects/sage.png',
    description:
      'Sentiment-driven professor ratings powered by RAG and Pinecone.',
    techStack: ['Next.js', 'Pinecone', 'OpenAI', 'TypeScript'],
    liveUrl: 'https://ai-rate-my-professor-three.vercel.app/login',
    repoUrl: 'https://github.com/Farzin312/AI-RateMyProfessor',
  },
  {
    slug: 'ai-chatbot',
    name: 'Chatterbot',
    category: 'Conversational AI',
    image: '/projects/chatterbot.png',
    description:
      'A conversational agent that uses AI to answer user queries in real time.',
    techStack: ['Next.js', 'Firebase', 'OpenAI API', 'Flowise'],
    liveUrl: 'https://ai-customer-support-alpha-five.vercel.app/home',
    repoUrl: 'https://github.com/Farzin312/AI-Customer-Support',
  },
  {
    slug: 'costivity',
    name: 'Costivity',
    category: 'FinTech',
    image: '/projects/costivity.png',
    description:
      'AI finance tracker with Stripe-based membership and Plaid integration for automated expense tracking.',
    techStack: ['Next.js', 'Python', 'Docker', 'Stripe', 'Plaid'],
    repoUrl: 'https://github.com/shifat312/costivity',
  },
  {
    slug: 'storysnatcher',
    name: 'StorySnatcher',
    category: 'EdTech',
    image: '/projects/storysnatcher.png',
    description:
      'Retrieves YouTube or PDF transcripts and auto-generates study guides, flashcards, summaries, and quizzes.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PDF.js', 'OpenAI'],
    repoUrl: 'https://github.com/shifat312/storysnatcher',
  },
]
