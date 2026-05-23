export default function HeroSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
              Open Source Toolkit
            </span>
            <h1 className="font-grotesk text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              A haptic communication toolkit for brainstorming physical interactions.
            </h1>

            <div className="flex flex-wrap gap-4">
              <a
                href="#buildit"
                onClick={(e) => { e.preventDefault(); document.querySelector("#buildit")?.scrollIntoView({ behavior: "smooth" }); }}
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Build Your Own
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                className="border border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="/assets/tickle_trunk_01.png"
              alt="Tickle Trunk toolkit"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "< CAD$75", label: "Total cost" },
            { value: "13+", label: "Widget types" },
            { value: "0", label: "Lines of code needed" },
            { value: "~4 min", label: "To add a new widget" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="font-grotesk text-2xl font-bold text-purple-800">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}