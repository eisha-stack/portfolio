import Image from "next/image";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaTerminal,
  FaRobot,
  FaCodeBranch,
} from "react-icons/fa";
import { featuredProject } from "@/data/projects";

const featureIcons = [FaCodeBranch, FaRobot, FaTerminal, FaGithub];

export const Projects = () => {
  const project = featuredProject;

  return (
    <section
      id="projects"
      className="section-surface-a relative px-6 py-24 sm:px-8 lg:px-12 [content-visibility:auto]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium tracking-widest text-pink-300/80 uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Featured <span className="text-rose-400">Project</span>
          </h2>
          <p className="max-w-2xl text-base text-gray-400 sm:text-lg">
            A showcase of my latest work — building tools that make development
            both productive and enjoyable.
          </p>
        </div>

        <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 transition-[border-color,box-shadow] duration-300 hover:border-pink-400/20 hover:shadow-pink-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Preview image */}
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[480px]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/40 to-pink-900/20 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a12]/80" />

              <div className="absolute left-4 top-4 rounded-full border border-pink-300/30 bg-pink-500/20 px-4 py-1.5 text-xs font-medium text-pink-200">
                Desktop App
              </div>

              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/60 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-pink-300/40 hover:bg-pink-500/20 sm:left-auto sm:right-4 sm:w-auto"
              >
                <FaPlay size={12} className="text-pink-300" />
                Watch Demo on LinkedIn
              </Link>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
              <div>
                <p className="mb-2 text-sm font-medium tracking-wide text-pink-300/90">
                  {project.subtitle}
                </p>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  {project.title}
                  <span className="text-pink-400">.</span>
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                {project.description}
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, index) => {
                  const Icon = featureIcons[index % featureIcons.length];
                  return (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-pink-300">
                        <Icon size={12} />
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-pink-300/15 bg-pink-500/5 px-3 py-1 text-xs text-gray-300 transition-colors duration-200 group-hover:border-pink-300/25 group-hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
                >
                  <FaPlay size={12} />
                  Watch Demo
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-gray-200 transition-colors duration-200 hover:border-pink-300/40 hover:text-white"
                >
                  <FaGithub size={14} />
                  View on GitHub
                  <FaExternalLinkAlt size={10} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
