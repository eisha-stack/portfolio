import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaTrophy } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="flex flex-1 items-center px-6 pb-16 pt-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium tracking-widest text-blue-400 uppercase">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Eisha <span className="text-rose-500">Kanth</span>
          </h1>

          <h2 className="max-w-xl text-lg text-gray-300 sm:text-xl lg:text-2xl">
            Software Developer 
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-gray-200/90 sm:text-lg">
          I&apos;m a Full Stack Developer with a passion for building scalable applications, intelligent systems, and seamless user experiences. With experience across frontend development, backend engineering, databases, cloud technologies, and AI integrations, I enjoy bringing innovative ideas to life. My work is driven by curiosity, continuous learning, and a commitment to writing clean, efficient, and maintainable code. I aspire to create technology that not only solves problems but also delivers meaningful value to people and businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-500">
              Get In Touch
            </button>
            <button className="rounded-lg border border-white/20 px-8 py-3 font-medium text-gray-200 transition-colors hover:border-white/40 hover:text-white">
              Download Resume
            </button>
          </div>

          <div className="flex items-center gap-5 pt-2 text-gray-400">
            <a
              href="#"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="transition-colors hover:text-white"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto lg:max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-blue-900/30">
            <Image
              src="/profile-opt.jpg"
              alt="Eisha Kanth"
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              quality={80}
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-5 right-4 flex items-center gap-4 rounded-xl border border-white/10 bg-indigo-600/95 px-5 py-4 shadow-xl sm:right-0 lg:-right-8">
            <div className="rounded-lg bg-orange-500/20 p-2">
              <FaTrophy className="text-orange-400" size={22} />
            </div>
            <div>
              <p className="font-bold leading-tight text-white">Developer</p>
              <p className="text-sm leading-tight text-indigo-200">
                & Innovator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
