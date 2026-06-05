import { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandAws, TbBrandAzure } from "react-icons/tb";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "SQL", icon: FaDatabase, color: "#336791" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#e34f26" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "SQLite", icon: SiSqlite, color: "#003b57" },
    ],
  },
  {
    title: "Cloud & Backend Services ⭐",
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
      { name: "AWS", icon: TbBrandAws, color: "#ff9900" },
      { name: "Azure", icon: TbBrandAzure, color: "#0089d6" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    ],
  },
];
