export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-base-100 px-6 py-14 text-base-content md:px-10 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-4xl border border-primary/10 bg-base-200 p-6 shadow-xl">
            <img
              src="/laptop.png"
              alt="Laptop pic"
              className="mx-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            About Me
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Building polished web apps from frontend to backend
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-base-content/75">
            Hi, I&apos;m Laiba, a Karachi-based MERN Stack developer who enjoys
            building full-stack web applications with a focus on real-time
            features and clean user experiences. I&apos;ve worked with React,
            Node.js, Express, and MongoDB to develop projects like chat
            applications, authentication systems, and responsive UI-based
            platforms. I also have experience working with Socket.io for
            real-time communication, JWT-based authentication, and integrating
            services like Cloudinary for image uploads. I like turning ideas
            into functional, polished apps and improving them through debugging
            and iteration.
          </p>
        </div>
      </div>
    </section>
  );
}
