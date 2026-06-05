import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

const bentoSpans = [
  "md:col-span-2 lg:col-span-2 lg:row-span-2",
  "md:col-span-1 lg:col-span-2 lg:row-span-1",
  "md:col-span-1 lg:col-span-2 lg:row-span-1",
];

function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  featured = false,
}: {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition-[transform,border-color,box-shadow] duration-300 hover:border-white/20 hover:shadow-blue-900/20 lg:min-h-full">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

        <div className="relative z-10 flex flex-col gap-4 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white transition-colors duration-200 group-hover:text-blue-300 sm:text-3xl">
            {title}
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-gray-200 sm:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={link}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
          >
            View Project
            <FaExternalLinkAlt size={12} />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-blue-900/20">
      <div className="relative h-36 shrink-0 overflow-hidden sm:h-40">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-blue-300 sm:text-xl">
          {title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-300 transition-colors duration-200 group-hover:border-blue-400/30 group-hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
        >
          View Project
          <FaExternalLinkAlt size={12} />
        </Link>
      </div>
    </article>
  );
}

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-12 [content-visibility:auto]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest text-blue-400 uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Featured <span className="text-rose-500">Projects</span>
          </h2>
          <p className="max-w-2xl text-base text-gray-300 sm:text-lg">
            A selection of projects showcasing my work across full-stack
            development, system design, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {projects.map((project, index) => (
            <div key={project.id} className={bentoSpans[index]}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                image={project.image}
                featured={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
