const educationData = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Your College Name",
    year: "2022 - 2025",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School Name",
    year: "2020 - 2022",
  },
];

function Education() {
  return (
    <section id="education" className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-4xl font-bold text-cyan-400">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-700 p-6"
            >
              <h3 className="text-2xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-slate-300">{item.institution}</p>

              <p className="mt-2 text-cyan-400">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;