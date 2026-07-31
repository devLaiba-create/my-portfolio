import { FiMail, FiGithub, FiLayers } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiSocketdotio,
  SiAxios,
  SiJsonwebtokens,
  SiCloudinary,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: SiCss, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "daisyUI", icon: SiDaisyui, color: "text-fuchsia-500" },
  { name: "Zustand", icon: FiLayers, color: "text-amber-700" },
  { name: "Axios", icon: SiAxios, color: "text-indigo-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-base-content" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Mongoose", icon: SiMongoose, color: "text-red-700" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-base-content" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-600" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-base-content" },
];

export default function Introduction() {
  return (
    <section
      id="home"
      className="bg-base-200 px-6 py-14 text-base-content md:px-10 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Full-Stack Developer (MERN Stack)
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-base-content/75">
            I build full-stack web applications using the MERN stack, focusing
            on smooth user experiences, real-time features, and solid backend
            logic. I enjoy turning ideas into functional, responsive apps and
            refining them until everything feels fast, clean, and reliable.
          </p>
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href="https://github.com/devLaiba-create"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-content"
            aria-label="GitHub profile"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="mailto:laibatariq110@gmail.com"
            className="btn btn-circle btn-outline border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-content"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>

        <div className="pt-4">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-primary">
              Skill Set
            </h2>
            <span className="text-xl font-light text-primary/70">|</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="badge badge-lg gap-2 border border-primary/15 bg-base-100 px-4 py-4 text-sm font-medium shadow-sm"
              >
                <Icon className={color} size={18} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
