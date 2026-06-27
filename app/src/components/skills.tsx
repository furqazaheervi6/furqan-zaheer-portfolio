export function Skills() {
  const skillCategories = [
    {
      label: "Programming & Software",
      items: [
        "Python",
        "TypeScript / JavaScript",
        "C / C++",
        "MATLAB",
        "React",
        "Node.js",
      ],
      note: "Systems and signal processing",
    },
    {
      label: "Machine Learning & AI",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Signal Classification",
        "Time-Series Analysis",
        "Deep Learning",
      ],
      note: "Neural decoding and pattern detection",
    },
    {
      label: "Neural Engineering",
      items: [
        "EEG Signal Processing",
        "BCI System Design",
        "Electrode Montage Strategy",
        "Real-Time Biosignal Analysis",
        "Neurophysiology",
      ],
      note: "Brain-computer interfaces",
    },
    {
      label: "Mathematics & Theory",
      items: [
        "Linear Algebra",
        "Differential Equations",
        "Probability & Statistics",
        "Computational Theory",
        "Game Theory",
        "Biophysical Modeling",
      ],
      note: "Formal foundations",
    },
    {
      label: "Systems & Infrastructure",
      items: [
        "Linux / Unix",
        "Git / CI-CD",
        "Cloud Deployment",
        "API Design",
        "Database Architecture",
      ],
      note: "Engineering at scale",
    },
    {
      label: "Hardware & Lab",
      items: [
        "Oscilloscope / Signal Analysis",
        "Microcontroller Programming",
        "Circuit Design",
        "Lab Equipment",
        "Data Acquisition",
      ],
      note: "Bridging digital and physical",
    },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
          / Skills
        </div>

        <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
          Technical toolchain
        </h2>

        <div className="mt-12 grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-black-card p-6 lg:p-8"
            >
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                {cat.note}
              </div>
              <h3 className="font-display text-base font-semibold tracking-[-0.01em] text-text-primary">
                {cat.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-body text-sm text-text-secondary"
                  >
                    <span className="h-[3px] w-[3px] bg-vermilion/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

