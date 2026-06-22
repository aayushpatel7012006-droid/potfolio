import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
// import profile from "../assets/profile.jpg";

function Home() {   
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20 text-white"
    >
      {/* Background blur effects */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left content */}
        <div className="z-10">
          <p className="mb-4 text-cyan-400">👋 Welcome to my portfolio</p>

          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <span className="text-cyan-400">Aayush Patel</span>
          </h1>

          <div className="mb-6 text-2xl text-slate-300 md:text-4xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "UI Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-lg text-lg leading-8 text-slate-400">
            I create modern, responsive, and user-friendly web applications
            with React and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-3xl text-slate-400">
            <a href="https://github.com/yourusername">
              <FaGithub className="transition hover:text-cyan-400" />
            </a>

            <a href="https://linkedin.com/in/yourusername">
              <FaLinkedin className="transition hover:text-cyan-400" />
            </a>

            <a href="https://instagram.com/yourusername">
              <FaInstagram className="transition hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="relative flex justify-center">
          <div className="absolute h-80 w-80 animate-pulse rounded-full bg-cyan-500/20 blur-3xl"></div>

          {/* <img
            src={profile}
            alt="Profile"
            className="relative h-80 w-80 rounded-full border-4 border-cyan-500 object-cover shadow-2xl md:h-96 md:w-96"
          /> */}

          <div className="absolute -left-4 top-16 rounded-xl bg-slate-900 px-4 py-2 shadow-lg">
            ⚛️ React
          </div>

          <div className="absolute -right-4 bottom-16 rounded-xl bg-slate-900 px-4 py-2 shadow-lg">
            🎨 Tailwind
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400">
          ↓ Scroll
        </a>
      </div>
    </section>
  );
}

export default Home;