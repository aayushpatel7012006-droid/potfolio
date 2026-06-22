function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-cyan-400">
          Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="name"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;