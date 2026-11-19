export const projectsData = [
  {
    title: 'E-commerce Store (in progress)',
    description:
      'A full-stack online store with a React and TypeScript front end on Vercel and an Express REST API on Render, backed by PostgreSQL. Orders are created in a database transaction with rollback on failure, prices come only from the database, and stock oversells are rejected. The API uses bcrypt, role-based JWTs, Zod validation, rate limiting, security headers, and a CORS allow-list. Stripe Checkout is next.',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Zod', 'JWT', 'Docker Compose'],
    liveUrl: null,
    codeUrl: 'https://github.com/bolaji0001/e-commerce-app',
    image: null,
  },
  {
    title: 'NutriStacker: AI Meal Planner',
    description:
      'A full-stack meal planner: a Next.js and TypeScript front end calls a Python FastAPI REST API that stores plans in PostgreSQL. LLM output is treated as untrusted, validated with Pydantic, checked against allergies, retried up to three times, and logged on failure. Requests are secured with JWT verification and row-level security. pytest covers the API and allergen logic, and GitHub Actions type-checks, tests, builds, and images the app on every push.',
    tags: ['Python', 'FastAPI', 'Pydantic', 'Next.js', 'TypeScript', 'PostgreSQL', 'Groq LLM', 'pytest', 'Docker', 'GitHub Actions'],
    liveUrl: 'https://nutri-stacker.vercel.app/',
    codeUrl: 'https://github.com/bolaji0001/nutri-stacker',
    image: null,
  },
  {
    title: 'Family Travel Tracker',
    description:
      'A multi-user web app with password and Google sign-in that colours each family member’s visited countries on an interactive world map. A relational schema keeps each family’s data separate. Deployed on Render with Neon PostgreSQL.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Passport.js', 'Google OAuth', 'bcrypt'],
    liveUrl: 'https://family-travel-tracker-with-database.onrender.com/',
    codeUrl: 'https://github.com/bolaji0001/Family-travel-tracker-with-database',
    image: null,
  },
  {
    title: 'Mapty: Workout Mapping App',
    description:
      'An interactive map app built with ES6 classes and inheritance. Users log workouts by clicking a Leaflet map centred on their location, with data saved in localStorage.',
    tags: ['JavaScript (ES6)', 'OOP', 'Leaflet', 'OpenStreetMap', 'Geolocation API'],
    liveUrl: 'https://bolaji0001.github.io/mapty/',
    codeUrl: 'https://github.com/bolaji0001/mapty',
    image: null,
  },
];
