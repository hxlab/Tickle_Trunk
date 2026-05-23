import { useState } from "react";
import WidgetSelector from "@/components/build/WidgetSelector.jsx";
import InstructionsPanel from "@/components/build/InstructionsPanel.jsx";

const STEPS = ["configure", "select", "instructions"];

export default function BuildItSection() {
  const [step, setStep] = useState("configure");
  const [channels, setChannels] = useState(null);
  const [voltage, setVoltage] = useState(null);
  const [widgetType, setWidgetType] = useState(null);

  const handleConfigure = () => {
    if (channels && voltage) setStep("select");
  };

  const handleSelectWidget = (type) => {
    setWidgetType(type);
    setStep("instructions");
  };

  const handleReset = () => {
    setStep("configure");
    setChannels(null);
    setVoltage(null);
    setWidgetType(null);
  };

  return (
    <section id="buildit" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
            Build It
          </span>
          <h2 className="font-grotesk text-3xl font-bold text-black">
            Design Your Own Tickle Trunk
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Introduce basic haptic feedback and brainstorm ideas with your own custom designed toolkit.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { key: "configure", label: "Configure" },
            { key: "select", label: "Select Widget" },
            { key: "instructions", label: "Instructions" },
          ].map((s, i) => (
            <div key={s.key} className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                step === s.key
                  ? "bg-purple-700 text-white"
                  : STEPS.indexOf(step) > i
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100 text-gray-400"
              }`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === s.key ? "bg-white text-purple-700" : STEPS.indexOf(step) > i ? "bg-purple-300 text-white" : "bg-gray-200 text-gray-400"
                }`}>
                  {STEPS.indexOf(step) > i ? "✓" : i + 1}
                </span>
                {s.label}
              </div>
              {i < 2 && <div className={`w-8 h-0.5 ${STEPS.indexOf(step) > i ? "bg-purple-300" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        {/* Step: Configure */}
        {step === "configure" && (
          <div className="max-w-lg mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-grotesk font-semibold text-xl text-black mb-2">Welcome!</h3>
            <p className="text-gray-500 text-sm mb-8">
              Answer a few quick questions to understand your needs for this toolkit.
            </p>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                How many channels would you like?
              </label>
              <div className="flex gap-3">
                {[1, 2, 3].map((c) => (
                  <button
                    key={c}
                    onClick={() => setChannels(c)}
                    className={`flex-1 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                      channels === c
                        ? "border-purple-700 bg-purple-50 text-purple-800"
                        : "border-gray-200 text-gray-500 hover:border-purple-300"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What voltage would you like to use?
              </label>
              <div className="flex gap-3">
                {[6, 12, 36].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVoltage(v)}
                    className={`flex-1 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                      voltage === v
                        ? "border-purple-700 bg-purple-50 text-purple-800"
                        : "border-gray-200 text-gray-500 hover:border-purple-300"
                    }`}
                  >
                    {v}V
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleConfigure}
              disabled={!channels || !voltage}
              className="w-full py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm hover:bg-purple-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step: Select Widget */}
        {step === "select" && (
          <WidgetSelector onSelect={handleSelectWidget} onBack={() => setStep("configure")} />
        )}

        {/* Step: Instructions */}
        {step === "instructions" && (
          <InstructionsPanel type={widgetType} onReset={handleReset} onBack={() => setStep("select")} />
        )}
      </div>
    </section>
  );
}