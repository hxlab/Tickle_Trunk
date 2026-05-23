import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No! The Tickle Trunk is a hardware-only system. Everything is plug-and-play — no programming, no software setup required."
  },
  {
    q: "How much does it cost to build?",
    a: "The total cost is less than CAD$75 for the full toolkit. The Main Box PCB costs ~CAD$3 with components, and each Widget PCB costs ~CAD$5 with components."
  },
  {
    q: "Can I add my own custom widgets?",
    a: "Absolutely! The toolkit is openly extensible. Participants in our user study could add a new input or output widget in under 4 minutes using the step-by-step guide."
  },
  {
    q: "What haptic modalities does it support?",
    a: "The toolkit supports vibration, wind/air flow, shape change (pressure), thermal feedback, lights/warmth, and force feedback — along with 6 different input methods."
  },
  {
    q: "Where can I get the files to build it?",
    a: "All PCB schematics, laser cutting files, and assembly instructions are available open-source on our GitHub repository at tickletrunk.tech."
  },
  {
    q: "Is this suitable for non-technical collaborators?",
    a: "Yes — that's exactly what it's designed for. The toolkit uses colour coding (white = inputs, black = outputs) and intuitive form factors so anyone can participate in haptic brainstorming."
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-grotesk text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-purple-200 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-black pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-purple-600 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}