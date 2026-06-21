import Link from "next/link";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { contactInfo, socialLinks } from "@/data/contact";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
};

export const Contact = () => {
  return (
    <section
      id="contact"
      className="section-surface-b relative px-6 py-24 sm:px-8 lg:px-12 [content-visibility:auto]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium tracking-widest text-blue-400 uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Contact
            <span className="text-rose-500">.</span>
          </h2>
          <p className="max-w-xl text-base text-gray-400 sm:text-lg">
            Open to opportunities, collaborations, and interesting projects.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact Info
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:border-blue-400/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <FaEnvelope size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-white sm:text-base">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:border-blue-400/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <FaPhone size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium text-white sm:text-base">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FaMapMarkerAlt size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-white sm:text-base">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.name as keyof typeof socialIcons];
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-blue-400/30 hover:bg-white/[0.06] hover:text-white"
                    >
                      <Icon size={18} />
                      {social.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Resume
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                Download my resume to learn more about my experience and skills.
              </p>
              <button
                type="button"
                disabled={!contactInfo.resumeAvailable}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaDownload size={14} />
                Download Resume
              </button>
              {!contactInfo.resumeAvailable && (
                <p className="mt-3 text-xs text-gray-500">
                  Resume will be available here soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
