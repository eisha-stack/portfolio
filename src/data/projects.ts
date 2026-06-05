export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "TaskFlow",
    description:
      "A collaborative task management platform with real-time updates, team workspaces, and drag-and-drop kanban boards built for productivity.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    image: "/projects/project-1.svg",
  },
  {
    id: "2",
    title: "ShopVerse",
    description:
      "A full-stack e-commerce application featuring product catalog, cart management, secure checkout, and an admin dashboard for inventory control.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    image: "/projects/project-2.svg",
  },
  {
    id: "3",
    title: "InsightAI",
    description:
      "An AI-powered analytics dashboard that transforms raw data into actionable insights with interactive charts and natural language queries.",
    technologies: ["Python", "FastAPI", "OpenAI", "Docker"],
    link: "#",
    image: "/projects/project-3.svg",
  },
];
