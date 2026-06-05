import { skillCategories } from "@/data/skills";
import { IconType } from "react-icons";

function SkillBadge({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white">
      <Icon className="shrink-0" size={18} style={{ color }} />
      {name}
    </span>
  );
}

export const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 sm:px-8 lg:px-12 [content-visibility:auto]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Skills & Expertise
            <span className="text-rose-500">.</span>
          </h2>
          <p className="max-w-2xl text-base text-gray-400 sm:text-lg">
            A collection of technologies I&apos;m proficient with, from
            languages to frameworks and tools.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-5 text-lg font-semibold text-white sm:text-xl">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
