const tutorials = [
  {
    step: "01",
    title: "Explore the Widgets",
    description: "Familiarize yourself with the input and output widgets. Try connecting different combinations to feel the range of haptic modalities.",
  },
  {
    step: "02",
    title: "Choose a Scenario",
    description: "Pick a design challenge or use case. Examples: surgical training feedback, firefighter simulation, nature exploration experiences.",
  },
  {
    step: "03",
    title: "Brainstorm & Prototype",
    description: "Connect input widgets to outputs on the main box. Mix and match — no code needed. Test your ideas in real-time.",
  },
  {
    step: "04",
    title: "Extend the Toolkit",
    description: "Build your own widget in under 4 minutes. Choose a new sensor or actuator, wire it up, and add it to the collection.",
  },
];

export default function TutorialsSection() {
  return (
    <section id="tutorials" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
            Tutorials
          </span>
          <h2 className="font-grotesk text-3xl font-bold text-black">
            How to use Tickle Trunk
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Follow these steps to get started with your first haptic brainstorming session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((t) => (
            <div
              key={t.step}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all bg-white"
            >
              <div className="font-grotesk text-4xl font-bold text-purple-100 group-hover:text-purple-200 transition-colors mb-3">
                {t.step}
              </div>
              <h3 className="font-grotesk font-semibold text-lg text-black mb-2">{t.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}