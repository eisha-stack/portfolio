import { experiences } from "@/data/experience";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="section-surface-a relative px-6 py-24 sm:px-8 lg:px-12 [content-visibility:auto]"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium tracking-widest text-blue-400 uppercase">
            Career
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Experience
            <span className="text-rose-500">.</span>
          </h2>
          <p className="max-w-xl text-base text-gray-400 sm:text-lg">
            Professional journey across AI, full-stack development, and mobile
            engineering.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent sm:left-[9px]"
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <article key={exp.id} className="relative pl-8 sm:pl-10">
                <div
                  aria-hidden
                  className="absolute left-0 top-2 h-[18px] w-[18px] rounded-full border-2 border-blue-400 bg-[hsl(222,84%,5%)] shadow-[0_0_12px_rgba(59,130,246,0.4)] sm:h-[22px] sm:w-[22px]"
                />

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.05] sm:p-6">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-blue-300">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.location}</p>
                    </div>
                    <time className="shrink-0 text-xs font-medium text-gray-400 sm:text-sm">
                      {exp.period}
                    </time>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-gray-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
