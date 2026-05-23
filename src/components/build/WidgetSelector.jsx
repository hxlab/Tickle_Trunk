import { useState } from "react";

const INPUTS = [
  { id: "pushButton",    name: "Push Button" },
  { id: "shakeSensor",   name: "Shake Sensor" },
  { id: "slider",        name: "Slider" },
  { id: "flameSensor",   name: "Flame Sensor" },
  { id: "proximitySensor", name: "Proximity Sensor" },
  { id: "turningDial",   name: "Turning Dial" },
];

const OUTPUTS = [
  { id: "fan",           name: "Fan" },
  { id: "vibrationHandle", name: "Vibration Handle" },
  { id: "vibrationPen",  name: "Vibration Pen" },
  { id: "shapeChanger",  name: "Shape Changer" },
  { id: "thermalFeedback", name: "Thermal Feedback" },
  { id: "lights",        name: "Lights" },
  { id: "forceFeedback", name: "Force Feedback" },
];

function WidgetCard({ widget, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(widget.id)}
      className={`rounded-2xl border-2 p-4 flex flex-col items-center justify-center transition-all ${
        selected
          ? "border-purple-700 bg-purple-50 shadow-md"
          : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm"
      }`}
    >
      <span className={`text-sm font-medium text-center leading-tight ${selected ? "text-purple-800" : "text-gray-700"}`}>
        {widget.name}
      </span>
    </button>
  );
}

export default function WidgetSelector({ onSelect, onBack }) {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("input");

  const widgets = tab === "input" ? INPUTS : OUTPUTS;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-grotesk font-semibold text-xl text-black mb-1">Select a Widget</h3>
        <p className="text-gray-500 text-sm mb-6">Choose the widget you want assembly instructions for.</p>

        <div className="flex gap-2 mb-6">
          {[["input", "Inputs"], ["output", "Outputs"]].map(([key, label]) => (
            <button
              key={key}
              onClick={() => { setTab(key); setSelected(null); }}
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
                tab === key ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {widgets.map((w) => (
            <WidgetCard key={w.id} widget={w} selected={selected === w.id} onSelect={setSelected} />
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={onBack} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 transition-colors">
            ← Back
          </button>
          <button
            onClick={() => selected && onSelect(selected)}
            disabled={!selected}
            className="flex-1 py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm hover:bg-purple-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}