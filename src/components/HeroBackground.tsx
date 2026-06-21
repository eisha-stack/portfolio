"use client";

const CODE_SNIPPETS = [
  "React",
  "TypeScript",
  "Next.js",
  "useState",
  "useEffect",
  "async/await",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Spring Boot",
  "Docker",
  "Firebase",
  "API",
  "MongoDB",
];

const FLOATING_SHAPES = [
  { left: "12%", delay: "0s", duration: "14s", size: "w-3 h-3" },
  { left: "78%", delay: "2s", duration: "16s", size: "w-2 h-2" },
  { left: "45%", delay: "4s", duration: "12s", size: "w-4 h-4" },
  { left: "88%", delay: "1s", duration: "18s", size: "w-2.5 h-2.5" },
  { left: "25%", delay: "3s", duration: "15s", size: "w-3 h-3" },
];

export function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <div className="hero-animated-bg absolute inset-0" />
      <div className="site-grid absolute inset-0" />

      <div className="absolute -left-20 top-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.7)_0%,transparent_70%)] opacity-20 blur-3xl" />
      <div className="absolute -right-16 top-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.8)_0%,transparent_70%)] opacity-20 blur-2xl" />
      <div className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.6)_0%,transparent_70%)] opacity-10 blur-xl" />

      {CODE_SNIPPETS.map((snippet, index) => (
        <span
          key={`${snippet}-${index}`}
          className="floating-code"
          style={{
            left: `${(index * 17 + 5) % 95}%`,
            animationDelay: `${index * 0.8 + 0.5}s`,
            animationDuration: `${13 + (index % 5) * 2}s`,
            fontSize: `${12 + (index % 4) * 2}px`,
            opacity: 0.15 + (index % 4) * 0.08,
          }}
        >
          {snippet}
        </span>
      ))}

      {FLOATING_SHAPES.map((shape, index) => (
        <span
          key={index}
          className={`floating-shape ${shape.size} rounded-full border border-blue-400/30 bg-blue-400/10`}
          style={{
            left: shape.left,
            animationDelay: shape.delay,
            animationDuration: shape.duration,
          }}
        />
      ))}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
