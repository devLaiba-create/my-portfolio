const projects = [
  {
    title: "TalkVerse",
    description:
      "TalkVerse is a full-stack messaging app built with the MERN stack and Socket.io. It lets users sign up, log in, and chat with others in real time. You can see who’s online, send messages instantly, and also share images. The frontend is built with React and Tailwind CSS, and the backend uses Node.js, Express, and MongoDB. This project helped me understand how real-time communication works and how frontend and backend connect together in a live app.",
    image: "/projects-ss/realtime-chat-app-project.png",
    liveUrl: "https://realtime-chat-app-tnkq.onrender.com",
    codeUrl: "https://github.com/laibatariq110/realtime-chat-app",
  },
  {
    title: "Full-Stack Messaging Platform",
    description:
      "A real-time messaging application built with MongoDB, Express, React, and Node.js. Users can create accounts, log in securely, and chat with others instantly using Socket.IO. The app also shows online users and includes a responsive chat interface with a conversation sidebar and search feature. Building this project helped me improve my understanding of authentication, realtime communication, state management with Zustand, and connecting frontend and backend in a full-stack application.",
    image: "/projects-ss/mern-chat-app-project.png",
    liveUrl: "https://mern-chat-app-z0tw.onrender.com/",
    codeUrl: "https://github.com/laibatariq110/mern-chat-app",
  },
  {
    title: "MERN Product Store",
    description:
      "MERN Product Store is a full-stack web application built with the MERN stack that allows users to manage products through complete CRUD functionality. Users can create, view, update, and delete products in a clean and responsive interface with light and dark mode support. The frontend was developed using React, Vite, Chakra UI, and Zustand for state management, while the backend was built with Node.js, Express.js, and MongoDB. The project also includes RESTful API integration, form handling, responsive UI design, and production deployment, helping strengthen my understanding of full-stack application architecture and client-server communication.",
    image: "/projects-ss/mern-product-store-project.png",
    liveUrl: "https://mern-product-store-q9i0.onrender.com",
    codeUrl: "https://github.com/laibatariq110/mern-product-store",
  },
  {
    title: "MERN Thinkboard",
    description:
      "ThinkBoard is a full-stack MERN notes application for creating, viewing, updating, and deleting notes in a clean, responsive interface. It combines a React frontend with an Express and MongoDB backend, and includes Upstash-powered rate limiting to protect the API from abuse.",
    image: "/projects-ss/thinkboard-project.png",
    liveUrl: "https://mern-thinkboard-kapm.onrender.com",
    codeUrl: "https://github.com/laibatariq110/mern-thinkboard",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-base-200 px-6 py-14 text-base-content md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-4xl border border-primary/10 bg-base-100 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="border-b border-primary/10 bg-base-200/60 p-5">
                <div className="overflow-hidden rounded-3xl border border-primary/10 bg-base-100">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="leading-7 text-base-content/75">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="btn bg-primary text-primary-content shadow-none hover:bg-primary/90"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Try
                  </a>
                  <a
                    href={project.codeUrl}
                    className="btn btn-outline border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-content"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
