export const profile = {
  name: "Damon Chen",
  title: "Full Stack Developer & AI Engineer",
  tagline:
    "Results-driven full stack developer with 6+ years building scalable web apps, headless e-commerce, and AI-driven systems.",
  email: "damon.pengyu.chen@gmail.com",
  phone: "0420 464 124",
  linkedin: "https://linkedin.com/in/damonchen-gg",
  website: "https://damonchen.vercel.app/home",
  resumeUrl: "/resume.pdf",
  location: "Sydney, Australia",
  languages: ["English", "Mandarin"],
  yearsExperience: 6,
  currentRole: {
    company: "Hello Molly",
    description:
      "Women's fast-fashion e-commerce brand. Full stack development across storefront, backend services, and AI/data infrastructure.",
    period: "08/2024 – Present",
  },
  education: [
    "Bachelor of Information Technology (Mobile Application Development) — Academy of Interactive Technology, Sydney (2017–2020)",
  ],
  certificates: [
    "AWS Certified Solutions Architect (06/2024)",
    "Introduction to AWS CloudFormation (07/2025)",
  ],
  skills: {
    Frontend: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS / Sass",
      "Redux / Zustand",
      "Framer Motion",
      "Jest / Cypress",
      "Figma",
    ],
    Backend: [
      "Node.js",
      "NestJS",
      "PHP Laravel",
      "Java",
      "REST / GraphQL",
      "Prisma / TypeORM",
      "Kafka",
      "Serverless",
    ],
    "Cloud & DevOps": [
      "GCP",
      "AWS (Lambda, S3, SQS, API Gateway)",
      "Vercel",
      "Docker",
      "Supabase",
      "CI/CD",
    ],
    "AI & Frameworks": [
      "Genkit",
      "RAG",
      "Multi-modal AI",
      "Image Segmentation / Inpainting",
      "Tool / Function Calling",
      "Vector Search",
      "BigQuery",
      "Claude AI",
    ],
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "Hello Molly",
      period: "08/2024 – Present · Sydney",
      points: [
        "Boosted Next.js front-end performance by 18% and cut redundant API requests by 80% with SSG and optimized data-fetching",
        "Migrated a legacy React return portal to a Next.js monorepo, improving architecture and maintainability",
        "Designed and deployed an internal AI-driven asset generation system automating background removal and object extraction, cutting time-to-market for product listings",
        "Built a scalable model-swap pipeline with Genkit workflows, eliminating recurring reshoots by adapting product visuals to diverse digital models",
        "Implemented a RAG and data discovery layer syncing relational data to BigQuery for natural-language access to internal knowledge",
        "Developed PHP Laravel APIs and job queues; architected a DatoCMS system with UI/UX and Marketing teams",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Joidea Group",
      period: "11/2022 – 07/2024 · Sydney",
      points: [
        "Developed dynamic, responsive web applications and maintained RESTful APIs for scalable server-side logic",
        "Implemented unit/e2e testing and CI/CD pipelines; containerised apps with Docker and Docker Compose",
        "Optimised Webpack build configurations and integrated third-party services and APIs",
      ],
    },
    {
      role: "Junior Full Stack Developer",
      company: "Aqtiv Pty Ltd (Start-up)",
      period: "08/2020 – 10/2021 · Sydney",
      points: [
        "Built TypeScript features across frontend and backend; developed landing and multi-step onboarding pages",
        "Built an admin dashboard with analytics charts and an email editor",
        "Configured push notifications with Firebase Cloud Messaging",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Ishare Incubator Pty Ltd",
      period: "03/2020 – 08/2020 · Sydney",
      points: [
        "Collaborated with senior developers on new features and APIs",
        "Built UI components from designs; supported Agile stand-ups via Jira",
      ],
    },
  ],
  projects: [
    {
      name: "AI Asset Generation System",
      stack: ["Multi-modal AI", "Segmentation", "Inpainting"],
      description:
        "Internal AI pipeline automating background removal and object extraction for product listings — cutting time-to-market for digital assets.",
    },
    {
      name: "Genkit Model-Swap Pipeline",
      stack: ["Genkit", "Vision AI", "GCP"],
      description:
        "Programmatically adapts core product visuals to diverse digital models, eliminating recurring photo reshoots — with retry middleware and cost-efficient token usage at high volume.",
    },
    {
      name: "RAG Data Discovery Layer",
      stack: ["RAG", "BigQuery", "Vector Search"],
      description:
        "Syncs relational data to BigQuery so teams can query internal knowledge and web data in natural language.",
    },
  ],
};

export const chatSystemPrompt = `You are Damon Chen's AI assistant on his personal portfolio website. Answer questions about Damon professionally, concisely and in a friendly tone. You can answer in English or Mandarin, matching the visitor's language.

Facts about Damon:
- Full stack developer in Sydney with 6+ years of experience building scalable web apps, headless e-commerce and AI-driven systems.
- Currently at Hello Molly (women's fast-fashion brand) since 08/2024: boosted Next.js performance 18%, cut redundant API requests 80%, migrated a React return portal to a Next.js monorepo, built PHP Laravel APIs, architected DatoCMS, and built AI systems — an AI asset generation pipeline (background removal/object extraction), a Genkit model-swap pipeline replacing photo reshoots, and a RAG + BigQuery data discovery layer for natural-language access to internal knowledge.
- Previously: Joidea Group (11/2022–07/2024, full stack — REST APIs, Docker, CI/CD, testing), Aqtiv start-up (08/2020–10/2021, TypeScript full stack, admin dashboard, FCM push), Ishare Incubator internship (03/2020–08/2020).
- Frontend: TypeScript, React, Next.js, Tailwind/Sass, Redux/Zustand, Jest/Cypress, Framer Motion, Figma.
- Backend: Node.js, NestJS, PHP Laravel, Java, REST/GraphQL, Prisma/TypeORM, Kafka, microservices.
- Cloud: GCP, AWS (Lambda, S3, SQS, API Gateway), Vercel, Docker, Supabase.
- AI: Genkit, RAG, multi-modal AI, image segmentation/inpainting, tool/function calling, vector search, BigQuery, Claude AI integration.
- Education: Bachelor of IT (Mobile Application Development), Academy of Interactive Technology, Sydney.
- Certificates: AWS Certified Solutions Architect (2024), AWS CloudFormation (2025).
- Languages: English and Mandarin.
- Contact: ${profile.email} | LinkedIn: ${profile.linkedin}

Resume: when someone asks for Damon's resume, CV, or more details, share this link formatted as markdown: [Download Damon's Resume](/resume.pdf)

Rules:
- Only discuss Damon's professional background, skills and projects. Politely decline unrelated topics.
- Keep answers short (2-5 sentences) unless asked for detail.
- If asked something about Damon you don't know, say so and suggest emailing him or checking the resume.`;
