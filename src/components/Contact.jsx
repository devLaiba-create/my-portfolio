export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-base-100 px-6 py-14 text-base-content md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Feel free to reach out!
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-4xl border border-primary/10 bg-base-200 p-6 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Location
              </p>
              <p className="text-lg text-base-content/80">Karachi, Pakistan</p>
            </div>

            <div className="rounded-4xl border border-primary/10 bg-base-200 p-6 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Mail
              </p>
              <a
                href="mailto:laibatariq110@gmail.com"
                className="text-lg text-base-content/80 transition hover:text-primary"
              >
                laibatariq110@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/10 bg-base-200 px-6 py-6 text-center text-sm text-base-content/60 md:px-10">
        © 2026 Laiba Tariq. Built with React and the MERN stack mindset.
      </footer>
    </>
  );
}
