export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src="/assets/tickle_trunk_02.png"
              alt="Tickle Trunk in use"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
              About
            </span>
            <h2 className="font-grotesk text-3xl font-bold text-black mb-6">
              What is Tickle Trunk?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tickle Trunk is an open-source, hardware-only toolkit for rapid, playful exploration of diverse physical modalities. It consists of plug-and-play widgets that can be combined in seconds without any programming.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Designed for mixed-expertise teams, it bridges the gap between technical and non-technical collaborators by giving everyone a shared, embodied language for haptics and tangible interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}