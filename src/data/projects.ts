export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
  features: string[];
};

export const featuredProject: Project = {
  id: "bloomcode",
  title: "BloomCode",
  subtitle: "AI-Powered Desktop Code Editor",
  description:
    "BloomCode is a desktop code editor with a VS Code–inspired layout, a built-in AI assistant, integrated terminal, and Git source control. The UI is built with React and styled around a soft pink-and-lavender aesthetic. The native shell is powered by Tauri 2, so the app stays lightweight while still accessing the filesystem, shell, and Git on your machine.",
  technologies: [
    "Tauri 2",
    "React",
    "TypeScript",
    "Rust",
    "Monaco Editor",
    "Tailwind CSS",
    "Zustand",
    "Framer Motion",
    "AI Integrations",
  ],
  demoLink:
    "https://www.linkedin.com/posts/eishakanth_buildinpublic-opensource-ai-ugcPost-7474053058885414913-11Xy/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1DWSABUsju_ubPSqGJNEM1ttcOlD5shF4",
  githubLink: "https://github.com/eisha-stack/bloom-ide",
  image: "/bloom.png",
  features: [
    "VS Code–inspired workspace with customizable themes",
    "Built-in AI assistant for explain, refactor & optimize",
    "Integrated terminal & Git source control",
    "Lightweight Tauri 2 desktop shell",
  ],
};
