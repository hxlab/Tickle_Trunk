const INSTRUCTIONS = {
  pushButton: {
    name: "Push Button",
    desc: "A binary ON/OFF switch activated by a simple press.",
    steps: [
      "Connect the signal pin to a digital input with pull-up resistor",
      "Mount the button on your control panel at an accessible height",
      "Test the press sensitivity and add debounce delay in code if needed",
      "Verify consistent activation across repeated presses"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Yellow": "Signal (Digital Pin)" }
  },
  shakeSensor: {
    name: "Shake Sensor",
    desc: "A spring-type vibration switch activated by shaking.",
    steps: [
      "Connect the sensor to a digital input pin with pull-up resistor",
      "Mount securely to the device that will be shaken",
      "Test the sensitivity to different shake intensities",
      "Adjust the sensitivity threshold in software as needed"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Yellow": "Signal (Digital Pin)" }
  },
  slider: {
    name: "Slider",
    desc: "A sliding potentiometer for continuous intensity control.",
    steps: [
      "Connect the three legs to power, ground, and an analog input pin",
      "Mount the slider onto your enclosure with the knob facing outward",
      "Calibrate the min/max range values in software",
      "Test the full range of motion and smooth response"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Yellow": "Analog Input (A0-A5)" }
  },
  flameSensor: {
    name: "Flame Sensor",
    desc: "An IR sensor that detects heat sources as a non-contact switch.",
    steps: [
      "Connect VCC to 5V and GND to ground",
      "Connect AO to analog input for variable sensitivity",
      "Connect DO to digital pin for on/off detection",
      "Mount sensor with clear line of sight to heat source"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Green": "DO (Digital Pin)", "Yellow": "AO (Analog Input)" }
  },
  proximitySensor: {
    name: "Proximity Sensor",
    desc: "A Hall sensor activated by moving a magnetic object nearby.",
    steps: [
      "Connect VCC to 5V and GND to ground",
      "Connect signal to analog or digital input depending on mode",
      "Mount sensor in fixed position relative to magnetic trigger",
      "Calibrate sensitivity and test detection distance"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Yellow": "Signal (Analog/Digital Pin)" }
  },
  turningDial: {
    name: "Turning Dial",
    desc: "A potentiometer for continuous rotational control.",
    steps: [
      "Connect left pin to ground, middle to analog input, right to 5V",
      "Mount the dial on your control panel with pointer indicator",
      "Map the 0-1023 values to your desired output range",
      "Test smooth operation across full rotation"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Yellow": "Wiper (Analog Pin)" }
  },
  fan: {
    name: "Fan",
    desc: "Blows a stream of air with variable speed.",
    steps: [
      "Connect positive wire to 5V or 12V power source",
      "Connect negative wire to ground through a transistor/motor driver",
      "Mount fan securely with vibration dampeners if needed",
      "Use PWM control for variable speed operation"
    ],
    wireGuide: { "Red": "Power (5V-12V)", "Black": "Ground" }
  },
  vibrationHandle: {
    name: "Vibration Handle",
    desc: "Provides strong vibrations via a 12-volt DC motor.",
    steps: [
      "Connect to 12V power supply through a motor driver/transistor",
      "Design ergonomic handle for comfortable grip",
      "Mount vibration motor with dampening material to reduce noise",
      "Use PWM for variable vibration strength control"
    ],
    wireGuide: { "Red": "Power (12V)", "Black": "Ground" }
  },
  vibrationPen: {
    name: "Vibration Pen",
    desc: "Provides localized vibrations via a 3-volt DC motor.",
    steps: [
      "Connect to 3V power supply (can drive directly from pin or transistor)",
      "Mount motor in slim pen-like enclosure",
      "Dampen vibrations with foam or rubber material",
      "Use PWM to control vibration intensity"
    ],
    wireGuide: { "Red": "Power (3V)", "Black": "Ground" }
  },
  shapeChanger: {
    name: "Shape Changer",
    desc: "A pump inflates a silicone bubble, creating pressure and texture.",
    steps: [
      "Connect pump power supply and control through motor driver",
      "Attach silicone bubble to pump outlet with secure tubing",
      "Test pressure buildup and release cycles",
      "Calibrate pump timing for desired pressure sensations"
    ],
    wireGuide: { "Red": "Power (5V-12V)", "Black": "Ground" }
  },
  thermalFeedback: {
    name: "Thermal Feedback",
    desc: "A Peltier module that can produce heating or cooling sensations.",
    steps: [
      "Connect to appropriate power supply (typically 12V)",
      "Use motor driver to control polarity for heat/cool switching",
      "Add thermal conductor pad to transfer heat/cold to user",
      "Mount with proper insulation to prevent burns/frostbite"
    ],
    wireGuide: { "Red": "Power (12V)", "Black": "Ground" }
  },
  lights: {
    name: "Lights",
    desc: "Incandescent bulbs that provide both light and radiant warmth.",
    steps: [
      "Connect positive to power source through transistor/relay",
      "Connect negative to ground",
      "Mount bulb in reflector for directional light output",
      "Use PWM or relay for brightness control"
    ],
    wireGuide: { "Red": "Power (5V-12V)", "Black": "Ground" }
  },
  forceFeedback: {
    name: "Force Feedback",
    desc: "A servo motor that provides physical resistance or movement.",
    steps: [
      "Connect servo to power and PWM control pin",
      "Mount servo securely with mechanical linkage to desired object",
      "Calibrate servo range (typically 0-180 degrees)",
      "Program resistance curves or movement patterns"
    ],
    wireGuide: { "Red": "Power (5V)", "Black": "Ground", "Yellow": "Control/PWM Signal" }
  }
};

const WIRE_COLORS = {
  Red: "#ef4444", Black: "#000000", Green: "#22c55e",
  Yellow: "#eab308", Blue: "#3b82f6", White: "#ffffff"
};

export default function InstructionsPanel({ type, onReset, onBack }) {
  const instruction = INSTRUCTIONS[type] || {};

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-grotesk font-semibold text-2xl text-black mb-1">{instruction.name}</h3>
        <p className="text-gray-500 text-sm mb-8">{instruction.desc}</p>

        <div className="mb-10">
          <h4 className="font-semibold text-lg text-black mb-4">Assembly Steps</h4>
          <ol className="space-y-3">
            {(instruction.steps || []).map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span className="text-gray-700 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {instruction.wireGuide && (
          <div className="mb-10">
            <h4 className="font-semibold text-lg text-black mb-4">Wire Guide</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(instruction.wireGuide).map(([color, description]) => (
                <div key={color} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0" style={{ backgroundColor: WIRE_COLORS[color] || "#d1d5db" }} />
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{color}</span>
                    <span className="text-xs text-gray-500 block">{description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={onBack} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 transition-colors">
            ← Back
          </button>
          <button onClick={onReset} className="flex-1 py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm hover:bg-purple-800 transition-colors">
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}